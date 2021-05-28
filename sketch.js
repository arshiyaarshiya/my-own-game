var bg_1,bg_2, basket1_i,life_i;
var life,form,game;
var playerCount=0;
var players;
var database,gameState=0;
var player;
var allPlayer;
var basket1,basket2;
var car1_1,car2_i,car3_i,car4_i,carrot_i,rabbit_walking1,rabbit_walking2;
var monster1_i,monster2_i,monster3_i,bg_3;
var lifeGroup;

function preload(){
  bg_2 = loadImage("mazebg.png");
  bg_1 = loadImage("bg1.png");
  bg_3 = loadImage("bg3.jpg");
  basket1_i = loadImage("basket2.png");
  life_i = loadImage("life.png");
  carrot_i = loadImage("carrot.png");
  rabbit_walking1 = loadAnimation("rabbit1.png","rabbit2.png");
  rabbit_walking2 = loadAnimation("pc2 -2.png","p2 -1.png");
  monster1_i = loadImage("monster1.png");
  monster2_i = loadImage("monster2.png");
  monster3_i = loadImage("monster3.png");
  car1_1 = loadImage("car1.png");
  car2_i = loadImage("car2.png");
  car3_i = loadImage("car3.png");
  car4_i = loadImage("car4.png");
  lifeGroup = new Group();

}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  database = firebase.database();


  game = new Game();
  game.getstate();
  game.start();
 
}


function draw() {
  background(bg_1); 
  imageMode(CENTER);
  //image(bg_1, displayWidth/2,displayHeight/2-50,600,600); 

  if (playerCount===2){
    game.updateState(1);
  }

  if(gameState === 1){
    game.playLevel1();
  }

  if(player.lives === 5){
    game.updateState(2);
  }

  if(gameState === 2){
    game.playLevel2();
  }
  if(gameState === 3){
    game.playLevel3();
  }
  if(gameState === 4){
    game.end();
  }
 // maize();
}

/*function maize(){
  rectMode(CENTER);
  fill("lightblue");
  strokeWeight(0);
  //boundry (4 lines).
  rect(displayWidth/2-299,displayHeight/2,10,displayHeight/2+60);//(left)p-1 bottom
  rect(displayWidth/2-299,displayHeight/2-310,10,70);//(left)p-2 top
  rect(displayWidth/2+299,displayHeight/2-50,10,displayHeight/2+160);//(right)
  rect(displayWidth/2,displayHeight/2+250,displayWidth/2-160,10);//(bottom)
  rect(displayWidth/2,displayHeight/2-350,displayWidth/2-160,10);//(top)

  //maize (iner lines);
  rect(displayWidth/2-260,displayHeight/2+210,70,10);
  rect(displayHeight/2+170,displayHeight/2+210,60,10);
  rect(displayHeight/2+200,displayHeight/2+225,10,40);
  rect(displayHeight/2+260,displayHeight/2+225,10,40);
  rect(displayHeight/2+310,displayHeight/2+210,90,10);
  rect(displayHeight/2+360,displayHeight/2+195,10,40);
  rect(displayHeight/2+230,displayHeight/2+170,270,10);
  rect(displayHeight/2+310,displayHeight/2+150,10,40);
  rect(displayHeight/2+210,displayHeight/2+160,10,30);
  rect(displayHeight/2+100,displayHeight/2+150,10,40);
  rect(displayWidth/2-155,displayHeight/2+140,70,10);
  rect(displayHeight/2+151,displayHeight/2+50,10,170);
  rect(displayWidth/2-260,displayHeight/2,70,10);
  rect(displayWidth/2-260,displayHeight/2-280,70,10);
  rect(displayWidth/2-239,displayHeight/2-170,130,10);
  rect(displayHeight/2+100,displayHeight/2+70,10,70);
  rect(displayWidth/2-210,displayHeight/2+70,60,10);
  rect(displayWidth/2-210,displayHeight/2+70,60,10);
  rect(displayHeight/2+170,displayHeight/2+210,60,10);
  rect(displayWidth/2-210,displayHeight/2-30,50,10);
  rect(displayWidth/2-210,displayHeight/2-130,50,10);
  rect(displayWidth/2-230,displayHeight/2-80,10,100);
  rect(displayWidth/2+80,displayHeight/2+200,10,100);
  rect(displayWidth/2+130,displayHeight/2+200,100,10);
  rect(displayWidth/2+240,displayHeight/2+140,10,160);
  rect(displayWidth/2+210,displayHeight/2+140,60,10);
  rect(displayWidth/2+270,displayHeight/2+170,60,10);
  rect(displayWidth/2+180,displayHeight/2+155,10,40);
  rect(displayWidth/2+270,displayHeight/2+170,60,10);
  rect(displayWidth/2+150,displayHeight/2+170,60,10);
  rect(displayWidth/2+125,displayHeight/2+140,10,60);
  rect(displayWidth/2-150,displayHeight/2+30,60,10);
  rect(displayWidth/2-80,displayHeight/2,200,10);
  rect(displayWidth/2-80,displayHeight/2+20,10,100);
  rect(displayWidth/2+20,displayHeight/2,10,80);
  rect(displayWidth/2+50,displayHeight/2+35,60,10);
  rect(displayWidth/2+80,displayHeight/2-35,10,150);
  rect(displayWidth/2+115,displayHeight/2,60,10);
  rect(displayWidth/2+45,displayHeight/2-105,60,10);
  rect(displayWidth/2+115,displayHeight/2-70,60,10);
  rect(displayWidth/2+190,displayHeight/2-30,120,10);
  rect(displayWidth/2+80,displayHeight/2+70,200,10);
  rect(displayWidth/2+180,displayHeight/2+85,10,40);
  rect(displayWidth/2-20,displayHeight/2+70,10,70);
  rect(displayWidth/2-20,displayHeight/2+105,200,10);
  rect(displayWidth/2+30,displayHeight/2+130,10,40);
  rect(displayWidth/2-80,displayHeight/2+130,10,40);
  rect(displayWidth/2-120,displayHeight/2+90,10,40);
  rect(displayWidth/2+130,displayHeight/2+45,10,40);
  rect(displayWidth/2+185,displayHeight/2+30,100,10);
  rect(displayWidth/2+185,displayHeight/2-55,10,160);
  rect(displayWidth/2+80,displayHeight/2-140,220,10);
  rect(displayWidth/2-25,displayHeight/2-80,10,120);
  rect(displayWidth/2-80,displayHeight/2-70,200,10);
  rect(displayWidth/2-180,displayHeight/2-85,10,40);
  rect(displayWidth/2-130,displayHeight/2-45,10,40);
  rect(displayWidth/2-50,displayHeight/2-100,60,10);
  rect(displayWidth/2+130,displayHeight/2-120,10,40);
  rect(displayWidth/2+230,displayHeight/2+5,10,40);
  rect(displayWidth/2+265,displayHeight/2+5,60,10);
  rect(displayWidth/2+265,displayHeight/2-130,60,10);
  rect(displayWidth/2+240,displayHeight/2-95,10,60);
  rect(displayWidth/2+230,displayHeight/2-260,10,50);
  rect(displayWidth/2+265,displayHeight/2-240,60,10);
  rect(displayWidth/2+265,displayHeight/2-310,60,10);
  rect(displayWidth/2,displayHeight/2-310,65,10);
  rect(displayWidth/2+30,displayHeight/2-280,10,60);
  rect(displayWidth/2+55,displayHeight/2-250,60,10);
  rect(displayWidth/2+80,displayHeight/2-280,10,60);
  rect(displayWidth/2+130,displayHeight/2-310,110,10);
  rect(displayWidth/2+180,displayHeight/2-300,10,100);
  rect(displayWidth/2+30,displayHeight/2-175,10,60);
  rect(displayWidth/2+110,displayHeight/2-205,260,10);
  rect(displayWidth/2+130,displayHeight/2-240,10,60);
  rect(displayWidth/2+235,displayHeight/2-185,10,30);
  rect(displayWidth/2+205,displayHeight/2-170,70,10);
  rect(displayWidth/2+85,displayHeight/2-170,100,10);
  rect(displayWidth/2-20,displayHeight/2-235,10,70);
  rect(displayWidth/2-50,displayHeight/2-275,70,10);
  rect(displayWidth/2-80,displayHeight/2-290,10,40);
  rect(displayWidth/2-180,displayHeight/2-290,10,40);
  rect(displayWidth/2-215,displayHeight/2-305,60,10);
  rect(displayWidth/2-115,displayHeight/2-305,60,10);
  rect(displayWidth/2-140,displayHeight/2-270,10,60);
  rect(displayWidth/2-140,displayHeight/2-130,10,70);
  rect(displayWidth/2-100,displayHeight/2-130,70,10);
  rect(displayWidth/2-170,displayHeight/2-200,160,10);
  rect(displayWidth/2-90,displayHeight/2-170,10,70);

}*/