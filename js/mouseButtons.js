function startButtonRotation(element) {
    var randomRot_ = Math.round(Math.random());
    var randomRot = randomRot_ ? -2.5 : 2.5;
    element.style.transform = "rotate(" + randomRot + "deg)";
    element.style.transition = "transform .5s linear";
}

function stopButtonRotation(element) {
    element.style.transform = "rotate(0deg)";
    element.style.transition = "all .5s .1s";
}