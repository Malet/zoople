// Open the initial page tab
chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.create({ url: 'zoople.html' });
});
