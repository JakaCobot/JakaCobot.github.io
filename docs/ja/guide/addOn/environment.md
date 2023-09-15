---
title: 開発環境の準備
sidebarDepth: 1
---

# 開発環境の準備
**この記事では、AddOnの開発環境を構築する方法について説明します。開始する前に、[*開発資料*](/ja/guide/addOn/AddOn3.0.html#開発資料の取得)をダウンロードしてください。**

## JAKA仮想マシンのインストール

### 1.1 仮想マシンソフトウェアのインストール

&emsp;&emsp;開発者はまず、VirtualBoxやVMware Playerなどの仮想マシンソフトウェアをインストールする必要があります。

### 1.2 JAKA仮想イメージのインストール
&emsp;&emsp;*jaka_addon_package*内で仮想イメージファイルを見つけてインポートし、インストールします。
<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/install_vm.gif"/></div>

### 1.3 JAKA仮想コントローラの起動
&emsp;&emsp;「この仮想マシンを開始」をクリックして、仮想マシンを起動します。

<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/start_vm.gif"/></div>

&emsp;&emsp;この時点で、仮想マシンのページに現在のロボットのIPアドレスが表示されます。

<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/IP.png"/></div>



## 他の環境のインストール
### 2.1 アプリのインストール

1. AddOn開発環境パッケージ内のAPPフォルダからインストールパッケージを見つけ、指示に従ってAPPをインストールします。インストールの過程でネットワークの許可を与えることに注意してください。

### 2.2 アプリを使用してロボットに接続する

1. アプリを開き、ロボットに接続します。この時点で、IPに基づいて仮想ロボットをロボットリストから見つけることができるはずです。

<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/find_robot.png"/></div>

2. リストでロボットを見つけることができない場合は、オフライン接続を試してみてください。

3. パスワードにはデフォルトのログインパスワード（jakazuadmin）を入力します。

4. アドレスには仮想ロボットのIPを入力します。

<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/offline_connect.png"/></div>

### 2.3 コントローラのアップグレード

&emsp;&emsp;設定ページを開き、システム設定に移動し、バージョンアップグレードページに移動します。アップグレードしたいコントローラパッケージを選択し、「アップロード」をクリックします。

<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/upgrade_controler.png"/></div>

### 2.4 AddOn環境のアップグレード

&emsp;&emsp;設定ページを開き、システム設定に移動し、バージョンアップグレードページに移動します。AddOn環境パッケージを選択し、「アップロード」をクリックします。

<div align="center"><img width="800"  src="../../../resource/ja/AddOn/environment/upgrade_AddOnkit.png"/></div>

&emsp;&emsp;アップグレードが完了したら、アプリを再起動する必要があります。



