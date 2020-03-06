//10. Implementation of stack (using linked list) ?

class stack {
    constructor() {
        this.top = null;
    }

    static stackNode = data => ({data: data, next: null})

    push = (data) => {
        let node = stack.stackNode(data);
        node.next = this.top;
        this.top = node;
    }

    pop = () => {
        let top = this.top.data;
        this.top = this.top.next;
        return top;
    }

    printStack = () => {
        let current = this.top;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let s = new stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.printStack();
console.log("popping  " + s.pop());
console.log("popping  " + s.pop());
console.log("popping  " + s.pop());
console.log("popping  " + s.pop());
s.printStack();
