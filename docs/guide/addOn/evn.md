---
title: 开发环境准备
---

# 开发环境准备
开发AddOn前，需要按照下述指南准备开发环境。可通过[下载地址]()获取最新的AddOn开发环境包。
## 一、JAKA虚拟机安装
### 1.1 安装VMware
开发者可从官网自行下载VMware安装包或使用环境包中提供的的安装包。VMware需要使用序列号激活方可永久使用。序列号需开发者自行获取。
### 1.2 安装JAKA虚拟镜像
1.运行VMware，在上方工具栏中点击文件-打开。

![Alt text](../../../resource/ch/AddOn/env/image.png)

2.在弹出的对话框中选择AddOn开发环境包中的JAKA虚拟机镜像。

![Alt text](../../../resource/ch/AddOn/env/image-1.png)

3.为虚拟机命名和选择虚拟机的储存路径。

![Alt text](../../../resource/ch/AddOn/env/image-2.png)

4.点击导入

![Alt text](../../../resource/ch/AddOn/env/image-3.png)



## 二、升级虚拟控制器版本
安装好虚拟机后点击“开启此虚拟机”启动虚拟机。

![Alt text](../../../resource/ch/AddOn/env/image-4.png)
### 2.1 升级控制器版本
1.将AddOn开发环境包中控制器文件夹下的控制器版本包，复制到虚拟机内Downloads文件夹下。

![Alt text](../../../resource/ch/AddOn/env/image-5.png)


2.在Downloads文件夹中空白区域单击右键，点击Open Terminal，打开终端界面。

![Alt text](../../../resource/ch/AddOn/env/image-6.png)

依次输入下面的命令后回车

> tar -vzxf JKZUC1_7_1_9.tar.gz      //{注意要和上传的控制器包名一致}<br>
> su                                 //（进入root权限，密码 ******）<br>
> cd JKZUC1_7_1_9/Install<br>
>make install

等待虚拟机自动重启后，控制器版本升级完成。



### 2.2 启动JAKA虚拟控制器
1.打开一个新的终端，输入下面命令。
>jkzuc -s  （启动虚拟控制器，每次重启虚拟机后必须使用此命令启动虚拟控制器）<br>
>y
![Alt text](../../../resource/ch/AddOn/env/image-8.png)

当出现机器人仿真窗口时，代表控制器启动完成。

![Alt text](../../../resource/ch/AddOn/env/image-9.png)

2.设置虚拟机IP配置

点击工具栏中的虚拟机-设置

![Alt text](../../../resource/ch/AddOn/env/image-10.png)

将网络连接改为NAT模式

![Alt text](../../../resource/ch/AddOn/env/image-11.png)

返回虚拟机，打开一个新的终端窗口，输入下面的命令，查看当前IP。

>ip a 

![Alt text](../../../resource/ch/AddOn/env/image-12.png)

若没有IP，可能是网络正在切换，稍等一会再次输入命令查询。

## 三、安装APP
### 3.1 安装App
1.在AddOn开发环境包中APP文件夹中找到安装包，点击根据引导安装完成APP。
在安装过程中要注意给予网络权限。
### 3.2 使用App连接机器人
1.打开APP连接机器人，此时可在机器人列表中根据IP找到虚拟机器人。

2.若在列表中无法找到机器人，可尝试使用离线连接。

3.密码填入默认登录密码（jakazuadmin）

4.地址填入虚拟机器人IP

### 3.3 升级AddOn环境

打开设置页面--系统设置--版本升级页面

![Alt text](../../../resource/ch/AddOn/env/image-13.png)

选择在AddOn开发环境包中AddOn环境文件夹下的升级包上传
此时虚拟机自动重启，等待重启完成后环境安装完成。

虚拟机重启后，需按照[2.2 启动JAKA虚拟控制器](#22-启动jaka虚拟控制器)中的步骤重启虚拟控制器。




## 五、其他

### 5.1 虚拟机密码
用户名：jakauser   密码：jaka007
用户名：root       密码：******

### 5.2 重启虚拟控制器
点击控制器进程窗口，按下CTRL + C。
![Alt text](./image-1.png)
等待进程被完全关闭后依次输入下面的命令：
>* pkill -9 python
>* pkill -9 jkzuc
这么做是为了将控制器的进程完全清理干净，然后启动控制器。
>* jkzuc -s 

### 5.3 常见问题


