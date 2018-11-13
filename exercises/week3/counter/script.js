let counter = {
  count: 0,
  increase: function() {
    this.count++;
  },
  log: function() {
    console.log(this.count);
  }
};

counter.log();
counter.increase();
counter.log();