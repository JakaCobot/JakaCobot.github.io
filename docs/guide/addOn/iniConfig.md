---
title: AddOn配置文件说明
sidebarDepth: 1
---

# AddOn配置文件规范
## 1.文件编码要求
要求使用UTF-8编码
## 2.文件命名要求
"AddOnName"+"_config.ini"，例如JAKA_Command_config.ini。

:::tip 请注意：
此处的“AddOnName”强制要求和该AddOn文件夹同名，否则将无法正常启动AddOn。
:::


## 3.文件内容
一个典型的AddOn配置文件如下所示：  

```ini
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
## 4.字段说明：  
`convention`   
AddOn包解析器版本。若不填或所填解析器版本错误则APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。   
`name`  
AddOn包名称，启动AddOn时会自动同步为AddOn文件夹的名称。在APP附加程序界面显示对应为“程序名”。  
`description`  
AddOn功能描述，在APP附加程序界面显示对应为“描述”。长度限制在35个字符以内，超出APP附加程序界面的“版本号”则显示“INVALID”,且“描述”显示为空，APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。  
`version`  
AddOn自身版本号，可以自定义。在APP附加程序界面对应为“版本号”。  

`type`  
AddOn类型：1代表自定义指令，2代表自定义服务，3代表自定义页面。填1或2在APP附加程序界面没有小地球按钮，填3会出现小地球按钮。若不填或填其他数值及字符无效，APP附加程序界面的“版本号”将显示“INVALID”,且“描述”显示为空。APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。  
`portal`  
控制器内部自动分配给当前AddOn的端口，无需用户设置，可留空不填。  
`url`   
点击附加程序页面AddOn操作选项中小地球按钮跳转的URL，即AddOn前端项目中入口文件`index.html`的路径。例如AddOn前端工程的`index.html`放在文件夹`JAKA_Command/client`下，则可填写`url = http://localhost/JAKA_Command/client`。其中`localhost`字段解析时会被自动替换为当前机器人的IP地址。若不填则APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。若填的路径错误点击小地球按钮时则会提示“加载失败，请检查路径是否正确”。  
`languagetype`   
后端使用的语言，目前仅支持使用node-red作为后端。  
`service`   
填写json格式的数据文件名。该文件来源于AddOn文件目录下的json文件，包含了在node-red中定义流和节点信息，文件名称可以自定义，但二者需保持一致。若名称不一致，APP开启该AddOn状态时会弹出“AddOn服务不存在”提示。  
`serviceenabled`   
Addon开机启动，0代表开机此AddOn包为关闭状态，1代表开机此AddOn包为开启状态。若不填或填其他数值及字符无效，APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。  