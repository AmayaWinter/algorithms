class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(val) {
    if(this.head) {
      this.head =  new Node(val, this.head);
    }
    else {
      this.head =  new Node(val);
    }
    this.length++;
  }
  pop() {
    if(this.head) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      return val;
    }
  }
  peek() {
    if(this.head) {
      return this.head.val;
    }
  }
}

/*
Time:
  peek: O(1)
  push: O(1)
  pop: O(1)
  getMin: O(1)
  getMax: O(1)
Space: O(n);
 */
class MinMaxStack {
  constructor() {
    this.stack = new LinkedList();
    this.minMaxes = new LinkedList();
  }
  peek() {
    return this.stack.peek();
  }

  pop() {
    this.minMaxes.pop();
    return this.stack.pop();
  }

  push(number) {
    this.pushMinMax(number);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxes.peek().min;
  }

  getMax() {
    return this.minMaxes.peek().max;
  }

  pushMinMax(val) {
    if(!this.minMaxes.length) {
      this.minMaxes.push({min: val, max: val});
    }
    else {
      this.minMaxes.push({
        min: Math.min(this.minMaxes.peek().min, val),
        max: Math.max(this.minMaxes.peek().max, val)
      });
    }
  }
}