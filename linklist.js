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
        };
    };
};
