---
title: 自定义指令-入门
sidebarDepth: 1
---

# 自定义指令基础
**通过创建JAKA_Command了解自定义指令类型AddOn的开发流程和基础知识。**


## 概述
&emsp;&emsp;我们将创建一个自定义指令类型的AddOn，当运行该指令时将根据指令块上的内容在App日志中输出不同的内容。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/showcase.png"/></div>

## 创建JAKA_Command
### Step1:创建AddOn包  
&emsp;&emsp;首先我们需要创建一份AddOn基本文件，包含一个.ini格式的配置文件和一个保存数据的json文件。您可以从头开始手动创建，也可以使用AddOn开发包仓库中 ["*Template*"](https://github.com/JakaCobot/jaka_addon_kit) 目录下的AddOn模板进行修改。 
::: tip 目录结构
|——JAKA_Command  
&emsp;&emsp;&emsp;|——AddOn.json   
&emsp;&emsp;&emsp;|——JAKA_Command_config.ini  
:::

* **AddOn.json**   
&emsp;&emsp;json文件内容为空即可，后面的步骤中会自动生成数据写入。
* **JAKA_Command_config.ini**   
&emsp;&emsp;[配置文件](/guide/addOn/iniConfig.html)内容如下:
    ``` ini
    [AddOnInfo]
    convention = 3.0
    name = JAKA_Command
    description = "在日志中输出信息"
    version = 1.0
    type = 1
    portal = 10006
    url = http://localhost/myAddOnUi
    languagetype = node-red
    service = AddOn.json
    serviceenabled = 1
    ```

### Step2:打包&上传
&emsp;&emsp;接下来我们会将AddOn打包，上传至控制器中进行指令块开发。打包的要求格式为`.tar.gz`。在Windows中您可以使用7z等打包工具进行二次压缩。    
<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/compress_addon.gif"/></div>
&emsp;&emsp;在App中附加管理程序页面上传AddOn。    
<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/upLoad_addon.png"/></div>

### Step3:开发自定义指令

&emsp;&emsp;运行AddOn并查看AddOn运行的端口号。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/run_addOn.gif"/></div>

&emsp;&emsp;使用`IP:Port`进入开发者界面。

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/developPage.png"/></div>

&emsp;&emsp;使用`Customized Commands`节点创建自定义指令块。在*基本配置*页面中定义指令块的样式和属性，在*脚本生成*页面定义指令块的行为。   
- 脚本语法请参考[JAKA编程脚本](/guide/jks.html)。
- `Customized Commands`节点使用请参考[自定义指令创建节点](/guide/addOn/Commands_Tool.html)
  

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/creat_block.gif"/></div>

 
&emsp;&emsp;当在App中保存自定义指令时，会通过http的get请求获取脚本，因此需要使用`http in`和`http response`节点完善流程。

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/Add_Http.gif"/></div>

:::tip 注意！
`http in` 节点的url要与自定义指令块的名称一致！
:::

### Step4:运行
&emsp;&emsp;在node-red中部署流程后，即可在App中使用该指令块。

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/program_hello.gif"/></div>


## 如何Debug？


