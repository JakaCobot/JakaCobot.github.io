---
title: Introduction
sidebarDepth: 1
---

# AddOn
**This page provides an overview of what AddOn is and offers a getting started guide for AddOn developers.**

::: warning Note:
1. The AddOn mentioned in this tutorial defaults to AddOn 3.0.
2. AddOn 3.0 development and usage are supported on JAKA controllers > 1.7.1.x _X64 versions.
3. AddOn 1.0 and 2.0 are no longer maintained and do not receive development support.
:::

## What is AddOn
---
&emsp;&emsp;JAKA AddOn is a plugin-type software product supported by JAKA with corresponding product specifications. It allows users to develop custom command plugins, custom service plugins, custom page plugins, or composite plugins containing the above types, providing the system with new functional extensions or personalized customization of existing functions. Typical AddOn products include gripper control plugins, vision guidance plugins, sensor control plugins, communication protocols, and process application packages.

## Technology Stack
---
- [**JAKAScript**](/en/guide/jks.html): A scripting language used to implement custom command functionalities.
- [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): Provides HTTP interfaces for interacting with the robot.
- [**JAKA App APIs**](/en/guide/addOn/AppAPI.html): Offers JavaScript functions for frontend interaction with the JAKA App.
- [**node-red**](https://nodered.org/docs/): The development platform and backend service for AddOn.
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): Used to write scripts and logic in node-red.
- [**Frontend Technologies**](https://web.dev/learn/html/): Necessary for developing custom page plugins.

## AddOn File Composition
---
An AddOn may contain various files, but here are the most commonly used ones:

**Data Files**
&emsp;&emsp;An AddOn package generally includes a JSON file containing flow and node information defined in node-red. The name of this file can be customized but needs to be specified in the configuration.

**Configuration Files**
&emsp;&emsp;Any type of AddOn plugin must include an `xxx_config.ini` file, i.e., the [AddOn configuration file](/en/guide/addOn/iniConfig). Only plugins containing the AddOn configuration file can be installed, initialized, and run.

**Frontend Project**
&emsp;&emsp;AddOn directories containing custom pages typically have a folder for the frontend project, such as `client` and `dist`.

## Getting Development Resources
---

1. [JAKA Virtual Machine](https://github.com/JakaCobot/JAKASim)
2. [AddOn Environment Package](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn [Development Template](https://github.com/JakaCobot/jaka_addon_kit)
4. Demos included in the tutorial [here](https://github.com/JakaCobot/jaka_addon_kit)

:::tip
The environment package will come with the latest matching versions of the App and controller.
:::

## Learning How to Develop AddOn
---

If you're not sure where to start, begin by learning the following introductory tutorials:

* Follow the steps in [Setting Up the AddOn Development Environment](./environment.md) to build the AddOn development environment.
* Learn the basic process and rules for developing custom command type AddOns by creating "[JAKA_Command](./JAKA_Command.md)".
* Learn the basic process and rules for developing custom service type AddOns by creating "[JAKA_Serve](./JAKA_Serve.md)".
* Learn the basic process and rules for developing custom web page type AddOns by creating "[JAKA_web](./JAKA_web.md)".

On this foundation, you can choose a tutorial example of an actual scenario AddOn for further study. They may include at least two of the following: custom command, custom service, custom web page, collectively known as composite AddOns:
<!-- Demo content needs confirmation, currently only detailed custom command block provided? -->
1. [Ewellix Elevator]()
2. [DH Gripper]()

<!-- todo Add more tutorials covering each type of scenario: gripper, elevator, vision, etc. -->

## Feedback
---

We welcome your feedback! If you find any errors or unclear parts in the documentation, please submit an [Issue](https://github.com/JakaCobot/JakaCobot.github.io/issues) in our documentation repository.
<!-- Provide links to the addonkit repository and this documentation -->
