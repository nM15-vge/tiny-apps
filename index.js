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
}

const appList = new CircularDoublyLinkList();

(() => apps.forEach(app => appList.append(app)))();


let appName = document.getElementById("app-name");
appName.innerHTML = appList.head.value;

const toggleDark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    appName.style.color = "#F6F6F6"
};
const toggleLight = () => {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    appName.style.color = "#F6F6F6"
};
const rotateRight = () => {
    appName.innerHTML = appList.next();
    appList.currentNode.value === "grave" ? toggleDark() : toggleLight();
};
const rotateLeft = () => {
    appName.innerHTML = appList.previous();
    appList.currentNode.value === "grave" ? toggleDark() : toggleLight();
};

document.getElementById("right-button").onclick = rotateRight;
document.getElementById("left-button").onclick = rotateLeft;
