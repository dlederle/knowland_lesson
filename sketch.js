
//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);
}

//Draw is called by p5 each frame
function draw() {
  //background(255, 255, 255); //R, G, B
  if(mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
