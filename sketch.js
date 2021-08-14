var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;
var score =0;
var colr = "skyblue";
function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width+10,20);

  //create division objects
  for (var k = 5; k < width; k = k + 60.8) {
    divisions.push(new Divisions(k, (height-divisionHeight/2)-10, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 65; j < width-10; j=j+50) { 
    plinkos.push(new Plinko(j,50));
  }

  //create 2nd row of plinko objects
  for (var j = 40; j < width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,90));
  }

  //create 3rd row of plinko objects
  for (var j = 65; j < width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,130));
  }
  
  //create 4th row of plinko objects
  for (var j = 40; j < width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,170));
  }

  //create particle objects
  for (var j = 65; j < width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,210));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  if(frameCount%50===0){
    particles.push(new Particle(random(width/2-40, width/2+40), -5,10));
  }
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
}