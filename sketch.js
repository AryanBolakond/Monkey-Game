
var Monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  Monkey=createSprite(80,315,20,20)
  Monkey.addAnimation("moving", monkey_running)
  Monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  survivalTime=0

  
}


function draw() {
  background(255)
  
  if (ground.x<0){
    ground.x=ground.width/2
  }
  
  if (keyDown("space")){
    Monkey.velocityY=-12
  }
  Monkey.velocityY=Monkey.velocityY+0.8
  
  bananaGroup=createGroup()
  obstacleGroup=createGroup()
  
  Monkey.collide(ground)
  
  stroke("black");
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime, 100, 50);
  
  spawnBanana();
  
  spawnObstacles();
  
 drawSprites() 
}
function spawnBanana(){
  if (frameCount%80===0){
var banana=createSprite(600,300)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.y=Math.round(random(120,200))
    banana.velocityX=-5
    banana.lifetime=120
    bananaGroup.add(banana)
    
    
  }
  
}
function spawnObstacles(){
  if (frameCount%300===0){
var obstacle=createSprite(600,310)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-5
    obstacle.lifetime=120
    obstacleGroup.add(obstacle)
  }
}




