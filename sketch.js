var fixedRect
var movingRect
var car, wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green"

  car = createSprite(100, 100, 50, 50);
  car.shapeColor = "lightblue"
  car.velocityX = 5;
  wall = createSprite(800, 100, 50, 80);
  wall.shapeColor = "pink"
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  
   if(isTouching(movingRect, fixedRect)){
      fill("Red")
      textSize(20)
      text("ACCIDENT!!!!!", 400, 400)
   }

   //else{
    //fixedRect.shapeColor = "green"
    //movingRect.shapeColor = "green"
  //}
   bounceOff(car, wall);
  drawSprites();
  //console.log(movingRect.x-fixedRect.x)
}

function isTouching(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && 
    object2.x - object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 && 
    object2.y - object1.y<object2.height/2+object1.height/2){
      return true;
  }
  else{
    return false;
  }
}

function bounceOff(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && 
     object2.x - object1.x<object2.width/2+object1.width/2){
     object1.velocityX = object1.velocityX * (-1);
     object2.velocityX = object2.velocityX * (-1);
     }
  if(object1.y-object2.y<object2.height/2+object1.height/2 && 
    object2.y - object1.y<object2.height/2+object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
      }
}