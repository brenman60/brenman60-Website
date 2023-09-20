var buttons = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startButtonRotation(element) {
    if (!buttons.includes(element)) {
        buttons.push(element);
    }

    do {
        element.style.transform = "rotate(15deg)";
        element.style.transition = "transform .5s linear .25";

        await sleep(.25 * 1000); // sleep function for first int seconds

        if (!buttons.includes(element)) {
            break;
        }

        element.style.transform = "rotate(-15deg)";
        element.style.transition = "transform .5s linear .25";
    }
    while (buttons.includes(element));
}

function stopButtonRotation(element) {
    element.style.transform = "rotate(0deg)";
    element.style.transition = "all .5s";

    buttons.pop(element);
}