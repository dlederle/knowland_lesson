
//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);
}

//Draw is called by p5 each frame
function draw() {
  //noLoop stops the normal draw cycle after one frame
  noLoop();
  background(135, 206, 250); //light blue
  strokeWeight(0);
  fill(0, 128, 0); //green
  rect(0, height - 100, width, 100); //upper left x, y, width, height
  drawHouse((width / 3), height - 230, 150);
  fill(255, 255, 0); //yellow
  ellipse(0, 0, 90);
}

function drawHouse(x, y, size) {
  noStroke();
  //the frame
  fill(203, 65, 84); //brick red
  rect(x, y, size, size * 1.1);
  //the roof
  fill(0, 0, 0); //black
  triangle(x - (size*.2), y, x + size + (size*.2), y, x + (size/2), y - (size * 0.5));

  //the windows
  drawWindow(x + (size / 6), y + (size / 5), size / 6);
  drawWindow(x + 4 * (size / 6), y + (size / 5), size / 6);
  drawWindow(x + (size / 6), y + 3 * (size / 5), size / 6);
  drawWindow(x + 4 * (size / 6), y + 3 * (size / 5), size / 6);

  //the door
  fill(102, 51, 0);
  var doorSize = size * .3;
  var doorUpperLeftX = (x + size / 2) - (doorSize / 4);
  var doorUpperLeftY = y + (size * 1.1 - doorSize);
  rect(doorUpperLeftX, doorUpperLeftY, doorSize / 2, doorSize);
  fill(255, 255, 0);
  ellipse(doorUpperLeftX + (doorSize * .35), doorUpperLeftY + (doorSize / 2), doorSize * .15);
}

function drawWindow(x, y, size) {
  noStroke();
  fill(0, 0, 0);
  rect(x, y, size, size);

  fill(255, 255, 255);
  rect((x - 2) + (size / 2), y, 4, size);
  rect(x, (y - 2) + (size / 2), size, 4);
}
