browser.tabs.onHighlighted.addListener(function (details){
  console.log(`onHighlighted: windowId = ${ details.windowId }, tabIds = ${ details.tabIds }`);
});

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
  console.log('onUpdated: tabId = %d, tabUrl = %s', tabId, tab.url);
});

browser.tabs.onActivated.addListener(function (details){
  console.log(`onActivated: windowId = ${ details.windowId }, tabId = ${ details.tabId }`);
});