function startButtonRotation(element) {
    element.style.transform = "rotate(45deg)";
    element.style.transition = "all .5s";
}

function stopButtonRotation(element) {
    element.style.transform = "rotate(0deg)";
    element.style.transition = "all .5s";
}