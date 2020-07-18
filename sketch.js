const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var line1,ground,slingShot;
var DustBinImg,PaperImg;

function setup() {
	createCanvas(1500, 461);

	GroundSprite = createSprite(width/2,450,width,20);
	GroundSprite.shapeColor = color("red");

	GroundSprite = createSprite(width,450,10,1000);
	GroundSprite.shapeColor = color("blue");
	
	GroundSprite = createSprite(width/2, 1, 1500, 12);
	GroundSprite.shapeColor = color("white");

	ground = Bodies.rectangle(width, 450, 10, 1000);
	 
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,450,width,20);
	groundV = new Ground(width, 450, 10, 1000);
	groundU = new Ground(width/2, 1, width, 10);
	line1 = new Line(1300,365);
	line2 = new Line(1365,365,10,145);
	line3 = new Line(1236,360,10,140);
	ball = new Ball(100,300,50,50);
	slingShot = new Slingshot(ball.body,{x : 200,y : 200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  groundV.display();
  groundU.display();
  ball.display();
  line3.display();
  line1.display();
  slingShot.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-95});
	   
	 }
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}