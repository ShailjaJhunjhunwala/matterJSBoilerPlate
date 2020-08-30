
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paddle,paddle1,paddle2;
var gound;
var ball;

function preload()
{
	 	
	 	
}

function setup() {
	createCanvas(800,650);
    rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	paddle = new Dustbin(650,590,200,20)
    paddle1 = new Dustbin(740,530,20,100)	
    paddle2 = new Dustbin(560,530,20,100)

	ground = Bodies.rectangle(width/2,height-40,width,20,{isStatic:true})
    //ground.shapeColor = "white"
    World.add(world,ground)

    ball = new Ball(100,500,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,width,20)
  paddle.display();
  paddle1.display();
  paddle2.display();
  ball.display();
}

function keyPressed(){

	if(keyCode === 32){
        console.log("hi")
        Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-70})  
	}
}



