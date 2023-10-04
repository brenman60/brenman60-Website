// Usually structed as await sleep(1 * 1000); The one in this example is the number of seconds the script will await.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSplashes() {
    do {
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        var newSize = Math.floor(Math.random() * 50);
        var intensity = Math.random() * 2;
        var fadeTime = Math.random() * 5;
        var opacity = Math.random() * 0.005;
        buttonShockwave(new Vector2(x, y), new Vector2(newSize, newSize), intensity, fadeTime, opacity);

        await sleep(.025 * 1000);
    }
    while (!window.closed);
}