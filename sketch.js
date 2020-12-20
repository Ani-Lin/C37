var database ;

var hypnoticball,position;

var form,game,player;

var allPlayers;

var gameState=0;
var playerCount=0;

function setup() {
  database = firebase.database();
  //console.log(database);
  createCanvas(800,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255);
  //console.log(player); 
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    alert(player.index);
    game.play();
  }

  
  drawSprites();
}


function showError(){
  console.log("Error in writing to the database");
}