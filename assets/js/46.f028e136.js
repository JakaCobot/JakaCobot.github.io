(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1767:function(t,a,n){"use strict";n.r(a);var s=n(81),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"addon配置文件规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addon配置文件规范"}},[t._v("#")]),t._v(" AddOn配置文件规范")]),t._v(" "),a("h2",{attrs:{id:"_1-文件编码要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件编码要求"}},[t._v("#")]),t._v(" 1.文件编码要求")]),t._v(" "),a("p",[t._v("要求使用UTF-8编码")]),t._v(" "),a("h2",{attrs:{id:"_2-文件命名要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件命名要求"}},[t._v("#")]),t._v(" 2.文件命名要求")]),t._v(" "),a("p",[t._v('"AddOnName"+"_config.ini"，例如JAKA_Command_config.ini。')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),a("p",[t._v("此处的“AddOnName”强制要求和该AddOn文件夹同名，否则将无法正常启动AddOn。")])]),t._v(" "),a("h2",{attrs:{id:"_3-文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-文件内容"}},[t._v("#")]),t._v(" 3.文件内容")]),t._v(" "),a("p",[t._v("一个典型的AddOn配置文件如下所示：")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("AddOnInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("convention")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("JAKA_Command")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("description")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[t._v("在日志中输出信息")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("portal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10006")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://localhost/myAddOnUi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("languagetype")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("node-red")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("AddOn.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("serviceenabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-字段说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-字段说明"}},[t._v("#")]),t._v(" 4.字段说明：")]),t._v(" "),a("p",[a("code",[t._v("convention")]),a("br"),t._v("\nAddOn包解析器版本。若不填或所填解析器版本错误则APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。"),a("br"),t._v(" "),a("code",[t._v("name")]),a("br"),t._v("\nAddOn包名称，启动AddOn时会自动同步为AddOn文件夹的名称。在APP附加程序界面显示对应为“程序名”。"),a("br"),t._v(" "),a("code",[t._v("description")]),a("br"),t._v("\nAddOn功能描述，在APP附加程序界面显示对应为“描述”。长度限制在35个字符以内，超出APP附加程序界面的“版本号”则显示“INVALID”,且“描述”显示为空，APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。"),a("br"),t._v(" "),a("code",[t._v("version")]),a("br"),t._v("\nAddOn自身版本号，可以自定义。在APP附加程序界面对应为“版本号”。")]),t._v(" "),a("p",[a("code",[t._v("type")]),a("br"),t._v("\nAddOn类型：1代表自定义指令，2代表自定义服务，3代表自定义页面。填1或2在APP附加程序界面没有小地球按钮，填3会出现小地球按钮。若不填或填其他数值及字符无效，APP附加程序界面的“版本号”将显示“INVALID”,且“描述”显示为空。APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。"),a("br"),t._v(" "),a("code",[t._v("portal")]),a("br"),t._v("\n控制器内部自动分配给当前AddOn的端口，无需用户设置，可留空不填。"),a("br"),t._v(" "),a("code",[t._v("url")]),a("br"),t._v("\n点击附加程序页面AddOn操作选项中小地球按钮跳转的URL，即AddOn前端项目中入口文件"),a("code",[t._v("index.html")]),t._v("的路径。例如AddOn前端工程的"),a("code",[t._v("index.html")]),t._v("放在文件夹"),a("code",[t._v("JAKA_Command/client")]),t._v("下，则可填写"),a("code",[t._v("url = http://localhost/JAKA_Command/client")]),t._v("。其中"),a("code",[t._v("localhost")]),t._v("字段解析时会被自动替换为当前机器人的IP地址。若不填则APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。若填的路径错误点击小地球按钮时则会提示“加载失败，请检查路径是否正确”。"),a("br"),t._v(" "),a("code",[t._v("languagetype")]),a("br"),t._v("\n后端使用的语言，目前仅支持使用node-red作为后端。"),a("br"),t._v(" "),a("code",[t._v("service")]),a("br"),t._v("\n填写json格式的数据文件名。该文件来源于AddOn文件目录下的json文件，包含了在node-red中定义流和节点信息，文件名称可以自定义，但二者需保持一致。若名称不一致，APP开启该AddOn状态时会弹出“AddOn服务不存在”提示。"),a("br"),t._v(" "),a("code",[t._v("serviceenabled")]),a("br"),t._v("\nAddon开机启动，0代表开机此AddOn包为关闭状态，1代表开机此AddOn包为开启状态。若不填或填其他数值及字符无效，APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。")])])}),[],!1,null,null,null);a.default=e.exports}}]);