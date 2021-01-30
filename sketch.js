const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(600,400,80,80)
  box2=new Box(600,350,80,80)
  box3=new Box(600,300,80,80)
  box4=new Box(600,250,80,80)
  box5=new Box(600,200,80,80)
  box6=new Box(680,400,80,80)
  box7=new Box(680,350,80,80)
  box8=new Box(680,300,80,80)
  box9=new Box(680,250,80,80)
  box10=new Box(680,200,80,80)
  ground = new Ground(600,600,1200,20)
  ball=new Ball(200,200,80,80)
  rope=new Rope(ball.body,{x:500,y:50})
}

function draw() {
  background(180);

  text(mouseX +","+mouseY, mouseX,mouseY);
  textSize(25)
  text("Wrecking Ball",483,20 )
  
  Engine.update(engine);
  rope.display();
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
}
