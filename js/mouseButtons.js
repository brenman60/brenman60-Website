function startButtonRotation(element) {
    element.style.transform = "scale(105%, 105%)";
    element.style.backgroundColor = "#65b8ba";
    element.style.transition = "transform .5s ease-out";
}

function stopButtonRotation(element) {
    element.style.transform = "scale(100%, 100%)";
    element.style.backgroundColor = "#5F9EA0";
    element.style.transition = "all .5s ease-in";
}