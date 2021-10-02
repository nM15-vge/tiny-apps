// initial state for our gaem;
posX = posY = 10;
appleX = appleY = 15;
gridSize = 20;
tableSize = 25;

// values manipulated by d-pad;
directionX = directionY = 0;

// our snake;
body = [];
segments = 10;

// logic for game;
const game = () => {
    posX += directionX;
    posY += directionY;

    ctx.fillStyle="#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#2ED9EB";

    if(posX < 0) {
        posX = tableSize - 1;
    };
    if(posX > tableSize - 1) {
        posX = 0;
    };
    if(posY < 0) {
        posY = tableSize - 1;
    };
    if(posY > tableSize - 1) {
        posY = 0;
    };

    for(let i = 0; i < body.length; i++){
        ctx.beginPath();
        // ctx.moveTo(body[i].x * gridSize, body[i].y * gridSize);
        ctx.arc(body[i].x * gridSize, body[i].y * gridSize, (gridSize - 2)/2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        // ctx.fillRect(body[i].x * gridSize, body[i].y * gridSize, gridSize - 2, gridSize - 2);
        if(body[i].x === posX && body[i].y === posY){
            segments = 10;
        };
    };

    body.push({x: posX, y: posY});

    while(body.length > segments){
        body.shift();
    };

    if(appleX === posX && appleY === posY){
        segments ++;
        appleX = Math.floor(Math.random() * tableSize);
        appleY = Math.floor(Math.random() * tableSize);
    };

    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(appleX * gridSize, appleY * gridSize, (gridSize - 2)/2, 0, Math.PI * 2, true);
    ctx.fill();

};

// control our D-pad;
const keyDown = e => {
    switch(e.keyCode) {
        case(65):
            directionX = -1;
            directionY = 0;
            break;
        case(87):
            directionX = 0;
            directionY = -1;
            break;
        case(68):
            directionX = 1;
            directionY = 0;
            break;
        case(83):
            directionX = 0;
            directionY = 1;
            break;
    };
};

const init = () => {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyDown)
    setInterval(game, 100);
};

// window.onload = init();
document.addEventListener("DOMContentLoaded", init);
