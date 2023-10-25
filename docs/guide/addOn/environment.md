---
title: 开发环境搭建
sidebarDepth: 1
---

# 开发环境搭建
**本页面旨在介绍如何搭建AddOn开发环境，开始前请先下载[*开发资料*](/guide/addOn/AddOn3.0.html#开发资料获取)。**

AddOn的开发需要依赖适当的开发环境，例如JAKA虚拟机以及相适配的软件、控制器版本。

## 安装JAKA虚拟机

### 步骤一：安装虚拟机软件

开发者需先安装虚拟机软件，例如VirtualBox 或 VMware Player。

### 步骤二：安装JAKA虚拟镜像
在*jaka_addon_package*中找到虚拟机镜像文件，导入安装。
<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/install_vm.gif"/></div>

### 步骤三：启动JAKA虚拟控制器

点击“开启此虚拟机”启动虚拟机。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/start_vm.gif"/></div>

此时虚拟机页面上显示了当前机器人的IP地址。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/IP.png"/></div>



## 安装AddOn套件包

::: tip 需注意:
版本过低的App及控制器无法支持AddOn功能。
:::
所以我们在安装好虚拟机后，还需将App和控制器升级至相应适配版本后，再安装AddOn套件包，以实现AddOn开发。

### 步骤一：安装JAKA App

在AddOn开发环境包中APP文件夹中找到安装包，点击根据引导安装完成APP。

在安装过程中要注意给予网络权限。

### 步骤二：使用App连接机器人

1.打开App连接机器人，此时可在机器人列表中根据IP找到虚拟机器人。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/find_robot.png"/></div>

2.若在列表中无法找到机器人，可尝试使用离线连接。

3.密码处，输入默认登录密码（jakazuadmin）。

4.地址处，输入虚拟机器人IP。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/offline_connect.png"/></div>

### 步骤三：升级控制器

打开设置页面——系统设置——版本升级页面，选择要升级的控制器包，点击上传，完成升级。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/upgrade_controler.png"/></div>

### 步骤四：安装AddOn套件包

打开设置页面——系统设置——版本升级页面，选择AddOn套件包，点击上传，完成安装。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/environment/upgrade_AddOnkit.png"/></div>

### 步骤五：重启App

::: tip 需注意：
在完成步骤一至四后，请重启App，以使操作生效。
:::



