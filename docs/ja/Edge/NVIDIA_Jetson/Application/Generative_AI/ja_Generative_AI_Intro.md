---
description: このページでは、Nvidia Jetson プラットフォームを使用して reComputer デバイス上で生成AI技術を展開する方法を紹介します。これには、テキスト生成、画像生成、音声生成、マルチモーダル生成、および検索強化生成が含まれます。各技術のアプリケーションシナリオ、技術的特徴、および関連リソースリンクを詳述し、開発者に包括的な参考資料と技術サポート情報を提供します。
title: Generative AI with reComputer-Jetson®
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Generative_AI_Intro
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

[**生成AI**](https://www.seeedstudio.com/edge-ai/generative-ai) は、既存のデータを学習して新しいデータ（画像、テキスト、音声など）を生成する人工知能技術です。**Nvidia Jetson** は、NVIDIAが開発したエッジAIプラットフォームで、高性能な処理能力と低消費電力設計を特徴とし、さまざまな組み込みおよびIoTデバイスに適しています。深層学習、コンピュータビジョン、その他のAIアプリケーションをサポートし、強力な計算能力と豊富な開発ツールを提供します。生成AIとJetsonの組み合わせにより、エッジデバイス上で効率的なローカルリアルタイム生成と推論が可能になります。

## テキスト生成

テキスト生成は、深層学習と大規模言語モデルを使用して自然言語テキストを生成する技術です。これらのモデルは膨大なデータセットで訓練され、言語の語彙、文法、意味構造を学習します。流暢で一貫性のあるテキストを生成できるだけでなく、質問への回答や会話だけでなく、記事の執筆、物語の作成、コード生成、言語翻訳などのタスクにも対応します。ここでは、Jetson上でテキスト生成アルゴリズムを展開し、ローカルチャットボットを作成します。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>ローカルAIアシスタント</font></th>
            <th class="table-trnobg"><font size={"4"}>ローカル音声チャットボット</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>ollamaとAnythingLLMを使用してJetsonデバイス上にローカル知識ベースを構築します。</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Nvidia RivaとMeta Llama2を使用してローカルで動作する音声チャットボットを構築します。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/local_ai_ssistant/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Local_Voice_Chatbot/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## 画像生成

画像生成は、入力されたテキスト記述を解釈することで、記述に一致する高品質な画像を生成する技術です。この技術は、芸術的な創作、広告デザイン、ゲーム開発などの分野で幅広く応用されており、ユーザーのニーズに合った視覚コンテンツを自動的に生成することを可能にします。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>ローカル LLM テキストから画像生成を実行</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png" style={{width:300, height:'300'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Jetson 上で画像生成モデルをデプロイし、その推論性能を評価します。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/How_to_run_local_llm_text_to_image_on_reComputer/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 音声生成

音声生成は、ニューラルネットワークを使用して、スピーチ、音楽、効果音などの高品質でリアルな音声を生成する技術です。広範なデータセットでトレーニングすることで、これらのモデルは自然な音声パターンやニュアンスを再現することを学び、音声合成、自動音楽作曲、効果音作成などの用途を可能にします。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>スピーチ字幕生成</font></th>
            <th class="table-trnobg"><font size={"4"}>NVIDIA Jetson Orin 上で Whisper をデプロイ</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" style={{width:300, height:'300'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}> Jetson 上でスピーチ字幕生成を行い、インターネット上での情報漏洩を防ぎながらリアルタイムのスピーチから字幕へのサービスを提供します。</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Jetson Orin 上で Whisper をデプロイし、堅牢で効率的な音声認識（STT）アプリケーションを構築します。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## マルチモーダル生成

マルチモーダル生成技術は、テキスト、画像、音声などのさまざまな形式のデータを組み合わせて、複数の情報タイプを統合したコンテンツを生成します。この技術は、異なるモダリティのデータを処理し融合するためにディープラーニングモデルを使用し、より表現力豊かで多様なコンテンツを生み出します。例えば、テキストから画像を生成するモデルは、テキスト記述に基づいて対応する画像を生成することができ、音声合成モデルはテキストから音声を生成し、同時に関連する画像を生成することも可能です。マルチモーダル生成は、仮想現実、拡張現実、マルチメディアコンテンツ制作などの分野で広範な応用の可能性を示しています。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>reComputerでVLMを実行</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> このWikiでは、Jetsonプラットフォームサービスを使用して、reComputer J4012 Jetson Orin NXでVLMを実行する方法についてのチュートリアルを提供します。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/run_vlm_on_recomputer/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 検索拡張生成

RAG（Retrieval-Augmented Generation）は、検索メカニズムと生成モデルを組み合わせた技術です。RAGモデルは、生成モデルを使用して応答を生成するだけでなく、大規模なデータベースから関連情報を検索することで、生成されたコンテンツの正確性と豊かさを向上させます。この技術は、質問応答システム、インテリジェント検索、コンテンツ生成などのアプリケーションで優れた性能を発揮します。検索された情報を活用することで、RAGモデルはより詳細で情報豊富な応答を生成し、生成コンテンツの品質と関連性を向上させます。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>ローカルAIアシスタント</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>LlamaIndexを使用したローカルRAG</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Jetsonデバイス上でollamaとAnythingLLMを使用してローカルナレッジベースをセットアップします。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> このローカルRAGプロジェクトを使用することで、データプライバシーを保護し、低遅延の通信体験を提供します。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/local_ai_ssistant/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Local_RAG_based_on_Jetson_with_LlamaIndex/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## その他

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>JetsonでのLLMのファインチューニング</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>MLCを使用した量子化LLM</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>ゼロショット検出</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Nvidia Jetson上でLlama-Factoryをデプロイし、Llama-Factoryを使用して大規模言語モデルをトレーニングします。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Jetson Orin NX上でMLC LLMを使用して量子化されたLlama2-7Bをデプロイします。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> ゼロショット検出AIサービスは、ストリーム入力と検出対象オブジェクトを制御するためのREST APIエンドポイントを提供します。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Finetune_LLM_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/run_zero_shot_detection_on_recomputer/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Langchainを使用した出力フォーマット</font>
            </th>    
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Langchainを使用して大規模言語モデルの出力をフォーマットし、エッジコンピューティングデバイス上でデプロイします。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>