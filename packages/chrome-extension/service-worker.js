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

let fetchFull = async (url, arg)=>{
	const response = await fetch(url, arg);
    return await response.json();
}


/**
 * @param {{ type: keyof typeof actions, payload?: unknown}} message
 */
const messageHandler = async (message ) => {
    console.log({tag:'CURRENT_DEBUG_service_worker',message});

    try {
        const r = await fetchFull('http://localhost:3000/api/config', {
            method:"POST",
            body:JSON.stringify({
                url: message.url,
            })
        })

        console.log('CURRENT_DEBUT the result:');
        console.log({r});
    } catch (e) {
        console.error(e);
    }

    console.log({tag:'CURRENT_DEBUG_service_worker_SEND',message});

    chrome.runtime.sendMessage({type:"IIT_back", unused:"message from service worker.js"});

    // actions[message.type](message.payload)
}

chrome.runtime.onMessage.addListener(messageHandler)
