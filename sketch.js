var radius = 40;
var x = -radius;
var speed = 0.5;

//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);
  ellipseMode(RADIUS);
}

//Draw is called by p5 each frame
function draw() {
  background(0);
  x += speed;
  arc(x, 60, radius, radius, 0.52, 5.76);
}
