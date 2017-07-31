
//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);

  //p5.Play provides basic sprite functionality
  createSprite(400, 200, 50, 50); //x, y, width, height

}

//Draw is called by p5 each frame
function draw() {
  background(255, 255, 255); //R, G, B
  drawSprites();
}
