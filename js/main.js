var pageName;

// Usually structed as await sleep(1 * 1000); The one in this example is the number of seconds the script will await.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadNewPage(newPageLink) {
    if (newPageLink == "" || newPageLink == undefined) {
        throw new Error("Tried loading new page, but given link is empty or undefined!");
    }

    window.requestAnimationFrame(everythingTransparent);

    await removeTitleText();

    await sleep(.75 * 1000);

    window.location.href = newPageLink;
}

var lastTimeFrame;
async function everythingTransparent() {
    var pageContent = document.getElementById("pageContent");
    var currentTime = Date.now();
    var deltaTime = (currentTime - lastTimeFrame) / 1000;

    pageContent.style.opacity -= 1 * deltaTime;

    window.requestAnimationFrame(everythingTransparent);
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
    pageName = titleText;
}

async function _loadTitleText(title) {
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

var hoveringGame = false;

function onGameHover() {
    hoveringGame = true;
}

function onGameUnhover() {
    hoveringGame = false;
}