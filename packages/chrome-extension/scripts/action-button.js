'strict';

// @ts-check

/// <reference types="@types/chrome" />

const actionButton = document.createElement('button');
const wrapper = document.createElement('div');
const statusText = document.createElement('p');

actionButton.classList.add('action-button');
wrapper.classList.add('action-button__wrapper');
statusText.classList.add('action-button__status-text');

wrapper.append(actionButton, statusText)
document.body.append(wrapper)

actionButton.addEventListener('click', () => {
    window.postMessage({ type: "IIT_TOGGLE" }, "*")
})
