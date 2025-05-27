import React from 'react';
import './kits.css';

const items = [
  {
    id: 1,
    name_en: "Skeleton Box for Raspberry Pi Compute Module Development Kit",
    name_ja: "Raspberry Pi Compute Module 開発キット用スケルトンボックス",
    description_en: "Constructed from military grade aluminum and hardwearing acrylic, this box is stackable in all three dimensions, allowing for limitless expansion possibilities",
    description_ja: "軍用グレードのアルミニウムと耐久性の高いアクリルで作られており、3次元すべてに積み重ね可能で、無限の拡張性を提供します。",
    compatibleWith_en: "CM4",
    compatibleWith_ja: "CM4",
    image: "https://files.seeedstudio.com/wiki/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/img/Pic_2100.bmp",
    wikiPage: "./Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit",
    purchasePage: "https://www.seeedstudio.com/Skeleton-Box-for-Raspberry-Pi-Compute-Module.html",
  },
  {
    id: 2,
    name_en: "Skeleton Box for Raspberry Pi",
    name_ja: "Raspberry Pi用スケルトンボックス",
    description_en: "Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
    description_ja: "すべてのLoRaノードからデータを収集・転送するための基本要素を提供します。数分でIoTプロトタイプを構築可能。",
    compatibleWith_en: "3B+,4B",
    compatibleWith_ja: "3B+,4B",
    image: "https://files.seeedstudio.com/wiki/Skeleton_box_for_Rasberry_Pi/img/Pi_skeleton_02.jpg",
    wikiPage: "./Skeleton_box_for_Rasberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Skeleton-box-for-Raspberry-Pi.html",
  },
  {
    id: 3,
    name_en: "Raspberry PI B+ Clear Case",
    name_ja: "Raspberry PI B+ クリアケース",
    description_en: "An easy to assemble clear acryllic case, made using a better-performing 4-piece design over the standard 6-piece",
    description_ja: "標準的な6ピース設計に比べて組み立てやすく、性能向上した4ピースのクリアアクリルケースです。",
    compatibleWith_en: "3B+",
    compatibleWith_ja: "3B+",
    image: "https://files.seeedstudio.com/wiki/Raspberry_PI_Bplus_Case/img/IMG_9955b.jpg",
    wikiPage: "./Raspberry_PI_Bplus_Case",
    purchasePage: "https://www.seeedstudio.com/Raspberry-Pi-Model-B-2-Case.html?queryID=f4fedf9ea695b42efea237236cb2a0ab&objectID=1036&indexName=bazaar_retailer_products",
  },
];

const Value = ({ lang = "en" }) => {
  return (
    <div>
      <div className="rpi_item_container">
        {items.map((item) => (
          <div key={item.id} className='rpi_item_grid'>
            <div className="rpi_item_vertical">
              <span className='rpi_item_description'>
                <h2>{lang === "ja" ? item.name_ja : item.name_en}</h2>
                <p>{lang === "ja" ? item.description_ja : item.description_en}</p>
              </span>
              <span className='rpi_item_compatible'>
                <h3>{lang === "ja" ? "対応機種" : "Compatible With"}</h3>
                <p>{lang === "ja" ? item.compatibleWith_ja : item.compatibleWith_en}</p>
              </span>
            </div>

            <img
              className={"rpi_item_pic " + (item.id % 2 ? 'reverse' : '')}
              src={item.image}
              alt={lang === "ja" ? item.name_ja : item.name_en}
            />

            <span className='grid_item_center pagelink'>
              <a href={item.purchasePage} target="_blank" rel="noopener noreferrer">
                {lang === "ja" ? "🖱️ 今すぐ購入" : "🖱️ Buy Now"}
              </a>
            </span>

            <span className='grid_item_center pagelink'>
              <a href={item.wikiPage} target="_blank" rel="noopener noreferrer">
                {lang === "ja" ? "📚 はじめに" : "📚 Getting Started"}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
