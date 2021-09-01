var path,pathImage
var boy,boyImage
var lb,rb
function preload(){

  //pre-load images
  pathImage = loadImage("path.png")
  boyImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 2

  //creating boy
  boy =  createSprite(180,340,30,30)
  boy.addAnimation("running",boyImage)
  boy.scale = 0.1

  rb = createSprite(410,0,100,800)
  rb.visible = true

  lb = createSprite(0,0,100,800)
  lb.visible = true
}

function draw() {
  background(0);
if(path.y>400){
  path.y = height/2
}
boy.x = World.mouseX
edges = createEdgeSprites()
boy.collide(edges[3])
boy.collide(lb)
boy.collide(rb)



drawSprites()
}
