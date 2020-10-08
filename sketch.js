var fixedRect, movingRect;
var GameObject1 , GameObject2 , GameObject3 ,GameObject4 ;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  GameObject1 = createSprite  (100,100,40,40);
  GameObject1.shapeColor = "red" ;

  GameObject2 = createSprite  (500,100,40,40);
  GameObject2.shapeColor = "red" ;

  GameObject3 = createSprite  (100,300,40,40);
  GameObject3.shapeColor = "red" ;

  GameObject4 = createSprite  (500,300,40,40);
  GameObject4.shapeColor = "red" ;
 

  GameObject1.velocityX = +5;
  GameObject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  

bounceOff (GameObject1,GameObject2) ;

  
  drawSprites();
}































