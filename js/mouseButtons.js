function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startButtonRotation(element) {
    element.style.transform = "rotate(-7.5deg)";
    element.style.transition = "transform .5s linear";
}

function stopButtonRotation(element) {
    element.style.transform = "rotate(0deg)";
    element.style.transition = "all .5s .1s";
}