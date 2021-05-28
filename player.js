class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.lives = 0;
        this.name = null;
    }

    //to get the count of players 
    getCount(){
        var countRef = database.ref('playerCount');
        countRef.on("value",(data) => {
            playerCount = data.val();
        });
    }

    // to update the count of players
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    // updating player info
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            lives: this.lives
        });
    }

    static getPlayerIfo(){
        var playerInoRef = database.ref('players');
        playerInoRef.on("value",(data)=>{
            allPlayer=data.val();
        });
    }
}