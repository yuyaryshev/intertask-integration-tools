'strict';

// @ts-check

/// <reference types="@types/chrome" />

const actionButton = document.createElement('button');
const wrapper = document.createElement('div');
const statusText = document.createElement('p');

actionButton.classList.add('iit__button', 'iit__button_on');
wrapper.classList.add('iit__wrapper');
statusText.classList.add('iit__status-text');

actionButton.append(document.createTextNode('IIT'));
wrapper.append(actionButton, statusText);
document.body.append(wrapper);

actionButton.addEventListener('click', toggleIITForCurrentTab)

async function toggleIITForCurrentTab() {
    const currentTab = await getCurrentTab()

    window.postMessage({
        type: "IIT_TOGGLE",
        tabId: currentTab.id,
    }, "*")

    actionButton.classList.toggle('iit__button_on');
}

async function getCurrentTab() {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    return tab;
}
