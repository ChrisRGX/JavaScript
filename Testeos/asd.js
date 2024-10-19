// Juego de conducción simple
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let car = { x: 10, y: 75, width: 30, height: 50, speed: 5 };
let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', (event) => {
    if (event.key == 'Right' || event.key == 'ArrowRight') {
        rightPressed = true;
    }
    if (event.key == 'Left' || event.key == 'ArrowLeft') {
        leftPressed = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == 'Right' || event.key == 'ArrowRight') {
        rightPressed = false;
    }
    if (event.key == 'Left' || event.key == 'ArrowLeft') {
        leftPressed = false;
    }
});

function drawCar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#3e8e41';  // Verde
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

function updateGame() {
    if (rightPressed && car.x < canvas.width - car.width) {
        car.x += car.speed;
    }
    if (leftPressed && car.x > 0) {
        car.x -= car.speed;
    }
    drawCar();
}

document.getElementById('startGame').addEventListener('click', function() {
    setInterval(updateGame, 1000 / 60);
});
