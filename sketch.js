var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80); 
  movingrect = createSprite(400, 200, 80, 30); 
  fixedrect .shapeColor="green";
  movingrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;


}

function draw() {
  background(255,255,255);  
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
console.log(fixedrect.width/2+movingrect.width/2);
console.log(movingrect.x-fixedrect.x);

if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 &&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
  movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2 &&
  fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2){
    
  fixedrect .shapeColor="red";
  movingrect.shapeColor="red";

}

else{

fixedrect .shapeColor="green";
movingrect.shapeColor="green";

}

  drawSprites();
}