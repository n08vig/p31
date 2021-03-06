const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8, drop9, drop10, drop11;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  drop1 = new Drops(200, 100, 5);
  drop2 = new Drops(400, 200, 5);
  drop3 = new Drops(500, 350, 5);
  drop4 = new Drops(150, 300, 5);
  drop5 = new Drops(300, 150, 5);
  drop6 = new Drops(250, 250, 5);
  drop7 = new Drops(600, 50, 5);
  drop8 = new Drops(700, 225, 5);
  drop9 = new Drops(550, 100, 5);
  drop10 = new Drops(650, 325, 5);
  drop11 = new Drops(750, 75, 5);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
  drop1.display();
  drop2.display();
  drop3.display();
  drop4.display();
  drop5.display();
  drop6.display();
  drop7.display();
  drop8.display();
  drop9.display();
  drop10.display();
  drop11.display();
}