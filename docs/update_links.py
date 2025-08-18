#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import re
import sys

def add_target_attribute(match):
    """
    这是一个回调函数，供 re.sub() 使用。
    它接收一个匹配对象，并返回修改后的字符串。
    """
    # group(0) 获取整个匹配到的字符串，例如 '<a class="get_one_now_item" href="...">'
    tag_string = match.group(0)

    # 检查 'target=' 是否已经存在于标签中，防止重复添加
    if 'target=' in tag_string:
        # 如果已存在，则不进行任何修改，原样返回
        return tag_string
    else:
        # 如果不存在，则在标签的末尾 '>' 前插入属性
        # tag_string[:-1] 会获取除最后一个字符外的所有内容
        # 例如 '<a ...'
        return tag_string[:-1] + ' target="_blank" rel="noopener noreferrer">'

def process_markdown_files(root_directory):
    """
    遍历指定目录下的所有 Markdown 文件并处理它们。
    """
    print(f"[*] 开始扫描目录: {root_directory}")
    
    # 定义要查找的 <a> 标签的正则表达式模式
    # 这里我们查找 class 为 "get_one_now_item" 或 "github_item" 的 <a> 标签
    # (?:...) 是一个非捕获组，用于逻辑 "或"
    # [^>]* 匹配除 > 之外的任意字符零次或多次，以捕获整个标签
    # 你可以在这里添加更多 class 名称，用 | 分隔，例如 "(?:get_one_now_item|github_item|another_class)"
    patterns_to_find = [
        re.compile(r'<a\s+[^>]*class\s*=\s*"(?:get_one_now_item|github_item)"[^>]*>'),
    ]

    # 统计处理过的文件
    processed_files = 0
    modified_files = 0

    # os.walk 会递归地遍历目录
    for dirpath, _, filenames in os.walk(root_directory):
        for filename in filenames:
            # 只处理 .md 和 .markdown 文件
            if filename.lower().endswith(('.md', '.markdown')):
                file_path = os.path.join(dirpath, filename)
                processed_files += 1
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        original_content = f.read()
                    
                    # 快速检查，如果文件中不包含关键词，则跳过，提高效率
                    if "get_one_now_container" not in original_content and "github_container" not in original_content:
                        continue
                        
                    new_content = original_content
                    is_modified = False
                    
                    # 应用所有定义的正则表达式模式
                    for pattern in patterns_to_find:
                        # 使用 re.sub 和回调函数进行替换
                        temp_content = pattern.sub(add_target_attribute, new_content)
                        if temp_content != new_content:
                            is_modified = True
                            new_content = temp_content

                    # 如果内容发生了变化，则写回文件
                    if is_modified:
                        print(f"    [+] 正在修改: {file_path}")
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        modified_files += 1

                except Exception as e:
                    print(f"    [!] 处理文件时出错 {file_path}: {e}")

    print("\n[*] 处理完成！")
    print(f"    总共扫描文件数: {processed_files}")
    print(f"    成功修改文件数: {modified_files}")

if __name__ == "__main__":
    # 脚本接受一个命令行参数作为目标目录
    # 如果没有提供参数，则默认使用当前目录 "."
    if len(sys.argv) > 1:
        target_directory = sys.argv[1]
    else:
        target_directory = '.' # 当前目录

    # 检查目录是否存在
    if not os.path.isdir(target_directory):
        print(f"[错误] 目录不存在: {target_directory}")
        sys.exit(1)
        
    # 在执行前给出重要提示
    print("="*50)
    print("重要提示：")
    print("此脚本将直接修改您目录下的 Markdown 文件。")
    print("强烈建议在运行前备份您的数据，或在 Git 仓库中使用以方便回滚。")
    print("="*50)
    
    # 征求用户同意
    try:
        # 在 Python 3.x 中使用 input
        confirm = input(f"是否要在 '{os.path.abspath(target_directory)}' 目录中执行修改？(y/n): ")
    except NameError:
        # 兼容 Python 2.x
        confirm = raw_input(f"是否要在 '{os.path.abspath(target_directory)}' 目录中执行修改？(y/n): ")

    if confirm.lower() == 'y':
        process_markdown_files(target_directory)
    else:
        print("操作已取消。")