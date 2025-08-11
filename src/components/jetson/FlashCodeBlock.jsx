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
export const VerifySHA256 = () => {
        const product = useJetsonStore(state => state.product);
        const l4t = useJetsonStore(state => state.l4t);
        // Retrieve the associated download metadata
        const obj = getL4TData(product, l4t);
        const filename = obj?.filename || 'mfi_xxxx.tar.gz';  //
    return (
        <>
        <p>To verify the SHA256 hash of the downloaded file, run in terminal:</p>
        <CodeBlock language="bash">
        {`sha256sum mfi_xxxx.tar.gz 
# For example:
# sha256sum ${filename}`}
        </CodeBlock>
        <p>
        If the resulting hash matches the SHA25 hash provided in the wiki, 
        it confirms that the firmware you downloaded is complete and intact.</p>
        </>
    );
    
}

export const PrepareRequirementsMini = () => {//名称不能下划线
  console.log("PrepareRequirements rendered!");
  const product = useJetsonStore(state => state.product);

  const allowed = ['j4012mini', 'j4011mini', 'j3010mini', 'j3011mini'];
  if (!allowed.includes(product)) {
      return null;// 🚫 不渲染任何内容
  }

  return (//<h3>Prepare the Requirements</h3>
    <div>

    <ul>
      <li>Ubuntu Host Computer</li>
      <li>reComputer Mini J4012 / J4011 / J3010 or J3011</li>
      <li>USB Micro-B data transmission cable</li>
    </ul>

    <HostEnvironmentNote />
    </div>
  );
};


export const RecoveryMini = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");
    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012mini', 'j4011mini', 'j3010mini', 'j3011mini'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }

    return (//<h3>Prepare the Requirements</h3>
      <div>

      <ul>
        <li>Ubuntu Host Computer</li>
        <li>reComputer Mini J4012 / J4011 / J3010 or J3011</li>
        <li>USB Micro-B data transmission cable</li>
      </ul>

      <HostEnvironmentNote />


        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.
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
    }}>Step-by-Step</summary>
        <div style={{ textAlign: 'left', margin: '1em 0' }}>
        <p>
          Before flashing, ensure your Jetson device is properly connected via USB and powered on.
          The USB connection is necessary for the host PC to detect the device and communicate via recovery mode.
        </p>

        <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/HEIXFkizP5Y"
          title="Enter Force Recovery Mode (reComputer Mini)"
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
          alt="Recovery Mode Step"
        />
      </div>
        </div>
        <ul>
          <li><strong>Step 1.</strong> Connect a USB Micro-B cable between USB2.0 DEVICE port and the Ubuntu host PC.</li>
          <li><strong>Step 2.</strong> Use a pin and insert into the <strong>RECOVERY</strong> hole to press recovery button and hold it.</li>
          <li><strong>Step 3.</strong> Connect the power supply.</li>
          <li><strong>Step 4.</strong> Release the <strong>RECOVERY</strong> hole.</li>
        </ul>
      </details>

      <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode (press and hold Recovery + Reset).</li>
          </ul>
        </p>

      <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For Orin NX 16GB: <code>0955:7323</code> NVidia Corp</li>
        <li>For Orin NX 8GB: <code>0955:7423</code> NVidia Corp</li>
        <li>For Orin Nano 8GB: <code>0955:7523</code> NVidia Corp</li>
        <li>For Orin Nano 4GB: <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <div style={{ textAlign: 'left', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"
          alt="lsusb result"
        />
      </div>
      </div>
    );
  };

  export const PrepareRequirementsRobotics = () => {
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012robotics', 'j4011robotics', 'j3011robotics', 'j3010robotics'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <ul>
          <li>Ubuntu Host Computer</li>
          <li>reComputer Robotics J4012 / J4011 / J3010 or J3011</li>
          <li>USB Type-C data transmission cable</li>
        </ul>
  
        <HostEnvironmentNote1 />

      </div>
    );
  };

  export const RecoveryRobotics = () => {
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012robotics', 'j4011robotics', 'j3011robotics', 'j3010robotics'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>

  
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Before we can move on to the next step, we need to make sure that the board is in force <strong>recovery mode</strong>.
          <br />Click the "step-by-step" to see how to enter <strong>recovery mode</strong>.
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
        }}>Step-by-Step</summary>
  
          <ul>
            <li><strong>Step 1.</strong> Switch the switch to the RESET mode.</li>
          </ul>
  
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg"
              alt="Switch to RESET"
            />
          </div>
  
          <ul>
            <li><strong>Step 2.</strong> Power up the carrier board by connecting the power cable.</li>
            <li><strong>Step 3.</strong> Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.</li>
            <li><strong>Step 4.</strong> On the Linux host PC, open a Terminal window and enter the command <code>lsusb</code>. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.</li>
          </ul>

        </details>
        <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode (press and hold Recovery + Reset).</li>
          </ul>
        </p>
        <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For Orin NX 16GB: <code>0955:7323</code> NVidia Corp</li>
        <li>For Orin NX 8GB: <code>0955:7423</code> NVidia Corp</li>
        <li>For Orin Nano 8GB: <code>0955:7523</code> NVidia Corp</li>
        <li>For Orin Nano 4GB: <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <p>The below image is for Orin Nano 8GB:</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt="lsusb result"
            />
          </div>
      </div>
    );
  };
  
  export const PrepareRequirementsSuper = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012s', 'j4011s', 'j3011s', 'j3010s'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <ul>
          <li>Ubuntu Host Computer</li>
          <li>reComputer Super J4012 / J4011 / J3010 or J3011</li>
          <li>USB Type-C data transmission cable</li>
        </ul>
  
        <HostEnvironmentNote1 />
      </div>
    );
  };

  export const RecoverySuper = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012s', 'j4011s', 'j3011s', 'j3010s'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Before we can move on to the next step, we need to make sure that the board is in force <strong>recovery mode</strong>.
          <br />Click the "step-by-step" to see how to enter <strong>recovery mode</strong>.
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
        }}>Step-by-Step</summary>
  
          <ul>
            <li><strong>Step 1.</strong> Switch the switch to the RESET mode.</li>
          </ul>
  
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"
              alt="Switch to RESET"
            />
          </div>
  
          <ul>
            <li><strong>Step 2.</strong> Power up the carrier board by connecting the power cable.</li>
            <li><strong>Step 3.</strong> Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.</li>
            <li><strong>Step 4.</strong> On the Linux host PC, open a Terminal window and enter the command <code>lsusb</code>. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.</li>
          </ul>

        </details>
        <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode (press and hold Recovery + Reset).</li>
          </ul>
        </p>
        <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For Orin NX 16GB: <code>0955:7323</code> NVidia Corp</li>
        <li>For Orin NX 8GB: <code>0955:7423</code> NVidia Corp</li>
        <li>For Orin Nano 8GB: <code>0955:7523</code> NVidia Corp</li>
        <li>For Orin Nano 4GB: <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <p>The below image is for Orin Nano 8GB:</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt="lsusb result"
            />
          </div>
      </div>
    );
  };


  export const PrepareRequirementsClassic = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012classic', 'j4011classic', 'j3011classic', 'j3010classic'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <ul>
          <li>Ubuntu Host Computer</li>
          <li>reComputer J4012 / J4011 / J3010 or J3011</li>
          <li>USB Type-C data transmission cable</li>
        </ul>
  
        <HostEnvironmentNote />
      </div>
    );
  };


  export const RecoveryClassic = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012classic', 'j4011classic', 'j3011classic', 'j3010classic'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
  
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Before we can move on to the next step, we need to make sure that the board is in force <strong>recovery mode</strong>.<br />
          Click the "step-by-step" to see how to enter <strong>recovery mode</strong>.
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
        }}>Step-by-Step</summary>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={700}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif"
              alt="gif about RESET"
            />
          </div>
  
          <ul>
            <li><strong>Step 1.</strong> Use a jumper wire to connect the <strong>FC REC</strong> pin and the <strong>GND</strong> pin.</li>
          </ul>
  
        {/* 📌 插入 Table 部分 */}
        <div style={{ display: "flex", justifyContent: "center", margin: "1em 0" }}>
          <table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th></th>
                <th>Button Header</th>
                <th>Description</th>
                <th>Button Header</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6} style={{ textAlign: "center" }}>
                  <img
                    width="200"
                    src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"
                    alt="Pin layout"
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
            <li><strong>Step 2.</strong> Power up the reComputer by connecting the included cable from the power adapter.</li>
            <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={700}
              src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"
              alt="button about RESET"
            />
          </div>
            <li><strong>Step 3.</strong> Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.</li>
            <li><strong>Step 4.</strong> On the Linux host PC, open a Terminal window and enter the command <code>lsusb</code>. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.</li>
          </ul>

        </details>
        <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode (press and hold Recovery + Reset).</li>
          </ul>
        </p>
        <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For Orin NX 16GB: <code>0955:7323</code> NVidia Corp</li>
        <li>For Orin NX 8GB: <code>0955:7423</code> NVidia Corp</li>
        <li>For Orin Nano 8GB: <code>0955:7523</code> NVidia Corp</li>
        <li>For Orin Nano 4GB: <code>0955:7623</code> NVidia Corp</li>
      </ul>

      <p>The below image is for Orin Nano 8GB:</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt="lsusb result"
            />
          </div>
      </div>
    );
  };


  export const PrepareRequirementsIndustrial = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012industrial', 'j4011industrial', 'j3011industrial', 'j3010industrial', 'j2012industrial', 'j2011industrial'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <ul>
          <li>Ubuntu Host Computer</li>
          <li>reComputer Industrial J4012 / J4011 / J3011 / J3010 / J2012 or J2011</li>
          <li>USB Type-C data transmission cable</li>
        </ul>
  
        <HostEnvironmentNote />

      </div>
    );
  };

  export const RecoveryIndustrial = () => {//名称不能下划线,大写开头
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012industrial', 'j4011industrial', 'j3011industrial', 'j3010industrial', 'j2012industrial', 'j2011industrial'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Before we can move on to the next step, we need to make sure that the board is in force <strong>recovery mode</strong>.
          <br />Click the "step-by-step" to see how to enter <strong>recovery mode</strong>.
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
        }}>Step-by-Step</summary>
          <ul>
            <li><strong>Step 1.</strong> Connect a USB Type-C cable between <strong>USB2.0 DEVICE</strong> port and your PC.</li>
          </ul>

  
          <ul>
            <li><strong>Step 2.</strong> Use a pin and insert into the <strong>RECOVERY</strong> hole to press recovery button and while holding this.</li>
            <li><strong>Step 3.</strong> Connect the included 2-Pin Terminal block power connector to the power connector on the board and connect the included power adapter with a power cord to turn on the board.</li>
            <li><strong>Step 4.</strong> Release the <strong>RECOVERY</strong> hole.</li>
            <li><strong>Step 5.</strong> On the Linux host PC, open a Terminal window and enter the command <code>lsusb</code>. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.</li>
          </ul>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"
              alt="Switch to RESET"
            />
          </div>
        </details>
        <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode.</li>
          </ul>
        </p>
        <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For Orin NX 16GB: <code>0955:7323</code> NVidia Corp</li>
        <li>For Orin NX 8GB: <code>0955:7423</code> NVidia Corp</li>
        <li>For Orin Nano 8GB: <code>0955:7523</code> NVidia Corp</li>
        <li>For Orin Nano 4GB: <code>0955:7623</code> NVidia Corp</li>
        <li>For Xavier NX: <code>0955:7e19</code> NVidia Corp</li>
      </ul>

      <p>The below image is for Orin Nano 8GB:</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt="lsusb result"
            />
          </div>
      </div>
    );
  };


  export const PrepareRequirementsReserver = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <ul>
          <li>Ubuntu Host Computer</li>
          <li>reServer Industrial J4012 / J4011 / J3011 or J3010</li>
          <li>USB Type-C data transmission cable</li>
        </ul>
  
        <HostEnvironmentNote />

      </div>
    );
  };



  export const RecoveryReserver = () => {//名称不能下划线,大写开头
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Before we can move on to the next step, we need to make sure that the board is in force <strong>recovery mode</strong>.
          <br />Click the "step-by-step" to see how to enter <strong>recovery mode</strong>.
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
        }}>Step-by-Step</summary>
          <ul>
            <li><strong>Step 1.</strong> Connect a USB Type-C cable between <strong>DEVICE</ strong> port and your PC.</li>
          </ul>

  
          <ul>
            <li><strong>Step 2.</strong> Use a pin and insert into the <strong>REC</strong> hole to press recovery button and while holding this.</li>
            <li><strong>Step 3.</strong> Connect the included 2-Pin Terminal block power connector to the power connector on the board and connect the included power adapter with a power cord to turn on the board.</li>
            <li><strong>Step 4.</strong> Release the <strong>REC</ strong> hole.</li>
            <li><strong>Step 5.</strong> On the Linux host PC, open a Terminal window and enter the command <code>lsusb</code>. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.</li>
          </ul>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"
              alt="Switch to RESET"
            />
          </div>
        </details>
        <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode.</li>
          </ul>
        </p>
        <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For Orin NX 16GB: <code>0955:7323</code> NVidia Corp</li>
        <li>For Orin NX 8GB: <code>0955:7423</code> NVidia Corp</li>
        <li>For Orin Nano 8GB: <code>0955:7523</code> NVidia Corp</li>
        <li>For Orin Nano 4GB: <code>0955:7623</code> NVidia Corp</li>
        <li>For Xavier NX: <code>0955:7e19</code> NVidia Corp</li>
      </ul>

      <p>The below image is for Orin Nano 8GB:</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
              alt="lsusb result"
            />
          </div>
      </div>
    );
  };



  export const PrepareRequirementsJ501 = () => {//名称不能下划线
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j501-carrier AGX-Orin 64g', 'j501-carrier AGX-Orin 32g'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>
        <ul>
          <li>Ubuntu Host Computer</li>
          <li>reServer Industrial J501 Carrier Board</li>
          <li>NVIDIA® Jetson AGX Orin™ Module 32GB/64GB</li>
          <li>AGX Orin Active Fan</li>
          <li>NVMe M.2 2280 Internal SSD</li>
          <li>USB Type-C data transmission cable</li>
        </ul>
  
        <HostEnvironmentNote />

      </div>
    );
  };



  export const RecoveryJ501 = () => {//名称不能下划线,大写开头
    console.log("PrepareRequirements rendered!");

    const product = useJetsonStore(state => state.product);

    const allowed = ['j501-carrier AGX-Orin 64g', 'j501-carrier AGX-Orin 32g'];
    if (!allowed.includes(product)) {
        return null;// 🚫 不渲染任何内容
    }
  
    return (
      <div>

        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Before we can move on to the next step, we need to make sure that the board is in force <strong>recovery mode</strong>.
          <br />Click the "step-by-step" to see how to enter <strong>recovery mode</strong>.
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
        }}>Step-by-Step</summary>
        <div style={{ textAlign: 'center' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/CGMGZGqZPKM"
            title="J501 Enter Force Recovery Mode"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg"
              alt="Switch to RESET"
            />
          </div>
          <ul>
            <li><strong>Step 1.</strong> Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.</li>
          </ul>
          <ul>
            <li><strong>Step 2.</strong> Power up the carrier board by connecting the power cable.</li>
            <li><strong>Step 3.</strong> Release the force recovery button.</li>
            <li><strong>Step 4.</strong> Release the <strong>REC</ strong> hole.</li>
            <li><strong>Step 5.</strong> On the Linux host PC, open a Terminal window and enter the command <code>lsusb</code>. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.</li>
          </ul>

        </details>
        <p>
          If the device is not detected, try the following:
          <ul>
            <li>Reconnect the USB cable.</li>
            <li>Use a different USB port (preferably USB 2.0).</li>
            <li>Ensure the device is in recovery mode.</li>
          </ul>
        </p>
        <p>After the device enters recovery mode, open a Terminal and run on the Linux host PC:</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>If the output includes one of the following IDs, the board is in force recovery mode:</p>
      <ul>
        <li>For AGX Orin 32GB: <code>0955:7223</code> NVidia Corp</li>
        <li>For AGX Orin 64GB: <code>0955:7023</code> NVidia Corp</li>
      </ul>

      <p>The below image is for AGX Orin 32GB:</p>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={800}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"
              alt="lsusb result"
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
export const ExtractFile = () => {
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
export const FlashCMD = () => {
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

export const ExtractAndFlash = () => {  
    const product = useJetsonStore(state => state.product);
    const l4t = useJetsonStore(state => state.l4t);
    // Retrieve the associated download metadata
    const obj = getL4TData(product, l4t);
    const filename = obj?.filename || 'mfi_xxxx.tar.gz'
    const foldername = obj?.foldername || 'mfi_xxxx'
    return (
      <div>  
        <p><strong>Step 1:</strong> Extract the downloaded image file on the Ubuntu host PC:</p>
  
        <CodeBlock language="bash">
    {`cd <path-to-image>
sudo tar xpf  mfi_xxxx.tar.gz
# For example:
# sudo tar xpf ${filename}`}
        </CodeBlock>
  
        <p><strong>Step 2:</strong> Execute the following command to flash JetPack system to the NVMe SSD:</p>
  
        <CodeBlock language="bash">
    {`cd mfi_xxxx
# For example:
# cd ${foldername}
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs`}
        </CodeBlock>
  
        <p>You will see the following output if the flashing process is successful:</p>
  
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Flash success" />
        </div>
  
        <div className="alert alert--note" role="alert" style={{ marginBottom: '1em' }}>
          The flash command may run for 2–10 minutes.
        </div>
  
        <p><strong>Step 3:</strong> Connect the Jetson to a display using the HDMI connector on the board and finish the initial configuration setup:</p>
  
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width="800"
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"
            alt="Jetson first boot configuration"
          />
        </div>
  
        <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
          Please complete the <strong>System Configuration</strong> according to your needs.
        </div>
  
        <p><strong>Step 4 (Optional):</strong> Install Nvidia Jetpack SDK</p>
  
        <p>Please open the terminal on the Jetson device and execute the following commands:</p>
  
        <CodeBlock language="bash">
  {`sudo apt update
sudo apt install nvidia-jetpack`}
        </CodeBlock>
      </div>
    );
  };

  const HostEnvironmentNote = () => {
    return (
      <>
        <div className="alert alert--info" role="alert">
          <strong>Host Recommendation</strong><br />
          We recommend that you use physical Ubuntu host devices instead of virtual machines.<br />
          Please refer to the table below to prepare the host machine.
        </div>
        <p></p>
        <div style={{ overflowX: 'auto', marginBottom: '1em' }}>
          <table style={{ textAlign: 'center', width: '45%', borderCollapse: 'collapse' }} border={1}>
            <thead>
              <tr>
                <th rowSpan={2}>JetPack Version</th>
                <th colSpan={3}>Ubuntu Version (Host Computer)</th>
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

  const HostEnvironmentNote1 = () => {
    return (
      <>
        <div className="alert alert--info" role="alert">
          <strong>Host Recommendation</strong><br />
          We recommend that you use physical Ubuntu host devices instead of virtual machines.<br />
          Please refer to the table below to prepare the host machine.
        </div>
        <p></p>
        <div style={{ overflowX: 'auto', marginBottom: '1em' }}>
          <table style={{ textAlign: 'center', width: '45%', borderCollapse: 'collapse' }} border={1}>
            <thead>
              <tr>
                <th rowSpan={2}>JetPack Version</th>
                <th colSpan={3}>Ubuntu Version (Host Computer)</th>
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

