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
    chrome.runtime.sendMessage({ type: "IIT_TOGGLE" });
    actionButton.classList.toggle('iit__button_on');
}
