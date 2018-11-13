function Rectangle(x, y) {
  this.width = x;
  this.height = y;
  this.area = function() {
    return this.width * this.height;
  };
  this.setWidth = function(x) {
    this.width = x;
  };
  this.setHeight = function(y) {
    this.height = y;
  }
}

let rectangle = new Rectangle(2, 3)
console.log(rectangle.area()); // -> 6

rectangle.setWidth(5);
rectangle.setHeight(6);
console.log(rectangle.area()); // -> 30