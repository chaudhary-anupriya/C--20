var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
  b = createSprite(200,100,80,30);
  b.shapeColor = "green";

}

function draw() {
  background(255,255,255); 
  a.x = World.mouseX;
  a.y = World.mouseY;
  console.log(a.y - b.y);

  if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x <65  && a.y-b.y < a.height/2 + b.height/2  && b.y-a.y <40){
    a.shapeColor = "red";
    b.shapeColor = "red";

  }
  else
  {
    a.shapeColor = "green";
    b.shapeColor = "green";


  }

  drawSprites();
}