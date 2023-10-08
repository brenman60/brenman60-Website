function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // ms is should be formatted as 1 * 1000 (first number is amount of seconds to wait)
}

var shockwaveInitialized = false;
var shockwaves = [];

function makeStruct(names) {
    var names = names.split(' ');
    var count = names.length;
    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}

var Vector2 = makeStruct("x y");
var lastTimeFrame;

function updateShockwaves() {
    var currentTime = Date.now();
    var deltaTime = (currentTime - lastTimeFrame) / 1000;
    for (var shockwave_ = 0; shockwave_ < shockwaves.length; shockwave_++) {
        var shockwave = shockwaves[shockwave_]; // shockwaveInfo variable (something like intensity can be accessed with shockwave.getIntensity())
        if (shockwave == undefined) {
            continue;
        }

        var sizeChange = ((100 * shockwave.getIntensity()) * deltaTime);

        // change sizes
        var currentWidthNum = parseFloat(shockwave.getElement().style.width.toString().replace("px", ""));
        var currentHeightNum = parseFloat(shockwave.getElement().style.height.toString().replace("px", ""));
        shockwave.getElement().style.width = currentWidthNum + sizeChange + "px";
        shockwave.getElement().style.height = currentHeightNum + sizeChange + "px";

        // adjust positions to account for size change
        var currentTopNum = parseFloat(shockwave.getElement().style.top.toString().replace("px", ""));
        var currentLeftNum = parseFloat(shockwave.getElement().style.left.toString().replace("px", ""));
        shockwave.getElement().style.top = (currentTopNum - (sizeChange / 2)) + "px";
        shockwave.getElement().style.left = (currentLeftNum - (sizeChange / 2)) + "px";

        // getTime() for fadeTime
        shockwave.setTime(deltaTime);

        if (shockwave.getTime() >= shockwave.getFadeTime()) {
            if (shockwave.getCustomFadeSpeed() == -1)
                shockwave.getElement().style.opacity -= 1 * deltaTime;
            else
                shockwave.getElement().style.opacity -= shockwave.getCustomFadeSpeed() * deltaTime;

            if (shockwave.getElement().style.opacity <= 0) {
                shockwave.getElement().remove();
                shockwaves[shockwave_] = undefined;
            }
        }
    }

    var newShockwaveArray = [];
    for (var shockwave_ = 0; shockwave_ < shockwaves.length; shockwave_++) {
        if (shockwaves[shockwave_] != undefined) {
            newShockwaveArray.push(shockwaves[shockwave_]);
        }
    }

    shockwaves = newShockwaveArray;

    lastTimeFrame = currentTime;

    window.requestAnimationFrame(updateShockwaves);
}

function startButtonRotation(element, changeColor = true) {
    element.style.transform = "scale(105%, 105%)";

    if (changeColor) {
        element.style.backgroundColor = "#65b8ba";
    }

    element.style.transition = "transform .5s ease-out";
}

function stopButtonRotation(element, changeColor = true) {
    element.style.transform = "scale(100%, 100%)";

    if (changeColor) {
        element.style.backgroundColor = "#5F9EA0";
    }

    element.style.transition = "all .5s ease-in";
}

function buttonShockwave(position, size, intensity = 1, fadeTime = 1, customOpacity = -1, customFadeSpeed = -1) {
    var shockwave = document.createElement("div");
    shockwave.className = "shockwaveEffect";
    shockwave.style.position = "fixed";
    shockwave.style.top = (position.y - size.y / 2) + "px";
    shockwave.style.left = (position.x - size.x / 2) + "px";
    shockwave.style.width = size.x + "px";
    shockwave.style.height = size.y + "px";
    shockwave.style.backgroundColor = "#65b8ba";
    shockwave.style.opacity = customOpacity == -1 ? .5 : customOpacity;
    shockwave.style.zIndex = 100;
    shockwave.style.pointerEvents = "none";
    document.body.appendChild(shockwave);

    var shockwaveInfo = {
        'element': shockwave,
        'i': intensity,
        'f': fadeTime,
        'fs': customFadeSpeed,
        't': 0,
        'getElement': function () {
            return this.element;
        },
        'getIntensity': function() {
            return this.i;
        },
        'getFadeTime': function() {
            return this.f;
        },
        'getCustomFadeSpeed': function() {
            return this.fs;
        },
        'getTime': function() {
            return this.t;
        },
        'setTime': function(amount) {
            this.t += amount;
        },
    }

    shockwaves.push(shockwaveInfo);
}

var mouseX = undefined;
var mouseY = undefined;

function updateMouseCoords(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function spawnShockAtMouse() {
    if (mouseX == undefined || mouseY == undefined) {
        return;
    }

    buttonShockwave(new Vector2(mouseX, mouseY), new Vector2(5, 5), .75, .025);
}

window.addEventListener("mousemove", function (e) {
    updateMouseCoords(e);
});

window.addEventListener("mousedown", function () {
    if (hoveringGame)
        return;

    spawnShockAtMouse();
});

window.requestAnimationFrame(updateShockwaves);