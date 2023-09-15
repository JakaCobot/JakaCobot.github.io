---
title: Setting Up the Development Environment
sidebarDepth: 1
---

# Setting Up the Development Environment
**This article will guide you through setting up the AddOn development environment. Before you begin, please download the [*development resources*](/en/guide/addOn/AddOn3.0.html#获取开发资源).**

## Installing the JAKA Virtual Machine

### 1.1 Installing Virtual Machine Software

&emsp;&emsp;Developers need to install virtual machine software, such as VirtualBox or VMware Player.

### 1.2 Installing the JAKA Virtual Image
&emsp;&emsp;Locate the virtual machine image file in the *jaka_addon_package* and import it for installation.
<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/install_vm.gif"/></div>

### 1.3 Starting the JAKA Virtual Controller
&emsp;&emsp;Click "Start this virtual machine" to boot up the virtual machine.

<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/start_vm.gif"/></div>

&emsp;&emsp;At this point, the IP address of the current robot will be displayed on the virtual machine page.

<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/IP.png"/></div>



## Installing Other Environments
### 2.1 Installing the App

1. In the AddOn development environment package, locate the installation package in the APP folder, and follow the prompts to install the APP. Pay attention to granting network permissions during the installation process.

### 2.2 Connecting to the Robot Using the App

1. Open the APP and connect to the robot. You should be able to find the virtual robot in the robot list based on its IP.

<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/find_robot.png"/></div>

2. If you can't find the robot in the list, try using the offline connection option.

3. Enter the default login password (jakazuadmin).

4. Enter the IP of the virtual robot.

<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/offline_connect.png"/></div>

### 2.3 Upgrading the Controller

&emsp;&emsp;Open the Settings page, go to System Settings, and navigate to the Version Upgrade page. Select the controller package you want to upgrade, and click "Upload Upgrade."

<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/upgrade_controler.png"/></div>

### 2.4 Upgrading the AddOn Environment

&emsp;&emsp;Open the Settings page, go to System Settings, and navigate to the Version Upgrade page. Select the AddOn environment package, and click "Upload Upgrade."

<div align="center"><img width="800"  src="../../../resource/en/AddOn/environment/upgrade_AddOnkit.png"/></div>

&emsp;&emsp;After the upgrade is complete, you will need to restart the APP.
