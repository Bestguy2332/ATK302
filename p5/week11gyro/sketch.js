var car = [];
var shipPos;
var alpha, beta, gamma; // orientation data
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;

function setup() {
createCanvas (windowWidth-5, windowHeight-5);
for (var i = 0; i < 20; i++)
car.push(new Car());
shipPos = createVector(0, height/4);

rectMode(CENTER);
ellipseMode(CENTER);

alpha = 0;
beta = 0;
gamma = 0;
}

function draw() {
background(0);

xPosition = shipPos.x;
yPosition = shipPos.y;

xPosition = map(gamma, -60, 60, 0, width);
 yPosition = map(beta, -30, 30, 0, height);
fill(255)
 push(); // before you use translate, rotate, or scale commands, push and then pop after

   translate(xPosition, yPosition); // move everything over by x, y

   rotate(radians(alpha)); // using alpha in here so it doesn't feel bad


   rect(shipPos.x, shipPos.y, 20, 20)
   //  	rect(0, 0, 100, 100) ;
   pop();



for (var i = 0; i < car.length; i++) {
car[i].display();
car[i].drive();

if (car[i].pos.dist(shipPos) <= 20) {
car.splice(i,1);
}

}
textAlign(LEFT);
textSize(20);
fill('white');
text("orientation data:", 25, 25);
textSize(15);
text("alpha: " + alpha, 25, 50);
text("beta: " + beta, 25, 70);
text("gamma: " + gamma, 25, 90);
textSize(20);
text("acceleration data:", 25, 125);
textSize(15);
text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
text("y = " + y, 25, 170);
text("z = " + z, 25, 190);

}





function Car() {

this.pos = createVector(windowWidth/2, windowHeight/2);
this.vel = createVector(random(-5, 5), random(-5, 5));
this.r = random(255);
this.g = random(255);
this.b = random(255);

this.display = function() {
  noStroke()
    fill(this.r, this.g, this.b);
  ellipse(this.pos.x, this.pos.y, 10, 10);

}

this.drive = function() {
  this.pos.add(this.vel);
  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = height;
}
}

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
