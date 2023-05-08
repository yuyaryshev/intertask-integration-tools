'strict';

// @ts-check

/// <reference types="@types/chrome" />

const actionButton = document.createElement('button');
const container = document.createElement('div');
const statusText = document.createElement('p');

actionButton.classList.add('iit__button', 'iit__button_on');
container.classList.add('iit__container');
statusText.classList.add('iit__status-text');

actionButton.append(document.createTextNode('IIT'));
container.append(actionButton, statusText);
document.body.append(container);

actionButton.addEventListener('click', toggleIITForCurrentTab)

async function toggleIITForCurrentTab() {
    chrome.runtime.sendMessage({ type: "IIT_TOGGLE" });
    actionButton.classList.toggle('iit__button_on');
}
