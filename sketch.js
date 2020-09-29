var car, wall,speed,weight,deformation


function setup() {
  createCanvas(1600,400);
  speed = random(34,80);
  weight = random(1500,1990);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "blue"
  wall = createSprite(1500,200,200,60);
  wall.shapeColor = "white"
  
}

function draw() {
  background("black");
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if(deformation < 180){
      car.shapeColor = color (255,0,0);
    }
    if(deformation < 180 && deformation > 100 ){
      car.shapeColor =  color (230,230,0);
    }
    if(deformation < 100){
      car.shapeColor = color (0,255,0)
    }

  }

  createEdgeSprites();  
  drawSprites();
}