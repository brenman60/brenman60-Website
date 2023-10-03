// Usually structed as await sleep(1 * 1000); The one in this example is the number of seconds the script will await.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startBackground(backgroundElement) {
    var lastTypedLine;
    do {
        const randomLines =
            [
                "backgroundElement.innerHTML = selectedLine + ' ' + backgroundElement.innerHTML;",
                "original.splice(i, 0, selectedLine[i]);",
                "var selectedLine = randomLines[Math.round(Math.random(0, randomLines.length - 1))];",
                "return new Promise(resolve => setTimeout(resolve, ms));",
                "async function startBackground(backgroundElement)",
                "window.location.href = newPageLink;",
                "titleElement.style.animationPlayState = 'running';",
                "while (lastTypedLine == selectedLine) { selectedLine = randomLines[Math.floor(Math.random() * randomLines.length)]; }",
                "backgroundElement.innerHTML = '<br>' + backgroundElement.innerHTML;",
                "if (selectedLine[i] == undefined) { continue; }",
                "animation-name: backgroundTextLerp;",
                "font-size: 100px;",
                "animation-timing-function: cubic-bezier( .5, 0.05, 1, .5);",
                "font-family: monospace, 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;",
            ];

        var selectedLine = randomLines[Math.floor(Math.random() * randomLines.length)];
        while (lastTypedLine == selectedLine) {
            selectedLine = randomLines[Math.floor(Math.random() * randomLines.length)];
        }

        lastTypedLine = selectedLine;

        backgroundElement.innerHTML = "<br>" + backgroundElement.innerHTML;

        for (var i = 0; i < selectedLine.length; i++) {
            if (selectedLine[i] == undefined) {
                continue;
            }

            var original = backgroundElement.innerHTML;
            original = original.split("");
            original.splice(i, 0, selectedLine[i]);
            original = original.join("");
            backgroundElement.innerHTML = original;
            await sleep(.015 * 1000);
        }

        backgroundElement.innerHTML = backgroundElement.innerHTML.substring(0, screen.width);
        await sleep(.15 * 1000);
    }
    while (!window.closed);
}