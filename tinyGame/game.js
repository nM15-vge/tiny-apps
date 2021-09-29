// initial state for our gaem;
px = py = 10;
gs = ts = 20;
ax = ay = 15;
xv = yv = 0;

body = [];
segments = [];

// logic for game;
const game = () => {
    px += xv;
    py += yv;

    ctx.fillStyle="#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#2ED9EB";
}

// control our D-pad;
const keydown = e => {
    switch(e.keycode) {
        case(65):
            console.log("left")
            break;
        case(87):
            console.log("up");
            break;
        case(68):
            console.log("right");
            break;
        case(83):
            console.log("down");
            break;
    }
}

const init = () => {
    let canv = document.getElementById("game");
    let ctx = canv.getContext("2d");
    document.addEventListener("keydown", keydown)
    setInterval(game, 1000/15);
}

// window.onload = init();
document.addEventListener("DOMContentLoaded", init)
