---
title: Development Guide
sidebarDepth: 1
---

# Development Guide

**This page aims to provide AddOn developers with a learning path guide for AddOn development.**

## Getting Development Resources
---
Developing an AddOn requires a series of resources. Here, essential resources for AddOn development are centralized and will be continuously updated to facilitate developers in obtaining complete and up-to-date content.

Links to these resources will be provided again in the subsequent chapters where they are needed. This section serves as a reminder and summary.
1. [JAKA Virtual Machine](https://github.com/JakaCobot/JAKASim)
2. [AddOn Kit Package](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn [Development Template](https://github.com/JakaCobot/jaka_addon_kit)
4. Demos included in the tutorial [here](https://github.com/JakaCobot/jaka_addon_kit)

:::tip Note
The kit package will include the latest versions of matching Apps and controllers.
:::


## Before You Start
---
The target audience of this document should have received basic robot operation training and possess a certain level of basic development skills. They should also be familiar with JAKA's scripting language `JKS`.

In addition, experience with programming languages such as node-red, JavaScript, HTML5, CSS3, etc., will be even more helpful for users to develop and use AddOn effectively.


## Overview of AddOn Development Tutorials
---

### Beginner Tutorials
If you're unsure where to start, begin by learning the following introductory tutorials:

* Quickly understand the complete process of AddOn development in the [Quick Start:point_left:](./QuickStart.md) section.
* Set up the AddOn development environment by following the steps in [Setting Up AddOn Development Environment:point_left:](./environment.md).
* Learn the basic process and rules of developing custom instruction type AddOns by creating "[JAKA_Command:point_left:](./JAKA_Command.md)".
* Learn the basic process and rules of developing custom service type AddOns by creating "[JAKA_Serve:point_left:](./JAKA_Serve.md)".
* Learn the basic process and rules of developing custom web page type AddOns by creating "[JAKA_web:point_left:](./JAKA_web.md)".

### Advanced Tutorials - Specific Cases
---
The purpose of beginner tutorials is to provide developers with a clear understanding of the process, so they only cover basic functionalities, lacking practical application scenarios.

Advanced tutorials are combined with specific scenario cases to allow developers to learn about functionalities not mentioned or briefly mentioned in the beginner guide.

After understanding the basic development process of AddOns, you can choose a specific scenario AddOn template for learning. These specific cases include at least two out of three functionalities: custom instruction, custom service, and custom web page, collectively referred to as composite AddOn:
<!-- Confirmation needed for the "demo" section. Should it include detailed information for at least three different types? Currently, it only provides details for custom instruction blocks. -->
1. [Ewellix Lifting Axis:point_left:](./demo_LiftKit.md) 
<!-- 2. [Dahan Gripper]()  -->
:::tip More template cases are on the way...
:::


<!-- todo: Add more tutorials covering each type of scenario: gripper, lifting axis, vision, etc. -->


## Related Reference Documents
---

- [**JAKAScript**:point_left:](/guide/jks.html): Scripting language used to implement custom instructions functionality.
<!-- - [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): Provides http interfaces for interacting with the robot. -->
- [**JAKA App APIs**:point_left:](./AppAPI.html): Provides JavaScript functions for interaction between the front end and JAKA App.
- [**node-red**](https://nodered.org/docs/): Development platform and backend service for AddOn.
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): Used for scripting and logic in node-red.
<!-- - [**Front-end Technologies**](https://web.dev/learn/html/): Requires a certain level of front-end technology for developing custom page plugins -->
- [**Front-end Technologies**](https://www.w3school.com.cn/): Requires a certain level of front-end technology for developing custom page plugins
- [**Configuration Files**:point_left:]((./iniConfig)): Requires a certain level of front-end technology for developing custom page plugins