// Usually structed as await sleep(1 * 1000); The one in this example is the number of seconds the script will await.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startBackground(backgroundElement) {
    do {
        var newLine = "";
        for (var i = 0; i < window.innerWidth / 50; i++) {
            newLine += Math.floor(Math.random() * 2) == 0 ? "0" : "1";
        }

        backgroundElement.innerHTML = newLine + "\n" + backgroundElement.innerHTML;

        backgroundElement.innerHTML = backgroundElement.innerHTML.substring(0, screen.width);

        await sleep(.15 * 1000);
    }
    while (!window.closed);
}