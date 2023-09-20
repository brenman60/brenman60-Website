var buttons = [];

function startButtonRotation(element) {
    if (!buttons.find(element)) {
        buttons.push(element);
    }

    do {
        element.style.transform = "rotate(15deg)";
        element.style.transition = "all .5s";

        element.style.transform = "rotate(-15deg)";
        element.style.transition = "all .5s";
    }
    while (buttons.find(element));
}

function stopButtonRotation(element) {
    element.style.transform = "rotate(0deg)";
    element.style.transition = "all .5s";
}