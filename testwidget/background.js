function InsertFunc(tabId,changeInfo,tab){
//让用户界面执行代码。
chrome.tabs.executeScript(tabId,{code : "alert('看看这是那个页面弹出的！');"
});
//让用户界面执行一个文件的JS。
//chrome.tabs.executeScript(tabId,{file : "Check.js"});}

//注册事件的响应函数
chrome.tabs.onUpdated.addListener(InsertFunc);