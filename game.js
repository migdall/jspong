let canvas;
let canvasContext;
let personality = 'sad';
let ballX = 5;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    // alert(personality);
    
    setInterval(drawEverything, 20);
};

function drawEverything() {
    ballX = ballX + 10;
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(200, 200, 50, 25);
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(300, 200, 200, 200);
    canvasContext.fillStyle = 'rgb(230, 230, 250)';
    canvasContext.fillRect(ballX, 200, 25, 25);
}
