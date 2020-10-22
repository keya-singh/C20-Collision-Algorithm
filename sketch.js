var movingrect, fixedrect ;


function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "blue";

  fixedrect = createSprite (600,400,50,50);
  fixedrect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
    movingrect.shapeColor = "pink";
    fixedrect.shapeColor = "pink";
  }
  else {
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";
  }

  drawSprites();
}