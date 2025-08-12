/**
 * FlashCodeBlock.tsx
 * ------------------
 * This file contains reusable React components that display flashing-related
 * shell commands for Jetson devices, such as verifying SHA256, extracting tarballs,
 * and executing the flash script.
 *
 * The components rely on Zustand state (via `useJetsonStore`) to retrieve
 * the selected filename and foldername values dynamically.
 *
 * Components:
 *  - VerifySHA256: Displays a SHA256 checksum verification command
 *  - ExtractFile: Displays the tar extraction command
 *  - FlashCMD: Displays a sequence of flashing commands
 *
 * Dependencies:
 *  - Zustand (useJetsonStore)
 *  - @theme/CodeBlock (Docusaurus code block component)
 */
import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { useJetsonStore } from '@site/src/stores/useJetsonStore';
import {getL4TData} from '@site/src/components/jetson/DownloadLink';

// 多语言内容配置
const content = {
    en: {
        // VerifySHA256
        verifySha256Intro: "To verify the SHA256 hash of the downloaded file, run in terminal:",
        verifySha256Note: "If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.",
        forExample: "For example:",
        
        // Requirements
        ubuntuHost: "Ubuntu Host Computer",
        usbMicroB: "USB Micro-B data transmission cable",
        usbTypeC: "USB Type-C data transmission cable",
        
        // Recovery mode
        recoveryModeNote: "Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.",
        recoveryModeNoteNext: "Before we can move on to the next step, we need to make sure that the board is in force recovery mode.",
        recoveryModeClickStep: "Click the \"step-by-step\" to see how to enter recovery mode.",
        stepByStep: "Step-by-Step",
        
        // Recovery steps content
        recoveryIntro: "Before flashing, ensure your Jetson device is properly connected via USB and powered on. The USB connection is necessary for the host PC to detect the device and communicate via recovery mode.",
        recoveryVideoTitle: "Enter Force Recovery Mode (reComputer Mini)",
        
        // Common steps
        step1: "Step 1.",
        step2: "Step 2.",
        step3: "Step 3.",
        step4: "Step 4.",
        step5: "Step 5.",
        
        // Recovery steps
        connectUsbDevice: "Connect a USB Micro-B cable between USB2.0 DEVICE port and the Ubuntu host PC.",
        insertRecovery: "Use a pin and insert into the RECOVERY hole to press recovery button and hold it.",
        connectPower: "Connect the power supply.",
        releaseRecovery: "Release the RECOVERY hole.",
        
        // Switch steps
        switchReset: "Switch the switch to the RESET mode.",
        powerUpCarrier: "Power up the carrier board by connecting the power cable.",
        connectUsbc: "Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.",
        runLsusb: "On the Linux host PC, open a Terminal window and enter the command lsusb. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.",
        
        // Jumper steps
        useJumper: "Use a jumper wire to connect the FC REC pin and the GND pin.",
        powerRecomputer: "Power up the reComputer by connecting the included cable from the power adapter.",
        
        // Industrial/ReServer specific steps
        connectUsbTypeC: "Connect a USB Type-C cable between USB2.0 DEVICE port and your PC.",
        connectUsbTypeCDevice: "Connect a USB Type-C cable between DEVICE port and your PC.",
        insertRecoveryHole: "Use a pin and insert into the RECOVERY hole to press recovery button and while holding this.",
        insertRecHole: "Use a pin and insert into the REC hole to press recovery button and while holding this.",
        connect2PinPower: "Connect the included 2-Pin Terminal block power connector to the power connector on the board and connect the included power adapter with a power cord to turn on the board.",
        releaseRecoveryHole: "Release the RECOVERY hole.",
        releaseRecHole: "Release the REC hole.",
        
        // J501 specific
        connectUsbFirst: "Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.",
        powerUpFirst: "Power up the carrier board by connecting the power cable.",
        releaseForceCovery: "Release the force recovery button.",
        
        // Device detection
        deviceNotDetected: "If the device is not detected, try the following:",
        reconnectUsb: "Reconnect the USB cable.",
        differentPort: "Use a different USB port (preferably USB 2.0).",
        ensureRecovery: "Ensure the device is in recovery mode (press and hold Recovery + Reset).",
        ensureRecoverySimple: "Ensure the device is in recovery mode.",
        
        afterRecoveryMode: "After the device enters recovery mode, open a Terminal and run on the Linux host PC:",
        recoveryModeIds: "If the output includes one of the following IDs, the board is in force recovery mode:",
        
        // Orin variants
        orinNx16gb: "For Orin NX 16GB:",
        orinNx8gb: "For Orin NX 8GB:",
        orinNano8gb: "For Orin Nano 8GB:",
        orinNano4gb: "For Orin Nano 4GB:",
        xavierNx: "For Xavier NX:",
        agxOrin32gb: "For AGX Orin 32GB:",
        agxOrin64gb: "For AGX Orin 64GB:",
        
        imageExample: "The below image is for Orin Nano 8GB:",
        imageExampleAgx: "The below image is for AGX Orin 32GB:",
        
        // ExtractAndFlash
        step1Extract: "Step 1:",
        extractImageFile: "Extract the downloaded image file on the Ubuntu host PC:",
        step2Flash: "Step 2:",
        executeFlashCommand: "Execute the following command to flash JetPack system to the NVMe SSD:",
        flashSuccess: "You will see the following output if the flashing process is successful:",
        flashDuration: "The flash command may run for 2–10 minutes.",
        step3Connect: "Step 3:",
        connectDisplay: "Connect the Jetson to a display using the HDMI connector on the board and finish the initial configuration setup:",
        systemConfiguration: "Please complete the System Configuration according to your needs.",
        step4Optional: "Step 4 (Optional):",
        installJetpack: "Install Nvidia Jetpack SDK",
        installJetpackInstructions: "Please open the terminal on the Jetson device and execute the following commands:",
        
        // Host Environment
        hostRecommendation: "Host Recommendation",
        hostRecommendationText: "We recommend that you use physical Ubuntu host devices instead of virtual machines.",
        hostRecommendationTable: "Please refer to the table below to prepare the host machine.",
        jetpackVersion: "JetPack Version",
        ubuntuVersion: "Ubuntu Version (Host Computer)",
        
        // Button headers
        buttonHeader: "Button Header",
        description: "Description",
        
        // Path placeholder
        pathToImage: "<path-to-image>",
        
        // Product names
        or: "or",
        
        // Switch/Reset images alt text
        switchToReset: "Switch to RESET",
        recoveryModeStep: "Recovery Mode Step",
        gifAboutReset: "gif about RESET",
        buttonAboutReset: "button about RESET",
        pinLayout: "Pin layout",
        lsusbResult: "lsusb result",
        flashSuccess: "Flash success",
        jetsonFirstBoot: "Jetson first boot configuration",
    },
    cn: {
        // VerifySHA256
        verifySha256Intro: "要验证下载文件的SHA256哈希值，请在终端中运行：",
        verifySha256Note: "如果结果哈希值与wiki中提供的SHA256哈希值匹配，则确认您下载的固件是完整且完好的。",
        forExample: "例如:",
        
        // Requirements
        ubuntuHost: "Ubuntu主机电脑",
        usbMicroB: "USB Micro-B数据传输线",
        usbTypeC: "USB Type-C数据传输线",
        
        // Recovery mode
        recoveryModeNote: "在进行安装步骤之前，我们需要确保板子处于强制恢复模式。",
        recoveryModeNoteNext: "在进行下一步之前，我们需要确保板子处于强制恢复模式。",
        recoveryModeClickStep: "点击\"分步说明\"查看如何进入恢复模式。",
        stepByStep: "分步说明",
        
        // Recovery steps content
        recoveryIntro: "在刷写之前，请确保您的Jetson设备通过USB正确连接并已通电。USB连接是主机PC检测设备并通过恢复模式进行通信所必需的。",
        recoveryVideoTitle: "进入强制恢复模式 (reComputer Mini)",
        
        // Common steps
        step1: "步骤1.",
        step2: "步骤2.",
        step3: "步骤3.",
        step4: "步骤4.",
        step5: "步骤5.",
        
        // Recovery steps
        connectUsbDevice: "在USB2.0 DEVICE端口和Ubuntu主机PC之间连接USB Micro-B线缆。",
        insertRecovery: "使用细针插入RECOVERY孔，按下恢复按钮并保持按住。",
        connectPower: "连接电源。",
        releaseRecovery: "松开RECOVERY孔。",
        
        // Switch steps
        switchReset: "将开关切换至RESET模式。",
        powerUpCarrier: "通过连接电源线为载板通电。",
        connectUsbc: "使用USB Type-C数据传输线将板子连接到Ubuntu主机PC。",
        runLsusb: "在Linux主机PC上，打开终端窗口并输入命令lsusb。如果返回的内容包含以下输出之一（根据您使用的Jetson SoM），则板子处于强制恢复模式。",
        
        // Jumper steps
        useJumper: "使用跳线连接FC REC引脚和GND引脚。",
        powerRecomputer: "连接随附的电源适配器线缆为reComputer通电。",
        
        // Industrial/ReServer specific steps
        connectUsbTypeC: "在USB2.0 DEVICE端口和您的PC之间连接USB Type-C线缆。",
        connectUsbTypeCDevice: "在DEVICE端口和您的PC之间连接USB Type-C线缆。",
        insertRecoveryHole: "使用细针插入RECOVERY孔，按下恢复按钮并保持按住。",
        insertRecHole: "使用细针插入REC孔，按下恢复按钮并保持按住。",
        connect2PinPower: "将随附的2针端子块电源连接器连接到板子的电源连接器，并连接随附的电源适配器与电源线来为板子通电。",
        releaseRecoveryHole: "松开RECOVERY孔。",
        releaseRecHole: "松开REC孔。",
        
        // J501 specific
        connectUsbFirst: "使用USB Type-C数据传输线将板子连接到Ubuntu主机PC。",
        powerUpFirst: "通过连接电源线为载板通电。",
        releaseForceCovery: "松开强制恢复按钮。",
        
        // Device detection
        deviceNotDetected: "如果设备未被检测到，请尝试以下方法：",
        reconnectUsb: "重新连接USB线缆。",
        differentPort: "使用不同的USB端口（最好是USB 2.0）。",
        ensureRecovery: "确保设备处于恢复模式（按住Recovery + Reset）。",
        ensureRecoverySimple: "确保设备处于恢复模式。",
        
        afterRecoveryMode: "设备进入恢复模式后，在Linux主机PC上打开终端并运行：",
        recoveryModeIds: "如果输出包含以下ID之一，则板子处于强制恢复模式：",
        
        // Orin variants
        orinNx16gb: "对于Orin NX 16GB：",
        orinNx8gb: "对于Orin NX 8GB：",
        orinNano8gb: "对于Orin Nano 8GB：",
        orinNano4gb: "对于Orin Nano 4GB：",
        xavierNx: "对于Xavier NX：",
        agxOrin32gb: "对于AGX Orin 32GB：",
        agxOrin64gb: "对于AGX Orin 64GB：",
        
        imageExample: "下图是Orin Nano 8GB的示例：",
        imageExampleAgx: "下图是AGX Orin 32GB的示例：",
        
        // ExtractAndFlash
        step1Extract: "步骤1：",
        extractImageFile: "在Ubuntu主机PC上解压下载的镜像文件：",
        step2Flash: "步骤2：",
        executeFlashCommand: "执行以下命令将JetPack系统刷写到NVMe SSD：",
        flashSuccess: "如果刷写过程成功，您将看到以下输出：",
        flashDuration: "刷写命令可能运行2-10分钟。",
        step3Connect: "步骤3：",
        connectDisplay: "使用板子上的HDMI连接器将Jetson连接到显示器，并完成初始配置设置：",
        systemConfiguration: "请根据您的需要完成系统配置。",
        step4Optional: "步骤4（可选）：",
        installJetpack: "安装Nvidia Jetpack SDK",
        installJetpackInstructions: "请在Jetson设备上打开终端并执行以下命令：",
        
        // Host Environment
        hostRecommendation: "主机建议",
        hostRecommendationText: "我们建议您使用物理Ubuntu主机设备而不是虚拟机。",
        hostRecommendationTable: "请参考下表准备主机设备。",
        jetpackVersion: "JetPack版本",
        ubuntuVersion: "Ubuntu版本（主机电脑）",
        
        // Button headers
        buttonHeader: "按钮引脚",
        description: "描述",
        
        // Path placeholder
        pathToImage: "<镜像路径>",
        
        // Product names
        or: "或",
        
        // Switch/Reset images alt text
        switchToReset: "切换至RESET",
        recoveryModeStep: "恢复模式步骤",
        gifAboutReset: "关于RESET的gif",
        buttonAboutReset: "关于RESET的按钮",
        pinLayout: "引脚布局",
        lsusbResult: "lsusb结果",
        flashSuccess: "刷写成功",
        jetsonFirstBoot: "Jetson首次启动配置",
    }
};

/**
 * VerifySHA256
 * ------------
 * A component that displays a terminal command to verify the SHA256 hash
 * of the selected file.
 *
 * The file name is obtained from Zustand state via `useJetsonStore`.
 *
 * @returns {JSX.Element} A bash command block to verify file hash.
 */
export const VerifySHA256 = ({ lang = 'en' }) => {
        const product = useJetsonStore(state => state.product);
        const l4t = useJetsonStore(state => state.l4t);
        // Retrieve the associated download metadata
        const obj = getL4TData(product, l4t);
        const filename = obj?.filename || 'mfi_xxxx.tar.gz';
        const texts = content[lang] || content.en;
    return (
        <>
        <p>{texts.verifySha256Intro}</p>
        <CodeBlock language="bash">
        {`sha256sum mfi_xxxx.tar.gz 
# ${texts.forExample}
# sha256sum ${filename}`}
        </CodeBlock>
        <p>{texts.verifySha256Note}</p>
        </>
    );
    
}

export const PrepareRequirementsMini = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012mini', 'j4011mini', 'j3010mini', 'j3011mini'];
  if (!allowed.includes(product)) {
      return null;
  }

  return (
    <div>
    <ul>
      <li>{texts.ubuntuHost}</li>
      <li>reComputer Mini J4012 / J4011 / J3010 {texts.or} J3011</li>
      <li>{texts.usbMicroB}</li>
    </ul>

    <HostEnvironmentNote lang={lang} />
    </div>
  );
};

export const RecoveryMini = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012mini', 'j4011mini', 'j3010mini', 'j3011mini'];
    if (!allowed.includes(product)) {
        return null;
    }

    return (
      <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reComputer Mini J4012 / J4011 / J3010 {texts.or} J3011</li>
        <li>{texts.usbMicroB}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNote}
      </div>

      <details style={{ marginBottom: '1em' }}>
  <summary
    style={{
      cursor: 'pointer',
      fontWeight: 'bold',
      backgroundColor: 'var(--ifm-background-surface-color)',
      padding: '0.6em 1em',
      border: '1px solid #c3dafe',
      borderRadius: '6px',
      fontSize: '1.05em'
    }}>{texts.stepByStep}</summary>
        <div style={{ textAlign: 'left', margin: '1em 0' }}>
        <p>{texts.recoveryIntro}</p>

        <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/HEIXFkizP5Y"
          title={texts.recoveryVideoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
 
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={600}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png"
          alt={texts.recoveryModeStep}
        />
      </div>
        </div>
        <ul>
          <li><strong>{texts.step1}</strong> {texts.connectUsbDevice}</li>
          <li><strong>{texts.step2}</strong> {texts.insertRecovery}</li>
          <li><strong>{texts.step3}</strong> {texts.connectPower}</li>
          <li><strong>{texts.step4}</strong> {texts.releaseRecovery}</li>
        </ul>
      </details>

      <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecovery}</li>
          </ul>
        </p>

      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.orinNx16gb} <code>0955:7323</code> NVidia Corp</li>
        <li>{texts.orinNx8gb} <code>0955:7423</code> NVidia Corp</li>
        <li>{texts.orinNano8gb} <code>0955:7523</code> NVidia Corp</li>
        <li>{texts.orinNano4gb} <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <div style={{ textAlign: 'left', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"
          alt={texts.lsusbResult}
        />
      </div>
      </div>
    );
  };

  export const PrepareRequirementsRobotics = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012robotics', 'j4011robotics', 'j3011robotics', 'j3010robotics'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <ul>
          <li>{texts.ubuntuHost}</li>
          <li>reComputer Robotics J4012 / J4011 / J3010 {texts.or} J3011</li>
          <li>{texts.usbTypeC}</li>
        </ul>
  
        <HostEnvironmentNote1 lang={lang} />

      </div>
    );
  };

  export const RecoveryRobotics = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012robotics', 'j4011robotics', 'j3011robotics', 'j3010robotics'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
  
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.recoveryModeNoteNext}
          <br />{texts.recoveryModeClickStep}
        </div>
  
        <details style={{ marginBottom: '1em' }}>
        <summary
            style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
        }}>{texts.stepByStep}</summary>
  
          <ul>
            <li><strong>{texts.step1}</strong> {texts.switchReset}</li>
          </ul>
  
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg"
              alt={texts.switchToReset}
            />
          </div>
  
          <ul>
            <li><strong>{texts.step2}</strong> {texts.powerUpCarrier}</li>
            <li><strong>{texts.step3}</strong> {texts.connectUsbc}</li>
            <li><strong>{texts.step4}</strong> {texts.runLsusb}</li>
          </ul>

        </details>
        <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecovery}</li>
          </ul>
        </p>
        <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.orinNx16gb} <code>0955:7323</code> NVidia Corp</li>
        <li>{texts.orinNx8gb} <code>0955:7423</code> NVidia Corp</li>
        <li>{texts.orinNano8gb} <code>0955:7523</code> NVidia Corp</li>
        <li>{texts.orinNano4gb} <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <p>{texts.imageExample}</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt={texts.lsusbResult}
            />
          </div>
      </div>
    );
  };
  
  export const PrepareRequirementsSuper = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012s', 'j4011s', 'j3011s', 'j3010s'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <ul>
          <li>{texts.ubuntuHost}</li>
          <li>reComputer Super J4012 / J4011 / J3010 {texts.or} J3011</li>
          <li>{texts.usbTypeC}</li>
        </ul>
  
        <HostEnvironmentNote1 lang={lang} />
      </div>
    );
  };

  export const RecoverySuper = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012s', 'j4011s', 'j3011s', 'j3010s'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.recoveryModeNoteNext}
          <br />{texts.recoveryModeClickStep}
        </div>
  
        <details style={{ marginBottom: '1em' }}>
        <summary
            style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
        }}>{texts.stepByStep}</summary>
  
          <ul>
            <li><strong>{texts.step1}</strong> {texts.switchReset}</li>
          </ul>
  
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"
              alt={texts.switchToReset}
            />
          </div>
  
          <ul>
            <li><strong>{texts.step2}</strong> {texts.powerUpCarrier}</li>
            <li><strong>{texts.step3}</strong> {texts.connectUsbc}</li>
            <li><strong>{texts.step4}</strong> {texts.runLsusb}</li>
          </ul>

        </details>
        <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecovery}</li>
          </ul>
        </p>
        <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.orinNx16gb} <code>0955:7323</code> NVidia Corp</li>
        <li>{texts.orinNx8gb} <code>0955:7423</code> NVidia Corp</li>
        <li>{texts.orinNano8gb} <code>0955:7523</code> NVidia Corp</li>
        <li>{texts.orinNano4gb} <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <p>{texts.imageExample}</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt={texts.lsusbResult}
            />
          </div>
      </div>
    );
  };

  export const PrepareRequirementsClassic = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012classic', 'j4011classic', 'j3011classic', 'j3010classic'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <ul>
          <li>{texts.ubuntuHost}</li>
          <li>reComputer J4012 / J4011 / J3010 {texts.or} J3011</li>
          <li>{texts.usbTypeC}</li>
        </ul>
  
        <HostEnvironmentNote lang={lang} />
      </div>
    );
  };

  export const RecoveryClassic = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012classic', 'j4011classic', 'j3011classic', 'j3010classic'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
  
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.recoveryModeNoteNext}<br />
          {texts.recoveryModeClickStep}
        </div>
  
        <details style={{ marginBottom: '1em' }}>
        <summary
            style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
        }}>{texts.stepByStep}</summary>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={700}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif"
              alt={texts.gifAboutReset}
            />
          </div>
  
          <ul>
            <li><strong>{texts.step1}</strong> {texts.useJumper}</li>
          </ul>
  
        {/* 📌 插入表格部分 */}
        <div style={{ display: "flex", justifyContent: "center", margin: "1em 0" }}>
          <table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th></th>
                <th>{texts.buttonHeader}</th>
                <th>{texts.description}</th>
                <th>{texts.buttonHeader}</th>
                <th>{texts.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6} style={{ textAlign: "center" }}>
                  <img
                    width="200"
                    src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"
                    alt={texts.pinLayout}
                  />
                </td>
                <td>1</td>
                <td>PWR BTN</td>
                <td>7</td>
                <td>AUTO ON</td>
              </tr>
              <tr>
                <td>2</td>
                <td>GND</td>
                <td>8</td>
                <td>DIS</td>
              </tr>
              <tr>
                <td>3</td>
                <td>FC REC</td>
                <td>9</td>
                <td>UART TXD</td>
              </tr>
              <tr>
                <td>4</td>
                <td>GND</td>
                <td>10</td>
                <td>UART RXD</td>
              </tr>
              <tr>
                <td>5</td>
                <td>SYS RET</td>
                <td>11</td>
                <td>LED +</td>
              </tr>
              <tr>
                <td>6</td>
                <td>GND</td>
                <td>12</td>
                <td>LED -</td>
              </tr>
            </tbody>
          </table>
        </div>

  
          <ul>
            <li><strong>{texts.step2}</strong> {texts.powerRecomputer}</li>
            <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={700}
              src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"
              alt={texts.buttonAboutReset}
            />
          </div>
            <li><strong>{texts.step3}</strong> {texts.connectUsbc}</li>
            <li><strong>{texts.step4}</strong> {texts.runLsusb}</li>
          </ul>

        </details>
        <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecovery}</li>
          </ul>
        </p>
        <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.orinNx16gb} <code>0955:7323</code> NVidia Corp</li>
        <li>{texts.orinNx8gb} <code>0955:7423</code> NVidia Corp</li>
        <li>{texts.orinNano8gb} <code>0955:7523</code> NVidia Corp</li>
        <li>{texts.orinNano4gb} <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <p>{texts.imageExample}</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt={texts.lsusbResult}
            />
          </div>
      </div>
    );
  };

  export const PrepareRequirementsIndustrial = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012industrial', 'j4011industrial', 'j3011industrial', 'j3010industrial', 'j2012industrial', 'j2011industrial'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <ul>
          <li>{texts.ubuntuHost}</li>
          <li>reComputer Industrial J4012 / J4011 / J3011 / J3010 / J2012 {texts.or} J2011</li>
          <li>{texts.usbTypeC}</li>
        </ul>
  
        <HostEnvironmentNote lang={lang} />

      </div>
    );
  };

  export const RecoveryIndustrial = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012industrial', 'j4011industrial', 'j3011industrial', 'j3010industrial', 'j2012industrial', 'j2011industrial'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.recoveryModeNoteNext}
          <br />{texts.recoveryModeClickStep}
        </div>
  
        <details style={{ marginBottom: '1em' }}>
        <summary
            style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
        }}>{texts.stepByStep}</summary>
          <ul>
            <li><strong>{texts.step1}</strong> {texts.connectUsbTypeC}</li>
          </ul>

  
          <ul>
            <li><strong>{texts.step2}</strong> {texts.insertRecoveryHole}</li>
            <li><strong>{texts.step3}</strong> {texts.connect2PinPower}</li>
            <li><strong>{texts.step4}</strong> {texts.releaseRecoveryHole}</li>
            <li><strong>{texts.step5}</strong> {texts.runLsusb}</li>
          </ul>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"
              alt={texts.switchToReset}
            />
          </div>
        </details>
        <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecoverySimple}</li>
          </ul>
        </p>
        <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.orinNx16gb} <code>0955:7323</code> NVidia Corp</li>
        <li>{texts.orinNx8gb} <code>0955:7423</code> NVidia Corp</li>
        <li>{texts.orinNano8gb} <code>0955:7523</code> NVidia Corp</li>
        <li>{texts.orinNano4gb} <code>0955:7623</code> NVidia Corp</li>
        <li>{texts.xavierNx} <code>0955:7e19</code> NVidia Corp</li>
      </ul>

      <p>{texts.imageExample}</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt={texts.lsusbResult}
            />
          </div>
      </div>
    );
  };

  export const PrepareRequirementsReserver = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <ul>
          <li>{texts.ubuntuHost}</li>
          <li>reServer Industrial J4012 / J4011 / J3011 {texts.or} J3010</li>
          <li>{texts.usbTypeC}</li>
        </ul>
  
        <HostEnvironmentNote lang={lang} />

      </div>
    );
  };

  export const RecoveryReserver = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.recoveryModeNoteNext}
          <br />{texts.recoveryModeClickStep}
        </div>
  
        <details style={{ marginBottom: '1em' }}>
        <summary
            style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
        }}>{texts.stepByStep}</summary>
          <ul>
            <li><strong>{texts.step1}</strong> {texts.connectUsbTypeCDevice}</li>
          </ul>

  
          <ul>
            <li><strong>{texts.step2}</strong> {texts.insertRecHole}</li>
            <li><strong>{texts.step3}</strong> {texts.connect2PinPower}</li>
            <li><strong>{texts.step4}</strong> {texts.releaseRecHole}</li>
            <li><strong>{texts.step5}</strong> {texts.runLsusb}</li>
          </ul>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"
              alt={texts.switchToReset}
            />
          </div>
        </details>
        <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecoverySimple}</li>
          </ul>
        </p>
        <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.orinNx16gb} <code>0955:7323</code> NVidia Corp</li>
        <li>{texts.orinNx8gb} <code>0955:7423</code> NVidia Corp</li>
        <li>{texts.orinNano8gb} <code>0955:7523</code> NVidia Corp</li>
        <li>{texts.orinNano4gb} <code>0955:7623</code> NVidia Corp</li>
        <li>{texts.xavierNx} <code>0955:7e19</code> NVidia Corp</li>
      </ul>

      <p>{texts.imageExample}</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt={texts.lsusbResult}
            />
          </div>
      </div>
    );
  };

  export const PrepareRequirementsJ501 = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j501-carrier AGX-Orin 64g', 'j501-carrier AGX-Orin 32g'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>
        <ul>
          <li>{texts.ubuntuHost}</li>
          <li>{lang === 'cn' ? 'reServer Industrial J501载板' : 'reServer Industrial J501 Carrier Board'}</li>
          <li>{lang === 'cn' ? 'NVIDIA® Jetson AGX Orin™ 模块 32GB/64GB' : 'NVIDIA® Jetson AGX Orin™ Module 32GB/64GB'}</li>
          <li>{lang === 'cn' ? 'AGX Orin主动风扇' : 'AGX Orin Active Fan'}</li>
          <li>{lang === 'cn' ? 'NVMe M.2 2280内部SSD' : 'NVMe M.2 2280 Internal SSD'}</li>
          <li>{texts.usbTypeC}</li>
        </ul>
  
        <HostEnvironmentNote lang={lang} />

      </div>
    );
  };

  export const RecoveryJ501 = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const texts = content[lang] || content.en;

    const allowed = ['j501-carrier AGX-Orin 64g', 'j501-carrier AGX-Orin 32g'];
    if (!allowed.includes(product)) {
        return null;
    }
  
    return (
      <div>

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.recoveryModeNoteNext}
          <br />{texts.recoveryModeClickStep}
        </div>
  
        <details style={{ marginBottom: '1em' }}>
        <summary
            style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
        }}>{texts.stepByStep}</summary>
        <div style={{ textAlign: 'center' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/CGMGZGqZPKM"
            title={lang === 'cn' ? 'J501进入强制恢复模式' : 'J501 Enter Force Recovery Mode'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg"
              alt={texts.switchToReset}
            />
          </div>
          <ul>
            <li><strong>{texts.step1}</strong> {texts.connectUsbFirst}</li>
          </ul>
          <ul>
            <li><strong>{texts.step2}</strong> {texts.powerUpFirst}</li>
            <li><strong>{texts.step3}</strong> {texts.releaseForceCovery}</li>
            <li><strong>{texts.step4}</strong> {texts.releaseRecHole}</li>
            <li><strong>{texts.step5}</strong> {texts.runLsusb}</li>
          </ul>

        </details>
        <p>
          {texts.deviceNotDetected}
          <ul>
            <li>{texts.reconnectUsb}</li>
            <li>{texts.differentPort}</li>
            <li>{texts.ensureRecoverySimple}</li>
          </ul>
        </p>
        <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>{texts.agxOrin32gb} <code>0955:7223</code> NVidia Corp</li>
        <li>{texts.agxOrin64gb} <code>0955:7023</code> NVidia Corp</li>
      </ul>

      <p>{texts.imageExampleAgx}</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"
              alt={texts.lsusbResult}
            />
          </div>
      </div>
    );
  };

/**
 * ExtractFile
 * -----------
 * A component that shows the bash command to extract a `.tar` archive file.
 *
 * The folder name (archive file name) is retrieved from the Zustand store.
 *
 * @returns {JSX.Element} A bash command block to extract the tarball.
 */
export const ExtractFile = ({ lang = 'en' }) => {
    const foldername = useJetsonStore(state => state.foldername);
    return (
        <CodeBlock language="bash">
            sudo tar xvpf {foldername}
        </CodeBlock>
    );
}

/**
 * FlashCMD
 * --------
 * A component that shows a series of terminal commands to perform Jetson board flashing
 * using NVIDIA's `l4t_initrd_flash.sh` script.
 *
 * The working directory is determined by the `foldername` from the Zustand store.
 *
 * @returns {JSX.Element} Two bash command blocks for changing directory and executing the flash script.
 */
export const FlashCMD = ({ lang = 'en' }) => {
    const foldername = useJetsonStore(state => state.foldername);
    return (
        <>
            <CodeBlock language="bash">
                cd {foldername}
            </CodeBlock>
            <CodeBlock language="bash">
                sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
            </CodeBlock>
        </>
    );
}

export const ExtractAndFlash = ({ lang = 'en' }) => {  
    const product = useJetsonStore(state => state.product);
    const l4t = useJetsonStore(state => state.l4t);
    const obj = getL4TData(product, l4t);
    const filename = obj?.filename || 'mfi_xxxx.tar.gz'
    const foldername = obj?.foldername || 'mfi_xxxx'
    const texts = content[lang] || content.en;
    
    return (
      <div>  
        <p><strong>{texts.step1Extract}</strong> {texts.extractImageFile}</p>
  
        <CodeBlock language="bash">
    {`cd ${texts.pathToImage}
sudo tar xpf  mfi_xxxx.tar.gz
# ${texts.forExample}
# sudo tar xpf ${filename}`}
        </CodeBlock>
  
        <p><strong>{texts.step2Flash}</strong> {texts.executeFlashCommand}</p>
  
        <CodeBlock language="bash">
    {`cd mfi_xxxx
# ${texts.forExample}
# cd ${foldername}
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs`}
        </CodeBlock>
  
        <p>{texts.flashSuccess}</p>
  
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt={texts.flashSuccess} />
        </div>
  
        <div className="alert alert--note" role="alert" style={{ marginBottom: '1em' }}>
          {texts.flashDuration}
        </div>
  
        <p><strong>{texts.step3Connect}</strong> {texts.connectDisplay}</p>
  
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width="800"
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"
            alt={texts.jetsonFirstBoot}
          />
        </div>
  
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          {texts.systemConfiguration}
        </div>
  
        <p><strong>{texts.step4Optional}</strong> {texts.installJetpack}</p>
  
        <p>{texts.installJetpackInstructions}</p>
  
        <CodeBlock language="bash">
  {`sudo apt update
sudo apt install nvidia-jetpack`}
        </CodeBlock>
      </div>
    );
  };

  const HostEnvironmentNote = ({ lang = 'en' }) => {
    const texts = content[lang] || content.en;
    return (
      <>
        <div className="alert alert--info" role="alert">
          <strong>{texts.hostRecommendation}</strong><br />
          {texts.hostRecommendationText}<br />
          {texts.hostRecommendationTable}
        </div>
        <p></p>
        <div style={{ overflowX: 'auto', marginBottom: '1em' }}>
          <table style={{ textAlign: 'center', width: '45%', borderCollapse: 'collapse' }} border={1}>
            <thead>
              <tr>
                <th rowSpan={2}>{texts.jetpackVersion}</th>
                <th colSpan={3}>{texts.ubuntuVersion}</th>
              </tr>
              <tr>
                <th>18.04</th>
                <th>20.04</th>
                <th>22.04</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JetPack 5.x</td>
                <td>✅</td>
                <td>✅</td>
                <td></td>
              </tr>
              <tr>
                <td>JetPack 6.x</td>
                <td></td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const HostEnvironmentNote1 = ({ lang = 'en' }) => {
    const texts = content[lang] || content.en;
    return (
      <>
        <div className="alert alert--info" role="alert">
          <strong>{texts.hostRecommendation}</strong><br />
          {texts.hostRecommendationText}<br />
          {texts.hostRecommendationTable}
        </div>
        <p></p>
        <div style={{ overflowX: 'auto', marginBottom: '1em' }}>
          <table style={{ textAlign: 'center', width: '45%', borderCollapse: 'collapse' }} border={1}>
            <thead>
              <tr>
                <th rowSpan={2}>{texts.jetpackVersion}</th>
                <th colSpan={3}>{texts.ubuntuVersion}</th>
              </tr>
              <tr>
                <th>18.04</th>
                <th>20.04</th>
                <th>22.04</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JetPack 6.x</td>
                <td></td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };