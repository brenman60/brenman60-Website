function spawnCircles(count) {
    const canvas = document.getElementById("backgroundCanvas");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, width, height);

    for (var i = 0; i < count; i++) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
        ctx.lineTo(200, 106);
        ctx.fill();

        simluateCircle();

    }
}

function simluateCircle(circle) {

}