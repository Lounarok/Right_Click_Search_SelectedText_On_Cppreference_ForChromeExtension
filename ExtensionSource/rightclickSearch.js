

chrome.contextMenus.create(
 {
  title: "Find '%s' on cppreference.com!", 
  contexts:["selection"], 
    onclick: function(info, tab) {
        sendSearch(info.selectionText);
    }
  } );
  
  function sendSearch(selectedText) {
 var serviceCall = 'https://en.cppreference.com/mwiki/index.php?title=Special%3ASearch&search=' + selectedText;
 chrome.tabs.create({url: serviceCall});
}