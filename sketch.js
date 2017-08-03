//Example from Allison Parish
//http://creative-coding.decontextualize.com/making-games-with-p5-play/

var spr;
//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);
  spr = createSprite(width /2, height /2, 40, 40); //X, Y, Width, Height
}

//Draw is called by p5 each frame
function draw() {
  background(50); //R, G, B
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop",
      width/2, height*0.67);
  drawSprites();
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spr.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    spr.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    spr.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    spr.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}

