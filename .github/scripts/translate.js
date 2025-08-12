const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs').promises;
const path = require('path');

const anthropic = new Anthropic({
  apiKey: process.env.TRANSLATION_API_KEY
});

// 语言配置
const LANGUAGE_CONFIG = {
  'zh-CN': {
    folder: 'zh-CN',
    name: '简体中文',
    pathPrefix: '/cn'
  },
  'ja': {
    folder: 'ja',
    name: '日本語',
    pathPrefix: '/ja'
  },
  'es': {
    folder: 'Spanish',
    name: 'Español',
    pathPrefix: '/es'
  }
};

// 术语保护列表
const PRESERVE_TERMS = {
    'reCamera': 'reCamera',
    'Grove': 'Grove',
    'SenseCAP': 'SenseCAP',
    'LoRa-E5': 'LoRa-E5',
    'API': 'API',
    'GitHub': 'GitHub',
    'Seeed': 'Seeed',
    'IoT': 'IoT',
    'WiFi': 'WiFi',
    'USB': 'USB',
    'Bluetooth': 'Bluetooth',
    'reComputer': 'reComputer',
    'XIAO': 'XIAO',
    'ReSpeaker': 'ReSpeaker',
    'LinkStar': 'LinkStar',
    'reTerminal': 'reTerminal',
    'reserver': 'reserver',
    'BeagleBone': 'BeagleBone',
    'SenseCraft': 'SenseCraft',
    'Home Assistant': 'Home Assistant'
  };

// 生成翻译 prompt
function generatePrompt(targetLang, pathPrefix) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  return `你是一个专业的技术文档翻译专家。请将以下完整的 Markdown 文档从英文翻译成${langName}。

重要规则：
1. 保持所有 Markdown 格式不变（链接、代码块、标题等）
2. 不要翻译代码示例、文件名、API 名称等技术术语
3. 保持相同的结构和格式
4. 对于内部链接（以 / 开头的链接），请在路径前添加 "${pathPrefix}" 前缀
5. 例如：href="/Sensor_Network" 应该改为 href="${pathPrefix}/Sensor_Network"
6. [链接文本](/path) 应该改为 [链接文本](${pathPrefix}/path)
7. 外部链接（http开头）和已有语言前缀的链接保持不变
8. 只翻译人类可读的文本内容

Front Matter 处理规则：
- 如果文档开头有 Front Matter（被 --- 包围的 YAML 部分），请按以下规则处理：
  - last_update 字段完全不翻译：包括 date 和 author 的值都必须保持原文不变
  - keywords 字段不翻译：保持原始英文关键词
  - slug 字段不翻译：URL路径保持不变
  - image 字段不翻译：图片链接保持不变
  - 只翻译 description 和 title 字段的值
  - 保持 Front Matter 的 YAML 结构和缩进完全不变

格式保持铁律：
- Markdown表格（| 列1 | 列2 |）必须保持为Markdown表格格式，绝对不能转换为HTML表格
- HTML表格（<table><tr><td>）必须保持为HTML表格格式，绝对不能转换为Markdown表格
- 空行数量必须与原文完全一致
- 缩进空格数量必须与原文完全一致
- 所有特殊字符的位置必须与原文完全一致

严格要求：
- 绝对不能添加、删除或修改任何标题
- 绝对不能改变文档结构，包括段落顺序、列表顺序、表格行列顺序等
- 逐句对应翻译，确保译文的每一句都对应原文的特定句子
- 代码块标记和编程代码本身保持不变，绝对不能省略代码块内容
- 不要输出"内容同原文档"或类似的省略说明

术语保护（保持不变）：
${termsList}`;
}

// 处理内部链接
function processInternalLinks(content, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig || !langConfig.pathPrefix) return content;
  
  const pathPrefix = langConfig.pathPrefix;
  
  // 处理 HTML 格式的链接：<a href="/path">
  content = content.replace(
    /<a\s+href="(\/[^"]*)"([^>]*)>/gi, 
    (match, url, attrs) => {
      if (url.startsWith('http') || url.match(/^\/(zh-CN|ja|es|cn)\//)) {
        return match;
      }
      const newUrl = pathPrefix + url;
      return `<a href="${newUrl}"${attrs}>`;
    }
  );
  
  // 处理 Markdown 格式的链接：[text](/path)
  content = content.replace(
    /\[([^\]]*)\]\((\/[^)]*)\)/gi,
    (match, text, url) => {
      if (url.startsWith('http') || url.match(/^\/(zh-CN|ja|es|cn)\//)) {
        return match;
      }
      const newUrl = pathPrefix + url;
      return `[${text}](${newUrl})`;
    }
  );
  
  return content;
}

// 使用 Claude 翻译
async function translateWithClaude(text, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }
  
  const systemPrompt = generatePrompt(targetLang, langConfig.pathPrefix);
  
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 20000,
      temperature: 0.05,
      system: systemPrompt,
      messages: [
        { role: 'user', content: text }
      ]
    });
    
    let translatedContent = response.content[0].text;
    
    // 后处理：确保链接正确
    translatedContent = processInternalLinks(translatedContent, targetLang);
    
    return translatedContent;
  } catch (error) {
    console.error(`Claude translation failed: ${error.message}`);
    return text;
  }
}

// 处理新增文件
async function handleNewFile(filePath, targetLang) {
  console.log(`📄 翻译新文件: ${filePath} -> ${targetLang}`);
  
  const content = await fs.readFile(filePath, 'utf8');
  const translatedContent = await translateWithClaude(content, targetLang);
  
  // 构造目标路径
  const relativePath = path.relative('docs', filePath);
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const targetPath = path.join('docs', langConfig.folder, relativePath);
  
  // 确保目录存在
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  
  // 写入翻译文件
  await fs.writeFile(targetPath, translatedContent, 'utf8');
  
  console.log(`✅ 新文件翻译完成: ${targetPath}`);
}

// 处理修改文件
async function handleModifiedFile(filePath, targetLang) {
  console.log(`✏️ 翻译文件修改: ${filePath} -> ${targetLang}`);
  
  // 简化处理：重新翻译整个文件
  const content = await fs.readFile(filePath, 'utf8');
  const translatedContent = await translateWithClaude(content, targetLang);
  
  // 构造目标路径
  const relativePath = path.relative('docs', filePath);
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const targetPath = path.join('docs', langConfig.folder, relativePath);
  
  // 确保目录存在
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  
  // 写入翻译文件
  await fs.writeFile(targetPath, translatedContent, 'utf8');
  
  console.log(`✅ 文件翻译更新完成: ${targetPath}`);
}

// 主函数
async function main() {
  const languages = process.env.TARGET_LANGUAGES ? process.env.TARGET_LANGUAGES.split(' ') : [];
  const newFiles = process.env.NEW_FILES ? process.env.NEW_FILES.split(' ').filter(f => f.trim()) : [];
  const modifiedFiles = process.env.MODIFIED_FILES ? process.env.MODIFIED_FILES.split(' ').filter(f => f.trim()) : [];
  
  console.log('🌍 开始翻译任务...');
  console.log('目标语言:', languages);
  console.log('新增文件:', newFiles);
  console.log('修改文件:', modifiedFiles);
  
  for (const lang of languages) {
    if (!LANGUAGE_CONFIG[lang]) {
      console.log(`⚠️ 跳过未知语言: ${lang}`);
      continue;
    }
    
    const langConfig = LANGUAGE_CONFIG[lang];
    console.log(`\n🔄 开始翻译到 ${langConfig.name}...`);
    
    // 处理新增文件
    for (const file of newFiles) {
      if (file.trim()) {
        await handleNewFile(file, lang);
        await new Promise(resolve => setTimeout(resolve, 2000)); // API 限流
      }
    }
    
    // 处理修改文件
    for (const file of modifiedFiles) {
      if (file.trim()) {
        await handleModifiedFile(file, lang);
        await new Promise(resolve => setTimeout(resolve, 2000)); // API 限流
      }
    }
  }
  
  console.log('\n🎉 翻译任务完成！');
}

main().catch(console.error);