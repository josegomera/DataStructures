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
}





