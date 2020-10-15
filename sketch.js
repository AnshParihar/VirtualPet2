var dogSprite,dogImage,happyDogImage,foodStockRef,database

function preload(){
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  dogSprite = createSprite(250,250)
  dogSprite.addImage(dogImage)
  dogSprite.scale = 0.3
  database = firebase.database()
  food = new Food()
  food.readFoodStock()
}


function draw() { 
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    dogSprite.addImage(happyDogImage)
    writeStock(foodStock)
  }
  if(keyWentUp(UP_ARROW)){
    dogSprite.addImage(dogImage)
  } 

  drawSprites();
  textSize(18)
  fill(255,255,255)
  text("Note: Press UP_ARROW to feed Drago milk",20,20)
  text("Food remaning: "+food.foodStock,20,40)
  food.display();

}
function writeStock(x){
  if(x>0){
    x = x-1
  }
  database.ref("/").update({
    food:x
  })
}



