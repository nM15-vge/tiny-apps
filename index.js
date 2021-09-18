const apps = ["app", "blog", "shop", "note", "game", "grave"];
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    };
};

class CircularDoublyLinkList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.currentNode = null;
    };

    getSize() {
        return this.length;
    };

    append(value) {
        let newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.head.previous = this.head.next = this.currentNode = newNode;
        }else {
            let oldPrevious = this.head.previous;
            oldPrevious.next = newNode;
            newNode.previous = oldPrevious;
            newNode.next = this.head;
            this.head.previous = newNode;
        }
        this.length ++;
    };

    next() {
        let oldCurrent = this.currentNode;
        this.currentNode = oldCurrent.next;
        return this.currentNode.value;
    };

    previous() {
        let oldCurrent = this.currentNode;
        this.currentNode = oldCurrent.previous;
        return this.currentNode.value;
    };

    search (text) {
        let currentText = this.currentNode.value;
        while(text !== currentText){
            if(this.currentNode.value === text) return;
            let oldCurrent = this.currentNode;
            this.currentNode = oldCurrent.next;
        }
    }
}

const appList = new CircularDoublyLinkList();

(() => apps.forEach(app => appList.append(app)))();


let appName = document.getElementById("app-name");
appName.innerHTML = appList.head.value;


let links = document.getElementsByClassName("links");

(() => {
    for(const link of links){
        link.addEventListener("click", e => e.preventDefault())
    }
})();

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const body = document.body;
const innerCircles = document.getElementsByClassName("inner-circle");
const buttons = document.getElementsByClassName("circle");

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

toggleLight();

const rotateRight = () => {
    appName.innerHTML = appList.next();
    appList.currentNode.value === "grave" ? toggleDark() : toggleLight();
};

const rotateLeft = () => {
    appName.innerHTML = appList.previous();
    appList.currentNode.value === "grave" ? toggleDark() : toggleLight();
};

rightButton.onclick = rotateRight;
leftButton.onclick = rotateLeft;
document.getElementById("navbar").addEventListener("click", e => {
    if(e.target.tagName === "SPAN") {
        let text = e.target.innerText.toLowerCase();
        appList.search(text);
        appName.innerHTML = appList.currentNode.value;
        appList.currentNode.value === "grave" ? toggleDark() : toggleLight()
    }
});
