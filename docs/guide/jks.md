---
title: JAKA编程脚本
---

# <center>第1章 JAKA编程脚本简介</center>

<p>&emsp;&emsp;JAKA编程脚本是控制节卡机器人的专用编程语言(DSL)。用户可以根据JAKA 编程脚本所规定的语法进行编程以达到控制机器人的目的。</p>

# <center>第2章 JAKA编程脚本基础</center>

## 2.1 JAKA基础语法
### 2.1.1 标识符

&emsp;在JAKA编程脚本中，标识符不区分大小写，且其命名需满足以下规则：
- &emsp;只能使用英文字母、数字和下划线
- &emsp;第一个字符不能是数字
- &emsp;不能将关键字用作标识符
- &emsp;最长支持255个字符，建议不要超过30个字符

**示例:**
```# legal
_var1 = 1
var2  = 1
VAR3  = 1
_2KDDinKAEld74Zl8WzKP = 1
# illegal
4VAR = 1
if = 1
```

### 2.1.2 预留关键字
&emsp;&emsp;在JAKA编程脚本中，标识符不区分大小写，且其命名需满足以下规则：

| &emsp;&emsp;&emsp;property&emsp;&emsp;&emsp; | &emsp;&emsp;exec&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;not&emsp;&emsp;&emsp; |
| :------------------------------------------: | :--------------------------------: | :-------------------------------------: |
|                    assert                    |              finally               |                   or                    |
|                    break                     |                for                 |                  pass                   |
|                    class                     |                from                |                  print                  |
|                   continue                   |               global               |                  raise                  |
|                     def                      |                 if                 |                 return                  |
|                     del                      |               import               |                   try                   |
|                     elif                     |                 in                 |                  while                  |
|                     else                     |                 is                 |                  with                   |
|                    except                    |               lambda               |                  yield                  |

### 2.1.3脚本注释
&emsp;&emsp;JAKA机器人编程脚本支持单行注释，不支持多行注释。单行注释采用 # 开头，注释可以在语句或表达式行末。

**示例:**
```
# the first comment
str = "Hello, World!"  # the second comment
```


### 2.1.4语句
&emsp;&emsp;JAKA机器人编程脚本仅支持单行语句。不支持一行语句拆分到多行书写，也不支持一行中书写多条语句。

## 2.2 基本类型
&emsp;&emsp;JAKA机器人编程脚本提供标量、字符串与数组三种基本类型数据支持。在数组的基础上，预定义系统变量供用户使用。

### 2.2.1 标量
&emsp;&emsp;JAKA Script 不区分布尔类型、整形与浮点型数据。对布尔类型，false对应0， true对应1。

**示例:**
```
var = 1
# or
var = 1.0
# or
var = (expr1 > expr2)
```

### 2.2.2 字符串

&emsp;&emsp;用户定义字符串时需要使用英文双引号 ("") 进行包裹 。目前JAKA Script支持的转义字符(见下表)，用户在定义字符串时需要注意，否则会造成解析错误。

| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;表头&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;描述&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                              \\                              |                          反斜杠符号                          |
|                              \'                              |                            单引号                            |
|                              \"                              |                            双引号                            |
|                              \n                              |                             换行                             |
|                              \t                              |                          横向制表符                          |
|                              \r                              |                             回车                             |

**示例:**
```
string =  "this is a \"string\""
string =  "This is a string \n"
```

### 2.2.3 数组

&emsp;&emsp;数组是存放一组相同数据类型数据的容器。目前仅支持标量类型的数据，不支持字符串数组或数组的嵌套。

**数组定义**

&emsp;语法形式：

```
arr = [...]  #定义一个数组
arr = []     #定义一个空数组
```

**单元素的负索引访问**

&emsp;&emsp;假设数组变量array的长度为N，对于单个元素的访问，支持以下形式：

<center>array[index]</center>

&emsp;&emsp;元素的索引支持负值，即index 范围支持 [-N, N-1]。当index为非负值时，元素访问满足以下关系：

<center>array[index] = array[-N+index]</center>

&emsp;&emsp;当index取值不在支持范围内，则报错数组访问越界并终止程序执行。

**示例：**
```
a = [1,2,3,4,5,6,7,8,9,0]
b = a[-10] # b = a[0]
b = a[-11] # 报错数组访问超界
```

**数组的子区间访问**

&emsp;&emsp;支持访问指定数组的区间内指定间隔的子序列，并以数组形式返回。对数组的子区间的访问，具体格式为:

<center>array[startIndx : endIndex : step]</center>

&emsp;&emsp;当step为0时，程序报错，并会终止程序执行;

&emsp;&emsp;其他情况下，即使startIndex, endIndex，step不满足逻辑条件时不会报错（超过数组边界），仅在指定数组有效的范围内返回满足条件的值，如不存在则返回空数组。

&emsp;&emsp;提供一种Step为1的子区间访问的特殊形式，即Step参数省略：

<center>array[startIndex, endIndex]</center>

**示例：**
```
a = [1,2,3,4,5,6,7,8,9,0]
b = a[0:5]        #[1, 2, 3, 4, 5]
b = a[-5:10:1]    #[6, 7, 8, 9, 0]
```

**数组与位姿表示**

&emsp;&emsp;在JAKA机器人编程脚本中，采用6元素数组表示机器人关节位置或空间位姿，长度单位为mm，角度单位为°。

**示例：**
```
endPosJ = [90,90,90,90,90,90] #关节空间位置数组
endPosL = [663.5,8.159996,6.950005,90,0,0] #笛卡尔空间位置数组
```

## 2.2.4 系统变量

&emsp;&emsp;在作业程序中定义的变量在程序执行结束之后将被释放。对于希望值能够持久保存的变量，JAKA编程脚本提供系统变量机制。系统可在程序中直接使用，在程序中修改值后退出或关机后，其值仍然可以保留。系统变量只支持标量类型，目前支持用户使用的系统变量最多为100个，其访问方式如下：

<center>sysvar[id], 其中id∈[5500, 5599]</center>

**示例：**
```
sysvar[5500] = 100
a = sysvar[5500]
```

**注： 系统变量暂不支持负索引与区间访问。**

## 2.3表达式

### 2.3.1 算术运算符

&emsp;&emsp;算术运算符用来进行四则运算，按照运算符优先级将其分组，（*、/、%、**）的优先级高于（+、-）。优先级高的运算符比优先级低的运算符结合得更加紧密，下表的运算符满足左结合律，即当运算符优先级相同时按照从左向右的顺序进行。

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;算术运算符

| &emsp;&emsp;&emsp;&emsp;运算符&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;功能&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;用法&emsp;&emsp;&emsp;&emsp;&emsp; |
| :----------------------------------------------------------: | :--------------------------------------------------------: | :--------------------------------------------------------: |
|                              *                               |                            乘法                            |                        expr * expr                         |
|                              /                               |                            除法                            |                        expr / expr                         |
|                              %                               |                            求余                            |                        expr % expr                         |
|                              **                              |                            求幂                            |                        expr ** expr                        |
|                              +                               |                            加法                            |                        expr + expr                         |
|                              -                               |                            减法                            |                        expr - expr                         |

### 2.3.2 逻辑与关系运算符

&emsp;&emsp;关系运算符作用于算术类型，逻辑运算符作用于任意能转换成布尔值的类型。逻辑运算符和关系运算符的返回值类型都是布尔类型。


&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;逻辑运算符和关系运算符

| &emsp;结合律&emsp; | &emsp;&emsp;运算符&emsp; | &emsp;&emsp;&emsp;&emsp;功能&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;&emsp;用法&emsp;&emsp;&emsp;&emsp;&emsp; |
| :----------------: | :----------------------: | :--------------------------------------------------: | :----------------------------------------------------------: |
|         右         |            ！            |                        逻辑非                        |                            ！expr                            |
|         左         |            &&            |                        逻辑与                        |                         expr && expr                         |
|         左         |           \|\|           |                        逻辑或                        |                        expr \|\| expr                        |
|         左         |            <             |                         小于                         |                         expr < expr                          |
|         左         |            >             |                         大于                         |                         expr > expr                          |
|         左         |            ==            |                         等于                         |                         expr == expr                         |
|         左         |            !=            |                        不等于                        |                         expr != expr                         |
|         左         |            <=            |                       小于等于                       |                         expr <= expr                         |
|         左         |            >=            |                       大于等于                       |                         expr >= expr                         |

### 2.3.3 位运算符

&emsp;&emsp;位运算符作用于整数类型的运算对象，并把运算对象看作是二进制位的集合，目前仅支持异或操作。

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;位运算符(左结合律)

| &emsp;&emsp;&emsp;&emsp;运算符&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;功能&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;用法&emsp;&emsp;&emsp;&emsp;&emsp; |
| :----------------------------------------------------------: | :--------------------------------------------------------: | :--------------------------------------------------------: |
|                              ^                               |                            异或                            |                        expr ^ expr                         |

## 2.4语句

&emsp;&emsp;通常情况下，语句是顺序执行的。但除非是最简单的程序，否则仅有顺序执行远远不够，因此JAKA编程脚本提供了一组控制流语句以支持更复杂的执行控制。

### 2.4.1 简单语句

&emsp;&emsp;JAKA机器人编程脚本中，要求语句单独成行，且大多数语句无需结束符。简单语句包括表达式语句、函数调用语句等。

### 2.4.2 条件语句

**if..end语句**

&emsp;&emsp;if语句的作用是：判断一个指定的条件是否为真，根据判断结果决定是否执行另外一条语句。if语句包括两种形式，一种含有else分支，另外一种没有。

**语法形式如下：**
```
if(condition):
    statement
end
```
<!-- picture in page 10 -->

contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

**示例：**
```
condition = get_digital_output(0,1)
if(condition):
    endPosJ = [0,0,0,0,0,0]
    movj(endPosJ,0,60,200,0)
end
```

**if..else..end语句**
语法形式如下：

```
if(condition):
statement
else:
statement
end
```
<!-- picture in page 11-1  -->
contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

**示例：**
```
condition =  get_digital_output(0,1)
if(condition):
    endPosJ = [0,0,0,0,0,0]
    movj(endPosJ,0,60,200,0)
else:
    endPosL =[663.5,8.159996,6.950,90,0,0]
    movl(endPosL,0,250,250,0)
end
```

**if..elif..else..end语句**

**语法形式如下：**
```
if(condition1):
    statement
elif(condition2):
    statement
else:
    statement
end
```

### 2.4.3 循环语句

**while循环语句**

&emsp;&emsp;只要条件为真，while语句就会重复地执行循环体，语法形式如下：
```
while(condition):
    statement
end
```

<!-- picture in page 12 -->

contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

&emsp;&emsp;在while结构中，只要condition的求值结果为真，就会一直执行 statement (通常是一个语法块)，condition不能为空，如果condition第一次求值就是false ，statement一次都不执行。

**示例：**
```
i = 0
while(i <= 4):
    endPosJ1 =[0,90,90,90,-90,0]
    movj(endPosJ1,0,10,600,0)
    endPosJ2 =[90,90,90,90,-90,0]
    movj(endPosJ2,0,10,600,0)
    i = (i+1)
end
```


### 2.4.4 跳转语句

&emsp;&emsp;跳转语句可以中断当前的**while**语句的执行过程，JAKA Script提供了两种跳转语句 **break** 和 **continue** 。

**break语句**

&emsp;&emsp; **break** 语句负责终止离它最近的 **while** 语句，并从这些语句之后的第一条语句开始继续执行。 **break** 的作用范围仅限于最近的 **while** 循环。

**示例：**

statement是语句块，condition1和condition2是判断条件

```
while(condition1):
    statement
    ...
    if(condition2):
    break
    end
    ...
    statement
end
```
<!-- picture in page 14 -->


contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

**continue语句**

&emsp;&emsp; **continue** 语句终止最近的循环中的当前迭代并立即开始下一次迭代。 **continue** 语句只能出现在 **while** 循环体的内部。和 **break** 类似， **continue** 的作用范围仅限于最近的 **while** 循环。 **continue** 中断当前的迭代，但是会继续执行当前的循环，对于 **while** 语句来说即继续判断条件的值。

**示例：**

statement是语句块，condition1和condition2是判断条件。

```
while(condition1):
    statement
    ...
    if(condition2):
    continue
    end
    ...
    statement
end
```

<!-- picture in page 15 -->

contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断  
statement：所要执行的程序  

## 2.5 多线程  

&emsp;&emsp;最新的控制器软件支持多线程功能，用户可以在非主线程中使用特定的非运动相关类指令。  

### 2.5.1 线程的创建  

&emsp;&emsp;用户使用多线程时，需要通过子程序文件的方式定义线程的执行体，即线程执行体被单独保存在以jks为后缀的脚本文件中。线程创建时需指定线程执行体子程序文件的绝对路径，线程创建后将自动开始执行。JAKA控制器支持子线程数量为5个。  

&emsp;&emsp;线程创建时需要同步写入线程名称，线程的名称用于对子线程资源的管理，如线程的销毁、同步、暂停等操作。  

**示例：**
&emsp;&emsp;/path/to/thread/file.jks为子线程对应脚本文件的绝对路径，thread_name为标识该线程的唯一字符串。  

```
create_thread(“/path/to/thread/file.jks”, “thread_name”)
```

### 2.5.2 线程的操作  

&emsp;&emsp;JAKA脚本编程语言支持线程等待（join）与线程销毁操作，不支持线程分离（detach）。主线程结束后所有的子线程均将被终止，所使用的资源也将会被回收。线程的相关操作仅支持在主线程中调用，在子线程中调用无效；线程操作中必须保证是有效的线程名称，无效的线程名称将导致运行时错误。运动相关类，部分设置类（如：负载设置，坐标系设置）指令只能在主线程中使用，在子线程中这些指令将会被跳过，不会被执行。  

**示例：**  
&emsp;&emsp;thread_name为线程名称  
```
线程同步：
                          thread_join("thread_name")
线程销毁：
                          thread_destroy("thread_name")
```

&emsp;&emsp;此外子线程与主线程可以调用程序暂停指令，暂停指令执行后程序中所有的线程都将进入暂停状态；程序恢复将恢复所有线程继续运行。  

### 2.5.3 线程的调度  

&emsp;&emsp;用户在作业程序中创建的所有子线程保持相同的优先级，且不支持修改。在控制指令周期内仅允许一个线程拥有底层控制接口调用权，各线程之间需要通过竞争实现。在竞争的过程中，线程其他的任务也将被阻塞运行。  

### 2.5.4 线程的互斥  

&emsp;&emsp;多个线程同时访问共享数据或资源（如系统变量、IO控制等）时可能会冲突，JAKA机器人编程脚本提供进入和退出临界区域的操作接口以解决资源冲突。在进入该临界区域时，其他所有的线程将处于等待状态，直到线程退出临界区域。由于进入临界区域相当于独占运行权限，为保证其他线程能够正常运行，要求在进入与退出临界区域期间执行的指令尽量短。  

**示例：**  
```
thread_enter_critical()

# do some stuff

thread_exit_critical()
```

# <center>第3章 JAKA脚本预置函数 </center>

## 3.1 运动相关指令  

### movl-直线运动

函数名称:<br/>
&emsp;&emsp;movl(var_pos, rel_flag, vel, acc,tol,end_cond) - 直线运动

描述:<br/>
&emsp;&emsp;该函数用于控制机器人执行笛卡尔空间直线运动。

参数含义:<br/>
&emsp;&emsp;var_pos: 指定笛卡尔空间坐标（六元素数组变量，需提前定义）<br/>&emsp;&emsp;rel_flag: 指该段运动的运动类型。0是绝对运动（此时var_pos为笛卡尔空间某绝对位置）；1是相对于当前用户坐标系的增量运动（此时var_pos为笛卡尔空间位置增量）；2是相对于当前工具坐标系的增量运动。<br/>&emsp;&emsp;vel: 运动速度，单位mm/s。<br/>&emsp;&emsp;Acc : 直线加速度 单位: mm/ s^2。<br/>&emsp;&emsp;tol: 到达指定终点误差。用于指定终点误差。若为0，则将准确到达目标点；若为正值，则可能会与后续段混合，不能准确到达目标点。<br/>&emsp;&emsp;End_cond：指令跳过（不运行）条件选择。（可选参数。为一个包括3个参数的数组）<br/>&emsp;&emsp;end_cond=[di_type,di_index,di_state<br/>&emsp;&emsp;di_type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;di_index:  I/O选择（不同I/O类型所对应的I/O地址）<br/>&emsp;&emsp;di_state : I/O开关（0是关，1是开）

-----------------------------------------------------------------------------------------------------------
### movj-关节运动

函数名称:<br/>
&emsp;&emsp;movj(var_pos, rel_flag, vel, acc,tol,end_cond) - 关节运动

描述:<br/>
&emsp;&emsp;该函数用于控制机器人执行关节空间运动。

参数含义:<br/>
&emsp;&emsp;var_pos: 指定笛卡尔空间坐标（六元素数组变量，需提前定义）。<br/>&emsp;&emsp;rel_flag: 指该段运动的运动类型。0是绝对运动（此时var_pos为关节空间某绝对位置）；1是相对运动（此时var_pos为关节空间位置增量）。<br/>&emsp;&emsp;vel: 速度，单位deg/s。(实际运动时，将受各关节实际最大速度约束)。<br/>&emsp;&emsp;acc : 加速度，单位deg/s^2<br/>&emsp;&emsp;tol: 到达指定终点误差。若为0，则将准确到达目标点；若为正值，则可能会与后续段混合，不准确到达目标点。<br/>&emsp;&emsp;End_cond：指令跳过（不运行）条件选择。（可选参数。为一个包括3个参数的数组）。<br/>&emsp;&emsp;end_cond=[di_type,di_index,di_state]<br/>&emsp;&emsp;di_type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））。<br/>&emsp;&emsp;di_index: I/O选择（不同I/O类型所对应的I/O地址）。<br/>&emsp;&emsp;di_state :I/O开关（0是关，1是开）。

-----------------------------------------------------------------------------------------------------------
### enable_speed_override-设置全局速度

函数名称:<br/>
&emsp;&emsp;enable_speed_override(type, val, acc) - 设置全局速度。

描述:<br/>
&emsp;&emsp;该函数设置函数块的速度与加速度。

参数含义:<br/>
&emsp;&emsp;该函数设置函数块的速度与加速度。<br/>&emsp;&emsp;type:笛卡尔空间运动类型， 0表示笛卡尔空间运动类型，1表示关节空间运动类型。<br/>&emsp;&emsp;vel：直线速度。<br/>&emsp;&emsp;acc：直线加速度。<br/>&emsp;&emsp;type：笛卡尔空间运动类型， 0表示笛卡尔空间运动类型，1表示关节空间运动类型。

-----------------------------------------------------------------------------------------------------------
### movc-圆弧运动

函数名称:<br/>
&emsp;&emsp;movc(var_pos_mid,var_pos_end,rel_flag, vel, acc, tol, turn_cnt, end_cond) - 圆弧运动

描述:<br/>
&emsp;&emsp;该函数用于控制机器人执行笛卡尔圆弧空间运动。

参数含义:<br/>
&emsp;&emsp;var_pos_mid: 指定空间圆弧的中间经过点（六元素数组变量，需提前定义）<br/>&emsp;&emsp;var_pos_end: 指定空间圆弧的最终经过点（六元素数组变量，需提前定义）<br/>&emsp;&emsp;rel_flag: 指该段运动的运动类型。0是绝对运动（此时var_pos为为笛卡尔空间某绝对位置）；1是相对运动（此时var_pos为笛卡尔空间位置增量）<br/>&emsp;&emsp;vel: 线速度，单位mm/s。(实际运动时，将受各关节实际最大速度约束)<br/>&emsp;&emsp;acc：加速度，单位: mm/s^2<br/>&emsp;&emsp;tol: 到达指定终点误差。用于指定终点误差。若为0，则将准确到达目标点；若为正值，则可能会与后续段混合，不能准确到达目标点。<br/>&emsp;&emsp;turn_cnt: 圆弧运动圈数（非负实数，为可选参数）。当圈数为0时，则按三点确定圆弧运动；如果圈数为非0，则按三点确定的圆弧运动指定圈数，姿态保持初始点姿态与转轴的夹角相同。<br/>&emsp;&emsp;End_cond：指令跳过（不运行）条件选择。（可选参数。为一个包括3个参数的数组）<br/>&emsp;&emsp;end_cond=[di_type,di_index,di_state]<br/>&emsp;&emsp;di_type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3保留，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;di_index: I/O选择（不同I/O类型所对应的I/O地址）<br/>&emsp;&emsp;di_state :I/O开关（0是关，1是开）

-----------------------------------------------------------------------------------------------------------
### get_atl_joint_pose-获取机器人当前实际关节位置

函数名称:<br/>
&emsp;&emsp;get_atl_joint_pose() - 获取机器人当前实际关节位置。

描述:<br/>
&emsp;&emsp;该函数用于获取当前机器人实际关节位置。

参数含义:<br/>
&emsp;&emsp;无参数，返回值atlJntPos，表示返回当前的实际关节位置。

-----------------------------------------------------------------------------------------------------------
### get_atl_tcp_pose - 获取机器人当前实际末端工具中心点位姿

函数名称:<br/>
&emsp;&emsp;get_atl_tcp_pos() - 获取当前实际末端工具中心位姿。

描述:<br/>
&emsp;&emsp;该函数用于获取当前机器人实际末端工具中心点位姿。

参数含义:<br/>
&emsp;&emsp;无参数，返回值atlTcpPos，表示返回当前的实际工具末端中心点位姿。

-----------------------------------------------------------------------------------------------------------
### get_atl_flange_pose - 获取机器人当前末端法兰中心点位姿

函数名称:<br/>
&emsp;&emsp; get_atl_flange_pose() - 获取当前机器人末端法兰中心点位姿。

描述:<br/>
&emsp;&emsp;该函数用于返回当前机器人末端法兰中心点位姿。

参数含义:<br/>
&emsp;&emsp;无参数，返回值是atlFlangePos，表示返回当前实际末端法兰中心点位姿。

----------------------------------------------------------------------------------------------------
### disable_speed_override - 关闭全局速度

函数名称:<br/>
&emsp;&emsp;disable_speed_override(type) - 关闭全局速度.

描述:<br/>
&emsp;&emsp;该函数用于取消函数块的速度与加速度设置。

参数含义:<br/>
&emsp;&emsp;type：空间运动类型。0表示笛卡尔空间运动类型，1表示关节空间运动类型。

## 3.2 I/O指令

### set_digital_output - 设置数字输出

函数名称:<br/>
&emsp;&emsp;set_digital_output(type, index, tarState, immed) - 设置数字输出

描述:<br/>
&emsp;&emsp;该函数用于控制数字输出信号。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;index: 所控制数字输出的编号，0-based。<br/>&emsp;&emsp;tarState: 1 为 ON，0 为 OFF<br/>&emsp;&emsp;immed: 1 为 即时指令， 0 为 非即时指令。若为非即时指令，则该指令的实际执行则在下一条运动指令之前执行。<br/>&emsp;&emsp;**注：即时IO指令会打断不同运动段之间的转接，非即时仅限于控制柜DO/AO可用。**

### wait_input - 等待数字输入

函数名称:<br/>
&emsp;&emsp;wait_input( type, index, stat, time) - 等待数字输入

描述:<br/>
&emsp;&emsp;该函数用于等待指定输入变成指定状态，若超出最大等待时间，则置TIMEOUT状态标志，可用GETTIMEOUT函数查询。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;index：输入的索引<br/>&emsp;&emsp;stat: 期待的输入状态<br/>&emsp;&emsp;time：最长等待时间，0为无限等待

### set_analog_output - 设置模拟输出

函数名称:<br/>
&emsp;&emsp;set_analog_output(type, index, tarValue, immed) - 设置模拟输出

描述:<br/>
&emsp;&emsp;该函数用于控制模拟输出信号。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;index: 所控制模拟输出的编号，0-based。<br/>&emsp;&emsp;tarValue： Real类型值，用于指定模拟输出的目标值。<br/>&emsp;&emsp;immed: 1为即时指令，0为非即时指令。若为非即时指令，则该指令的实际执行则在下一条运动指令之前执行。<br/>&emsp;&emsp;**注：即时IO指令会打断不同运动段之间的转接，非即时仅限于控制柜DO/AO可用。**

### get_digital_output - 获取数字输出

函数名称:<br/>
&emsp;&emsp;get_digital_output(type, index) - 获取数字输出

描述:<br/>
&emsp;&emsp;该函数用于获取指定数字输出的状态。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;Index:数字的输出索引。<br/>&emsp;&emsp;函数返回查询结果：0 为 off, 1 为 on

### get_digital_input - 获取数字输入

函数名称:<br/>
&emsp;&emsp;get_digital_input(type, index) - 获取数字输出

描述:<br/>
&emsp;&emsp;该函数用于获取指定数字输入的状态。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;Index:数字的输入索引。<br/>&emsp;&emsp;函数返回查询结果：0 为 off, 1 为 on

### get_analog_output - 获取指定模拟输出

函数名称:<br/>
&emsp;&emsp;get_analog_output( type, index) - 获取指定模拟输出

描述:<br/>
&emsp;&emsp;该函数用于获取指定模拟输出的状态。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;Index:模拟的输出索引。<br/>&emsp;&emsp;函数返回double类型的查询结果。

### get_analog_input - 获取指定模拟输入

函数名称:<br/>
&emsp;&emsp;get_analog_input( type, index) - 获取指定模拟输入

描述:<br/>
&emsp;&emsp;该函数用于获取指定模拟输入的状态。

参数含义:<br/>
&emsp;&emsp;type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3表示继电器IO，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>&emsp;&emsp;Index：模拟的输入索引。<br/>&emsp;&emsp;函数返回double类型的查询结果。

### get_timeout - 获取wait_input指令的执行结果

函数名称:<br/>
&emsp;&emsp;get_timeout()- 获取wait_input指令的执行结果

描述:<br/>
&emsp;&emsp;该函数用于获取wait_input指令的执行结果， 1为等待超时，0为在指定时间内成功等到该信号。

参数含义:<br/>
&emsp;&emsp;无参数。

## 3.3 控制指令

### set_payload - 设置负载

函数名称:<br/>
&emsp;&emsp;set_payload(m, centriod) - 设置负载

描述:<br/>
&emsp;&emsp;该函数用于设置当前机器人负载：

参数含义:<br/>
&emsp;&emsp;m: 负载质量，单位kg,<br/>&emsp;&emsp;centriod: 负载质心，包含三个分量的数组,单位：mm<br/>&emsp;&emsp;X：质心的X轴坐标<br/>&emsp;&emsp;Y：质心的Y轴坐标<br/>&emsp;&emsp;Z：质心的Z轴坐标<br/>&emsp;&emsp;**注：该指令会同步运动，打断Blending。**

### get_payload - 获取当前机器人负载

函数名称:<br/>
&emsp;&emsp;get_payload() - 获取当前机器人负载

描述:<br/>
&emsp;&emsp;该函数用于获取当前机器人负载；

参数含义:<br/>
&emsp;&emsp;无参数，返回值是payload，为返回的机器人法兰末端总负载， payload[0]为负载质量（单位kg），payload[1]~[3]为负载质心（单位mm）。

### get_payload - 获取当前机器人负载

函数名称:<br/>
&emsp;&emsp;get_payload() - 获取当前机器人负载

描述:<br/>
&emsp;&emsp;该函数用于获取当前机器人负载；

参数含义:<br/>
&emsp;&emsp;无参数，返回值是payload，为返回的机器人法兰末端总负载， payload[0]为负载质量（单位kg），payload[1]~[3]为负载质心（单位mm）。

### set_collision_level - 设置碰撞灵敏度

函数名称:<br/>
&emsp;&emsp;set_collision_level(clsnLevel) - 设置碰撞灵敏度

描述:<br/>
&emsp;&emsp;该函数用于设置当前碰撞检测灵敏度。

参数含义:<br/>
&emsp;&emsp;clsnLevel： 碰撞灵敏度等级，可允许设置值为0,1,2,3,4,5，与实际碰撞力阈值关系如下：<br/>&emsp;&emsp;0：关闭；<br/>&emsp;&emsp;1：25N；<br/>&emsp;&emsp;2：50N；<br/>&emsp;&emsp;3：75N；<br/>&emsp;&emsp;4：100N；<br/>&emsp;&emsp;5：125N<br/>&emsp;&emsp;**注：该指令会同步运动，打断Blending。**

### get_collision_level - 获取当前碰撞检测灵敏度

函数名称:<br/>
&emsp;&emsp;get_collision_level() - 获取当前碰撞检测灵敏度。

描述:<br/>
&emsp;&emsp;该函数用于获取当前碰撞检测灵敏度。

参数含义:<br/>
&emsp;&emsp;无参数。返回值res。

### set_tool - 设置工具末端相对于末端法兰的位置偏置

函数名称:<br/>
&emsp;&emsp;set_tool(var_tool) - 设置工具末端相对于末端法兰的位置偏置。

描述:<br/>
&emsp;&emsp;该函数用于设置工具末端相对于末端法兰的位置偏置。法兰坐标系垂直端面向外为z轴正方向， 工具IO连接端口为y轴负方向。

参数含义:<br/>
&emsp;&emsp;var_tool 为工具末端相对于法兰坐标系的偏置，为6元素数组。

### set_tool_id - 设置工具坐标系id

函数名称:<br/>
&emsp;&emsp;set_tool_id(id) - 设置工具坐标系id。

描述:<br/>
&emsp;&emsp;该函数用于设置工具坐标系id

参数含义:<br/>
&emsp;&emsp;id：取值[0,10)，控制系统内最大支持10个工具，通过设置ID指定当前使用的工具偏置值。

### get_tool_offsets - 获取当前工具坐标系偏置值

函数名称:<br/>
&emsp;&emsp;get_tool_offsets() - 获取当前工具坐标系偏置值。

描述:<br/>
&emsp;&emsp;该函数用于获取当前工具坐标系偏置值。

参数含义:<br/>
&emsp;&emsp;无参数，返回值是res，为6元素数组。

### get_tool_offsets_of - 获取指定工具坐标系偏置值

函数名称:<br/>
&emsp;&emsp;get_tool_offsets_of(id) - 获取指定工具坐标系偏置值。

描述:<br/>
&emsp;&emsp;该函数用于获取指定工具坐标系偏置值

参数含义:<br/>
&emsp;&emsp;id为指定的工具坐标系，取值范围是[1, 10]。<br/>&emsp;&emsp;返回值是res，为6元素数组。

### set_user_frame - 设置用户坐标系

函数名称:<br/>
&emsp;&emsp;set_user_frame(user_frame) - 设置用户坐标系。

描述:<br/>
&emsp;&emsp;该函数用于设置用户坐标系。

参数含义:<br/>
&emsp;&emsp;设置时工具ID将设置为-1，程序中设置后不会被保存。user_frame为6元素数组。

### set_user_frame_id - 设置用户坐标系id

函数名称:<br/>
&emsp;&emsp;set_user_frame_id(id) - 设置用户坐标系id。

描述:<br/>
&emsp;&emsp;该函数用于设置用户坐标系id。

参数含义:<br/>
&emsp;&emsp;id：取值[0,10)，控制系统内最大支持10个工具，通过设置ID指定当前使用的工具偏置值。

### get_user_frame - 获取当前用户坐标系偏置值

函数名称:<br/>
&emsp;&emsp;get_user_frame() - 获取当前用户坐标系偏置值。

描述:<br/>
&emsp;&emsp;该函数用于获取当前用户坐标系偏置值。

参数含义:<br/>
&emsp;&emsp;无参数，返回值是res，为6元素数组。

### get_user_frame_of - 获取指定用户坐标系偏置值

函数名称:<br/>
&emsp;&emsp;get_user_frame_of(id) - 获取指定用户坐标系偏置值。

描述:<br/>
&emsp;&emsp;该函数用于获取指定用户坐标系偏置值，

参数含义:<br/>
&emsp;&emsp;id为指定的用户坐标系，取值范围是[1, 10]。返回值是res，为6元素数组。

### enable_conveyor_linear_track - 直线传送带跟踪

函数名称:<br/>
&emsp;&emsp;enable_conveyor_linear_track(dir, mm_per_pulse) - 直线传送带跟踪

描述:<br/>
&emsp;&emsp;该函数用于使能直线传送带跟踪。

参数含义:<br/>
&emsp;&emsp;dir：传送带方向，可以为X+, Y+, Z+, X-, Y-, Z-中的任意一个。<br/>&emsp;&emsp;mm_per_pulse:脉冲当量，即跟踪传送带上的编码器反馈每个脉冲对应传送带方向的位移（单位为mm）。

### enable_conveyor_circular_track - 圆形传送带跟踪

函数名称:<br/>
&emsp;&emsp;enable_conveyor_circular_track(convey_P1, convey_P2, convey_P3, rad_per_pulse, rotate_tool) - 圆形传送带跟踪

描述:<br/>
&emsp;&emsp;该函数用于使能圆形传送带跟踪。

参数含义:<br/>
&emsp;&emsp;convey_P1 = [P1x, P1y, P1z]:（共圆三点中）P1的位置<br/>&emsp;&emsp;convey_P2 = [P2x, P2y, P2z]:（共圆三点中）P2的位置<br/>&emsp;&emsp;convey_P3 = [P3x, P3y, P3z]:（共圆三点中）P3的位置<br/>&emsp;&emsp; convey_P1,convey_P2,convey_P3为传送带上共圆三点在世界坐标系下的位置坐标，在传送带转动方向依次选取，用于获取传送带圆心坐标系{O}在世界坐标系下的变换矩阵，可通过直接输入或示教得到；<br/>&emsp;&emsp;rad_per_pulse: 脉冲当量。指跟踪传送带的编码器每反馈一个脉冲对应地在Oz轴正方向(右手定则)上旋转的角度，使用弧度rad表示;<br/>&emsp;&emsp;rotate_tool：末端工具姿态随变。0：圆形传送带跟踪过程中末端姿态保持不变； 1：末端绕传送带轴线转动，姿态改变（APP默认为1）；<br/>&emsp;&emsp;**完成传送带跟踪后需要调用disable_convayor_track()来关闭传送带跟踪**

### disable_convayor_track - 关闭传送带跟踪

函数名称:<br/>
&emsp;&emsp;disable_convayor_track() - 关闭传送带跟踪

描述:<br/>
&emsp;&emsp;该函数用于关闭传送带跟踪。

参数含义:<br/>
&emsp;&emsp;该函数用于关闭传送带跟踪。

### create_thread  - 创建子线程

函数名称:<br/>
&emsp;&emsp;create_thread(thread_file_path, thread_name)  - 创建子线程

描述:<br/>
&emsp;&emsp;该函数用于创建子线程，并启动线程运行。

参数含义:<br/>
&emsp;&emsp;thread_file_path：线程文件在系统中的绝对路径；<br/>&emsp;&emsp;thread_name：线程的名字（自定义情况下默认在/usr/etc/jkzuc/scripts/program/下），线程辨识唯一字符串，不支持Unicode。线程名称重复会提示创建失败。

### thread_join  - 线程操作

函数名称:<br/>
&emsp;&emsp;thread_join(thread_name)  - 线程操作

描述:<br/>
&emsp;&emsp;该函数用于同步指定线程的操作，该函数仅在主线程中生效。

参数含义:<br/>
&emsp;&emsp;thread_name：线程的名字

### thread_destroy  - 线程销毁

函数名称:<br/>
&emsp;&emsp;thread_destroy(thread_name) - 线程销毁

描述:<br/>
&emsp;&emsp;该函数用于销毁指定线程的操作，该函数仅在主线程中生效。

参数含义:<br/>
&emsp;&emsp;thread_name：线程的名字

### thread_enter_critical  - 线程进入临界区

函数名称:<br/>
&emsp;&emsp;thread_enter_critical() - 线程进入临界区

描述:<br/>
&emsp;&emsp;该函数用于线程进入临界区操作。

### thread_exit_critical  - 线程进入临界区

函数名称:<br/>
&emsp;&emsp;thread_enter_critical() - 线程退出临界区

描述:<br/>
&emsp;&emsp;该函数用于线程退出临界区操作。

### log_message  - 查看日志

函数名称:<br/>
&emsp;&emsp;log_message(level, message) - 查看日志

描述:<br/>
&emsp;&emsp;该函数用于用户自行添加日志信息。

参数含义:<br/>
&emsp;&emsp;level，日志消息类型。具体定义如下：<br/>&emsp;&emsp;INFO:1，指的是消息; <br/>&emsp;&emsp;WARNING:2，指的是警告;<br/>&emsp;&emsp;ERROR:3，指的是错误;<br/>&emsp;&emsp;message：日志消息文本。不支持Unicode类型。

### get_system_clock - 获取系统实时闹钟

函数名称:<br/>
&emsp;&emsp;get_system_clock() - 获取系统实时闹钟

描述:<br/>
&emsp;&emsp;该函数用户获取系统实时时钟。

参数含义:<br/>
&emsp;&emsp;无参数，返回值是clock，为double类型浮点数，单位为ms（毫秒），精确到ns. 底层使用CLOCK_MONOTONIC，即本次系统启动后流逝的时钟数。

### sleep - 等待

函数名称:<br/>
&emsp;&emsp;sleep(time) - 等待

描述:<br/>
&emsp;&emsp;该函数用于延时一段时间。

参数含义:<br/>
&emsp;&emsp;time: 延时时间长度，单位s。<br/>&emsp;&emsp;**注：该指令会打断不同运动段之间的混合。**

### pause - 暂停

函数名称:<br/>
&emsp;&emsp;pause() - 暂停

描述:<br/>
&emsp;&emsp;该函数用于程序暂停操作，程序中调用该指令时，所有线程都将暂停。

参数含义:<br/>
&emsp;&emsp;time: 无参数，无返回值。

### exit - 终止

函数名称:<br/>
&emsp;&emsp;exit() - 终止

描述:<br/>
&emsp;&emsp;该函数用于控制作业程序终止。

参数含义:<br/>
&emsp;&emsp;time: 无参数，无返回值。

## 3.4 计算指令

### atan2 - 求反正切值

函数名称:<br/>
&emsp;&emsp;atan2() - 求反正切值

描述:<br/>
&emsp;&emsp;该函数用于求角度的反正切值，arg_y/arg_x 的反正切，返回值单位为°

### abs - 求绝对值

函数名称:<br/>
&emsp;&emsp;abs() - 求绝对值

描述:<br/>
&emsp;&emsp;该函数用于求表达式的绝对值

### acos - 求反余弦值

函数名称:<br/>
&emsp;&emsp;acos() - 求反余弦值

描述:<br/>
&emsp;&emsp;该函数用于求反余弦函数，返回值单位为°

### asin - 求反正切值

函数名称:<br/>
&emsp;&emsp;asin() - 求反正弦值

描述:<br/>
&emsp;&emsp;该函数用于求反正弦函数，返回值单位为°

### cos - 求余弦值

函数名称:<br/>
&emsp;&emsp;cos() - 求余弦值

描述:<br/>
&emsp;&emsp;该函数用于求余弦函数，返回值单位为°

### sin - 求正弦值

函数名称:<br/>
&emsp;&emsp;sin() - 求正弦值

描述:<br/>
&emsp;&emsp;该函数用于求正弦函数，返回值单位为°

### tan - 求正切值

函数名称:<br/>
&emsp;&emsp;tan() - 求正切值

描述:<br/>
&emsp;&emsp;该函数用于求正切函数，返回值单位为°

### floor - 向下取整

函数名称:<br/>
&emsp;&emsp;floor() - 向下取整

描述:<br/>
&emsp;&emsp;该函数用于向下取整。

### ceil - 向上取整

函数名称:<br/>
&emsp;&emsp;ceil() - 向上取整

描述:<br/>
&emsp;&emsp;该函数用于向上取整。

### round - 四舍五入取整

函数名称:<br/>
&emsp;&emsp;round() - 四舍五入取整

描述:<br/>
&emsp;&emsp;该函数用于四舍五入取整。

### sqrt - 取平方根

函数名称:<br/>
&emsp;&emsp;sqrt() - 取平方根

描述:<br/>
&emsp;&emsp;该函数用于取平方根。

### red2deg - 弧度转角度

函数名称:<br/>
&emsp;&emsp;red2deg() - 弧度转角度

描述:<br/>
&emsp;&emsp;该函数用于弧度转角度。

### deg2red - 角度转弧度

函数名称:<br/>
&emsp;&emsp;deg2red() - 角度转弧度

描述:<br/>
&emsp;&emsp;该函数用于角度转弧度。

### pose_add - 相加位置计算

函数名称:<br/>
&emsp;&emsp;pose_add(pose1, pose2) - 相加位置计算

描述:<br/>
&emsp;&emsp;该函数用于计算两个位姿之和并返回计算结果。

参数含义:<br/>
&emsp;&emsp;pos1：第一个位姿<br/>&emsp;&emsp;pos2：第二个位姿<br/>&emsp;&emsp;其中，位置进行简单累加计算；姿态计算公式为：<br/>&emsp;&emsp;R_res = R_pos2 * R_pos1<br/>&emsp;&emsp;**注意上述R为表示旋转矩阵**

### pose_sub - 相减位置计算

函数名称:<br/>
&emsp;&emsp;pose_sub(pose1, pose2) - 相减位置计算

描述:<br/>
&emsp;&emsp;该函数用于计算两个位姿之差并返回计算结果。

参数含义:<br/>
&emsp;&emsp;pos1：第一个位姿<br/>&emsp;&emsp;pos2：第二个位姿<br/>&emsp;&emsp;其中，位置进行简单累加计算；姿态计算公式为：<br/>&emsp;&emsp;R_res = inv(R_pos2) * R_pos1<br/>&emsp;&emsp;**注意上述R为表示旋转矩阵**

### pose_inv - 逆变换位置计算

函数名称:<br/>
&emsp;&emsp;pose_inv(pose1, pose2) - 逆变换位置计算

描述:<br/>
&emsp;&emsp;该函数用于计算某个位置的逆变换， 并返回pose形式的计算结果。

参数含义:<br/>
&emsp;&emsp;pos：一个位姿

### pose_trans - 位置变换位置计算

函数名称:<br/>
&emsp;&emsp;pose_trans(p_from, p_from_to) - 位置变换位置计算

描述:<br/>
&emsp;&emsp;该函数用于计算位置变换，并返回位置结果。

参数含义:<br/>
&emsp;&emsp;p_from：第一个位姿<br/>&emsp;&emsp;p_from_to：第二个位姿<br/>&emsp;&emsp;计算公式如下：<br/>&emsp;&emsp;p_res = p_from * p_from_to

### pose_dist - 计算位置距离

函数名称:<br/>
&emsp;&emsp;pose_dist(pose1,pose2) - 计算位置距离

描述:<br/>
&emsp;&emsp;该函数用于计算两个位姿之间的距离。仅考虑位置坐标。函数返回计算结果。

参数含义:<br/>
&emsp;&emsp;pos1：第一个位姿<br/>&emsp;&emsp;pose：第二个位姿<br/>&emsp;&emsp;计算公式如下：<br/>&emsp;&emsp;p_res = p_from * p_from_to

### pose_intpl - 计算插补点

函数名称:<br/>
&emsp;&emsp;pose_intpl(pose1,pose2,alpha) - 计算插补点

描述:<br/>
&emsp;&emsp;该函数按照给定的系数计算两点之间的插补点。

参数含义:<br/>
&emsp;&emsp;pos1：第一个位姿<br/>&emsp;&emsp;pose：第二个位姿<br/>&emsp;&emsp;alpha：系数<br/>&emsp;&emsp;计算公式如下：<br/>&emsp;&emsp;p_res = pos1 + (pos2 - pos1) * alpha <br/>&emsp;&emsp;其中alpha >= 0 且 alpha <= 1包含姿态且其插值方法是同公式为线性插值

### xy_plane_trans - XY平面位姿变换

函数名称:<br/>
&emsp;&emsp;xy_plane_trans(posebase, dx, dy, drz) - XY平面位姿变换

描述:<br/>
&emsp;&emsp;该函数将刚体在XY平面内做变换，在posebase处先绕Z轴旋转drz度，然后沿X轴平移dx，沿Y轴平移dy。

参数含义:<br/>
&emsp;&emsp;Posebase：基点<br/>&emsp;&emsp;dx：X轴平移<br/>&emsp;&emsp;dy：Y轴平移<br/>&emsp;&emsp;drz：Z轴旋转<br/>&emsp;&emsp;函数返回变换后的位姿。

### yz_plane_trans - YZ平面位姿变换

函数名称:<br/>
&emsp;&emsp;yz_plane_trans(posebase, dy, dz, drx) - YZ平面位姿变换

描述:<br/>
&emsp;&emsp;该函数将刚体在YZ平面内做变换，在posebase处先绕X轴旋转drx度，然后沿Y轴平移dy，沿Z轴平移dz。

参数含义:<br/>
&emsp;&emsp;Posebase：基点<br/>&emsp;&emsp;dy：Y轴平移<br/>&emsp;&emsp;dz：Z轴平移<br/>&emsp;&emsp;drx：X轴旋转<br/>&emsp;&emsp;函数返回变换后的位姿。

### zx_plane_trans - ZX平面位姿变换

函数名称:<br/>
&emsp;&emsp;zx_plane_trans(posebase, dz, dx, dry) - ZX平面位姿变换

描述:<br/>
&emsp;&emsp;该函数将刚体在ZX平面内做变换，在posebase处先绕Y轴旋转dry度，然后沿Z轴平移dz，沿X轴平移dx。

参数含义:<br/>
&emsp;&emsp;Posebase：基点<br/>&emsp;&emsp;dz：Z轴平移<br/>&emsp;&emsp;dx：X轴平移<br/>&emsp;&emsp;dry：Y轴旋转<br/>&emsp;&emsp;函数返回变换后的位姿。

### kine_forward - 运动学正解

函数名称:<br/>
&emsp;&emsp;kine_forward(posJ) - 运动学正解

描述:<br/>
&emsp;&emsp;该函数用于计算运动学正解。功能为计算输入的关节角度的所在笛卡尔空间位置。

参数含义:<br/>
&emsp;&emsp;posJ：关节角度值<br/>&emsp;&emsp;函数返回正运动学计算结果。

### is_pose_reachable - 判断能否到达

函数名称:<br/>
&emsp;&emsp;is_pose_reachable(posP) - 判断能否到达

描述:<br/>
&emsp;&emsp;该函数判断在当前位姿下，是否能够以通过笛卡尔空间运动指令运动至posP。

参数含义:<br/>
&emsp;&emsp;posP：指定位姿<br/>&emsp;&emsp;若可以到达指定位姿则返回1(条件为真)，否则返回0(条件为假)。

## 3.5 字符指令

### string_concat - 字符串拼接

函数名称:<br/>
&emsp;&emsp;string_concat(str1, str2) - 字符串拼接

描述:<br/>
&emsp;&emsp;该函数用于两个字符串的拼接，并返回拼接后的字符串。

参数含义:<br/>
&emsp;&emsp;str1: 带拼接的子字符串，变量或者常量；<br/>&emsp;&emsp;str2: 待拼接的子字符串，变量或者常量；<br/>&emsp;&emsp;有返回值strRes，为字符串拼接结果。

### get_length - 字符串或数组长度

函数名称:<br/>
&emsp;&emsp;get_length(str_or_arr) - 字符串或数组长度

描述:<br/>
&emsp;&emsp;该函数用于获取字符串或数组的长度。

参数含义:<br/>
&emsp;&emsp;str_or_arr：字符串或者数组<br/>&emsp;&emsp;如果参数数据类型不匹配，则会报错。

### strcmp - 字符串比较

函数名称:<br/>
&emsp;&emsp;strcmp(str1, str2) - 字符串比较

描述:<br/>
&emsp;&emsp;该函数用于两个字符串间的比较。 若str1=str2，则返回零； 若str1<str2，则返回负数； 若str1>str2，则返回正数。

参数含义:<br/>
&emsp;&emsp;str1：第一个字符串<br/>&emsp;&emsp;str2：第二个字符串

### sprintf - 格式化输出字符串

函数名称:<br/>
&emsp;&emsp;sprintf(bufferOut, stringFormat, ...) - 格式化输出字符串

描述:<br/>
&emsp;&emsp;该函数用于对字符串的格式化输出，即将指定数据按指定格式输出为字符串。

参数含义:<br/>
&emsp;&emsp;bufferOut: 格式化后的字符串结果，变量需事先定义；<br/>&emsp;&emsp;stringFormat: 定义格式字符串，目前仅支持变量形式。支持对%f, %d, %s三种类型变量的格式化。格式如：“%f, %s, %d, ...”。<br/>&emsp;&emsp;...: 待格式化变量，可变参数。支持整形，浮点型以及字符串类型的变量，或者常数。<br/>&emsp;&emsp;strLen: 如果格式化成功返回字符串的长度，否则返回-1。

### sscanf - 格式化输入字符串

函数名称:<br/>
&emsp;&emsp;sscanf( bufferIn, stringFormat, ...) - 格式化输入字符串

描述:<br/>
&emsp;&emsp;该函数用于对字符串的格式化输入，即将匹配一定格式的字符串将数据输入到变量中。

参数含义:<br/>
&emsp;&emsp;bufferIn: 待匹配的字符串，目前仅支持变量格式；<br/>&emsp;&emsp;stringFormat: 定义格式字符串，目前仅支持变量形式。支持对%f, %d, %s三种类型变量的格式化。格式如：“%f, %s, %d, ...”。<br/>&emsp;&emsp;%s 匹配字符串，读取连续字符直到遇到一个空格字符（空白、换行和制表符等）或格式化字符串中下一个匹配字符（非%s、%f、%d）。<br/>&emsp;&emsp;%d 匹配十进制整数：数字前面的+或-号可选。<br/>&emsp;&emsp;%f 匹配一个浮点数。<br/>&emsp;&emsp;...: 格式化结果变量，可变参数。支持整形，浮点型以及字符串类型的变量，或者常数。<br/>&emsp;&emsp;resNum: 如果格式化成功返回匹配的变量的数目，否则返回-1。

### get_string_from_array - 数组转换为字符串

函数名称:<br/>
&emsp;&emsp;get_string_from_array(arrayIn, splittingToken, stringOut) - 数组转换为字符串

描述:<br/>
&emsp;&emsp;该函数用于将给定数组变量转换为字符串。

参数含义:<br/>
&emsp;&emsp;arrayIn：用户给定的数组；<br/>&emsp;&emsp;splittingToken：字符串格式的分隔符;<br/>&emsp;&emsp;stringOut：转换成功后字符串。<br/>&emsp;&emsp;如果转换成功，函数返回字符串的长度（不包含截止符），失败则返回-1。

### get_array_from_string - 字符串转换为数组

函数名称:<br/>
&emsp;&emsp;get_array_from_string(stringIn, splittingToken, arrayOut) - 字符串转换为数组

描述:<br/>
&emsp;&emsp;该函数用于将给定字符串转换为数组变量。

参数含义:<br/>
&emsp;&emsp;arrayIn：stringIn：用户给定的字符串（包含各数组中的数据）；<br/>&emsp;&emsp;splittingToken：字符串格式的分隔符；<br/>&emsp;&emsp;arrayOut：转换成功后的数组。<br/>&emsp;&emsp;如果转换成功，函数返回arrayOut的元素数量，失败则返回-1。

## 3.6 通讯指令

### socket_open - 打开socket

函数名称:<br/>
&emsp;&emsp;socket_open(ip, port) - 打开socket

描述:<br/>
&emsp;&emsp;该函数用于打开指定的IP与端口号，并将创建的SOCKET句柄保存在变量并返回。

参数含义:<br/>
&emsp;&emsp;ip:为字符串形式TCP服务器地址，如”192.168.1.10”;<br/>&emsp;&emsp;port:为TCP服务器端口号.

### socket_close - 关闭socket

函数名称:<br/>
&emsp;&emsp;socket_close(sockid) - 打开socket

描述:<br/>
&emsp;&emsp;该函数用于关闭指定的套接字。

参数含义:<br/>
&emsp;&emsp;sockid: 需要关闭的套接字连接。

### socket_get_var - 请求远端对参数的设置

函数名称:<br/>
&emsp;&emsp;socket_get_var(sockid, type, argname, timeout) - 请求远端对参数的限制

描述:<br/>
&emsp;&emsp;该函数用于请求远端对参数的设置。

参数含义:<br/>
&emsp;&emsp;sockid:套接字ID，需事先创建；<br/>&emsp;&emsp;type: 参数类型, 0为整型，1为浮点数，2为字符串；<br/>&emsp;&emsp;argname: 字符串类型的变量名，表示想要获取的变量的值，形式可为”argname”, 或**<**argname**>**；<br/>&emsp;&emsp;timeout: 获取反馈等待超时，0为永久等待；<br/>&emsp;&emsp;varname: 返回值存储变量。<br/>&emsp;&emsp;该函数将通过socket发送字符串： get **<**arg_varname**>**，并期望接收数据格式：**<**arg_varname**><**value**>**，2s时间的超时，超时后返回0。<br/>&emsp;&emsp;当期望发送一个数组时，上位机发送格式为：<br/>&emsp;&emsp;**<**arrName**><**{num1, num2, ..., numN}**>**<br/>&emsp;&emsp;当期望发送一个字符串时，上位机发送格式为：<br/>&emsp;&emsp;**<**strName**><**”stringValue”**>**


### socket_read_string - Socket接收变量

函数名称:<br/>
&emsp;&emsp;socket_read_string(sockid, prefix, suffix, timeout) - Socket接收变量

描述:<br/>
&emsp;&emsp;该函数用于通过指定的套接字从外界获取一段字符串，并存储在变量中。

参数含义:<br/>
&emsp;&emsp;sockid: 套接字ID，需事先创建;<br/>&emsp;&emsp;prefix: 期望接收的字符串的前缀要求；<br/>&emsp;&emsp;suffix: 期望接收的字符串的后缀要求；<br/>&emsp;&emsp;timeout: 获取反馈等待超时，0为永久等待；<br/>&emsp;&emsp;res: 接收的数据结果。2s的超时，若接收失败，将返回空的字符串。<br/>&emsp;&emsp;函数发送格式为get#string#prefix#suffix#，期望接收数据格式为”prefixSTRINGsuffix”

### socket_read_real - Socket接收数组

函数名称:<br/>
&emsp;&emsp;socket_read_real(sockid, num, timeout) - Socket接收数组

描述:<br/>
&emsp;&emsp;该函数用于通过制定的套接字从外界获取（一组）数，并存储在数组变量中。

参数含义:<br/>
&emsp;&emsp;sockid: 套接字ID，需事先创建;<br/>&emsp;&emsp;num: 期望接收的数的数量；<br/>&emsp;&emsp;timeout: 获取反馈等待超时，0为永久等待；<br/>&emsp;&emsp;res: 接收的数据结果，若接收失败，则返回标量0，成功接收则均存在数组中。2s的超时，若接收失败，将返回0。<br/>&emsp;&emsp;函数发送格式为get#real#num#，期望接收数据格式为{num1, num2, ..., numN}

### socket_send - Socket发送变量

函数名称:<br/>
&emsp;&emsp;socket_send(sockid, var) - Socket发送变量

描述:<br/>
&emsp;&emsp;该函数用于通过指定的SOCKET以字符串形式发送一个变量的值。

参数含义:<br/>
&emsp;&emsp;sockid: 套接字ID，需事先创建;<br/>&emsp;&emsp;var: 期望发送的变量，变量目前支持Number，Number数组，以及 String类型。发送数组时，发送的字符串格式为”{Num1, Num2, ...}”<br/>&emsp;&emsp;返回值是res，为 发送结果标志。2s的发送超时，如果发送成功，返回1，否则返回0。<br/>&emsp;&emsp;发送的数据格式为 **<**varName**><**varValue**>**<br/>&emsp;&emsp;**<**intVar**><**12**>**<br/>&emsp;&emsp;**<**strVar**><**”string”**>**<br/>&emsp;&emsp;**<**listVar**><**{ele1, ele2, ele3, ...}**>**

### socket_recv - Socket接收数据

函数名称:<br/>
&emsp;&emsp;socket_recv(sockid, timeout) - Socket接收数据

描述:<br/>
&emsp;&emsp;该函数用于从指定的socket接收数据，用户可设置超时时间。

参数含义:<br/>
&emsp;&emsp;sockid: 套接字ID，需事先创建;<br/>&emsp;&emsp;timeout: 接收超时设置，超时未接受到数据，将返回空字符串。<br/>&emsp;&emsp;正常接收，函数返回接收的字符串。如果超时未接收到数据，返回为空字符串，如果网络问题，则会返回标量-1。<br/>&emsp;&emsp;**注：该指令单纯用于接收数据，不会向另一连接端发送请求。**

### tio_update_signal - 刷新信号量

函数名称:<br/>
&emsp;&emsp;tio_update_signal(strId, freq) - 刷新信号量

描述:<br/>
&emsp;&emsp;该函数用于以一定周期刷新指定的TIO Modbus RTU信号。

参数含义:<br/>
&emsp;&emsp;strId：信号量的标识符；<br/>&emsp;&emsp;freq：为0时，仅刷新一次；为其他正值时为刷新频率，刷新频率内部自动受限于CAN通讯瓶颈。

### tio_get_signal_value - 获取信号量状态

函数名称:<br/>
&emsp;&emsp;tio_get_signal_value(strId) - 获取信号量状态

描述:<br/>
&emsp;&emsp;该函数用于获取指定信号的值。

参数含义:<br/>
&emsp;&emsp;strId：信号量的标识符。

### tio_send_command - Modbus指令发送

函数名称:<br/>
&emsp;&emsp;tio_send_command(chnId, cmdBuf, crcType) - Modbus指令发送

描述:<br/>
&emsp;&emsp;该函数用于向指定的TIO RS485通道发送字节数据。

参数含义:<br/>
&emsp;&emsp;chnId为通道编号，0为RS485通道1， 1为RS485通道2；<br/>&emsp;&emsp;cmdBuf为字节数组；<br/>&emsp;&emsp;crcType：发送数据类型，当且指定通道为RS485透传时生效，Modbus RTU时写0.

## 3.7 子程序

1.指令类型子程序<br/>&emsp;&emsp;(1)含义:把一段指令序列组成一个相对独立的程序段，在编程中加入这个程序段则程序会运行这个程序段里的指令序列，在执行完成后会返回到原来位置继续运行程序。这个相对独立的程序段就是子程序。<br/>&emsp;&emsp;(2)用法:添加一个指令编辑类型的子程序，在子程序里编辑一个独立程序段并保存，在主程序中可随时添加此子程序并可重复使用。<br/>

2.脚本类型子程序<br/>&emsp;&emsp;(1)含义:子程序内容为编写的规定格式的脚本语法。<br/>&emsp;&emsp;(2)用法:添加一个脚本编辑类型的子程序，在子程序中编辑所需的规定格式的脚本语法并保存，在主程序中可随时添加此子程序并可重复使用。

## 3.8 变量

### 系统变量
含义:<br/>
&emsp;&emsp;系统变量。

用法:<br/>
&emsp;&emsp;可在编程时或系统设置处创建并使用，任意程序中均可使用，支持数字类型。

### 程序变量
含义:<br/>
&emsp;&emsp;程序变量。

用法:<br/>
&emsp;&emsp;可在编程时创建并使用，且无法在其他程序中使用，支持数字、数组、字符串类型。

### 速度变量
含义:<br/>
&emsp;&emsp;速度变量。

用法:<br/>
&emsp;&emsp;可在编程时创建并使用，且无法在其他程序中使用，可在全局速度指令中使用。

### 位置变量
含义:<br/>
&emsp;&emsp;位置变量。

用法:<br/>
&emsp;&emsp;可在编程时创建并使用，且无法在其他程序中使用，可在运动指令或位置计算指令中使用。

### 设置变量
含义:<br/>
&emsp;&emsp;对变量进行赋值。

用法:<br/>
&emsp;&emsp;输入框中可输入定值、变量或SOCKET获取的值等，将数据赋值到变量中。

## 3.9 扩展

### set_compliance_ft_config - 恒力柔顺参数设置

函数名称:<br/>
&emsp;&emsp;set_compliance_ft_config(id.admitctrlconfig,immed) - 恒力柔顺参数设置

描述:<br/>
&emsp;&emsp;该函数用于恒力柔顺控制配置。

参数含义:<br/>
&emsp;&emsp;id: 代表配置轴编号[0,5] <br/>&emsp;&emsp;admitctrlconfig是配置参数数组。<br/>&emsp;&emsp;admitctrlconfig=[opt,FTuser,FTreboundK,FTconstant,FTnormalTrack]<br/>&emsp;&emsp;(1)opt: 柔顺方向，可选值为 1 2 3 4 5 6分别对应 fx fy fz mx my mz，0代表没有勾选；<br/>&emsp;&emsp;(2)FTuser：阻尼力，用户用多大的力才能让机器人沿着某个方向以最大速度进行运动。设置的力和力矩值范围是需大于0；<br/>&emsp;&emsp;(3)FTreboundK：回弹，回弹是机器人回到初始状态的能力。设置的力和力矩值范围需大于0；<br/>&emsp;&emsp;(4)FTconstant: 恒力；<br/>&emsp;&emsp;(5)FTnormalTrack：方向跟踪，1代表跟踪，0则相反；<br/>&emsp;&emsp;immed: 1 为 即时指令， 0 为 非即时指令。若为非即时指令，则该指令的实际执行则在下一条运动指令之前执行

### enable_force_control - 开启恒力/速度柔顺控制

函数名称:<br/>
&emsp;&emsp;enable_force_control(type, compensation) - 开启恒力/速度柔顺控制

描述:<br/>
&emsp;&emsp;该函数用于开启恒力/速度柔顺控制。

参数含义:<br/>
&emsp;&emsp;柔顺控制类型配置和传感器补偿<br/>&emsp;&emsp;(1)type： 0 代表不使用任何一种柔顺控制；1 代表 恒力柔顺控制；2 代表 速度柔顺控制；<br/>&emsp;&emsp;(2)compensation: 1 代表开启传感器补偿；0 代表关闭传感器补偿。

### set_compliance_velocity_level - 速度柔顺参数设置

函数名称:<br/>
&emsp;&emsp;set_compliance_velocity_level(velCompliantCtrl) - 速度柔顺参数设置

描述:<br/>
&emsp;&emsp;该函数用于设置速度柔顺控制阶梯速度。

参数含义:<br/>
&emsp;&emsp;在速度模式下，当机器人末端受力大于控制器设定值时，机器人会按照设定的倍率进行减速，直至传感器检测值小于控制力设定值。速度柔顺控制阶梯速度分三个等级，并且  1 > rate1  > rate2 > rate3 > rate4 >0<br/>&emsp;&emsp;(1)等级为1时，只能设置rate1,rate2两个等级。rate3,rate4的值为0<br/>&emsp;&emsp;(2)等级为2时，只能设置rate1,rate2，rate3 三个等级。rate4的值为0<br/>&emsp;&emsp;(3)等级为3时，能设置 rate1,rate2，rate3,rate4 4个等级<br/>

&emsp;&emsp;velCompliantCtrl：不同缩减模式下的速度柔顺控制阶梯等级数组<br/>&emsp;&emsp;velCompliantCtrl = [level,rate1,rate2，rate3,rate4]<br/>&emsp;&emsp;level：缩减模式<br/>&emsp;&emsp;rate1：速度等级（第一列）<br/>&emsp;&emsp;rate2：速度等级（第二列）<br/>&emsp;&emsp;rate3：速度等级（第三列）<br/>&emsp;&emsp;rate4：速度等级（第四列）

### set_compliance_condition - 设置速度柔顺控制模式下的控制力

函数名称:<br/>
&emsp;&emsp;set_compliance_condition(compliantCondition) - 设置速度柔顺控制模式下的控制力

描述:<br/>
&emsp;&emsp;该函数用于设置速度柔顺控制力。

参数含义:<br/>
&emsp;&emsp;(1)set_compliance_condition的参数是一个数组，设置力和力矩的停止条件。当机器人的实际力大于这个条件的时候，机器人开始按set_compliance_velocity_level设定的倍率减速。<br/>&emsp;&emsp;(2)fx,fy,fz,tx,ty,tz的范围是：大于0。<br/>&emsp;&emsp;

&emsp;&emsp;compliantCondition：不同方向下的控制力数组<br/>&emsp;&emsp;compliantCondition = [fx,fy,fz,tx,ty,tz]<br/>&emsp;&emsp;fx：方向Fx的控制力<br/>&emsp;&emsp;fy：方向Fy的控制力<br/>&emsp;&emsp;fz：方向Fz的控制力<br/>&emsp;&emsp;tx：方向Mx的控制力<br/>&emsp;&emsp;tx：方向My的控制力<br/>&emsp;&emsp;tx：方向Mz的控制力

### disable_force_control - 该函数用于关闭力控

### set_end_force_condition - 设置力控终止条件

函数名称:<br/>
&emsp;&emsp;set_end_force_condition(axis,condition) - 设置力控终止条件

描述:<br/>
&emsp;&emsp;该函数用于设置力控终止条件。设置力控终止条件，不能立即生效，默认是非即时指令。

参数含义:<br/>
&emsp;&emsp;condition= [enableEndCond,lowFlag,lowLimitForce,upFlag,upLimitForce]<br/>&emsp;&emsp;axis:代表轴号，取值范围是[0,5]<br/>&emsp;&emsp;enableEndCond:是否使能，1代表生效，0则相反<br/>&emsp;&emsp;lowFlag:运动终止力下限生效标志位，1代表生效，0则相反<br/>&emsp;&emsp;lowLimitForce:运动终止力下限<br/>&emsp;&emsp;upFlag:运动终止力上限生效标志位，1代表生效， 0则相反<br/>&emsp;&emsp;upLimitForce:运动终止力上限。

### set_force_control_frame - 设置力控坐标系

函数名称:<br/>
&emsp;&emsp;set_force_control_frame(ftFrame) - 设置力控坐标系

描述:<br/>
&emsp;&emsp;该函数用于设置力控坐标系。 

参数含义:<br/>
&emsp;&emsp;ftFrame：工具坐标系世界坐标系的选择。<br/>&emsp;&emsp;0 表示工具坐标系，1 代表世界坐标系

### get_sensor_torque - 获取力矩底座或末端例句传感器的力矩值

函数名称:<br/>
&emsp;&emsp;get_sensor_torque(type) - 获取力矩底座或末端例句传感器的力矩值

描述:<br/>
&emsp;&emsp;该函数用于获取力矩底座或末端力矩传感器的力矩值。该值为补偿传感器末端负载后的净力矩值。 

参数含义:<br/>
&emsp;&emsp;type: 0为末端力矩传感器，1为底座力矩传感器（暂不支持）

<script>
// 在页面加载完成后执行重定向
window.onload = function() {
  // 执行重定向到新网站
  window.location.replace("https://www.jaka.com/docs/");
};
</script>