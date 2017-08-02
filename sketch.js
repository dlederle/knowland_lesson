var clouds,
    pointer;

//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);
  //
  //Based on examples from Allison Parish
  //http://creative-coding.decontextualize.com/making-games-with-p5-play/
  clouds = new Group();
  for(var i=0; i<10; i++) {
    var c = createSprite(
        random(width), random(height),
        random(25, 100), random(25, 100));
    c.shapeColor = color(random(200, 255));
    clouds.add(c);
  }
  pointer = createSprite(mouseX, mouseY, 15, 15);
  pointer.immovable = true;
  pointer.collide(clouds);
}

//Draw is called by p5 each frame
function draw() {
  background(255, 255, 255); //R, G, B
  for(cloud of clouds) {
    cloud.position.x += (cloud.width / 2) * 0.01;
    if(cloud.position.x > width) { cloud.position.x = 0; }
  }
  pointer.velocity.x = (mouseX-pointer.position.x) / 10;
  pointer.velocity.y = (mouseY-pointer.position.y) / 10;
  drawSprites();
}
