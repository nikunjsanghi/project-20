var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.velocityX = 3;
  wall = createSprite(1700,200,60,height/2);
  wall.shapeColor = color(80,80,80);



}

function draw() {
  background(80);  

  if(wall.x=car.x <(car.width*wall.width)/2){
    car.velocityX = 0;
    var Deformation = 0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(Deformation<180 && Deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(Deformation>100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}