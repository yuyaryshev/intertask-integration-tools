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


    chrome.runtime.sendMessage({ type: "IIT_TOGGLE", ydata:124235, url: document.documentURI });
    console.log({tag:'CURRENT_DEBUG_iit_button'});
    console.log({tag:'CURRENT_DEBUG_fn'});
    const fn = new Function('a', "return a+3");
    console.log(fn(8));
    console.log({tag:'CURRENT_DEBUG_fn_END'});


    actionButton.classList.toggle('iit__button_on');
}
