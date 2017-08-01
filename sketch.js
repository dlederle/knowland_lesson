
var player;

var MARGIN = 40;

//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);


  //p5.Play provides basic sprite functionality
  player = createSprite(400, 200, 50, 50); //x, y, width, height
  player.maxSpeed = 6;

}

//Draw is called by p5 each frame
function draw() {
  background(255, 255, 255); //R, G, B

  //Uncomment to explore the coordinate system
  //console.log("X: " + mouseX + " | Y: " + mouseY);

  //a spacewar-style screen wrap for all sprites
  for(s of allSprites) {
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  playerMovement('MOUSE_PRESS');
  drawSprites();
}

function playerMovement(type) {
  //Tuning values
  var SPEED = 0.5,
      GRAVITY = 0.25,
      FRICTION = .1; //Friction from 0-1, 1 is no movement

  switch(type) {
    case 'MOUSE_FOLLOW':
      player.position.x = mouseX;
      player.position.y = mouseY;
      break;
    case 'MOUSE_PRESS':
      if(mouseIsPressed) {
        player.attractionPoint(SPEED, mouseX, mouseY);
      }
      break;
    case 'PLATFORMER':
      player.addSpeed(GRAVITY, 90);
      player.friction = FRICTION;
      if(player.position.y >= height - player.height) {
        player.setSpeed(0, player.getDirection())
      }
      if(keyDown(LEFT_ARROW)) {
        player.addSpeed(SPEED, 180);
      }
      if(keyDown(RIGHT_ARROW)) {
        player.addSpeed(SPEED, 0);
      }
      if(keyDown(UP_ARROW)) {
        player.velocity.y = -5;
      }
      break;
    case 'TANK':
      //Tank movement is similar to ship movement, but you slow down
      player.friction = FRICTION;
    case 'SHIP':
      if(keyDown(LEFT_ARROW)) {
        player.rotation -= 4;
      }
      if(keyDown(RIGHT_ARROW)) {
        player.rotation += 4;
      }
      if(keyDown(UP_ARROW)) {
        player.addSpeed(.2, player.rotation);
      }
      break;
    default:
      break;
  }

}
