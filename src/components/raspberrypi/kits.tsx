import React from 'react';
import './kits.css';

const items = [
  {
    id: 1,
    name_en: "Grove Base Kit for Raspberry Pi",
    name_cn: "树莓派Grove基础套件",
    name_ja: "Raspberry Pi用Groveベースキット",
    description_en: "Seeed Grove starter kit contains one Grove Base Hat(for Raspberry Pi ) and 10 Grove modules",
    description_cn: "Seeed Grove入门套件包含一个Grove基础扩展板（适用于树莓派）和10个Grove模块",
    description_ja: "Seeed Groveスターターキットは、Raspberry Pi用のGroveベースハット1台と10個のGroveモジュールを含みます",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_cn: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png",
    wikiPage: "./Grove_Base_Kit_for_Raspberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Grove-Base-Kit-for-Raspberry-Pi-p-2945.html"
  },
  {
    id: 2,
    name_en: "LoRa/LoRaWAN Gateway Kit",
    name_cn: "LoRa/LoRaWAN网关套件",
    name_ja: "LoRa/LoRaWANゲートウェイキット",
    description_en: "Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
    description_cn: "提供从所有LoRa节点收集和传输数据所需的所有基本元素。几分钟内构建您的物联网原型",
    description_ja: "すべてのLoRaノードからデータを収集・転送するための基本要素を提供。数分でIoTプロトタイプを構築可能",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_cn: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png",
    wikiPage: "./LoRa_LoRaWan_Gateway_Kit",
    purchasePage: "https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3.html"
  },
  {
    id: 3,
    name_en: "Grove Starter Kit for Microsoft IoT",
    name_cn: "Microsoft IoT Grove入门套件",
    name_ja: "Microsoft IoT用Groveスターターキット",
    description_en: "Seeed and Microsoft have worked together to alleviate some of the challenges in complex setup using Windows 10 IoT Core and Grove modules",
    description_cn: "Seeed和微软合作，减轻了使用Windows 10 IoT Core和Grove模块进行复杂设置时的一些挑战",
    description_ja: "SeeedとMicrosoftが協力し、Windows 10 IoT CoreとGroveモジュールを使用した複雑なセットアップの課題を軽減",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_cn: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg",
    wikiPage: "./Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Grove-Starter-Kit-for-IoT-based-on-Raspberry-Pi.html"
  },
];

const Value = ({ lang = "en" }) => {
  // 语言归一化：zh ≈ cn；保留 ja；新增 es
  const norm =
    lang === "zh" ? "cn" :
    lang === "cn" ? "cn" :
    lang === "ja" ? "ja" :
    lang === "es" ? "es" : "en";

  const isZH = norm === "cn";
  const isJA = norm === "ja";
  const isES = norm === "es";

  // UI 文案
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
