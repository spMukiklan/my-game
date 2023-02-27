const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var trophyButton;
var kabuto,marchamp,rino1,scizor,trophy,playButton;
var kabutoImg,marchampImg,scizorImg,rinoImg;
var score=0; //integer
var gameState= "start"; //string 


function preload()
{
  kabutoImg=loadImage('kabu.png')
  marchampImg=loadImage('machamp.png')
  rinoImg=loadImage('rino.png')
  scizorImg=loadImage('scizor-f.png')

}

function setup() {
  createCanvas(1700,850);
  kabuto=createSprite(450,350,50,50)
  kabuto.addImage(kabutoImg) 

  marchamp=createSprite(700,350,50,50)
  marchamp.addImage(marchampImg) 

  rino1=createSprite(950,350,25,25)
  rino1.addImage(rinoImg)
  rino1.scale=0.3
  
  scizor=createSprite(1200,350,50,50)
  scizor.addImage(scizorImg) 

  // playButton=createImg("images.png")
  // playButton.position(1450,700)
  //playButton.mouseClicked(startGame)
  
  trophyButton=createImg("trophy.png")
  trophyButton.position(10,10)
  trophyButton.size(50,50)
 
}

function draw() 
{
  background(51);
  
  
  drawSprites();

  fill('yellow')
  textSize(20)
  text('number of trophy: '+score,70,50)

  //text(message , x , y)
  if(gameState=="start"){
    fill('yellow')
    textSize(30)
    text('Choose the pokemon',700,130);

    if(mousePressedOver(kabuto) ||
       mousePressedOver(marchamp)||
       mousePressedOver(scizor)||
       mousePressedOver(rino1)){
        
          gameState = "play"
    }
  }
}

