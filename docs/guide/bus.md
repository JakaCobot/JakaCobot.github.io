# JAKA通讯使用手册

## 介绍

为了帮助用户更好地使用JAKA的通讯功能，针对市面主流的PLC，分别使用其上位机验证其与JAKA的数据交互。教程仅选用了部分型号，即使是同一厂商的PLC，由于通讯参数和设备版本的问题，使用方法不完全相同，因此本教程仅供初步使用的参考，更进一步的应用请联系PLC的本地供应商。

本次验证基于以下PLC型号，表中分别给出了使用的固件版本和上位机的软件版本，推荐在已经验证过功能的版本或更高版本使用。

|                  | PLC型号            | 固件版本  | 软件版本                                                     |
| ---------------- | ------------------ | --------- | ------------------------------------------------------------ |
| 罗克韦尔         | 5370 L3 1769-L33ER | 20.18     | RSLogix 5000 V20.00.00 (CPR 9 SR 5)                          |
| 西门子           | 6ES7317-2EK14-0AB0 | 3.2.18    | TIA Portal V16                                               |
| 三菱             | CPU:FX5U-80MT/DSS  | 1.2450    | GX Works3 Version 1.090UEtherNetIPConfiguration Tool for FX5-ENET IP V1.00A |
| 扩展:FX5-ENET/IP | 1.1                |           |                                                              |
| 施耐德           | TM241CE24R         | 5.1.10.10 | EcoStruxure Mchine Expert Version 2.1                        |
| 欧姆龙           | CPU:CP1H-X40DT-D   | 1.3       | CX-Programmer 9.50                                           |
| 扩展:CJ1W-EIP21  | 3.0                |           |                                                              |
| 基恩士           | CPU:KV-8000        | 2.602     | KV STUDIO 11.62                                              |
| 扩展:KV-XLE02    | 1.400              |           |                                                              |
| 台达             | AS228T-A           | 1.12.50   | ISPSoft Version 3.15COMMGR 1.12                              |
| 汇川             | Easy522‑0808TN     | 5.67.0.0  | Autoshop V4.8.1.0                                            |

JAKA设备的EtherNet/IP支持作为Adapter使用，Profinet支持作为Device使用，均为普遍意义上的从站，Modbus功能支持主从功能。由于Modbus RTU与Modbus TCP在使用流程上主要区别于连接参数，因此暂时仅对Modbus TCP进行验证，另外多数PLC厂商的Modbus主站通过梯形图触发通信，因此针对每家厂商未作重复验证。特定PLC型号未在教程中提及的通讯功能并不代表JAKA不支持，而是PLC并未集成此功能或验证困难。

### 环境搭建

节卡机器人的电控柜和PLC建立通讯后，PLC可以实时读取机器人的各项性能参数， 例如：机器人状态，各关节的角度、速度、温度，以及TCP的位置、速度和受力值，同时，PLC也能通过不同类型数据的寄存器与控制柜进行数据交互。

设备间的简易连接示意如下，需要保证PLC、上位机和控制柜在同一网段内，下文所述的使用方法和步骤均基于三者之间可互相访问。

![image-20230220170602938](../../resource/bus/image-20230220170602938.png){.lozad}

节卡机器人控制柜通讯功能建议使用控制柜的底部网口，JAKA Zu APP（下文简称APP）也可以通过底部网口与控制柜连接，但为了避免APP与控制柜的数据传输影响通信功能，建议APP使用面板上网口或WIFI与控制柜相连。

注：底部网口需要处于处于激活状态（连上电脑或路由器），才能使用相关通信功能。

### 使能EtherNet/IP功能

节卡机器人默认情况下，Ethernet/IP功能处于关闭状态，使能的具体步骤如下：

步骤一：打开最新版本JAKA Zu APP，点击APP右上角的未连接搜索控制器IP地址。

![image-20230221094819134](../../resource/bus/image-20230221094819134.png){.lozad}

步骤二：选中控制柜并输入管理员密码使APP与控制柜相连。

![image-20230221094852245](../../resource/bus/image-20230221094852245.png){.lozad}

步骤三：在APP界面， 点击设置->硬件与通讯->Ethernet/IP设置， 开启使能按键并点击确定按钮，手动重启控制柜。重新连接控制柜后可查看状态项。状态为未成功连接主站时，代表EtherNet/IP已成功使能，等待主站连接。

![image-20230221094909935](../../resource/bus/image-20230221094909935.png){.lozad}



Profinet和Modbus的使能同理，均在硬件与通信开启，在使能和配置完通讯参数后，需要对控制器进行重启让功能生效。

## IO数量配置方法

### EtherNet/IP

在地址分配表中，数据类型排列的顺序为：DIO布尔型、AIO整型和AIO浮点数型。其中：

DIO：布尔型，占1bit，每8个DIO组成一个字节，因此DI和DO的IO数量配置需为8*n个，n为正整数，使对应的DI和DO数据长度为整数字节，

AIO：整型和浮点数型均占4个字节。

按照使用场景，EtherNet/IP的IO数量是可配置的。在usersetting中，如果Mode = 0，代表EIP使用标准的IO数量，如果Mode = 1，代表可以配置IO数量。

scanner需要导入eds文件以与控制器的adapter匹配，目前JAKA提供以下eds文件，其含义和应用场景分别为：

#### JAKARobot.eds

标准版的eds文件，参数不可配置不可修改，为固定值，具体IO数量定义在usersetting中：

[EIP]

Enable = 1

Mode = 0

DI_NUM = 64

DO_NUM = 64

AI_INT_NUM = 24

AI_FLOAT_NUM = 24

AO_INT_NUM = 24

AO_FLOAT_NUM = 24

其中DO和AO输出的数据长度总和最大为204个字节， DI和AI输入的数据总长度总和最大为492个字节。

#### JAKARobotSetup.eds

定制版本的eds文件，IO数量可以配置，需要在控制器内将usersetting的mode改为1，再修改IO数量。

其中DO和AO输出的数据长度总和最大为492个字节， DI和AI输入的数据总长度总和最大为492个字节。



### Profinet

节卡机器人Profinet IO数据传输的控制，首先请参考节卡机器人地址分配表的EXCEL文档，由4个sheet表组成，分别是表格说明、Robot2PLC、PLC2Robot以及脚本函数。在Robot2PLC和PLC2Robot表中定义的每个数据占4个字节，即0 ~ 31个Bit位，重点关注内容如下：



传输类型： R->P （Robot->PLC）或者传输类型 P->R（PLC->Robot），表明了数据传输的方向

单元模块（Unit Group）： 表明了数据类型和所属模块，数据类型为：机器人状态、安全设置，属于第一个模块。比如：1_R->P_Robot_Safety， 代表数据模块编号为1，传输方向R->P （Robot->PLC），Robot表示机器人状态，Safety表示安全设置，32 Bytes为已使用地址，4 Bytes为预留地址。 其他的单元模块内容与此类似。

PLC设置： 包括各个单元模块对应的插槽、子插槽编号和PLC上地址，如1_R->P_Robot_Safety对应1号插槽，1号子插槽，PLC输入I地址为0 ~ 35 Bytes。



#### DI布尔量输入操作

Profinet数字输入对应DI 136到DI 199，共64个DI数据。数据传输方向为：PLC数据输出对应控制柜DI数据输入。在PLC2Robot工作表中，传输类型 P->R（PLC->Robot），布尔输入寄存器DI 0 ~ 64位于PLC的7号插槽和1号子插槽，PLC的输出地址为0 ~ 7字节, 在Profinet IO的数据通讯模式中，每一个DI数据由1个Bit位控制。 

![image-20230518105055149](../../resource/bus/image-20230518105055149.png){.lozad}

如上图所示，其他DI数据的操作步骤类似，先提供Profinet功能DI寄存器与PLC输出地址对应表：

| DI输入寄存器 | 插槽 | 子插槽 | QB地址 |
| ------------ | ---- | ------ | ------ |
| DI 136 ~ 143 | 7    | 1      | 0      |
| DI 144 ~ 151 | 1    |        |        |
| ……           | ……   |        |        |
| DI 192 ~ 199 | 7    |        |        |



#### AI整数输入操作

Profinet有符号模拟量输入为AI 73到AI 104，共计32个数据。在PLC2Robot工作表中,传输类型 P->R（PLC->Robot），整数输入寄存器AI 0 ~ 31位于PLC的8号插槽和1号子插槽，PLC的输出地址为12 ~ 139字节, 在Profinet IO的数据通讯模式中，每一个AI整数数据由4个字节控制。

![image-20230518105217981](../../resource/bus/image-20230518105217981.png){.lozad}

Profinet功能AI整数输入寄存器与PLC输出地址对应表如下：

| AI整数输入寄存器 | 插槽 | 子插槽 | QD地址 |
| ---------------- | ---- | ------ | ------ |
| AI 73            | 8    | 1      | 12     |
| AI 74            | 16   |        |        |
| ……               | ……   |        |        |
| AI 104           | 136  |        |        |



#### AI浮点数输入操作

Profinet浮点数输入为AI 105到AI 136，共计32个数据。在PLC2Robot工作表中,传输类型 P->R（PLC->Robot），浮点数输入寄存器AI 0 ~ 31位于PLC的9号插槽和1号子插槽，PLC的输出地址为140 ~ 247字节, 在Profinet IO的数据通讯模式中，每一个AI浮点数据由4个字节控制。

![image-20230518105300645](../../resource/bus/image-20230518105300645.png){.lozad}

Profinet功能AI浮点输入寄存器与PLC输出地址对应表如下：

| AI浮点输入寄存器 | 插槽 | 子插槽 | QD地址 |
| ---------------- | ---- | ------ | ------ |
| AI 105           | 9    | 1      | 140    |
| AI 106           | 144  |        |        |
| ……               | ……   |        |        |
| AI 136           | 264  |        |        |



#### DO布尔量输出控制

Profinet数字输出对应DO 136到DO 199，总共64个DO数据。数据传输方向为，控制柜的DO数据输出对应PLC的数据输入，在Robot2PLC工作表中，传输类型 R->P （Robot->PLC），布尔输出寄存器 DO 0 ~ 64位于PLC的4号插槽和1号子插槽，PLC的输入地址为400 ~ 407字节, 在Profinet IO的数据通讯模式中，每一个DO数据由1个Bit位控制。

![image-20230518105335789](../../resource/bus/image-20230518105335789.png){.lozad}

Profinet功能DO寄存器与PLC输入地址对应表:

| DO输出寄存器 | 插槽 | 子插槽 | IB地址 |
| ------------ | ---- | ------ | ------ |
| DO 136 ~ 143 | 4    | 1      | 400    |
| DO 144 ~ 151 | 401  |        |        |
| ……           | ……   |        |        |
| DO 192 ~ 199 | 407  |        |        |

#### AO整数输出操作

Profinet有符号模拟量输出为AI 65到AI 96，共计32个数据。在Robot2PLC工作表中，传输类型 R->P （Robot->PLC），整数输出寄存器AO 0 ~ 31位于PLC的5号插槽和1号子插槽，PLC的输入地址为412 ~ 539字节, 在Profinet IO的数据通讯模式中，每一个AI整数数据由4个字节控制。

![image-20230518105409172](../../resource/bus/image-20230518105409172.png){.lozad}

Profinet功能AO整数输出寄存器与PLC输入地址对应表如下：

| AO整数输入寄存器 | 插槽 | 子插槽 | ID地址 |
| ---------------- | ---- | ------ | ------ |
| AO 65            | 8    | 1      | 412    |
| AO 66            | 416  |        |        |
| ……               | ……   |        |        |
| AO 96            | 536  |        |        |

#### AO浮点数输出操作

Profinet有浮点模拟量输出为AO 97到AI 128，共计32个数据。在Robot2PLC工作表中，传输类型 R->P （Robot->PLC），浮点数输出寄存器AO 0 ~ 31位于PLC的6号插槽和1号子插槽，PLC的输入地址为540 ~ 667字节, 在Profinet IO的数据通讯模式中，每一个AI浮点数据由4个字节控制。

![image-20230518105444324](../../resource/bus/image-20230518105444324.png){.lozad}

Profinet功能AO浮点数输出寄存器与PLC输入地址对应表如下：

| AO浮点数输出寄存器 | 插槽 | 子插槽 | ID地址 |
| ------------------ | ---- | ------ | ------ |
| AO 97              | 6    | 1      | 540    |
| AO 98              | 544  |        |        |
| ……                 | ……   |        |        |
| AO 128             | 664  |        |        |

上文已经介绍了布尔量、整数和浮点数的读取操作，机器人的状态和安全设置，以及关节和TCP等数据，其数据格式多为整数和浮点， 获取这些数据的操作与Profinet IO的控制相同，只要参考Robot2PLC工作表中PLC的输入地址，在TIA Portal中输入数据对应的地址，注意数据所占的字节长度，就能获取所想要的数据。

## PLC通讯实例

### 罗克韦尔5370 L3 1769-L33ER

#### EtherNet/IP

1. 在不清楚PLC当前IP地址的情况下，可以使用Wireshark确认PLC的IP地址，使用windows自带的cmd工具ping设备以测试PLC是否处于组网中。如果与控制器和上位机不在同一网段内，请跳至步骤二，尝试修改PLC的IP地址；如果已经处于同一网段内，则至步骤四继续执行。



2. 打开软件RsLinx Classic，点击Config Drivers菜单，在弹出的对话框中， 选择Ethernet/IP Driver， 点击Add New，按照默认配置，完成后点击Ok。![image-20230221093844646](../../resource/bus/image-20230221093844646.png){.lozad}

   

3. 点击网络节点图标，弹出WRWho对会话框。点击ABETHIP_1, 会刷新出PLC和Ethernet/IP的模块信息，连接正常表示已正确组网。右键点击PLC可以修改其IP地址，使其与控制器和上位机处于同一子网段内。

![image-20230221093902444](../../resource/bus/image-20230221093902444.png){.lozad}



4. 打开BOOTP-DHCP Server软件，将自动搜索与电脑连接的设备。

![image-20230221093943306](../../resource/bus/image-20230221093943306.png){.lozad}

注：如自动搜索未发现PLC的MAC地址，请关闭电脑的防火墙功能，手动输入MAC地址。在下半栏选中IP地址，然后点击Disable BOOTP/DHCP。



5. 打开RsLinx Classic Launch Panel软件， 点击Start。

![image-20230221094002051](../../resource/bus/image-20230221094002051.png){.lozad}



6. 点击菜单栏工具，选择安装EDS文件，注册EDS文件， 一直点击下一步，直到完成配置。

![image-20230221094022980](../../resource/bus/image-20230221094022980.png){.lozad}

![image-20230221094036396](../../resource/bus/image-20230221094036396.png){.lozad}



7. 打开RsLogix 5000软件，创建新项目。选择所使用的PLC型号，输入项目名称，浏览项目保存位置，点击确认。

![image-20230221094054717](../../resource/bus/image-20230221094054717.png){.lozad}



8. 在左侧栏右键点击以太网，选择新建module，在弹出的窗口中找到模块JAKA Ethernet/IP Adapter, 点击创建，输入模块名称，注意此处IP地址需要与控制柜的Ethernet/IP地址相同。

![image-20230221094147644](../../resource/bus/image-20230221094147644.png){.lozad}

![image-20230221094158456](../../resource/bus/image-20230221094158456.png){.lozad}

![image-20230221094206931](../../resource/bus/image-20230221094206931.png){.lozad}



9. 点击更改按钮，可设置数据的类型，为了便于数据显示，这里选择DINT类型。

![image-20230221094219019](../../resource/bus/image-20230221094219019.png){.lozad}

注：如果使用定制版本，需要手动配置EIP的模块，则配置如下：

PLC到EIP的输出ID为100

EIP到PLC的输入ID为101

PLC输出最大字节数为492字节

PLC输入的最大字节数为492字节



10. 点击网络节点，弹出活动页对话框，选择 PLC模块， 然后点击联机，弹出对话框，下载程序。

![image-20230221094234010](../../resource/bus/image-20230221094234010.png){.lozad}



11. 选择联机，使PLC处于运行模式，连接状态正常之后，右键点击控制器标签，选择监控Tag，可以看到PLC从机器人读取到了部分数据。

![image-20230221094252406](../../resource/bus/image-20230221094252406.png){.lozad}

![image-20230221094417189](../../resource/bus/image-20230221094417189.png){.lozad}



12. 在APP上打开Ethernet/IP数字输出DO1和DO2按钮，设置整数 AO1为123。

![image-20230221094348426](../../resource/bus/image-20230221094348426.png){.lozad}

13. 查看RsLogix 5000相应的数据,，I.Data[72]和I.Data[75]显示相应的数据正确。数据的地址可参考文件**节卡机器人EthernetIP地址分配表**确定。

![image-20230221094452237](../../resource/bus/image-20230221094452237.png){.lozad}



#### Modbus TCP

##### 主站

AB的PLC自身均不支持Modbus TCP通讯，使用AB PLC需要配第三方的协议转换网关将ModBusTCP协议转换为AB自己的Ethernet/IP协议。因此罗克韦尔PLC首先必须有具备EtherNet/IP协议的以太网接口。

从Logix5000编程软件15版本（实测20版本及以上）以后，对于CompactLogix和Controllogix系列的PLC，支持了使用PLC程序编写出来的ModbusTCP协议通讯，目前来看，支持该通讯的协议的产品和版本主要有：

![image-20230518092542471](../../resource/bus/image-20230518092542471.png){.lozad}

以上产品刷对应固件后即可支持ModbusTCP协议，并且可作为Master和Slave与其他第三方设备进行通讯，AB官方提供的例程分为Master和Slave两部分，可按需分别使用。Master功能部分可能会占用PLC内200-230K的存储空间，Slave功能部分可能会占用PLC的280-300K空间

由上可知，罗克韦尔不支持原生的Modbus Tcp协议，需要通过其EtherNet\IP的以太网端口实现。

可以自行编写PLC程序来支持modbus，也可在罗克韦尔下载示例程序，下面对官网给出的示例程序作简要验证。

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/94EZlwQkXEJLqxAY/img/98b12361-4b42-4101-927e-47c54ac7f986.png){.lozad}



1. 新建工程，选择MainRoutine，在右侧的空白区域点击右键选择Import Rungs

![image-20230518092658960](../../resource/bus/image-20230518092658960.png){.lozad}



2. 导入示例程序中的.L5X文件，可以修改程序内参数的名称，通过Tags标签的Final Name选项。

   ![image-20230518092750982](../../resource/bus/image-20230518092750982.png){.lozad}



3. 点击ok导入，在Modbus TCP Client块内右键点击，选择Monitor。

![image-20230518092829622](../../resource/bus/image-20230518092829622.png){.lozad}



4. 对于5370系列而言，LocalSlot的值为0，将其他条目如EtherNet/IP的端口地址、Modbus从站的ip地址和端口号按实际进行填写

![image-20230518092950596](../../resource/bus/image-20230518092950596.png){.lozad}



5. 回到MainRoutine选项，将inp_Enable置为1，代表启动Modbus Client功能，对于RSLogix 5000而言，同时需要将程序编译并下载到plc，最后切换到运行状态

![image-20230518093017397](../../resource/bus/image-20230518093017397.png){.lozad}



6. 监控表可以设置Pollinterval（刷新时间）、Transtype（功能码）、Stationid（从站ID）、BeginAddress（起始地址）、Count（地址数量）等基本参数，此外还需要设置LocalAddress，此参数代表与Modbus Slave的起始地址对应的Modbus Client的起始地址。

![image-20230518093037433](../../resource/bus/image-20230518093037433.png){.lozad}



7. Modbus Client同样使用4个寄存器存放数据，完成起始地址的映射后，可以直接修改寄存器内的数据，如此处将Slave的起始地址设为了40，修改coils下的数据可以发现，成功更新到了控制器的内部

![image-20230518093105083](../../resource/bus/image-20230518093105083.png){.lozad}

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/94EZlwQkXEJLqxAY/img/1c4e6957-307d-409a-9546-52ece9ec4ae3.png){.lozad}



### **西门子** 6ES7317-2EK14-0AB0

#### Profinet

1. 打开TIA Portal V15软件，点击创建新项目，弹出新建项目窗口后，更改项目名称（如jakaPNIO），然后点击浏览按钮，选择存储位置并确定，再点击创建，此时已经新建了一个项目并保存在了指定的路径下

![image-20230518094544786](../../resource/bus/image-20230518094544786.png){.lozad}



2. 在建立的项目窗口中，依次点击设备与网络->添加新设备->控制器, 选择PLC的型号，再点击添加![image-20230518094635931](../../resource/bus/image-20230518094635931.png){.lozad}



3. 双击PLC模块，在常规的菜单下点击以太网地址，修改PLC的IP地址

![image-20230518102245415](../../resource/bus/image-20230518102245415.png){.lozad}

4. 如果使用了PLC S7-300则需要修改IO地址映射的大小，使地址映射值大于688字节，IO地址映射小于此值可能会导致数据丢失，因为我们Profinet IO的最大地址范围为0到688字节。

![image-20230518104643528](../../resource/bus/image-20230518104643528.png){.lozad}



5. 在菜单栏选项菜单中，点击管理通用站描述文件(GSD)，弹出相应的窗口，点击浏览按钮，找到文件GSDML-V2.41-JAKA-JAKARobot-20210722.xml的路径，载入后选中该文件，然后安装， 等待安装完成，关闭窗口

![image-20230518102831965](../../resource/bus/image-20230518102831965.png){.lozad}

![image-20230518103105653](../../resource/bus/image-20230518103105653.png){.lozad}



6. 在左侧栏双击设备和网络，在右侧栏硬件目录，点击其他现场设备，选择PROFINET IO， 找到JAKA_V1.0, 双击或直接拖到界面即可

![image-20230518103207811](../../resource/bus/image-20230518103207811.png){.lozad}

![image-20230518103309906](../../resource/bus/image-20230518103309906.png){.lozad}



7. 点击Profinet设备的未分配，选择PLC_1.PROFINET接口_1

![image-20230518103916807](../../resource/bus/image-20230518103916807.png){.lozad}

![image-20230518103927603](../../resource/bus/image-20230518103927603.png){.lozad}



8. 单击Profinet设备DP-NORM图标，在下方的菜单栏中选在以太网地址，修改Profinet设备的IP地址。

![image-20230518104002066](../../resource/bus/image-20230518104002066.png){.lozad}



9. 点击IO周期，在更新时间的区块选择手动设置更新时间，在更新时间的下拉框中更选择Profinet的数据更新时间，由于此设备的最小更新时间为8ms，所选择的数值应该大于或等于8ms。

![image-20230518104602841](../../resource/bus/image-20230518104602841.png){.lozad}



10. 双击名为jaka的Profinet设备，切换到硬件设备概览的页面，在硬件目录的模块下能看到被定义的各IO数据块。将数据块拖入到对应的插槽中。

![image-20230518104431792](../../resource/bus/image-20230518104431792.png){.lozad}

![image-20230518104445644](../../resource/bus/image-20230518104445644.png){.lozad}



11.切换到设备和网络界面，选中PLC，依次选择编译和下载的图标。

![image-20230518104522946](../../resource/bus/image-20230518104522946.png){.lozad}



12. 双击左侧栏在线和诊断，在线访问的配置如下，然后点击转至在线， 即可观察PLC与Profinet连接情况，以及实现PLC和Profinet实时数据传输的观察。

![image-20230518104545379](../../resource/bus/image-20230518104545379.png){.lozad}



13. 在左边菜单栏监控和强制列表下，新建监控表，根据Profinet IO地址分配表，对DI、AI、DO和AO对应的地址进行操作，即可实现控制器和PLC之间的数据传输。

![image-20230518104918585](../../resource/bus/image-20230518104918585.png){.lozad}

#### Modbus TCP

##### 主站

西门子同样通过编程实现Modbus TCP协议，S7-300可以使用MODBUSPN模块

1. 在工艺对象内插入MB_PN_PARAM

![image-20230518093906080](../../resource/bus/image-20230518093906080.png){.lozad}



2. 进入组态进行连接设置，设定ip地址、端口号等参数

![image-20230518093934377](../../resource/bus/image-20230518093934377.png){.lozad}



3. 设置Modbus的数据区域

![image-20230518105611813](../../resource/bus/image-20230518105611813.png){.lozad}



4. 根据工艺对象的数据区域，添加4个区域块![image-20230518105629778](../../resource/bus/image-20230518105629778.png){.lozad}



5. 创建数据块

![image-20230518105705600](../../resource/bus/image-20230518105705600.png){.lozad}



6. 调用通信指令，设置对应参数

![image-20230518105726538](../../resource/bus/image-20230518105726538.png){.lozad}

![image-20230518105736115](../../resource/bus/image-20230518105736115.png){.lozad}

后续操作与罗克韦尔类似，在指令中对参数进行更改，可以与Modbus TCP通信，但此功能需要西门子的授权密钥



### 三菱 FX5U-80MT/DSS

#### EtherNet/IP

FX5U默认ip为192.168.3.250；FX5 ENET/IP默认ip为192.168.3.251

需要使用扩展模块FX5-ENT/IP开启EtherNet/IP功能，此功能需要软件EtherNet/IP Configuration Tool for FX5-ENET/IP，可在三菱官网或联系供应商获取



1. 使用GX works3登录FX5-ENET/IP的配置文件

![image-20230518105910148](../../resource/bus/image-20230518105910148.png){.lozad}

![image-20230518105927689](../../resource/bus/image-20230518105927689.png){.lozad}



2. 新建工程，选择对应型号的PLC

![image-20230518105953323](../../resource/bus/image-20230518105953323.png){.lozad}



3. 从信息模块中拖入FX5-ENET/IP，与FX5U完成拼接

![image-20230518110033512](../../resource/bus/image-20230518110033512.png){.lozad}



4. 打开三菱EtherNet/IP Configuration Tool for FX5-ENET/IP工具，点击Description中add添加配置模块并更改地址，注意与模块的ip地址保持同一网段。

![image-20230518110108093](../../resource/bus/image-20230518110108093.png){.lozad}



5. 选择device library添加eds文件。

![image-20230518110127399](../../resource/bus/image-20230518110127399.png){.lozad}



6. 将eds文件直接拖至TCP/IP下方，注意配置其ip与模块同网段。

![image-20230518110154849](../../resource/bus/image-20230518110154849.png){.lozad}



7. 可以使用配置界面的ping功能测试是否成功连接。

![image-20230518110211474](../../resource/bus/image-20230518110211474.png){.lozad}



8. 点击在线并将配置下载到模块

![image-20230518110240349](../../resource/bus/image-20230518110240349.png){.lozad}



9. 由于三菱模块需要通过程序运行，且需要功能块激活，因此配置下载完成后需要回到主界面编程触发EtherNet/IP功能，安装了FX5-ENET/IP的配置文件后，部件库出现了自带的标准功能块，选择添加模块标签

![image-20230518110300653](../../resource/bus/image-20230518110300653.png){.lozad}



10. 点击在线-当前连接目标进入连接界面

![image-20230518110328253](../../resource/bus/image-20230518110328253.png){.lozad}



11. 点击其他连接方法，打开连接目标指定画面

![image-20230518110348372](../../resource/bus/image-20230518110348372.png){.lozad}



12. 双击设备网络进行FX5U的ip设置

![image-20230518110409610](../../resource/bus/image-20230518110409610.png){.lozad}



13. 点击搜索，双击搜索出的设备并点击确认

![image-20230518110426467](../../resource/bus/image-20230518110426467.png){.lozad}



14. 点击通信测试，此时应显示已成功连接

![image-20230518110443487](../../resource/bus/image-20230518110443487.png){.lozad}



15. 添加M+FX5ENETIP_Class1SetOutputdata_01A模块测试发送数据功能，编写测试程序如下

![image-20230518110510258](../../resource/bus/image-20230518110510258.png){.lozad}



16. 此时EtherNet/IP Configuration Tool for FX5-ENET/IP已配置完成，点击全部转换并写入FX5U

![image-20230518110529816](../../resource/bus/image-20230518110529816.png){.lozad}



17. 全选并执行写入，然后重置PLC，可以通过断电的方式实现，注意此时网线应接入FX5U单元。

![image-20230518110550181](../../resource/bus/image-20230518110550181.png){.lozad}



18. 使用模块触发EIP功能后，此时APP侧应显示成功连接主站

![image-20230518110608603](../../resource/bus/image-20230518110608603.png){.lozad}



19. 若在EtherNet/IP Configuration Tool for FX5-ENET/IP进行诊断，将显示设备正常在线

![image-20230518110636975](../../resource/bus/image-20230518110636975.png){.lozad}



20. 重启后将网线从FX5U拔下并接入FX5-ENET/IP，同样进入在线-当前连接目标确认与EIP模块的通信正常，然后打开监视

![image-20230518110654282](../../resource/bus/image-20230518110654282.png){.lozad}



21. 光标放在M1001开关，使用Shift+Enter改变输入信号触发此函数功能块

![image-20230518110711675](../../resource/bus/image-20230518110711675.png){.lozad}



22. 右键函数块，打开在线-软元件/缓冲存储器批量监视

![image-20230518110726137](../../resource/bus/image-20230518110726137.png){.lozad}



23. 监视D1015并更新，此时数据应更新到DI和AI

![image-20230518110747795](../../resource/bus/image-20230518110747795.png){.lozad}



24. 浮点数同理，可以通过监看窗口查看对应软元件的值，需要注意的是，软元件存储器以16位为单元存储数据，有符号整数和浮点数都需要高低位共同组成准确的32位数据

![image-20230518110812748](../../resource/bus/image-20230518110812748.png){.lozad}



25. 拖入M+FX5ENETIP_Class1Getinputdate_01A模块测试接收数据功能，编写测试程序如下，每次编译写入需要将网线插在CPU单元，即FX5U，而实际使用EIP功能时，需要将网线插回FX5-ENET/IP

![image-20230518110832871](../../resource/bus/image-20230518110832871.png){.lozad}



26. 在APP修改DO和AO的值，观察值的更新

![image-20230518110853851](../../resource/bus/image-20230518110853851.png){.lozad}



27. 浮点数同理

![image-20230518110910926](../../resource/bus/image-20230518110910926.png){.lozad}



#### Modbus TCP

##### 从站

1. 打开以太网设置下的Modbus/TCP设置，双击对象设备连接配置设置

![image-20230518162141616](../../resource/bus/image-20230518162141616.png){.lozad}



2. 将Modbus/TCP连接设备拖入网络拓扑中，反映设置并关闭

![image-20230518111007916](../../resource/bus/image-20230518111007916.png){.lozad}



3. 此时Modbus/TCP设置应显示使用，双击详细设置进入软元件分配，分配完成后点击确认，再点击应用

![image-20230518111025673](../../resource/bus/image-20230518111025673.png){.lozad}



4. 将修改后的模块参数写入PLC内，然后重置PLC

![image-20230518111042541](../../resource/bus/image-20230518111042541.png){.lozad}



5. APP此时可以运行扩展IO模块，查看值是否更新到对应地址

![image-20230518111057725](../../resource/bus/image-20230518111057725.png){.lozad}

![image-20230518111111202](../../resource/bus/image-20230518111111202.png){.lozad}

![image-20230518111122339](../../resource/bus/image-20230518111122339.png){.lozad}



##### 主站

1. 点击模块参数的以太网端口，双击对象设备连接配置设置的详细设置进入配置页面，拖入Active连接设备，选择通信手段为通信协议，设定端口号和IP等信息，注意三菱PLC使用Modbus只能通过502端口，设置完成后反映设置并关闭，点击应用

![image-20230518111135968](../../resource/bus/image-20230518111135968.png){.lozad}



2. 点击工具-通讯协议支持功能

![image-20230518111150850](../../resource/bus/image-20230518111150850.png){.lozad}



3. 选择以太网，点击确定

![image-20230518111203910](../../resource/bus/image-20230518111203910.png){.lozad}



4. 点击添加，选择Modbus/TCP，并添加协议名。

![image-20230518111220121](../../resource/bus/image-20230518111220121.png){.lozad}



5. 可以多次添加协议名，最多支持64个协议号

![image-20230518111236492](../../resource/bus/image-20230518111236492.png){.lozad}



6. 如果不熟悉软元件的分配方法，可以直接自动分配数据包的软元件，右键空白区域，点击软元件批量设置

![image-20230518111250414](../../resource/bus/image-20230518111250414.png){.lozad}



7. 指定软元件的协议号范围和起始软元件号，点击确定

![image-20230518111306694](../../resource/bus/image-20230518111306694.png){.lozad}



8. 此时显示变量已设置，也可点击工具-设置软元件一览显示查看具体的分配方法

![image-20230518111330610](../../resource/bus/image-20230518111330610.png){.lozad}



9. 以功能码为15的分配规则，D304为连接编号，D305为模块ID，D306为起始地址，D307为写入长度，D308为可变长度，指定写入数据的字节长度，D309-D1292为写入的具体数据。

![image-20230518111347364](../../resource/bus/image-20230518111347364.png){.lozad}



10. 分配完成后将此模块写入PLC，注意此处的设置为单独写入，从GX Works3主界面执行的写入并不会写入此模块的信息

![image-20230518111403627](../../resource/bus/image-20230518111403627.png){.lozad}



11. 写入完成后需要编写程序触发此通信协议，三菱PLC作为Modbus主站时主要用到三条指令，可以参考*MELSEC iQ-F FX5用户手册(MODBUS通信篇)*，指令的详细含义可以按F1查看官方的指令帮助

![image-20230518111415825](../../resource/bus/image-20230518111415825.png){.lozad}



12. 此处介绍一种通信方法，可根据自己的逻辑需求修改程序，使用SP.SOCOPEN打开连接

![image-20230518111430357](../../resource/bus/image-20230518111430357.png){.lozad}



13. 对连接进行设置，主要依据上述的软元件分配表的地址

![image-20230518111503241](../../resource/bus/image-20230518111503241.png){.lozad}



14. 使用SP.ECPRTCL调用通信协议编号进行写入

![image-20230518111517448](../../resource/bus/image-20230518111517448.png){.lozad}



15. 使用SP.SOCCLOSE关闭连接

![image-20230518111531756](../../resource/bus/image-20230518111531756.png){.lozad}



16. 点击转换程序并写入PLC，此程序逻辑会循环使用通信协议编号1，由于SP.ECPRTCL不会打开关闭连接，因此使用时需要结合SP.SOCOPEN和SP.SOCCLOSE，点击监视并打开软元件/缓冲存储器批量监视

![image-20230518111546412](../../resource/bus/image-20230518111546412.png){.lozad}



17. 可以看到，值正确地更新到了对应的寄存器

![image-20230518162249818](../../resource/bus/image-20230518162249818.png){.lozad}



18. 针对02功能码，情况类似，确认软元件的分配并修改程序即可

![image-20230518111616942](../../resource/bus/image-20230518111616942.png){.lozad}



19. 主要需要将协议编号和连续读取编号修改为2

![image-20230518111637363](../../resource/bus/image-20230518111637363.png){.lozad}



20. 同样转换程序并下载到PLC，可以看到DO的值更新到了D1307中

![image-20230518111657433](../../resource/bus/image-20230518111657433.png){.lozad}



### 施耐德 TM241CE24R

#### EtherNet/IP

首先需要确保TM241CE24R的固件版本与Machine Expert匹配，否则无法正常使用，如果版本不对使用controller assistant升降级固件版本。

1. 使用Machine Expert添加eds文件

![image-20230518111842828](../../resource/bus/image-20230518111842828.png){.lozad}



![image-20230518111916343](../../resource/bus/image-20230518111916343.png){.lozad}

![image-20230518111927256](../../resource/bus/image-20230518111927256.png){.lozad}



2. 双击控制器点击刷新可以看到当前连接设备，也可以通过网线直连修改外部设备的IP地址

![image-20230518111942759](../../resource/bus/image-20230518111942759.png){.lozad}



3. 修改时勾选永久保存

![image-20230518111956473](../../resource/bus/image-20230518111956473.png){.lozad}



4. 此时已经成功修改，将TM241CE24R连接在交换机，JAKA APP与控制器也接入此交换机并保持均在同一网段

![image-20230518112018441](../../resource/bus/image-20230518112018441.png){.lozad}



5. 右键点击Ethernet_1添加设备

![image-20230518112047746](../../resource/bus/image-20230518112047746.png){.lozad}



6. 选择Modbus TCP下的Industrial Ethernet Manager

![image-20230518112116359](../../resource/bus/image-20230518112116359.png){.lozad}



7. 继续右键点击Industrial Ethernet Manager添加JAKA设备

![image-20230518112139664](../../resource/bus/image-20230518112139664.png){.lozad}



8. 编译并登录设备，如果提示安全相关，无视并按ALT+F8继续登录

![image-20230518112153726](../../resource/bus/image-20230518112153726.png){.lozad}



9. 改为始终使能后，点击开始

![image-20230518112222107](../../resource/bus/image-20230518112222107.png){.lozad}



10. 此时APP侧应显示成功连接主站

![image-20230518112233861](../../resource/bus/image-20230518112233861.png){.lozad}



11. 修改DO和AO的值，可以看到对应的Input Exclusive owner[144]、[150]、[154]和发生了变化，这是由于从ROBOT到PLC的数据包含了ROBOT的状态数据，因此DO是从72开始的，JAKA的EtherNet/IP使用32位数据，而Machine Expert使用16位数据，因此最终DO的地址从144开始

![image-20230518112249241](../../resource/bus/image-20230518112249241.png){.lozad}



12. 在输出中使用ctrl+F7将值传递给机器人，值同样正常更新

![image-20230518112303178](../../resource/bus/image-20230518112303178.png){.lozad}

#### Modbus TCP

##### 主站

1. 右键点击Ethernet_1添加modbus slave设备

![image-20230518112326838](../../resource/bus/image-20230518112326838.png){.lozad}



2. 设置主站的IP地址等信息

![image-20230518112340540](../../resource/bus/image-20230518112340540.png){.lozad}



3. 登录并开始，监视数据

![image-20230518112355272](../../resource/bus/image-20230518112355272.png){.lozad}



4. TM241CE24R支持的modbus从站的保持寄存器的功能码为03、06和16，而输入寄存器支持的功能码为17，JAKA机器人modbus主站暂不支持此功能码，使用前需要查阅官方文档

![image-20230518112408357](../../resource/bus/image-20230518112408357.png){.lozad}



### 欧姆龙 CP1H-X40DT-D

CP1H的CPU单元本身不带EIP的功能，因此需要装扩展单元，在此之前需要先再装一个CJ1W-EXT01扩展单元以支持扩展，安装后的产品如图：

![image-20230518112534078](../../resource/bus/image-20230518112534078.png){.lozad}

由于欧姆龙的modbus均属于无协议通讯，也即通过软件实现其通信，而且需要额外选装硬件，如需要CJ1W-ETN21支持modbustcp和 CP1W-CIF11支持modbusrtu，因此不对其做验证。

#### EtherNet/IP

1. 使用CX-Programmer作为上位机，新建工程

![image-20230518112558888](../../resource/bus/image-20230518112558888.png){.lozad}



2. PLC默认的地址为192.168.250.1，先使用网线直连，切换到在线模式并开启编程才能修改参数

![image-20230518112611668](../../resource/bus/image-20230518112611668.png){.lozad}



3. 创建IO表，初始化CPU总线

![image-20230518112625082](../../resource/bus/image-20230518112625082.png){.lozad}



4. 此时有了EIP模块

![image-20230518112637340](../../resource/bus/image-20230518112637340.png){.lozad}



5. 修改EIP21模块的IP地址后，将参数从PC传递至单元并重启，使用修改的IP地址连接PLC

![image-20230518112648277](../../resource/bus/image-20230518112648277.png){.lozad}



6. 启动专用的应用程序，继承启动

![image-20230518112704443](../../resource/bus/image-20230518112704443.png){.lozad}



7. 选择第二项进行EIP设定

![image-20230518112716651](../../resource/bus/image-20230518112716651.png){.lozad}



8. 安装eds文件

![image-20230518112728140](../../resource/bus/image-20230518112728140.png){.lozad}



9. 选择上载

![image-20230518112746186](../../resource/bus/image-20230518112746186.png){.lozad}



10. 将导入的设备拖到总线，修改ip地址

![image-20230518112807626](../../resource/bus/image-20230518112807626.png){.lozad}



11. 进行连接注册

![image-20230518112818721](../../resource/bus/image-20230518112818721.png){.lozad}



12. 进行变量的设置

![image-20230518112841189](../../resource/bus/image-20230518112841189.png){.lozad}



13. 设置完成后将参数修改到plc

![image-20230518112852640](../../resource/bus/image-20230518112852640.png){.lozad}



14. 点击下载到设备

![image-20230518112907042](../../resource/bus/image-20230518112907042.png){.lozad}



15. 无视警告并继续

![image-20230518112920804](../../resource/bus/image-20230518112920804.png){.lozad}



16. 下载完成后将重启plc

![image-20230518112933858](../../resource/bus/image-20230518112933858.png){.lozad}



17. 此时APP侧应显示成功连接主站，将plc的工作模式切换为监视，可以实现值的传递

![image-20230518112952130](../../resource/bus/image-20230518112952130.png){.lozad}

![image-20230518113001361](../../resource/bus/image-20230518113001361.png){.lozad}



### 基恩士 KV-8000

本例采用KV-8000作为CPU单元，KV-XLE02作为扩展单元

#### EtherNet/IP

1. 使用KV STUDIO新建工程，在初次使用以太网单元时，需要打开单元编辑器

![image-20230518113104728](../../resource/bus/image-20230518113104728.png){.lozad}



2. 拖动单元到KV-8000上，如果已经连接CPU单元，也可以选择直接从PLC读取单元组态

![image-20230518113118159](../../resource/bus/image-20230518113118159.png){.lozad}



3. 设置端口的协议为scanner，（此处如果不设置将不会显示ethernetip设定），分别设置KV-8000和KV-XLE02的IP地址，最后应用设置。

![image-20230518113139022](../../resource/bus/image-20230518113139022.png){.lozad}



4. 回到KV-STUDIO，选择监视器/模拟器的通信设定，选择EtherNet/IP或USB进行扫描，需要将PC与PLC使用网线或USB连接。选择EtherNet/IP进行扫描时，选择网卡并执行，可以扫描出对应的设备，扫描到设备后点击选择设备。

![image-20230518113151146](../../resource/bus/image-20230518113151146.png){.lozad}



5. 点击转换到PLC，选择执行，执行后会将单元编辑器内的以太网设定也一并写入PLC，如果在单元编辑器内修改了KV-8000的IP地址和KV-XLE02的通信协议，写入完成后设备的网络参数也会发生改变。另外KV-XLE02的两个端口的网络部须保持不同。

![image-20230518113205943](../../resource/bus/image-20230518113205943.png){.lozad}



6. 导入JAKA的eds文件

![image-20230518113220030](../../resource/bus/image-20230518113220030.png){.lozad}



7. 本例将port 1的IP地址设置为192.168.1.10，重复上述选择设备的步骤，将网线接入KV-XLE02，选择此设备，回到单元编辑器，点击EtherNet/IP设定

![image-20230518113234996](../../resource/bus/image-20230518113234996.png){.lozad}



8. 将JAKA设备的IP地址设置为与PLC同一网段，本例中为192.168.1.20/24，点击自动设定，将自动扫描网络拓扑

![image-20230518113247405](../../resource/bus/image-20230518113247405.png){.lozad}



9. 回到KV STUDIO，将EtherNet/IP设定和单元编辑器下载到PLC，此时APP测应显示成功连接主站。

![image-20230518113301551](../../resource/bus/image-20230518113301551.png){.lozad}



10. 回到单元编辑器的EtherNet/IP设定，点击Exclusive Owner的Edit，可以选择自动分配软元件或手动分配，此处选择自动。基恩士定义的EtherNet/IP设备的通信数据的数据类型为位和字，数据的显示方式根据类型变化。针对非基恩士的设备，使用自动分配，选择字设备

![image-20230518113313000](../../resource/bus/image-20230518113313000.png){.lozad}

![image-20230518113328040](../../resource/bus/image-20230518113328040.png){.lozad}



11. 保存设置，由于JAKA的数据默认占32位，而KV-STUDIO的数据类型默认为WORD，占16位，当使用WORD的数据类型时，JAKA的DI对应到PLC从IN_101[144]开始，DO从OUT_100[0]开始，打开监视窗口

![image-20230518113348198](../../resource/bus/image-20230518113348198.png){.lozad}



12. 在APP和KV STUDIO修改参数，查看各软元件和APP的值，由于KV STUDIO默认的数据类型为WORD，因此使用时需要进行高低位的拼接处理。

![image-20230518113405110](../../resource/bus/image-20230518113405110.png){.lozad}

#### Modbus TCP

##### 从站

1. KV-XLE02作为从站时不需要发送接收用的梯形图程序，进入单元编辑器打开PROTOCOL STUDIO开关

![image-20230518113423247](../../resource/bus/image-20230518113423247.png){.lozad}



2. 在单元设置中对Modbus的所有相关参数进行配置，如IP地址、modbus TCP端口号、线圈和寄存器地址等。默认值中，只读软元件（输入/输入寄存器）被设定为与可读写软元件（线圈/保持寄存器）相同的分配。

![image-20230518113439809](../../resource/bus/image-20230518113439809.png){.lozad}



3. 将单元编辑器的配置写入PLC，启动监视模式，此时从站成功开启，选择从站的寄存器地址进行监视，需要注意的是，默认情况下KV-XLE02的只读软元件（输入/输入寄存器）被设定为与可读写软元件（线圈/保持寄存器）相同的分配，可以按照需求自行分配。此处为了区分做了一定区别。

![image-20230518113452997](../../resource/bus/image-20230518113452997.png){.lozad}



4. 打开JAKA扩展IO，点击运行，修改参数后再KV STUDIO读取和发送对应地址的参数，可以看到参数的同步更新

![image-20230518113506874](../../resource/bus/image-20230518113506874.png){.lozad}



### 台达 AS228T-A

#### EtherNet/IP

1. 针对台达的AS系列，需要从HWCONFIG打开EIP BUILDER，否则没有AS系列的选项，如果是更新的版本，可以直接在HWCONFIG完成EIP的配置和网络拓扑

   新建工程，双击HWCONFIG

![image-20230518114351122](../../resource/bus/image-20230518114351122.png){.lozad}



2. 安装设备描述文件管理工具

![image-20230518114402845](../../resource/bus/image-20230518114402845.png){.lozad}



3. 右键单击PLC设备，选择通讯软件的EtherNet/IP

![image-20230518114417537](../../resource/bus/image-20230518114417537.png){.lozad}



4. 搜索导入的jaka描述信息，将其拖拽到组态网络内，然后双击jaka设备修改IP地址

![image-20230518114434556](../../resource/bus/image-20230518114434556.png){.lozad}



5. 点击快速连线，将设备连接在同一网络内，然后下载到设备

![image-20230518114538549](../../resource/bus/image-20230518114538549.png){.lozad}



6. 点击显示数据交换，设置主站寄存器地址，最后将相关数据下载到PLC

![image-20230518114554764](../../resource/bus/image-20230518114554764.png){.lozad}



7. 下载完成后应显示成功连接主站

![image-20230518114606575](../../resource/bus/image-20230518114606575.png){.lozad}



8. 关闭并保存HWCONFIG，回到ISPSoft，点击联机模式，弹出项目比对不符，点击是执行下载

![image-20230518114622309](../../resource/bus/image-20230518114622309.png){.lozad}



9. 点击装置监控表，新建监控表，新建地址变量

![image-20230518114636722](../../resource/bus/image-20230518114636722.png){.lozad}



10. 监视DO和AO的变化，浮点数同理

![image-20230518114651737](../../resource/bus/image-20230518114651737.png){.lozad}

![image-20230518114659624](../../resource/bus/image-20230518114659624.png){.lozad}



11. 监视DI和AI的值，根据设定，DI的值从D1000开始，浮点数同理

![image-20230518114717985](../../resource/bus/image-20230518114717985.png){.lozad}

![image-20230518114731299](../../resource/bus/image-20230518114731299.png){.lozad}



#### Modbus TCP

##### 从站

1. 官网可以找到设备标准MODBUS的地址，可以直接访问这些地址来实现对台达PLC Modbus从站的访问，端口号默认为502，其中MODBUS位址的第一位代表访问的寄存器类型

![image-20230518114801539](../../resource/bus/image-20230518114801539.png){.lozad}



2. 在装置监控表监控数据，以对Y、M、D的访问为例

![image-20230518114815951](../../resource/bus/image-20230518114815951.png){.lozad}

![image-20230518114825506](../../resource/bus/image-20230518114825506.png){.lozad}



##### 主站

1. 双击进入HWCONFIG，双击硬件配置，双击设备图标

![image-20230518114843299](../../resource/bus/image-20230518114843299.png){.lozad}



2. 进入数据交换的以太网，此处代表Modbus TCP端口的触发方式，修改为永久执行，当PLC上电时会始终启用，修改完成后添加数据交换规则，设置远程装置类型为标准Modbus设备，分别设置IP地址、本机起始地址、远程起始地址和数量，注意远程起始地址使用十六进制，设置完成后将参数下载到设备

![image-20230518114859097](../../resource/bus/image-20230518114859097.png){.lozad}



3. 关闭HWCONFIG，打开联机选项，监控数据表，可以观察到所有数据的更新

![image-20230518114912260](../../resource/bus/image-20230518114912260.png){.lozad}



4. 由于JAKA Modbus从站对浮点数采用的是大端显示，因此高位字节被存储在地位字节，按照台达PLC的显示规则为

![image-20230518114927755](../../resource/bus/image-20230518114927755.png){.lozad}



### 汇川 Easy522‑0808TN

#### EtherNet/IP

1. 打开AutoShop，新建工程，选择PLC型号，进入工具的通讯设置

![image-20230518115022404](../../resource/bus/image-20230518115022404.png){.lozad}



2. 点击搜索设备

![image-20230518115035421](../../resource/bus/image-20230518115035421.png){.lozad}



3. 选择导入eds文件

![image-20230518115049518](../../resource/bus/image-20230518115049518.png){.lozad}



4. 导入成功后双击设备添加组态

![image-20230518115102151](../../resource/bus/image-20230518115102151.png){.lozad}



5. 编译后下载到设备，并将设备切换到运行状态

![image-20230518115114620](../../resource/bus/image-20230518115114620.png){.lozad}



6. 此时设备应显示成功连接主站，并且配置中的EtherNet/IP显示的都是绿色

![image-20230518115128368](../../resource/bus/image-20230518115128368.png){.lozad}



7. 使用数字输出和有符号输出，可以正常更新到PLC

![image-20230518115145588](../../resource/bus/image-20230518115145588.png){.lozad}



8. 浮点数也可以正常更新

![image-20230518115220157](../../resource/bus/image-20230518115220157.png){.lozad}



9. 从PLC输出数据到机器人

![image-20230518115234702](../../resource/bus/image-20230518115234702.png){.lozad}

![image-20230518115245433](../../resource/bus/image-20230518115245433.png){.lozad}

#### Modbus TCP

##### 从站

1. Easy-522作为从站时，设置IP地址即开启了Modbus从站功能，无需设置通信协议，配置JAKA的扩展IO，使用502端口即可和Easy-522通信

![image-20230518115310208](../../resource/bus/image-20230518115310208.png){.lozad}



2. Easy-522的文档规定了线圈和寄存器可以访问的地址，线圈和寄存器共用地址。

![image-20230518115327406](../../resource/bus/image-20230518115327406.png){.lozad}

![image-20230518115338147](../../resource/bus/image-20230518115338147.png){.lozad}

##### 主站

1. Easy-522作为主站，添加以太网配置，参数为JAKA机器人的地址和Modbus端口

![image-20230518115355406](../../resource/bus/image-20230518115355406.png){.lozad}



2. 右键打开并新增从站站号，分别进行配置，分配映射地址后点击确认

![image-20230518115410000](../../resource/bus/image-20230518115410000.png){.lozad}

3. 打开软元件表，监视D200-D400的值，按照上图的分配，地址映射如下：

DI 0-9 : D200-209

DO 0-9 : D210-D219

AI 0-9 : D220-229

AO 0-9 : D230-D239

分别使用读取内存和写入内存可以观察值的更新

![image-20230518115425621](../../resource/bus/image-20230518115425621.png){.lozad}

### Codesys

#### EtherNet/IP

1. 下载并安装codesys后，会在后台出现CODESYS Gateway Systray -x64和CODESYS Control Win Systray -x64，前者是网关的开关，后者为虚拟PLC的开关，使用时需要确保二者都处于运行状态。

![image-20230220181755889](../../resource/bus/image-20230220181755889.png){.lozad}



2. 打开Codesys并新建工程，选择standard project，首次使用codesys会提示创建用户，之后使用plc时均需要使用此信息进行用户登录。

![image-20230220183201360](../../resource/bus/image-20230220183201360.png){.lozad}

![image-20230220182339657](../../resource/bus/image-20230220182339657.png){.lozad}



3. 选择CODESYS Control Win V3 x64作为PLC型号，第二栏默认即可。

![image-20230220182401950](../../resource/bus/image-20230220182401950.png){.lozad}



4. 在Codesys 菜单栏-工具-设备存储库，点击“安装”导入eds文件。导入后会出现提示，同时文件会出现在EthernetIP总线的远程适配器下。

![image-20230220182205612](../../resource/bus/image-20230220182205612.png){.lozad}

![image-20230220182610006](../../resource/bus/image-20230220182610006.png){.lozad}



5. 在Codesys中分别逐级添加EtherNet->EtherNet_IP_Scanner。



![image-20230220182807248](../../resource/bus/image-20230220182807248.png){.lozad}





6. 双击EtherNet选择与外部设备相连的网口，点击ok。如果组网中已有匹配该eds文件的JAKA控制器，并且使能了EtherNet/IP功能，右键单击EtherNet_IP_Scanner进行设备扫描，可以看到符合条件的设备，单击复制到工程；如果未成功扫描，也可以手动添加设备并配置其ip地址。

![image-20230220183555384](../../resource/bus/image-20230220183555384.png){.lozad}



![image-20230220184201136](../../resource/bus/image-20230220184201136.png){.lozad}



7. 依次点击登录和运行按钮，当设备栏的scanner和adapter均变为绿色后，代表设备成功连接，此时APP侧应同步显示成功连接主站。

![image-20230220184343914](../../resource/bus/image-20230220184343914.png){.lozad}

![image-20230220184357323](../../resource/bus/image-20230220184357323.png){.lozad}

![image-20230220184636633](../../resource/bus/image-20230220184636633.png){.lozad}

![image-20230220184522233](../../resource/bus/image-20230220184522233.png){.lozad}

![image-20230220184803673](../../resource/bus/image-20230220184803673.png){.lozad}



8. 打开jaka adapter的IO映射将总是更新处改为使能1，修改此选项需要先退出PLC登录。再次登录可以发现，数据已经开始同步更新。

![](../../resource/bus/image-20230220185017565.png){.lozad}

![image-20230220185223933](../../resource/bus/image-20230220185223933.png){.lozad}



9. 从控制器到PLC，分别修改DO和AO的数据，可以看到，对应地址的参数发生了更新。![image-20230220185334508](../../resource/bus/image-20230220185334508.png){.lozad}

![image-20230220185419800](../../resource/bus/image-20230220185419800.png){.lozad}



10. 从PLC到控制器，分别在预备值栏修改DI和AI的值，并同时按下ctrl+F7将数据提交，可以看到对应的数据发生了更新。

![image-20230220185633320](../../resource/bus/image-20230220185633320.png){.lozad}

![image-20230220185713370](../../resource/bus/image-20230220185713370.png){.lozad}



## 总结

目前已验证的PLC型号与对应的通讯协议汇总如下：

| 型号               | 厂商     | Modbus TCP | EtherNet/IP(scanner) | Profinet(controller) |
| ------------------ | -------- | ---------- | -------------------- | -------------------- |
| 5370 L3 1769-L33ER | 罗克韦尔 | √          | √                    |                      |
| 6ES7317-2EK14-0AB0 | 西门子   | √          | √                    | √                    |
| FX5U-80MT/DSS      | 三菱     | √          | √                    |                      |
| TM241CE24R         | 施耐德   | √          | √                    |                      |
| CP1H-X40DT-D       | 欧姆龙   |            | √                    |                      |
| KV-8000            | 基恩士   | √          | √                    |                      |
| AS228T-A           | 台达     | √          | √                    |                      |
| Easy522‑0808TN     | 汇川     | √          | √                    |                      |

针对上述测定的PLC型号，通讯协议与节卡目前所支持的主从协议均良好兼容，可以正常使用。需要注意的是，由于各PLC厂家对数据类型和长度的规定，可能无法做到完全兼容，需要对数据做拼接等处理。

## 问题排查

出现无法连接或无法使能的情况，可以按以下条目进行初步分析和处理。

### 检查设备网段是否相同

检查设备是否处于同一网段，可以使用wireshark抓包分析，也可以使用ping对网络进行测试，确保设备之间通信状况良好。

### 从APP确认EtherNet/IP的状态

修改EtherNet/IP使能状态和网络状态后，需要对控制器进行重启以更新配置，Profinet同理，可以从APP确认是否处在与主站交互的状态判断连接。

### 检查接线是否正常

PLC最好走底部网口网线直连，此时APP应通过wifi或面板网口直连控制器以提供更好的通信质量。

### 从PLC查看状态

通过上位机软件检测PLC的状态，确认其处于运行状态并且正常工作，如Codesys数据更新的前提是必须打开数据映射选项的”使能1“。

### 查看终端界面打印信息

在终端界面上使用jkzuc命令重启控制器程序，查看EtherNet/IP的相关打印信息，包括使能状态、IO配置模式、网卡名称、IP地址、与master连接状态等，确认信息是否匹配或正常。

![image-20230220190231581](../../resource/bus/image-20230220190231581.png){.lozad}