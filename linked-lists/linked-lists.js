// Create a node class i.e that has a [val, next]

class Node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}


// Then we create our linked-list class
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new LinkedList()

list.push(5)

list.push(7);

console.log(JSON.stringify(list))