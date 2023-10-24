---
title: 自定义指令开发
sidebarDepth: 1
---

# 自定义指令基础
**通过创建JAKA_Command了解自定义指令类型AddOn的开发流程和基础知识。**


## 概述

### 自定义指令的作用

使用AddOn自定义指令，可以将复杂的工艺流程、不直观的参数输入抽象为一条简单易用的指令块。

### 应用场景

&emsp;&emsp;我们将创建一个自定义指令类型的AddOn，该AddOn的功能是将指令块上输入和选择的内容显示在App日志中。

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

1. 运行AddOn并查看AddOn运行的端口号。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/run_addOn.gif"/></div>

2. 使用`IP:Port`进入开发者界面。

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/developPage.png"/></div>

3. 在左侧工具栏中找到`Customized Commands`节点，拖入画布中，点击部署。
4. 双击`Customized Commands`节点，打开指令块生成工具页面。
   
    <div align="center">
    <video width="1000" controls autoplay >
    <source src="../../../resource/ch/AddOn/JAKA_Command/open_coustomer_node.mp4" type="video/mp4">
    </video>
    </div>

5. 更改指令块名称为*hello_jaka*,颜色为绿色。
6. 在*基本配置*页面中定义了指令块的样式和属性，这里使用自带的属性不做更改。
7. 在*脚本生成*页面定义指令块的行为，这里使用自带的脚本不做更改。   
  
    <div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/creat_block.gif"/></div>

    - 节卡脚本语法请参考[JAKA编程脚本](/guide/jks.html)。
    - 更详细的`Customized Commands`节点使用方法请参考[自定义指令创建节点](/guide/addOn/Commands_Tool.html)
 
8. 当在App中保存自定义指令时，会通过http的get请求获取脚本，因此需要使用`http in`和`http response`节点完善流程。

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/Add_Http.gif"/></div>

:::tip 注意！
`http in` 节点的url要与自定义指令块的名称一致！
:::

### Step4:运行
&emsp;&emsp;在node-red中部署流程后，即可在App中使用该指令块。

<div align="center"><img width="1000"  src="../../../resource/ch/AddOn/JAKA_Command/program_hello.gif"/></div>


## 问题排查

### 自定义指令生成失败
![Alt text](./image.png)

### 服务器内部错误
![Alt text](./image-1.png)



- node-red中使用debug节点进行调试。可以调试保存时指令块发来的参数和返回的jks是否正确。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/debug.png"/></div>

保存或运行程序时，App发起Get请求。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/debug1.png"/></div>


此时debug1可以捕获到请求中的传参。“Select1”为定义的属性名，“value”为该属性的值，即指令块上填入的内容。“type”为指令块上填入参数的类型，0表示输入框内为手动写入的值，1表示输入框内放入了变量。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/debug2.png"/></div>


debug2中可以看到包含了Jks脚本的对象。其中error_code为生成Jks的错误码，0是生成正常，-12为内部错误。当该错误码不等于0时，App会弹窗报错相应的错误码和错误信息。jksstr中包含了type（指令块类型）jks（指令块脚本）jks_return(指令块返回值) 。lines为指令块脚本的行数，自动计算生成。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/debug3.png"/></div>


- 脚本生成页面，在左侧指令块上输入参数后，点击“生成jks脚本”可模拟生成脚本，在下方代码栏内查看模拟生成的代码。

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/JAKA_Command/debug4.png"/></div>


