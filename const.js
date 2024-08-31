function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`Draw a circle with radius ${radius}`);
  };
}
const circle = new Circle(1);
circle.draw();
