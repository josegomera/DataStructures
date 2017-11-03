function LinkedList(){
    var length = 0;
    var head = null;

    var Node = function (data){
        this.data = data;
        this.next = null;
    };

    this.head = function (){
        return head;
    };

    this.push = function (data){
        var node = new Node(data);
        if (head === null) {
            return head = node;
        } else{
            var currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    this.remove = function (data){
        var currentNode = head;
        var previousNode;
        if (currentNode.data === data){
            previousNode = currentNode.next;
        }else{
            while(currentNode.data !== data){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };
}

var ll = new LinkedList();
ll.push(5);
ll.push(4);
ll.push(3);
ll.push(2);
ll.remove(2);

console.log(ll.head());




