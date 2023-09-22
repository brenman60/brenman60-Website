function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // ms is should be formatted as 1 * 1000 (first number is amount of seconds to wait)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function startLineDrawing() {
    const canvas = document.getElementById("lineCanvas");

    if (!canvas.getContext) {
        return;
    }
     
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'darkcyan';
    ctx.lineWidth = 25;

    while (!window.closed) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (var i = 0; i < 25; i++) {
            startLine(ctx);
        }

        await sleep(1 * 1000);
    }
}

function startLine(ctx) {
    ctx.beginPath();

    const randomX1 = randomIntFromInterval(0, window.innerWidth);
    const randomY1 = randomIntFromInterval(0, window.innerHeight);

    const randomX2 = randomIntFromInterval(0, window.innerWidth);
    const randomY2 = randomIntFromInterval(0, window.innerHeight);

    ctx.moveTo(randomX1, randomY1);
    ctx.lineTo(randomX2 + randomX1, randomY2 + randomY1);
    ctx.stroke();
}