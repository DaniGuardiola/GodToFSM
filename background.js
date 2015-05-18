chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        file: "script.js"
    });
});

window.addEventListener("load", init);

function init() {
    checkVersion();
}

function checkVersion() {
    var landingUrl = "http://www.carlosjeurissen.com/black-menu-for-google/landing/index.html";
    var oldVersion = localStorage.getItem("versionNumber");
    var version = chrome.app.getDetails().version;
    var updatedUrl = "http://www.carlosjeurissen.com/black-menu-for-google/landing/index.html?update=" + version;

    if (!oldVersion) {
        openPopup(landingUrl);
    } else if (oldVersion !== version) {
        openPopup(updatedUrl);
    }
    localStorage.setItem("versionNumber", version);
}

function openPopup(url) {
    chrome.tabs.create({
        "url": url
    });
}
