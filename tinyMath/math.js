const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "c", "ENTER"];
const ops = ["add", "sub", "mult", "div"];

const defaultState = {
    currInput: "",
    total: 0,
    currTop: null,
};

const generateMath = () => {
    let state = {...defaultState};

    const math = document.createElement("div");
    math.id = "math";
    math.style.border = "5px solid #FFFFFF";

    const lcd = document.createElement("span");
    lcd.id = "lcd";
    lcd.innerHTML = state.total;

    math.append(lcd);

    const numbers = document.createElement("div");
    numbers.id = "numbers";

    const handleNumInput = numInput => {
        if(numInput === ".") return;

        if(numInput === "c") {
            state = {...defaultState};
            return lcd.innerHTML = 0;
        };

        const calculate = () => {
            let currValue = parseInt(state.currInput);
            switch(state.currTop) {
                case("add"):
                    state.total += currValue;
                    break;
                case("sub"):
                    state.total -= currValue;
                    break;
                case("mult"):
                    state.total *= currValue;
                    break;
                case("div"):
                    state.total /= currValue;
                    break;
                default:
                    break;
            };

            state.currInput = "";
            lcd.innerHTML = state.total;

        };
    };

    const handleOpInput = opInput => {
        if(state.currTop) {
            calculate();
            state.currTop = opInput;
        }else {
            state.total = parseFloat(state.currInput);
            state.currInput = "";
            state.currTop = opInput;
        };
    };

    nums.forEach( num => {
        let button = document.createElement("button");
        button.innerHTML = num;
        if(num === "c") button.style.color = "#EEEEEE";
        button.onclick = () => handleNumInput(num);
        numbers.append(button);
    });

    ops.forEach( op => {
        let button = document.createElement("button");
        button.innerHTML = op;
        button.onclick = () => handleOpInput(op);
        options.append(button);
    });

    math.append(numbers);
    display.append(math);
};
