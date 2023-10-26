---
title: 开发指南
sidebarDepth: 1
---

# 开发指南

**该页面旨在为AddOn开发者提供AddOn开发的学习路径指南。**

## 开发资料获取
---
这里将AddOn开发中必备并且会更新的内容集中在一起，方便之后开发者获取最新版本内容。
在后续章节需要用到下面内容的地方会再次给出链接，第一次阅读到这里时可以跳过该部分继续阅读。
1. [JAKA虚拟机](https://github.com/JakaCobot/JAKASim)
2. [AddOn套件包](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn[开发模板](https://github.com/JakaCobot/jaka_addon_kit)
4. 教程中包含的[Demo](https://github.com/JakaCobot/jaka_addon_kit)

:::tip
环境包中会附带与之匹配的最新App和控制器版本。
:::


## 开始之前
---
本文档的目标读者应接受过基本的机器人操作培训，并掌握一定的基础开发能力，并掌握熟悉JAKA的脚本语言`JKS`。

除此之外，如有使用node-red、JavaScript、HTML5、CSS3等编程语言的经验，将更有助于用户更好地开发、使用AddOn。


## 了解如何开发AddOn
---

如果您不知道从哪里开始，先学习下面的入门教程吧：

* 在[快速入门:point_left:](./QuickStart.md)章节中，你可以快速了解AddOn开发的完整流程。
* 按照[AddOn开发环境搭建:point_left:](./environment.md)中的步骤，搭建AddOn开发环境。
* 通过制作 "[JAKA_Command:point_left:](./JAKA_Command.md)"学习自定义指令类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_Serve:point_left:](./JAKA_Serve.md)"学习自定义服务类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_web:point_left:](./JAKA_web.md)"学习自定义网页类型AddOn开发的基本流程和规则。

## 具体案例
---

在此基础之上，您可以选择一个具体场景的AddOn模板案例进行学习，它们可能包含了自定义指令、自定义服务、自定义网页中的至少两种，被称为复合型AddOn：
<!-- demo还需要确定，至少包含三种不同类型的？目前只提供自定义指令块的详细的？ -->
1. [Ewellix升降轴:point_left:](./demo_LiftKit.md) 
<!-- 2. [大寰夹爪]()  -->
:::tip 更多模板案例正在赶来的路上···
:::


<!-- todo 这里补充更多的教程覆盖到每一种场景：夹爪、升降轴、视觉等 -->


## 相关参考文档
---

- [**JAKAScript**:point_left:](/guide/jks.html): 用来实现自定义指令功能的脚本语言。
- [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): 提供与机器人交互的http接口。
- [**JAKA App APIs**:point_left:](/guide/addOn/AppAPI.html): 提供前端与JAKA App交互的js函数。
- [**node-red**](https://nodered.org/docs/): 是AddOn的开发平台和后端服务。
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): 在node-red中编写脚本和逻辑。
<!-- - [**前端技术**](https://web.dev/learn/html/): 在开发自定义页面插件时需要掌握一定的前端技术 -->
- [**前端技术**](https://www.w3school.com.cn/): 在开发自定义页面插件时需要掌握一定的前端技术
- [**配置文件**:point_left:]((/guide/addOn/iniConfig)): 在开发自定义页面插件时需要掌握一定的前端技术

