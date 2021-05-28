class Game{
    constructor(){

    }

    // to get gameState 
    getstate(){
        var gameref = database.ref('gameState');
        gameref.on("value",(data) =>{
            gameState = data.val();
        });
    }

    // update gameState
    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        //0
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        basket1 = createSprite(400, 550, 50, 50);
        basket2 = createSprite(600, 550,50,50);
        
        players = [basket1,basket2];
    }

    playLevel1(){
        //1
        if(gameState === 1){

        basket1.addImage(basket1_i);
        basket2.addImage(basket1_i);
            form.hide();
            Player.getPlayerIfo();
            var x = 200;
            var y = 300;
            var index = 0;
            drawSprites();
            for(var plr in allPlayer){
                index=index+1;

                x= 500 - allPlayer[plr].distance;
                y = 500;

                players[index-1].x=x;
                players[index-1].y=y;
                if(index===player.index){
                    //names for the baskets
                }
                //scores
                textSize(25);
                fill("Black");
                //text(allPlayer[plr].name + " = " + allPlayer[plr].lives, 50, 50);
                text("player1: " + allPlayer[plr].lives,50,50);
                text("player2:" + allPlayer[plr].lives,200,50);
            }
            //keydown condition
            if(keyIsDown(RIGHT_ARROW) && player.index !== null){
                player.distance -= 10;
                player.update();
            }
            

            if(keyIsDown(LEFT_ARROW) && player.index !== null){
                player.distance += 10
                player.update();
            }

            if (frameCount % 60 === 0 ){
                life = createSprite(random(100,900),50);
                life.addImage(life_i);
                life.velocityY = 2;
                life.scale = 0.08;
                life.lifetime = 500;
                lifeGroup.add(life);
            }
            //to destroy life
            if(player.index !== null){
                for(var a = 0 ;a < lifeGroup.length; a++){
                    if(lifeGroup.get(a).isTouching(players)){
                        lifeGroup.get(a).destroy();
                        player.lives=player.lives+1;
                        player.update();
                    }
                }
            }
        }
    }

    hide(){
        lifeGroup.destroyEach();
        /*basket1.visible = false;
        basket2.visible = false;*/
        
    }

    playLevel2(){
        //2
        if(gameState === 2){
            background("blue");
            game.hide();
            basket1.addImage(rabbit_walking1);
            basket2.addImage(rabbit_walking2);
            rectMode(CENTER);

        fill("lightblue");
        strokeWeight(0);
        //boundry (4 lines).
  rect(displayWidth/2-299,displayHeight/2,10,displayHeight/2+60);//(left)p-1 bottom
  rect(displayWidth/2-299,displayHeight/2-310,10,70);//(left)p-2 top
  rect(displayWidth/2+299,displayHeight/2-50,10,displayHeight/2+160);//(right)
  rect(displayWidth/2,displayHeight/2+250,displayWidth/2-160,10);//(bottom)
  rect(displayWidth/2,displayHeight/2-350,displayWidth/2-160,10);//(top)

  //fill("Black");
  //rect(displayWidth/4, displayHeight, 10, 10);

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


  
        }
    }

    playLevel3(){
        //3
    }
    
    end(){
        //4
    }
}