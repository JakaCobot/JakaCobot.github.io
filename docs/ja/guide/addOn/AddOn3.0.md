---
title: イントロダクション
sidebarDepth: 1
---
# AddOn
**このページでは、AddOnが何であり、AddOn開発者向けの入門ガイドを提供します。**

::: warning 注意：
1. このチュートリアルで言及されているAddOnはデフォルトでAddOn 3.0です。
2. JAKAコントローラー > 1.7.1.x _X64バージョンでのみ、AddOn 3.0の開発と使用がサポートされています。
3. AddOn 1.0および2.0はもはやメンテナンスされておらず、開発サポートは提供されません。
:::


## AddOnとは
---
&emsp;&emsp;JAKA AddOnは、JAKAによってサポートされ、対応する製品仕様が付属するプラグイン型のソフトウェア製品です。これにより、ユーザーはカスタムコマンドプラグイン、カスタムサービスプラグイン、カスタムページプラグインを開発したり、上記の種類を含む複合プラグインを作成したりして、システムに新しい機能拡張を提供したり、既存の機能を個性化したりできます。典型的なAddOn製品には、グリッパーコントロールプラグイン、ビジョンガイダンスプラグイン、センサーコントロールプラグイン、通信プロトコル、プロセスアプリケーションパッケージなどがあります。

## 技術スタック
---
- [**JAKAScript**](/ja/guide/jks.html): カスタムコマンド機能を実装するためのスクリプト言語です。
- [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): ロボットとのやり取りに使用するHTTPインターフェースを提供します。
- [**JAKA App APIs**](/ja/guide/addOn/AppAPI.html): JAKA Appとのフロントエンドインタラクションに対するJavaScript関数を提供します。
- [**node-red**](https://nodered.org/docs/): AddOnの開発プラットフォームおよびバックエンドサービスです。
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): node-redでスクリプトとロジックを記述するために使用します。
- [**フロントエンド技術**](https://web.dev/learn/html/): カスタムページプラグインを開発する際に必要な技術です。

## AddOnファイルの構成
---
AddOnにはさまざまなファイルが含まれる場合がありますが、以下は最も一般的に使用されるものです：

**データファイル**
&emsp;&emsp;AddOnパッケージには通常、node-redで定義されたフローおよびノード情報が含まれるJSONファイルが含まれます。このファイルの名前はカスタマイズできますが、設定で指定する必要があります。

**設定ファイル**
&emsp;&emsp;どのタイプのAddOnプラグインでも、`xxx_config.ini`ファイル、つまり[AddOn構成ファイル](/ja/guide/addOn/iniConfig)を含める必要があります。AddOn構成ファイルを含むプラグインのみがインストール、初期化、実行できます。

**フロントエンドプロジェクト**
&emsp;&emsp;カスタムページを含むAddOnディレクトリには通常、フロントエンドプロジェクトのフォルダがあります。例：client、dist。

## 開発リソースの取得
---

1. [JAKA仮想マシン](https://github.com/JakaCobot/JAKASim)
2. [AddOn環境パッケージ](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn [開発テンプレート](https://github.com/JakaCobot/jaka_addon_kit)
4. チュートリアルに含まれるデモ [こちら](https://github.com/JakaCobot/jaka_addon_kit)

:::tip
環境パッケージには、それに対応する最新のAppおよびコントローラーバージョンが同梱されています。
:::

## AddOnの開発方法を学ぶ
---

何から始めるか分からない場合は、次の入門チュートリアルを学んでください：

* [AddOn開発環境の準備](./environment.md)に従って、AddOn開発環境を構築します。
* "[JAKA_Command](./JAKA_Command.md)"を作成することで、カスタムコマンドタイプのAddOnの基本的なプロセスとルールを学びます。
* "[JAKA_Serve](./JAKA_Serve.md)"を作成することで、カスタムサービスタイプのAddOnの基本的なプロセスとルールを学びます。
* "[JAKA_web](./JAKA_web.md)"を作成することで、カスタムウェブページタイプのAddOnの基本的なプロセスとルールを学びます。

この基礎の上で、実際のシナリオのAddOnのチュートリアル例を選んでさらに学習できます。それらは少なくともカスタムコマンド、カスタムサービス、カスタムウェブページの2つ以上を含む場合があり、これらは複合AddOnとして知られています：
<!-- デモコンテンツは確認が必要です。現在はカスタムコマンドブロックの詳細のみ提供されていますか？ -->
1. [Ewellixエレベーター]()
2. [DHグリッパー]()

<!-- todo グリッパー、エレベーター、ビジョンなど、各種のシナリオをカバーするさらなるチュートリアルを追加してください。 -->

## フィードバック
---

フィードバックを歓迎します！ドキュメントにエラーや不明確な部分がある場合は、[Issues](https://github.com/JakaCobot/JakaCobot.github.io/issues)にご意見をお寄せください。
<!-- addonkitのリポジトリへのリンクとこのドキュメントのリンクを提供します -->