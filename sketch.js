
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  
  monkey = createSprite(50,150,50,20)  
  ground = createSprite(300,190,1200,20)
  
  
  monkey.addAnimation("running",monkey_running)

  monkey.scale = 0.08
  
  // bananaImage.addImage(banana,"banana.png");

  obstacleGroup = new Group();
  foodGroup = new Group();
  
  
  monkey.velocityY = 2
  
}


function draw() {
background(230)

  monkey.collide(ground)
  
  if(keyDown("space")){
    monkey.velocityY = -10
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
 
  ground.velocityX = -5
  //console.log(ground.x)
  
 if(ground.x < -2){
   ground.x = 100
 } 
   spawnBananas()
   spawnObstacles()  
  drawSprites();  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,170,10,40);
    
    //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityX = -5        
    obstacle.scale = 0.1;
    //obstacle.lifetime = 300;
  
    obstacleGroup.add(obstacle);
  
    obstacle.addImage(obstacleImage);
  
  }
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(10,140));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }


}