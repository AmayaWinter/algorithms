class MinMaxStack {
  constructor() {
    this.stack = []
    this.minMaxes = [];
  }
  peek() {
    return this.stack[this.stack.length-1];
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
    return this.minMaxes[this.minMaxes.length - 1].min;
  }

  getMax() {
    return this.minMaxes[this.minMaxes.length - 1].max;
  }

  pushMinMax(val) {
    if(!this.minMaxes.length) {
      this.minMaxes.push({min: val, max: val});
    }
    else {
      this.minMaxes.push({
        min: Math.min(this.minMaxes[this.minMaxes.length - 1].min, val),
        max: Math.max(this.minMaxes[this.minMaxes.length - 1].max, val)
      });
    }
  }
}