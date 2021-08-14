var ship,shipImage
var sea,seaImage
function preload(){
shipImage = loadImage("ship-1.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,400)
  sea.addImage(seaImage)
  sea.velocityX = -3

  ship = createSprite(200,200)
  ship.addImage(shipImage)
  ship.scale = 0.7
if(sea.x > 0){
  sea.x = sea.width/2;
}
}

function draw() {
  background("blue");
 
}