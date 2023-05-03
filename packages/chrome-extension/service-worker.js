'use strict';

// @ts-check

/// <reference types="@types/chrome" />

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'sampleContextMenu',
        title: 'Sample Context Menu',
        contexts: [
            'selection',
        ]
    })
})