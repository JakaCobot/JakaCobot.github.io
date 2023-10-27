---
title: JAKA App APIs
sidebarDepth: 1
---

# AddOn网页与APP交互

当AddOn的自定义网页在JAKA App中打开时，JAKA App会提供`JAKAController.jakaCall(result)`方法给web页面调用，同时开发者可以自行在web页面上实现一些指定的方法，供App回调。

## JAKAController.jakaCall()
---

jakaCall()由App实现，当在App中打开浏览器时进行注册。当AddOn网页调用jakaCall()时，传入不同的对象，可以实现不同的功能。

该对象中一定会包含属性`type`,可能包含`data`。

```json
{
    "type":"",
    "data":"{\"参数名\":\"参数值\"}",
}
```

::: warning 注意！
    `data`的值必须是经过序列化后的对象。
:::

<!-- ### 给指令块传递参数
/**
类型：saveJakaEditorItem
参数：需要保存到指令块上的属性对象，属性名需要与指令块上的属性名一致
响应：将data对象中的属性值保存到指令块中。
使用范围：仅在指令块编辑页面可调用
**/

```json
{
    "type":"saveJakaEditorItem",
    "data":"{\"属性名\":\"属性值\"}",
}
``` -->

**关闭浏览器窗口**  
``` json
{
    "type":"close",
}
```

<!-- /**
类型：disableWindow
参数：无
响应：禁用web窗口任何操作。
使用范围：仅在指令块编辑页面可调用
**/
let result = {
    "type":"disableWindow",
} -->


**打开浏览器开发者工具窗口**   
```json
{
    "type":"showDevTools",
}
```


**打开机器人示教页面**  
```json
    {
        "type":"jakaMoveRobot",
        "data":"{
                    \"pose\":\"笛卡尔坐标\",
                    \"jointpose\":\"关节角\",
                }",
    }
```

点击示教页面保存时，App会调用[window.jakaCallBack(data):point_left:](./#window.jakaCallBack())，将当前的位置信息传入。

**获取App当前语言**   
```json
{
    "type":"getLanguage",
}
```

调用后App立即回调[window.changeLanuageHandler(language):point_left:](./#window.changeLanuageHandler())传入当前语言。


## window.jakaCallBack()
---
示教页面点击保存时的，App回调该函数并将当前的位置信息传入。

```js
/**
 * 示教页面关闭时app的回调函数
 * @param {*} data 包含了当前示教的信息
 */
window.jakaCallBack = function(data){
    console.log("jakaCallBack Info",data)

    if(data){
      console.log("jointPose",data.data.jointPose)
    }
  }
```

## window.changeLanuageHandler()
---
调用获取当前语言方法后，App立即回调该函数，并传入当前App使用的语言。
```js
/**
 * 触发getAppLanguage app的回调函数。
 * @param {*} language app传入当前语言
 */
window.changeLanuageHandler = (language)=>{
    console.log("changeLanuageHandler",language)
}
```


<!-- 
三、自定义指令参数获取
自定义指令打开编辑页面时，App会将指令块上的参数附加在url上发起get请求。可以使用下面的getQueryString函数获取参数。


// 从url中获取参数
function getQueryString(name) {   
    // 如果url是hash模式（带有#) 此时App中将？传参部分拼接到#后，window.location.search为空，要从hash中抓取
    var urlParams = window.location.search.substring(1) || window.location.hash.match(/\?(.*)/)[1]
    var regex = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");   
    const match = urlParams.match(regex);
    if (match != null) return decodeURI(match[2]); return null;
}


export function getBlockParamsAPI(){

        var params = JSON.parse(getQueryString("params"));
        
        console.log('指令块参数:',params);

        return params
   
    }


let data = {"a":1}
// ！注意data对象要先字符串化再放到result中，否则调用失败。
data = JSON.stringify(data);


let result = {
    "type":"saveJakaEditorItem",
    "data":data,
};

result = JSON.stringify(result);

JAKAController.jakaCall(result);


/**
 * @description Calling unity's save block params fuction
 * @param {dict} data 需要保存的属性对象
 */
export function saveJakaEditorItemAPI(data){
    // console.log(data,'-------save data--------')
    data = JSON.stringify(data)
    let result = "{";
    result+='"type":"saveJakaEditorItem",'
    result+='"data":'
    result+= data
    result+= '}'
    jakaCall(result)
    return 0
}

/**
 * @description Calling unity's close web window
 */
export function closeWindowAPI(){
    let result = '{"type":"close"}';
    jakaCall(result)
    return 0
}
/**
 * @description Calling unity's disableWindow
 */
export function disableAppWindowAPI(){
    let result = '{"type":"disableWindow"}';
    jakaCall(result)
    return 0
}
/**
 * @description Calling unity's wed dev-tool window
 */
export function openDevToolWindowAPI(){
    let result = '{"type":"showDevTools"}';
    jakaCall(result)
    return 0
}

/**
 * @description Calling unity's upload file window
 */
export function openFileUploadWindowAPI(){
    let result = '{"type":"openFileUploadWindow"}';
    jakaCall(result)
    return 0
}

/**
 * @description Calling unity's export file window
 */
export function openFileExportWindowAPI(addOnName){
    let result = '{"type":"openFileExportWindow",';
        result+='"data":'
        result+= '{"fileName":"'+ addOnName +'"}'
        result+= "}"
        jakaCall(result)
        return 0
}

/**
 * @description Tells unity addOn has been delete.
 */
export function notifyAddOnDeleteAPI(addOnName){
    let result = '{"type":"notifyAddOnDelete",';
        result+='"data":'
        result+= '{"fileName":"'+ addOnName +'"}'
        result+= "}"
        jakaCall(result)
        return 0
}

/**
 * @description Calling unity's  user web window
 */
export function openUserWebViewAPI(url){
    let result = '{"type":"userWebView",';
        result+='"data":'
        result+= '{"url":"'+ url +'"}'
        result+= "}"
    jakaCall(result)
    return 0
}


// 示教点位
export function setRobotPositionAPI(jointPos,Cartesian){

    var result = "{";
    result+='"type":"jakaMoveRobot",'
    result+='"data":{'
    result+='"pose":"'+Cartesian+'",'
    result+='"jointpose":"'
    result+= jointPos +'"}}'

    jakaCall(result)
    return 0

}

// 获取app当前语言
export function getAppLanguageAPI(){

    let result = '{"type":"getLanguage"}';
    jakaCall(result)

    return 0

}

//  通知app当前操作没有使用范围
export function optionNoAccessAPI(){

    let result = '{"type":"optionNoAccess"}';
    jakaCall(result)

    return 0

}

function jakaCall(result){
    try{
        // eslint-disable-next-line
        JAKAController.jakaCall(result);
    }catch(e){
         consloe.log("调用JAKAController失败！",e)
    }
} -->