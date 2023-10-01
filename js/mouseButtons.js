function startButtonRotation(element) {
    const randomRot_ = Math.round(Math.random());
    // maybe re add this later idk
    //element.style.transform = "scale(120%, 120%)";
    element.style.backgroundColor = "#528789";
    element.style.transition = "transform .5s ease-out";
}

function stopButtonRotation(element) {
    // maybe re add this later idk
    //element.style.transform = "scale(100%, 100%)";
    element.style.backgroundColor = "#5F9EA0";
    element.style.transition = "all .5s ease-in";
}