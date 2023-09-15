---
title: Custom Command - Getting Started
sidebarDepth: 1
---

# Custom Command Basics
**Learn about the development process and fundamentals of custom command-type AddOns by creating JAKA_Command.**

## Overview
&emsp;&emsp;We will create a custom command-type AddOn that outputs different content in the App log based on the content on the command block.

<div align="center"><img width="800"  src="../../../../resource/en/AddOn/JAKA_Command/showcase.png"/></div>

## Creating JAKA_Command
### Step 1: Create an AddOn Package  
&emsp;&emsp;First, we need to create the basic AddOn files, including a .ini configuration file and a JSON file for data storage. You can create them manually from scratch or modify the AddOn template in the ["*Template*"](https://github.com/JakaCobot/jaka_addon_kit) directory in the AddOn development package repository. 
::: tip Directory Structure
|——JAKA_Command  
&emsp;&emsp;&emsp;|——AddOn.json   
&emsp;&emsp;&emsp;|——JAKA_Command_config.ini  
:::

* **AddOn.json**   
&emsp;&emsp;The JSON file can be empty; data will be generated in the following steps.
* **JAKA_Command_config.ini**   
&emsp;&emsp;The [configuration file](/en/guide/addOn/iniConfig.html) should contain the following:
    ``` ini
    [AddOnInfo]
    convention = 3.0
    name = JAKA_Command
    description = "Output information in the log"
    version = 1.0
    type = 1
    portal = 10006
    url = http://localhost/myAddOnUi
    languagetype = node-red
    service = AddOn.json
    serviceenabled = 1
    ```

### Step 2: Packaging & Uploading
&emsp;&emsp;Next, we will package the AddOn and upload it to the controller for command block development. The packaging format should be `.tar.gz`. On Windows, you can use tools like 7z for secondary compression.    
<div align="center"><img width="800"  src="../../../../resource/en/AddOn/JAKA_Command/compress_addon.gif"/></div>
&emsp;&emsp;In the App, go to the Attached Manager page to upload the AddOn.    
<div align="center"><img width="800"  src="../../../../resource/en/AddOn/JAKA_Command/upLoad_addon.png"/></div>

### Step 3: Develop Custom Commands

&emsp;&emsp;Run the AddOn and check the port it's running on.

<div align="center"><img width="800"  src="../../../../resource/en/AddOn/JAKA_Command/run_addOn.gif"/></div>

&emsp;&emsp;Access the developer interface using `IP:Port`.

<div align="center"><img width="1000"  src="../../../../resource/en/AddOn/JAKA_Command/developPage.png"/></div>

&emsp;&emsp;Create custom command blocks using the `Customized Commands` node. Define the appearance and properties of the command block on the *Basic Configuration* page and its behavior on the *Script Generation* page.   
- Refer to [JAKA Programming Scripts](/en/guide/jks.html) for script syntax.
- Refer to [Creating Custom Commands Nodes](/en/guide/addOn/Commands_Tool.html) for using the `Customized Commands` node.

<div align="center"><img width="1000"  src="../../../../resource/en/AddOn/JAKA_Command/creat_block.gif"/></div>

&emsp;&emsp;When you save custom commands in the App, it will use an HTTP GET request to retrieve the script, so you need to complete the flow using the `http in` and `http response` nodes.

<div align="center"><img width="1000"  src="../../../../resource/en/AddOn/JAKA_Command/Add_Http.gif"/></div>

:::tip Note!
The URL of the `http in` node should match the name of the custom command block!
:::

### Step 4: Running
&emsp;&emsp;After deploying the flow in Node-RED, you can use the custom command block in the App.

<div align="center"><img width="1000"  src="../../../../resource/en/AddOn/JAKA_Command/program_hello.gif"/></div>


## How to Debug?

