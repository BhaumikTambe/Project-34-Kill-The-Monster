const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var bkImage;

function preload() {
//preload the images here
bkImage = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(1360, 650);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground = new Ground(500, 550, 1100, 30);

  monster = new Monster(910, 320, 200);

  hero = new Hero(190, 200, 110);
  rope = new Rope(hero.body, {x:250, y:50})
 

  box1 = new redBox(470,490,80,80);
  box2 = new redBox(470,390,80,80);
  box3 = new redBox(470,290,80,80);
  box4 = new redBox(470,190,80,80);
  box5 = new redBox(470,90,80,80);
  box6 = new redBox(470,0,80,80);

  box7 = new Box(570,390,80,80);
  box8 = new Box(570,290,80,80);
  box9 = new Box(570,190,80,80);
  box10 = new Box(570,90,80,80);

  box11 = new redBox(670,290,80,80);
  box12 = new redBox(670,190,80,80);
}

function draw() {
  background(bkImage);
  Engine.update(engine);

  ground.display();

  monster.display();

  hero.display();
  rope.display();

  box1.display();
  box2.display()
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}
