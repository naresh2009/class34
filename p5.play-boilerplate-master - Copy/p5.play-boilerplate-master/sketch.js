const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(750,500,1500,15)


  box1 = new Box(700, 100, 70, 70);
  box2 = new Box(700, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  box4 = new Box(700, 100, 70, 70);
  box5 = new Box(700, 100, 70, 70);
  box6 = new Box(700, 100, 70, 70);

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });




  
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
ground.display()
box1.display()

box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()


  ball.display();
  rope.display();




  
}