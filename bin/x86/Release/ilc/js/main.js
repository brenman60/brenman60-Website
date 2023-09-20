function loadNewPage(newPageLink) {
    if (newPageLink == "" || newPageLink == undefined) {
        throw new Error("Tried loading new page, but given link is empty or undefined!");
    }

    window.location.href = newPageLink;
}

function bounceTitle(titleElement) {
    titleElement.style.animationPlayState = "running";
}

function unbounceTitle(titleElement) {
    titleElement.style.animationPlayState = "paused";
}