/// <reference types="@types/chrome" />

fetch('https://owa.alfabank.ru/owa/service.svc?action=FindConversation&EP=1&ID=-35&AC=1').then((value) => {
    console.log(value)

    chrome.runtime.sendMessage({ type: "IIT_TOGGLE", value: 249328752938759 });
})
