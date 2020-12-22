var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(800,400);
  bullet = createSprite(200, 200, 60, 20);
  wall = createSprite(600,200,thickness,height/2);
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
}
function draw() {
  background(0);
  bullet.velocityX = speed;
  weight = Math.round(random(30,52));
    
  if (myistouching(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10) {
      wall.shapeColor = "green"
    }
    if(damage>10) {
      wall.shapeColor = "red"
    } 
  }
  drawSprites();
}

function myistouching(Lbullet,Lwall) {
  
bulletRightEdge = Lbullet.x+Lbullet.width;
wallLeftEdge = Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}