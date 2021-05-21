const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
world = engine.world;

var ground_options = {
  isStatic:true
}

var ball_options = {
  restitution:1.0
}

ground = Bodies.rectangle(200,390,200,50,ground_options);
World.add(world,ground);

ball=Bodies.circle(200,100,30,ball_options);
World.add(world,ball)
//console.log(object.position.y)

}

function draw() {
  background(25,4,38);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}