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

async function initializeShockwaveEffect() {
    if (shockwaveInitialized) {
        return;
    }

    shockwaveInitialized = true;

    do {
        var currentTime = Date.now();
        var deltaTime = (currentTime - lastTimeFrame) / 1000;
        for (var shockwave_ = 0; shockwave_ < shockwaves.length; shockwave_++) {
            var shockwave = shockwaves[shockwave_]; // shockwaveInfo variable (something like intensity can be accessed with shockwave.getIntensity())
            if (shockwave == undefined) {
                continue;
            }

            // change sizes
            shockwave.getElement().style.width += (1 * shockwave.getIntensity()) * deltaTime;
            shockwave.getElement().style.height += (1 * shockwave.getIntensity()) * deltaTime;

            // getTime() for fadeTime
            shockwave.setTime(-deltaTime);

            if (shockwave.getTime() >= shockwave.getFadeTime()) {
                shockwave.getElement().style.opacity -= 1 * deltaTime;
                if (shockwave.getElement().style.opacity <= 0) {
                    shockwave.getElement().remove();
                    shockwaves[shockwave_] = undefined;
                    console.log("done with shockwave: " + shockwave_);
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

        await sleep(.1 * 1000);
    }
    while (!window.closed);
}

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

function buttonShockwave(position, size, intensity = 1, fadeTime = 1) {
    if (!shockwaveInitialized) {
        alert("Shockwave Effect called, but it is not initialzed.");
        return;
    }

    var shockwave = document.createElement("div");
    shockwave.className = "shockwaveEffect";
    shockwave.style.position = "absolute";
    shockwave.style.margin = position.x + '' + position.y;
    shockwave.style.width = size.x;
    shockwave.style.height = size.y;
    document.body.appendChild(shockwave);

    var shockwaveInfo = {
        'element': shockwave,
        'i': intensity,
        'f': fadeTime,
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
        'getTime': function() {
            return this.t;
        },
        'setTime': function(amount) {
            this.t += amount;
        },
    }

    shockwaves.push(shockwaveInfo);
}