# 自定义指令开发
  基于AddOn，开发者可以封装任意功能的自定义指令块。将复杂的、繁琐的指令封装成一条标准指令，方便用户的使用。
  在开始开发前请参考[AddOn开发准备](./evn.md)，安装好所需开发环境和模板包。
## 一、制作AddOn包
自定义指令的AddOn的最简结构如下，包含一个.ini格式的配置文件和一个保存数据的json文件。
![Alt text](../../../resource/ch/AddOn/customerCMD/floderShow.png)

开发者可从AddOn开发环境包中[下载地址]()获取JAKA_AddOn_cmd作为模板使用。

### 1.1 修改.ini配置内容
ini文件中需包含下面所有的配置字段，若使用模板，可在JAKA_AddOn_cmd文件夹，打开JAKA_AddOn_cmd_config.ini进行修改。
> 根据实际需求更改以下配置：
> * **name**  *AddOn名称,遵循以下规范'开发者_包名_可选'。例如'JAKA_AddOn_Temp'*。
> * **description**  *AddOn功能描述*。
> * **version** *AddOn版本,例如1.0*。
> * **serviceenabled** *1-开机自启，0-开机不自启动*。

> 其他配置项说明（不要更改）：
>* **convention**  *AddOn框架版本标识，参考该文档开发的版本为3.0*。
>* **portal** *AddOn示例启动时使用的端口号，该值在AddOn启动时有控制器动态分配，无需改变*。
>* **type** *AddOn类型标识，1-自定义指令，2-自定义服务，3-自定义UI，4-系统级addon*
>* **url** *AddOn类型为3时，app中管理页面的小地球按钮的跳转URL*。
>* **languagetype** *AddOn语言类型，该版本支持node-red*。
>* **service**  *node flow的json文件*。

### 1.2 修改.ini文件名和AddOn文件夹名称

配置文件和文件夹的名称与addOn的名称要求必须统一。<br>
例如配置文件中的name为： JAKA_InitDO<br>
则需将配置文件命名为：JAKA_InitDO_config.ini<br>
文件夹命名为：JAKA_InitDO<br>

修改好的模板如下：
> // JAKA_InitDO_config.ini 
>* [AddOnInfo] 
>* convention = 3.0
>* name = JAKA_InitDO
>* description = "Init Digital Output command"
>* version = 1.0
>* type = 3
>* portal = 10006
>* url = http://localhost/myAddOnUi
>* languagetype = node-red
>* service = flows.json
>* serviceenabled = 1

![Alt text](../../../resource/ch/AddOn/customerCMD/addOnName.png)

以下教程中AddOn的名字均使用JAKA_InitDO代替，实际开发中注意替换为真实AddOn的名字。

### 1.3 上传AddOn包
方式一：
* 打开JAKA虚拟机"/usr/etc/jkzuc/configs/JAKA/AddOns"文件夹
* 将JAKA_InitDO文件夹直接拖入或复制到该文件夹
![Alt text](../../../resource/ch/AddOn/customerCMD/copyAddOn.png)

方式二：
* 将 JAKA_InitDO 文件夹压缩为 JAKA_InitDO.tar.gz 格式。
  
  ![Alt text](../../../resource/ch/AddOn/customerCMD/TarGz.png)
* 打开App，进入附加程序管理页面，点击+号按钮，上传。
  
  ![Alt text](../../../resource/ch/AddOn/customerCMD/upLoad.png)

## 二、制作指令块
### 2.1 进入AddOn开发者页面
在浏览器的地址栏中输入"机器人IP:AddOn端口"即可打开对应的开发者页面。<br>
在虚拟机终端中输入"ip a" 命令查询当前ip。

![Alt text](../../../resource/ch/AddOn/customerCMD/ip.png)

在App附件程序管理页面，点击对应AddOn的齿轮按钮，查看当前端口号。

![Alt text](../../../resource/ch/AddOn/customerCMD/port.png)

例如我的机器人IP为：172.30.0.216，AddOn端口为10007。

在浏览器中输入"172.30.0.216:10007"进入开发者页面。

![Alt text](../../../resource/ch/AddOn/customerCMD/nodeRedPage.png)

### 2.2 创建自定义指令块

在开发者页面的左侧节点菜单栏中，找到JAKA AddOn，将其中的Customized-commands拖到中间的工作区域。

![Alt text](../../../resource/ch/AddOn/customerCMD/image.png)

点击部署

![Alt text](../../../resource/ch/AddOn/customerCMD/image-1.png) 

---> 

![Alt text](../../../resource/ch/AddOn/customerCMD/image-2.png)

双击工作区域中的块，进入指令块开发页面。
该页面中我们可以定义指令块的样式、链接、和其实现的功能。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-3.png)

下面的例子将展示如何创建一个初始化DO的指令块，用户可以填入开始和结束的索引，
该指令块会将开始索引到结束索引的所有Modbus DO关闭。（因为虚拟机目前只能使用Modbus DO，所以我们使用Modbus DO测试）

**基本配置**

首先在基本配置页面编辑自定义指令的属性和样式。
* 点击 + 号可新建一个属性
* 点击编辑按钮后编辑该属性

![Alt text](../../../resource/ch/AddOn/customerCMD/image-5.png)
![Alt text](../../../resource/ch/AddOn/customerCMD/image-6.png)

**编辑页面预览**

编辑页面预览，可以看到所有勾选了加入配置页面选项的属性。该页面在APP中点击指令块可打开。
当指令块上需要很多的参数时，可以将一部分参数放到该页面进行配置。同时勾选隐藏属性，将其从指令块上隐藏，
这样就可以避免指令块过长的问题。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-7.png)

**链接**

切换到链接页面填写链接：
* 脚本路径: 在App编程页面使用自定义指令块,点击保存时请求jks脚本的url地址.
* 编辑路径: 在App中点击指令块时打开的页面url.
  
 **注:需要将脚本路径中的custom_block替换为当前指令块的名称。**
 
![Alt text](../../../resource/ch/AddOn/customerCMD/image-8.png)

**编写脚本**

* 打开脚本生成页面,选择脚本生成方式.
* jks语法参考[JAKA编程脚本](../jks.md)中的语法。
* 自定义jks脚本的规则参考[自定义脚本规则](##模板语法规则)

**方式一：模板脚本。**

在Jks Template中编写脚本，当脚本内容较少可直接定义时，建议选用该种方式。
> #jks脚本<br><br>
> #使用 *'$(属性名)'* 动态获取指令块上属性的值<br>
> start = $(indexStart)<br>
> ending = $(indexEnd)<br>
> index = start<br>
> while(index <= ending):<br>
> #设置DO，4代表Modbus，index是DO的索引，0代表关闭，1代表即时指令。<br>
> set_digital_output(4, index, 0, 1)<br>
> index = (index + 1)<br>
> end<br>


**方式二：自定义函数**
（*功能开发中*）
<!-- 使用自定义函数生成jks脚本，需要掌握node-red中fuction及其他需要用到的功能节点。 -->



编辑好后点击右上角的完成。
![Alt text](../../../resource/ch/AddOn/customerCMD/image-9.png)



### 2.3 编辑流程
从左侧的菜单栏中找到网络，拖出http in节点和 http response节点。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-10.png)

编辑http in节点，将url写为自定义指令块的名称。编辑好后点击完成。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-11.png)

编辑http response节点。这里主要是起一个名字便于识别。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-12.png)

将流程的输入和输出链接。

![Alt text](./image-2.png)

到此为止，一条初始化DO的指令块就制作完成了。

## 三、在APP中进行测试
重新启动APP,在编程控制页面的扩展中找到自定义指令块初始化DO
将指令块拖入主程序中保存，提示保存成功说明脚本请求成功，否则需要根据报错进行排查。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-13.png)

切换至I/O面版，Modbus页面，手动打开DO 0-5。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-14.png)

返回程序页面点击运行，此时DO 1-5 已经被关闭。

![Alt text](../../../resource/ch/AddOn/customerCMD/image-15.png)

证明脚本已经生效。

### 报错说明
1.属性匹配失败

![Alt text](../../../resource/ch/AddOn/customerCMD/error1.png)

脚本模板$()中的属性名与基本配置页面的属性名匹配不到。

![Alt text](../../../resource/ch/AddOn/customerCMD/error1-1.png)

![Alt text](../../../resource/ch/AddOn/customerCMD/error1-2.png)

2.保存失败
![Alt text](../../../resource/ch/AddOn/customerCMD/error2.png)

检查Http in节点中url是否与链接页面的脚本路径中connected_robot/后的路径一致。


## 自定义脚本规则
