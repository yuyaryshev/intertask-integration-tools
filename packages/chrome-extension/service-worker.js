'use strict';

// @ts-check

/// <reference types="@types/chrome" />

const port = chrome.runtime.connect();

window.addEventListener("message", (event) => {
  if (event.source !== window) {
    return;
  }

  if (event.data.type && (event.data.type === "IIT_TOGGLE")) {
    console.log("Toggle IIT on tab with id: " + event.data.tabId);
    port.postMessage(event.data);
  }
}, false);
