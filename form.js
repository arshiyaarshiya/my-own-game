class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput('Enter Your Name');
        this.button = createButton('Click to play');
        this.greeting = createElement('h2');
        this.reset = createButton('Click to reset');
    }
    hide(){
        this.title.hide();
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.title.html("Level up Game");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2 -100,displayHeight/2-200);
        this.button.position(displayWidth/2-100,displayHeight/2-150);
        this.reset.position(displayWidth-150,displayHeight-150);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            playerCount+=1;
            player.name = this.input.value();
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(displayWidth/2-50,100);
        });
    
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
        });

    }
}