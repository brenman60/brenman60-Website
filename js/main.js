﻿var pageName;

// Usually structed as await sleep(1 * 1000); The one in this example is the number of seconds the script will await.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

async function loadNewPage(newPageLink) {
    if (newPageLink == "" || newPageLink == undefined) {
        throw new Error("Tried loading new page, but given link is empty or undefined!");
    }

    // fade page content
    var pageContent = document.getElementById("pageContent");
    pageContent.style.opacity = 0;
    pageContent.style.transition = "opacity .6s ease-out";

    await removeTitleText();

    await sleep(.75 * 1000);

    window.location.href = newPageLink;
}

async function removeTitleText() {
    var title = document.getElementById("pageTitle");
    var initialTitleLength = title.innerHTML.length;
    for (var i = 0; i < initialTitleLength; i++) {
        await sleep((.35 / initialTitleLength) * 1000);
        title.innerHTML = title.innerHTML.slice(0, -1);
    }
}

function loadTitleText(titleText) {
    console.log("Setting title text");
    pageName = titleText;
}

async function _loadTitleText(title) {
    console.log("Loading title text");
    do {
        await sleep(.25 * 1000);
    }
    while (pageName == undefined);

    for (var i = 0; i < pageName.length; i++) {
        title.innerHTML += pageName[i];
        await sleep((.35 / pageName.length) * 1000);
    }
}

function bounceTitle(titleElement) {
    titleElement.style.animationPlayState = "running";
}

function unbounceTitle(titleElement) {
    titleElement.style.animationPlayState = "paused";
}