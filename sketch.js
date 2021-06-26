var seaImg, shipImg1, ship;
var edges, sea, spriteName;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship3.png","ship4.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(400,200,20,20);
  ship.addAnimation(shipImg1);
  edges = createEdgeSprites();

  spriteName.addImage(seaImg);
  sea = createSprite(400,400,400,400);
  if(sea.x < 0){
    sea.x=sea.width/2
  }
}

function draw() {
  background("blue");
 
}
