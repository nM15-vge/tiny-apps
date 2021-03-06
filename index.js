const apps = ["app", "art", "blog", "game", "grave", "note", "math", "shop"];

const appList = new CircularDoublyLinkList();

(() => apps.forEach(app => appList.append(app)))();


let appName = document.getElementById("app-name");

// initial display;
appName.innerHTML = appList.head.value;


let navLinks = document.getElementsByClassName("nav-links");

(() => {
    for(const link of navLinks){
        link.addEventListener("click", e => e.preventDefault())
    }
})();

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const body = document.body;
const innerCircles = document.getElementsByClassName("inner-circle");
const buttons = document.getElementsByClassName("circle");
const display = document.getElementById("display");

const toggleDark = () => {
    body.classList.remove("light");
    body.classList.add("dark");
    appName.style.color = "#d50000";
    for(const button of buttons){
        button.classList.remove("circle-light");
        button.classList.add("circle-dark");
    }
    for(const innerCircle of innerCircles){
        innerCircle.classList.remove("inner-circle-light");
        innerCircle.classList.add("inner-circle-dark");
    }
};

const toggleLight = () => {
    body.classList.remove("dark");
    body.classList.add("light");
    appName.style.color = "#96fa5a";
    for(const button of buttons){
        button.classList.remove("circle-dark");
        button.classList.add("circle-light");
    }
    for(const innerCircle of innerCircles){
        innerCircle.classList.remove("inner-circle-dark");
        innerCircle.classList.add("inner-circle-light");
    }
};

// init light theme;
toggleLight();

const cleanUp = () => {
    display.innerHTML = "";
};

const render = appName => {
    cleanUp();
    switch(appName){
        case("game"):
            return generateGame();
        case("art"):
            return generateArt();
        case("note"):
            return generateNotes();
        case("math"):
            return generateMath();
        default:
            return;
    }
};

const keyDown = e => {
    switch(e.keyCode) {
        case(37):
            rotateLeft();
            break;
        case(39):
            rotateRight();
            break;
        default:
            return;
    };
};

const setDisplay = () => {
    const selectedApp = appList.currentNode.value;
    render(selectedApp);
}

const rotateRight = () => {
    appName.innerHTML = appList.next();
    appList.currentNode.value === "grave" ? toggleDark() : toggleLight();
    setDisplay();
};

const rotateLeft = () => {
    appName.innerHTML = appList.previous();
    appList.currentNode.value === "grave" ? toggleDark() : toggleLight();
    setDisplay();
};


rightButton.onclick = rotateRight;
leftButton.onclick = rotateLeft;

document.addEventListener("keydown", keyDown);

document.getElementById("navbar").addEventListener("click", e => {
    if(e.target.tagName === "SPAN") {
        let text = e.target.innerText.toLowerCase();
        appList.search(text);
        appName.innerHTML = appList.currentNode.value;
        appList.currentNode.value === "grave" ? toggleDark() : toggleLight()
        setDisplay();
    }
});
