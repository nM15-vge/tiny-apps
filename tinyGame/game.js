const generateGame = () => {
    canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = '500';
    canvas.height = '500';
    canvas.style.border = '4px solid #51e6f7'

    const display = document.getElementById('display');
    display.append(canvas)

    ctx = canvas.getContext('2d');
    //initial state for game;
    posX = posY = 10;
    appleX = appleY = 15;
    gridSize = 20;
    tableSize = 25;

    //values manipulated by d-pad;
    directionX = directionY = 0;

    //snake;
    snakeBody = [];
    segments = 5;

    //logic for game;
    const game = () => {
        const radius = gridSize * 0.54;

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

        for(let i = 0; i < snakeBody.length; i++){

            const currX = snakeBody[i].x;
            const currY = snakeBody[i].y;
            const x = currX * gridSize + radius;
            const y = currY * gridSize + radius;

            const rightEyeX = currX * gridSize + (gridSize * 0.30);
            const rightEyeY = currY * gridSize + (gridSize * 0.40);
            const leftEyeX = currX * gridSize + (gridSize * 0.80);
            const leftEyeY = currY * gridSize + (gridSize * 0.40);

            const mouthX = currX * gridSize + (gridSize * 0.55);
            const mouthY = currY * gridSize + (gridSize * 0.70);

            const circle = Math.PI * 2;

            if(currX !== 10 || currY !== 10) {
                ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            };

            if(i === snakeBody.length - 1) {
                ctx.fillStyle = "#8fb54a"
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, circle, true);
                ctx.fill();
                ctx.closePath();

                ctx.fillStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.arc(rightEyeX, rightEyeY, 2.5, 0, circle, true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(leftEyeX, leftEyeY, 2.5, 0, circle, true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(mouthX, mouthY, 3, 0, Math.PI, false);
                ctx.fill();
                ctx.closePath();

            }else {
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, circle, true);
                ctx.closePath()
                ctx.fill();
                ctx.stroke();
            };
            if(currX === posX && currY === posY){
                segments = 5;
            };
        };

        snakeBody.push({x: posX, y: posY});

        while(snakeBody.length > segments){
            snakeBody.shift();
        };

        if(appleX === posX && appleY === posY){
            segments ++;
            appleX = Math.floor(Math.random() * tableSize);
            appleY = Math.floor(Math.random() * tableSize);
        };

        const updatedAppleX = appleX * gridSize + radius;
        const updatedAppleY = appleY * gridSize + radius;

        ctx.fillStyle = "#FF0000";
        ctx.beginPath();
        ctx.arc(updatedAppleX, updatedAppleY, radius, 0, Math.PI * 2, true);
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


    document.addEventListener("keydown", keyDown);
    setInterval(game, 150);
};
