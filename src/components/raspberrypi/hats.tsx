import React from 'react';
import './hats.css'

const hats = [
    {
        id: 1,
        name_en: "Grove Base Hat for Raspberry Pi",
        name_ja: "Raspberry Pi用Groveベースハット",
        description_en: "Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs",
        description_ja: "あらゆるニーズに対応したデジタル/アナログ/I2C/PWM/UARTポートを備えた拡張ボード",
        compatibleWith_en: "3B+, 4B",
        compatibleWith_ja: "3B+, 4B",
        image: "https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg",
        wikiPage: "./Grove_Base_Hat_for_Raspberry_Pi",
        purchasePage: "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"
    },
    {
        id: 2,
        name_en: "Grove Base Hat for Raspberry Pi Zero",
        name_ja: "Raspberry Pi Zero用Groveベースハット",
        description_en: "Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs in the pHat form factor of the RPi Zero family",
        description_ja: "RPi ZeroシリーズのpHatフォームファクターで、多様なポートを備えた拡張ボード",
        compatibleWith_en: "Zero, Zero W/WH",
        compatibleWith_ja: "Zero, Zero W/WH",
        image: "https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/main.jpg",
        wikiPage: "./Grove_Base_Hat_for_Raspberry_Pi_Zero",
        purchasePage: "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html"
    },
    {
        id: 3,
        name_en: "WM1302 Raspberry Pi Hat",
        name_ja: "WM1302 Raspberry Piハット",
        description_en: "Add-on board for connecting the WM1302 LoRaWAN module, based on LoRa Concentrator Semtech SX1302",
        description_ja: "LoRa Concentrator Semtech SX1302をベースにしたWM1302 LoRaWANモジュール接続用拡張ボード",
        compatibleWith_en: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_ja: "3B+, 4B, Zero, Zero W/WH",
        image: "https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png",
        wikiPage: "./WM1302_Pi_HAT",
        purchasePage: "https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html"
    },
    {
        id: 4,
        name_en: "LTE Cat 1 Pi HAT",
        name_ja: "LTE Cat 1 Pi HAT",
        description_en: "Open-source cellular extension modem for Raspberry Pi, based on u-blox LARA-R2xx series",
        description_ja: "u-blox LARA-R2xxシリーズをベースにしたRaspberry Pi用オープンソースセルラー拡張モデム",
        compatibleWith_en: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_ja: "3B+, 4B, Zero, Zero W/WH",
        image: "https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG",
        wikiPage: "./LTE_Cat_1_Pi_HAT",
        purchasePage: "https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-USA-AT--p-3056.html"
    },
    {
        id: 5,
        name_en: "ReSpeaker 2-Mics Pi HAT",
        name_ja: "ReSpeaker 2マイク Pi HAT",
        description_en: "Dual-microphone expansion board for Raspberry Pi designed for AI and voice applications.",
        description_ja: "AIと音声アプリ向けに設計されたRaspberry Pi用2マイク拡張ボード",
        compatibleWith_en: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_ja: "3B+, 4B, Zero, Zero W/WH",
        image: "https://files.seeedstudio.com/products/107100001/01.png",
        wikiPage: "./ReSpeaker_2_Mics_Pi_HAT",
        purchasePage: "https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html"
    },
    {
        id: 6,
        name_en: "ReSpeaker 4-Mics Pi HAT",
        name_ja: "ReSpeaker 4マイク Pi HAT",
        description_en: "Quad-microphone expansion board for Raspberry Pi designed for more powerful AI and voice applications.",
        description_ja: "より強力なAIと音声アプリ向けの4マイク拡張ボード",
        compatibleWith_en: "3B+, 4B",
        compatibleWith_ja: "3B+, 4B",
        image: "https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg",
        wikiPage: "./ReSpeaker_4_Mic_Array_for_Raspberry_Pi",
        purchasePage: "https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html"
    }
];

const Value = ({ lang = "en" }) => {
  return (
    <div>
      <div className="rpi_hat_container">
        {hats.map((hat) => (
          <div key={hat.id} className="rpi_hat_grid">
            <div className="rpi_hat_vertical">
              <span className='rpi_hat_description'>
                <h2>{lang === "ja" ? hat.name_ja : hat.name_en}</h2>
                <p>{lang === "ja" ? hat.description_ja : hat.description_en}</p>
              </span>
              <span className='rpi_hat_compatible'>
                <h3>{lang === "ja" ? "対応機種" : "Compatible With"}</h3>
                <p>{lang === "ja" ? hat.compatibleWith_ja : hat.compatibleWith_en}</p>
              </span>
            </div>

            <img
              className={"rpi_hat_pic " + (hat.id % 2 ? "reverse" : "")}
              src={hat.image}
              alt={lang === "ja" ? hat.name_ja : hat.name_en}
            />

            <span className='rpi_hat_purchase pagelink'>
              <a href={hat.purchasePage} target="_blank" rel="noopener noreferrer">
                {lang === "ja" ? "🖱️ 今すぐ購入" : "🖱️ Buy Now"}
              </a>
            </span>

            <span className='rpi_hat_wikilink pagelink'>
              <a href={hat.wikiPage} target="_blank" rel="noopener noreferrer">
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
