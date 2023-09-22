function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // ms is should be formatted as 1 * 1000 (first number is amount of seconds to wait)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startLineDrawing() {
    const canvas = document.getElementById("lineCanvas");

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'darkcyan';
    ctx.lineWidth = 25;

    for (var i = 0; i < 25; i++) {
        startLine(ctx);
    }
}

async function startLine(ctx) {
    var startRandomX = randomIntFromInterval(-1000, 1000);
    var startRandomY = randomIntFromInterval(-1000, 1000);

    ctx.moveTo(startRandomX, startRandomY);

    var lastPositionX = startRandomX;
    var lastPositionY = startRandomY;
    while (!window.closed) {
        ctx.beginPath();

        var randomX = randomIntFromInterval(-1000, 1000);
        var randomY = randomIntFromInterval(-1000, 1000);

        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(lastPositionX + randomX, lastPositionY + randomY);
        ctx.stroke();

        lastPositionX += randomX;
        lastPositionY += randomY;

        console.log("Moved line: " + lastPositionX + " - " + lastPositionY);
        await sleep(1 * 1000);
    }
}