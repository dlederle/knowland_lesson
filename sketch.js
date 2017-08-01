var food;
var food_file_names = [
  "apple_pie",
  "apple",
  "avocado",
  "bacon",
  "bananna",
  "beer",
  "bottle",
  "cherry",
  "chicken",
  "chocolate",
  "cookie",
  "eggplant",
  "eggs",
  "fish",
  "green_pepper",
  "honey_comb",
  "jam",
  "kiwi",
  "lemon_pie",
  "melon_slice",
  "moon_shine",
  "muffin",
  "olive",
  "onion",
  "peach",
  "pickle",
  "pig_head",
  "pineapple",
  "potato",
  "prawn",
  "pretzel",
  "pumpkin_pie",
  "raddish",
  "red_pepper",
  "red_potato",
  "sausages",
  "shrimp",
  "steak",
  "stein",
  "strawberry",
  "sushi",
  "tomato",
  "turkey_leg",
  "watermelon",
  "wine",
  "worm_apple"
]

//Setup is called by p5 once
function setup() {
  createCanvas(800, 400);

  //p5.Play provides basic sprite functionality
  food = createSprite(400, 200); //x, y, width, height

  //uncomment to see the images blurry and large
  //food.scale = 4;
  randomFood();

  //p5 calls the mousePressed function on each click
  mousePressed = randomFood;
}

//Draw is called by p5 each frame
function draw() {
  background(255, 255, 255); //R, G, B
  drawSprites();
}

function randomFood() {
  var key = food_file_names[Math.floor(Math.random()*food_file_names.length)];
  var foodImage = loadImage("assets/" + key + ".png");
  food.addImage(key, foodImage);
  food.changeImage(key);
}
