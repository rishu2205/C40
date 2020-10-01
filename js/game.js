class Game {
constructor(){

}

getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data){
        gameState=data.val()
       })
    
}

update(state)
{
    database.ref('/').update({
        gameState:state
    })
}

start(){
    if(gameState===0){
     player=new Player()   
     player.getCount()
     form=new Form()
     form.display()
     
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
}

play()
{
    form.hide();
  textSize(30);
  text("game start",120,100);
  Player. getplayerinfo()
  if(allplayers !== undefined){

      var index=0
      var x=0;
      var y;
      for(var plr in allplayers){
          index=index+1;
          x=x+200;
          y=displayHeight-allplayers[plr].distance
          cars[index-1].x=x
          car[index-1].y=y
          if(index===player.index)
          {
              cars[index-1].shapeColor="red";
          }
          if(  plr==="player"+player.index)
          fill("red");
          else

          fill("black")    ;
          display_position+=30;
          textSize(15);
          text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position)
          
          
      }
    }
    if(keyIsDown(UP_ARROW)&player.index!=null){
     player.distance+=50
     player.update()   
    }
    drawsprites()
  }
  
}


