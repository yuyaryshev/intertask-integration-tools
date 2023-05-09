'use strict';

// @ts-check

/// <reference types="@types/chrome" />

const actions = {
    /**
     * @param {unknown} data 
     */
    IIT_DATA(data) {
        console.dir(data)
    }
}

/**
 * @param {{ type: keyof typeof actions, payload?: unknown}} message 
 */
const messageHandler = (message ) => {
    actions[message.type](message.payload)
}

chrome.runtime.onMessage.addListener(messageHandler)
