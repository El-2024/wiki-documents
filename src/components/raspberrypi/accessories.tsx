import React from 'react';
import './kits.css';

const items = [
  {
    id: 1,
    name_en: "Skeleton Box for Raspberry Pi Compute Module Development Kit",
    name_cn: "树莓派计算模块开发套件骨架盒",
    name_ja: "Raspberry Pi Compute Module 開発キット用スケルトンボックス",
    description_en: "Constructed from military grade aluminum and hardwearing acrylic, this box is stackable in all three dimensions, allowing for limitless expansion possibilities",
    description_cn: "采用军用级铝材和耐用亚克力制成，这个盒子可在三个维度上堆叠，提供无限的扩展可能性",
    description_ja: "軍用グレードのアルミニウムと耐久性の高いアクリルで作られており、3次元すべてに積み重ね可能で、無限の拡張性を提供します。",
    compatibleWith_en: "CM4",
    compatibleWith_cn: "CM4",
    compatibleWith_ja: "CM4",
    image: "https://files.seeedstudio.com/wiki/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/img/Pic_2100.bmp",
    wikiPage: "./Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit",
    purchasePage: "https://www.seeedstudio.com/Skeleton-Box-for-Raspberry-Pi-Compute-Module.html",
  },
  {
    id: 2,
    name_en: "Skeleton Box for Raspberry Pi",
    name_cn: "树莓派骨架盒",
    name_ja: "Raspberry Pi用スケルトンボックス",
    description_en: "Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
    description_cn: "提供保护和展示树莓派所需的基本元素。坚固耐用的设计，便于安装和使用",
    description_ja: "すべてのLoRaノードからデータを収集・転送するための基本要素を提供します。数分でIoTプロトタイプを構築可能。",
    compatibleWith_en: "3B+,4B",
    compatibleWith_cn: "3B+,4B",
    compatibleWith_ja: "3B+,4B",
    image: "https://files.seeedstudio.com/wiki/Skeleton_box_for_Rasberry_Pi/img/Pi_skeleton_02.jpg",
    wikiPage: "./Skeleton_box_for_Rasberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Skeleton-box-for-Raspberry-Pi.html",
  },
  {
    id: 3,
    name_en: "Raspberry PI B+ Clear Case",
    name_cn: "树莓派B+透明外壳",
    name_ja: "Raspberry PI B+ クリアケース",
    description_en: "An easy to assemble clear acryllic case, made using a better-performing 4-piece design over the standard 6-piece",
    description_cn: "易于组装的透明亚克力外壳，采用性能更好的4片式设计，优于标准的6片式设计",
    description_ja: "標準的な6ピース設計に比べて組み立てやすく、性能向上した4ピースのクリアアクリルケースです。",
    compatibleWith_en: "3B+",
    compatibleWith_cn: "3B+",
    compatibleWith_ja: "3B+",
    image: "https://files.seeedstudio.com/wiki/Raspberry_PI_Bplus_Case/img/IMG_9955b.jpg",
    wikiPage: "./Raspberry_PI_Bplus_Case",
    purchasePage: "https://www.seeedstudio.com/Raspberry-Pi-Model-B-2-Case.html?queryID=f4fedf9ea695b42efea237236cb2a0ab&objectID=1036&indexName=bazaar_retailer_products",
  },
];

const Value = ({ lang = "en" }) => {
  // 语言归一化：zh 等价于 cn；保留 ja；新增 es
  const norm =
    lang === "zh" ? "cn" :
    lang === "cn" ? "cn" :
    lang === "ja" ? "ja" :
    lang === "es" ? "es" : "en";

  const isZH = norm === "cn";
  const isJA = norm === "ja";
  const isES = norm === "es";

  // 简单的多语言界面文案
  const ui = {
    compatible: isZH ? "兼容型号" : isJA ? "対応機種" : isES ? "Compatible con" : "Compatible With",
    buyNow:     isZH ? "🖱️ 立即购买" : isJA ? "🖱️ 今すぐ購入" : isES ? "🖱️ Comprar ahora" : "🖱️ Buy Now",
    getting:    isZH ? "📚 快速入门" : isJA ? "📚 はじめに" : isES ? "📚 Primeros pasos" : "📚 Getting Started",
  };

  // 读取字段时按 norm 优先，缺失则回退到 en
  const pick = (obj: Record<string, string>, base: string) => {
    const key = `${base}_${norm}`;
    const fallback = `${base}_en`;
    return (obj as any)[key] ?? (obj as any)[fallback] ?? "";
  };

  return (
    <div>
      <div className="rpi_item_container">
        {items.map((item) => (
          <div key={item.id} className='rpi_item_grid'>
            <div className="rpi_item_vertical">
              <span className='rpi_item_description'>
                <h2>{pick(item, "name")}</h2>
                <p>{pick(item, "description")}</p>
              </span>
              <span className='rpi_item_compatible'>
                <h3>{ui.compatible}</h3>
                <p>{pick(item, "compatibleWith")}</p>
              </span>
            </div>

            <img
              className={"rpi_item_pic " + (item.id % 2 ? 'reverse' : '')}
              src={item.image}
              alt={pick(item, "name")}
            />

            <span className='grid_item_center pagelink'>
              <a href={item.purchasePage} target="_blank" rel="noopener noreferrer">
                {ui.buyNow}
              </a>
            </span>

            <span className='grid_item_center pagelink'>
              <a href={item.wikiPage} target="_blank" rel="noopener noreferrer">
                {ui.getting}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
