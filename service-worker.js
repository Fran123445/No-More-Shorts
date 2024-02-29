chrome.tabs.onUpdated.addListener(function(_, _, tab) {
    var url = tab.pendingUrl || tab.url
    if (url != null && url.includes("www.youtube.com/shorts/")) {
        url = url.replace("shorts/", "watch?v=")
        chrome.tabs.update(tab.id, {url: url})
    }
})