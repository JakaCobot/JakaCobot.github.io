---
title: 基本介绍
sidebarDepth: 0
---
# 关于AddOn

**该页面旨在为AddOn开发者解释基本概念。**

::: warning 请注意：
1. 该教程中所提到的AddOn默认为AddOn3.0。
2. 在JAKA控制器 > 1.7.1.x 的_X64版本上支持AddOn3.0的开发和使用。
3. AddOn1.0和2.0都不再进行维护和提供开发支持。
:::

::: tip 提示：
本文档的目标读者应接受过基本的机器人操作培训，并掌握一定的基础开发能力，并掌握熟悉JAKA的脚本语言`JKS`。

除此之外，如有使用node-red、JavaScript、HTML5、CSS3等编程语言的经验，将更有助于用户更好地开发、使用AddOn。
:::


## AddOn是什么
---
JAKA AddOn是一款由JAKA提供的插件型软件产品，它支持用户开发自定义的指令插件、服务插件、网页插件，以及包含上述几种类型的复合型插件。

通过使用AddOn，用户能够对机器人操作系统进行全新的功能拓展，或对现有功能进行个性化定制。

::: tip 区分名词：
* JAKA AddOn套件包：在开发环境搭建时需要使用的套件包，即jaka_addon_kit.tar.gz。
* JAKA AddOnXXX包：开发完成后已经带有具体功能的功能包，如JAKA AddOn码垛包、JAKA AddOn大寰夹爪包、JAKA AddOn视觉引导包、JAKA AddOn传感器控制包等。
<!-- 工艺包、第三方设备的适配包 -->
:::

## 为何需要使用AddOn 
---
通常情况下，如果在机器人末端连接了新的第三方工具，或是在具体的使用场景中操作具体工艺（如码垛、焊接等）时，都需要在编程界面设置新的指令。

这样的指令包含复杂、冗长的代码和参数，且不易理解、难以复用，经常给简单的动作或程序带来了额外的负担。对于精通具体操作工艺、却对机器人编程不甚了解的工程师来说，指令设置这一步骤显得尤为复杂、繁难。

使用AddOn能够去代码化，极大地简化指令设置流程。它将编程这一步骤中复杂的设置省略，直接封装为一条简单、明了、易懂的指令，更易于操作，也更利于复用已编指令，使用户能够专注在具体工艺的执行上，充分提升效率、创造成果。

总而言之，使用AddOn能提高应用的编程效率、降低用户的学习成本。

## AddOn基本功能
---
如前所述，AddOn的基本功能有三：开发自定义指令插件、自定义服务插件及自定义网页插件。

上述功能的实现，可为现有系统赋能，支持用户按需定制新功能，或对已有功能进行更改与升级。

JAKA应用开发团队可以通过AddOn框架开发JAKA官方应用包、工艺包与工艺套件，以供用户下载使用。同时也可帮助JAKA客户开发定制功能、服务及界面，满足客户的定制化需求。

JAKA合作伙伴可以通过AddOn框架开发生态链标准插件，增强产品适配性和易用性。

JAKA机器人终端用户可以通过AddOn框架开发自定义指令，对常用指令进行封装与复用。


## AddOn运行机制
---
* AddOn自定义指令

AddOn自定义指令基于B/S架构，JAKA App中的编程页面为客户端（B），运行在JAKA控制器内基于node-red的AddOn服务为服务端（S），运行机制如下：

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/AddOn3.0/自定义指令机制.png"/></div>

* AddOn自定义服务

AddOn自定义服务基于node-red开发，运行在控制器内部，可以调用JAKA提供的HTTP API接口来查询信息及控制机器人，运行机制如下：

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/AddOn3.0/自定义服务机制.png"/></div>

* AddOn自定义网页

AddOn自定义网页部署在JAKA控制柜中，可以与控制器、JAKA App进行交互。与控制器的交互方式为通过http请求；与JAKA App的交互方式为通过JAKA App提供的API（JS方法）。运行机制如下：

<div align="center"><img width="800"  src="../../../resource/ch/AddOn/AddOn3.0/自定义网页机制.png"/></div>


## AddOn文件组成
---
开发完成的AddOnXXX包中可能包含不同的文件，下面是最常用的几种：

**数据文件**    
AddOn包中一般都包含一个json文件，其中包含了在node-red中定义流和节点信息。该文件的名称可以自定义，但需要在配置中指向该文件。

**配置文件**    
任何类型的AddOn插件必须包含`xxx_config.ini`文件，即[AddOn配置文件:point_left:](/guide/addOn/iniConfig)。只有包含AddOn配置文件才能安装、初始化、运行。

**前端工程**   
包含自定义页面的AddOn目录下一般会有前端工程的文件夹，例如client、dist。我们建议统一使用client作为前端工程文件夹。


<!-- ## 术语解释 -->

<!-- todo：hbs 术语解释放这里如何？ -->

## 开发资源获取
---
开发AddOn需要一系列的资源支持，此处将AddOn开发中必备的资源集中在一起，并将进行持续更新，方便开发者获取完整的、最新的资源版本内容。

在后续章节需要用到下面内容的地方会再次给出链接，此处只是做一个提示及汇总。
1. [JAKA虚拟机](https://github.com/JakaCobot/JAKASim)
2. [AddOn套件包](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn[开发模板](https://github.com/JakaCobot/jaka_addon_kit)
4. 教程中包含的[Demo](https://github.com/JakaCobot/jaka_addon_kit)

:::tip 提示
套件包中会附带与之匹配的最新App和控制器版本。
:::


## 开发教程一览
---

### 入门教程
如果您不知道从哪里开始，先学习下面的入门教程吧：

* 在[快速入门:point_left:](./QuickStart.md)章节快速了解AddOn开发的完整流程。
* 按照[AddOn开发环境搭建:point_left:](./environment.md)中的步骤搭建AddOn开发环境。
* 通过制作 "[JAKA_Command:point_left:](./JAKA_Command.md)"学习自定义指令类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_Serve:point_left:](./JAKA_Serve.md)"学习自定义服务类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_web:point_left:](./JAKA_web.md)"学习自定义网页类型AddOn开发的基本流程和规则。

### 高级教程——具体案例
---
入门教程的目的是让开发者明晰流程，所以只介绍了基础功能，缺乏实际的应用场景场景。

高级教程则与具体场景案例相结合，让开发者能了解学习在入门指南中未提及或粗略提及的功能。

所以，在了解了AddOn的基本开发流程后，您可以选择一个具体场景的AddOn模板案例进行学习，这些具体案例包含了自定义指令、自定义服务、自定义网页这三种功能中的至少两种，被称为复合型AddOn：
<!-- demo还需要确定，至少包含三种不同类型的？目前只提供自定义指令块的详细的？ -->
1. [Ewellix升降轴:point_left:](./demo_LiftKit.md) 
<!-- 2. [大寰夹爪]()  -->
:::tip 更多模板案例正在赶来的路上···
:::


<!-- todo 这里补充更多的教程覆盖到每一种场景：夹爪、升降轴、视觉等 -->


## 开发所需文档
---

- [**JAKAScript**:point_left:](/guide/jks.html): 用来实现自定义指令功能的脚本语言。
<!-- - [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): 提供与机器人交互的http接口。 -->
- [**JAKA App APIs**:point_left:](/guide/addOn/AppAPI.html): 提供前端与JAKA App交互的js函数。
- [**node-red**](https://nodered.org/docs/): 是AddOn的开发平台和后端服务。
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): 在node-red中编写脚本和逻辑。
<!-- - [**前端技术**](https://web.dev/learn/html/): 在开发自定义页面插件时需要掌握一定的前端技术 -->
- [**前端技术**](https://www.w3school.com.cn/): 在开发自定义页面插件时需要掌握一定的前端技术
- [**配置文件**:point_left:]((/guide/addOn/iniConfig)): 在开发自定义页面插件时需要掌握一定的前端技术


## 反馈
---

我们很高兴收到您的反馈！

如果您发现文档有任何叙述错误或描述不清的地方，欢迎在我们的文档仓库中提交[Issues](https://github.com/JakaCobot/JakaCobot.github.io/issues)。
<!-- 给addonkit的仓库链接和该文档的链接 -->

