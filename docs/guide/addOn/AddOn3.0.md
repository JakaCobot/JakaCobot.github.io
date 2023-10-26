---
title: 简介
sidebarDepth: 1
---
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

  
## AddOn文件组成
---
AddOn可能包含许多不同的文件，下面是最常用的几种   

**数据文件**    
&emsp;&emsp;AddOn包中一般都包含一个json文件，其中包含了在node-red中定义流和节点信息。该文件的名称可以自定义，但需要在配置中指向该文件。

**配置文件**    
&emsp;&emsp;任何类型的AddOn插件必须包含`xxx_config.ini`文件，即[AddOn配置文件](/guide/addOn/iniConfig)。只有包含AddOn配置文件才能安装、初始化、运行。

**前端工程**   
&emsp;&emsp;包含自定义页面的AddOn目录下一般会有前端工程的文件夹，例如client、dist。



## 反馈
---

我们很高兴收到您的反馈！如果您发现文档有错误或不清楚的地方,可以在我们的文档仓库中提交[Issues](https://github.com/JakaCobot/JakaCobot.github.io/issues)。
<!-- 给addonkit的仓库链接和该文档的链接 -->

