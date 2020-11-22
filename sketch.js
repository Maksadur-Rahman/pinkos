const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var divisionHeight=300;
var divisions;
var particales;







function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(1200,1000);
  var partical=[];
  var plinkos=[];
  var division=[];

 ground=new Ground(644,861,1000,15);
 for(var k=0; k<=width; k=k+80){

  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));

  }


  if(frameCount%60===0){
    particales.push(new Ball(random(width/2-10,width/2+10),10,10));
  
  }




}

function draw() {
  Engine.update(engine);

  background(255,255,255);  
  text("x= "+mouseX+"y= "+mouseY,mouseX,mouseY);



  drawSprites();
  ground.display();
}