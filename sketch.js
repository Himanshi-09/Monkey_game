//Global Variables
var player,player_running;
var ground;
var jungle,backImage;
var bananas,bananaImage;
var stone,obstacle_img;
var restart,reset;
var gameover,end;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score = 0;

function preload(){
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 backImage = loadImage("jungle.jpg");
  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png");
  end = loadImage("gameOver.png");
  reset = loadImage("restart.png");
  
}
function setup() {
  createCanvas(500,300);
  jungle = createSprite(300,150,600,600);
  jungle.addImage("backround",backImage);
  jungle.scale = 0.6;
  
  player = createSprite(50,250,20,20);
  player.addAnimation("playing",player_running);
  player.scale = 0.1;
  
  ground = createSprite(200,300,400,20);
  ground.visible = false;
  
  bananagroup = new Group();
  obstaclesgroup = new Group();
  
  restart = 
}
function draw(){
 background(255);
  
  player.collide(ground);
  if(gameState===PLAY){
  jungle.velocityX = -3;
  if(jungle.x<200){
   jungle.x = jungle.x=300; 
  }
  if(keyDown("space")&&player.y>=249){
   player.velocityY = -15;
  }
   
  player.velocityY = player.velocityY+0.8;
  spawnbananas();
  spawnstone();
  if(obstaclesgroup.isTouching(player)){
   gameState=END; 
  }
    if(bananagroup.isTouching(player)){
      bananagroup.destroyEach();
      score = score+2 ;
    }
  }
  else if(gameState===END){
 jungle.velocityX=0;
  obstaclesgroup.setVelocityXEach(0);
  player.velocityY =0;
  
  }
  drawSprites(); 
 
  textSize(20);
  fill("white");
  stroke("white");
  text("score:"+score,400,50);
}
function spawnbananas(){
 if(World.frameCount%100==0){
  banana = createSprite(540,120,20,20);
  banana.addImage("food",bananaImage);
  banana.velocityX = -6; 
   banana.lifetime = 100;
   banana.scale = 0.1;
   bananagroup.add(banana);
 }
}
function spawnstone(){
 if(World.frameCount%100===0){
  stone = createSprite(540,280,20,20);
  stone.addImage("obstacle",obstacle_img);
  stone.velocityX = -6;
  stone.lifetime =100;
  stone.scale =0.2  ; 
  obstaclesgroup.add(stone);
 }
}