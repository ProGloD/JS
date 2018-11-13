function Counter() {
  this.counter = 0;
  this.increase = function() {
    this.counter++;
  };
  this.log = function() {
    console.log(this.counter);
  };
}

let counter = new Counter();
counter.increase();
counter.increase();
counter.log();

let counter2 = new Counter();
counter2.increase();
counter2.log();