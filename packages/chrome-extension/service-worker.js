'use strict';

// @ts-check

/// <reference types="@types/chrome" />

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'IIT_TOGGLE') {
        console.log('Toggle tab with id: ' + sender.id);
    }
})
