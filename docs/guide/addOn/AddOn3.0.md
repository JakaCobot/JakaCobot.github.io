---
title: 简介
sidebarDepth: 1
---
## 黄佳仪加了一句话

# AddOn

**该页面介绍了什么是AddOn，并为AddOn开发者提供入门指南。**

::: warning 注意：
1. 该教程中所提到的AddOn默认为AddOn3.0。
2. 在JAKA控制器 > 1.7.1.x 的_X64版本上支持AddOn3.0的开发和使用。
3. AddOn1.0和2.0都不再维护和提供开发支持。
:::


## AddOn是什么
---
&emsp;&emsp;JAKA AddOn是一款由JAKA提供支持和相应产品规范的插件型软件产品。它允许用户开发自定义指令插件、自定义服务插件、自定义页面插件，或包含上述几种类型的复合型插件，从而为系统提供全新的功能扩展或对现有功能进行个性化定制。典型的AddOn产品包括夹爪控制插件、视觉引导插件、传感器控制插件、通信协议、工艺应用包等。

## 技术栈
---
- [**JAKAScript**](/guide/jks.html): 用来实现自定义指令功能的脚本语言。
- [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): 提供与机器人交互的http接口。
- [**JAKA App APIs**](/guide/addOn/AppAPI.html): 提供前端与JAKA App交互的js函数。
- [**node-red**](https://nodered.org/docs/): 是AddOn的开发平台和后端服务。
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): 在node-red中编写脚本和逻辑。
- [**前端技术**](https://web.dev/learn/html/): 在开发自定义页面插件时需要掌握一定的前端技术
  
## AddOn文件组成
---
AddOn可能包含许多不同的文件，下面是最常用的几种   

**数据文件**    
&emsp;&emsp;AddOn包中一般都包含一个json文件，其中包含了在node-red中定义流和节点信息。该文件的名称可以自定义，但需要在配置中指向该文件。

**配置文件**    
&emsp;&emsp;任何类型的AddOn插件必须包含`xxx_config.ini`文件，即[AddOn配置文件](/guide/addOn/iniConfig)。只有包含AddOn配置文件才能安装、初始化、运行。

**前端工程**   
&emsp;&emsp;包含自定义页面的AddOn目录下一般会有前端工程的文件夹，例如client、dist。

## 开发资料获取
---

1. [JAKA虚拟机](https://github.com/JakaCobot/JAKASim)
2. [AddOn环境包](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn[开发模板](https://github.com/JakaCobot/jaka_addon_kit)
4. 教程中包含的[Demo](https://github.com/JakaCobot/jaka_addon_kit)

:::tip
环境包中会附带与之匹配的最新App和控制器版本。
:::

## 了解如何开发AddOn
---

如果您不知道从哪里开始，先学习下面的入门教程吧：

* 按照AddOn[开发环境准备](./environment.md)中的步骤，搭建AddOn开发环境。
* 通过制作 "[JAKA_Command](./JAKA_Command.md)" 快速入门自定义指令类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_Serve](./JAKA_Serve.md)" 快速入门自定义服务类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_web](./JAKA_web.md)" 快速入门自定义网页类型AddOn开发的基本流程和规则。

在此基础之上，您可以选择一个实际场景的AddOn示例教程进行学习，它们可能包含了自定义指令、自定义服务、自定义网页中的至少两种，被称为复合型AddOn：
<!-- demo还需要确定，至少包含三种不同类型的？目前只提供自定义指令块的详细的？ -->
1. [Ewellix升降轴](./demo_LiftKit.md) 
2. [大寰夹爪]() 


<!-- todo 这里补充更多的教程覆盖到每一种场景：夹爪、升降轴、视觉等 -->


## 反馈
---

我们很高兴收到您的反馈！如果您发现文档有错误或不清楚的地方,可以在我们的文档仓库中提交[Issues](https://github.com/JakaCobot/JakaCobot.github.io/issues)。
<!-- 给addonkit的仓库链接和该文档的链接 -->
