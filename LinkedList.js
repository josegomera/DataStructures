class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null
    }

    Head() {
        return this.head;
    }

    Size(){
        return this.length;
    }

    Push(data) {
        const node = new Node(data);
        if (this.head === null) {
            return this.head = node;
        } else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }

    Remove(data) {
        let currentNode = this.head;
        let previousNode;
        if (currentNode.data === data){
            previousNode = currentNode.next;
        }else{
            while(currentNode.data !== data){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    isEmpty(){
        return this.length === 0
    }

    indexOf(data){
        let currentNode = this.head;
        let index = -1;

        while (currentNode){
            index++;
            if(currentNode.data === data){
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    elementAt(index){
        let currentNode = this.head;
        let count = 0;
        while (count < index){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.index;
    }

    pushAt(index, data){
        let node = new Node(data);

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index > this.length){
            return false;
        }

        if(index === 0){
            node.next = currentNode;
            this.head = node;
        }else{
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;

        }
        this.length++;
    }

    removeAt(index){
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index < 0 || index >= this.length){
            return null;
        }

        if(index === 0){
            this.head = currentNode.next;
        }else{
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;

        }
        this.length--;
        return currentNode.index;
    }
}