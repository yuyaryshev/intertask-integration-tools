'use strict';

/**
 * @typedef IITMessage
 * @type {Object}
 * @prop {'IIT_TOGGLE'|'IIT_DATA'|'IIT_EXECUTE'} type
 * @prop {any} value
 */

// @ts-check

/// <reference types="@types/chrome" />

const actions = {
    /**
     * @param {IITMessage} message
     * @param {chrome.runtime.MessageSender} sender
     */
    IIT_TOGGLE: (message, sender) => {
        console.log('Toggle tab with id: ' + sender.tab?.id);
    },
    /**
     * @param {IITMessage} message
     * @param {chrome.runtime.MessageSender} sender
     */
    IIT_DATA: (message, sender) => {
        console.dir(message.value)
    },
    /**
     * @param {IITMessage} message
     * @param {chrome.runtime.MessageSender} sender
     */
    IIT_EXECUTE: (message, sender) => {
        chrome.scripting.executeScript({
            target: { tabId: sender.tab?.id || 0 },
            files: ['test.js']
        })
    }
}

/**
 * 
 * @param {IITMessage} message 
 * @param {chrome.runtime.MessageSender} sender 
 * @param {(response?: any) => void} sendResponse 
 */
const messageHandler = (message, sender, sendResponse) => {
    actions[message.type](message, sender)
}

chrome.runtime.onMessage.addListener(messageHandler)
