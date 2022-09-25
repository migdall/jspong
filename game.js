let canvas;
let canvasContext;
let personality = 'sad';
let ballX = 5;
let backwards = false;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    // alert(personality);
    
    setInterval(drawEverything, 20);
};

function drawEverything() {
    if (ballX > 640 && backwards === false) {
        backwards = true;
    }
    if (backwards === false) {
        ballX = ballX + 10;
    }
    
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(200, 200, 50, 25);
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(300, 200, 200, 200);
    canvasContext.fillStyle = 'rgb(230, 230, 250)';
    canvasContext.fillRect(ballX, 200, 25, 25);

    if (backwards === true) {
        ballX = ballX - 5;
    }
    if (ballX < 0) {
        backwards = false;
    }
}
