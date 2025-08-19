import React from 'react';
import './hero.css';

const RpiPage = ({ lang = 'en' }) => {
  // 简单做法：用一个对象存储不同语言的文本
  const content = {
    en: {
      paragraph1:
        'Raspberry Pi (aka "RPi") was originally designed and created by a non-profit organization with the intention to promote teaching computer science at an affordable cost. Several generations and models of Raspberry Pis have now been released that have expanded their footprints, power and applications.',
      paragraph2:
        'At Seeed Studio, we offer the entire Raspberry Pi family of boards as well as complementary accessories and starter kits that can help you create projects centered around the product. Additionally, we have created many tutorials in Seeed’s Raspberry Pi community where you can easily find references to build your own circuits or write your own applications.',
    },
    cn: {
      paragraph1:
        '树莓派（又名"RPi"）最初由一个非营利组织设计和创建，旨在以低廉的成本促进计算机科学教育。现在已经发布了几代不同型号的树莓派，扩展了它们的应用范围、性能和用途。',
      paragraph2:
        '在Seeed Studio，我们提供完整的树莓派系列开发板以及配套的配件和入门套件，这些可以帮助您创建以该产品为核心的项目。此外，我们在Seeed的树莓派社区中创建了许多教程，您可以轻松找到参考资料来构建自己的电路或编写自己的应用程序。',
    },
    ja: {
      paragraph1:
        'Raspberry Pi（別名「RPi」）は、非営利団体によって手頃な価格でコンピュータサイエンスの教育を促進するために設計・作成されました。これまでに複数の世代やモデルがリリースされており、その性能や用途は拡大しています。',
      paragraph2:
        'Seeed Studioでは、Raspberry Piの全シリーズのボードや補完的なアクセサリー、スターターキットを提供しており、製品を中心にプロジェクトを作成するのに役立ちます。さらに、SeeedのRaspberry Piコミュニティには、多くのチュートリアルがあり、自分の回路やアプリケーションを簡単に作成できます。',
    },
  };

  // 取当前语言对应的内容，如果没匹配默认用英文
  const texts = content[lang] || content.en;

  return (
    <div className="hero_container">
      <div className="hero_topic">
        <p>{texts.paragraph1}</p>
        <p>{texts.paragraph2}</p>
      </div>
      <div className="hero_img">
        <img
          src="https://files.seeedstudio.com/wiki/Raspberry-Pi-5/PI_5_HERO.png"
          alt="Raspberry Pi Hero"
        />
      </div>
    </div>
  );
};

export default RpiPage;