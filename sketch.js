var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 50);
  a.shapeColor="red"
  b=createSprite(300, 200, 20, 20);
  b.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  a.x=World.mouseX;
  a.y=World.mouseY; 
  console.log(a.x-b.x);
  if(a.x-b.x<34 && b.x-a.x<34){
    a.shapeColor="pink"
    b.shapeColor="pink"
  }
  else{
    a.shapeColor="green"
    b.shapeColor="green"
  }
  drawSprites();
}