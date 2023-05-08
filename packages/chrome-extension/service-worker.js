'use strict';

// @ts-check

/// <reference types="@types/chrome" />

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'IIT_TOGGLE') {
        console.log('Toggle tab with id: ' + sender.tab.id);
        console.log(message.value)

        chrome.scripting.executeScript({ target: { tabId: sender.tab.id }, files: ['test.js'] })
    }
})

// function enableBrowserAction(tabId) {
// chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
//     chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['jquery.js'] }, function() {
//         chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['Ruler.js'] });
//     });
// });
