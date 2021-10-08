const render = () => {
    const canvas = document.getElementById("art");
    const ctx = canvas.getContext("2d");
    let x = 0;
    let y = 0;
    while(x < 255) {
            for(const num of myFib()) {
                let xCenter = (x + num) * Math.PI * Math.exp(1) * Math.log(2);
                let yCenter = (y + num) * Math.PI * Math.exp(1) * Math.log(2);
                for(let radian = 0; radian <= 2; radian += 0.1){
                    let direction = radian % 2 === 0 ? true: false;
                    ctx.beginPath();
                    ctx.arc(xCenter, yCenter, num*Math.PI*Math.exp(0.5), 0, Math.PI * radian, direction);
                    ctx.fillStyle = `rgb(${255 * Math.random() / Math.exp(1)}, ${x*Math.PI*Math.exp(1)}, ${y**Math.exp(1)}`;
                    ctx.fill();
                    ctx.closePath();
                };
            };
        x++;
        y++;
    };
};
const myFib = () => {
    const table = [0];
    table[1] = 1;
    let i = 0;
    while(table[i] < 255) {
        if(table[i + 1]){
            table[i + 1] += table[i];
        }else {
            table[i + 1] = 0;
            table[i + 1] += table[i];
        };

        if(table[i + 2]){
            table[i + 2] += table[i];
        }else {
            table[i + 2] = 0;
            table[i + 2] += table[i];
        };

        i++;
    };
    table.pop();
    table.pop();
    return table;
};

document.addEventListener("DOMContentLoaded", render);
