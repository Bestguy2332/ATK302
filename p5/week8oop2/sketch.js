  var car = [];
  var shipPos;
function setup() {
  createCanvas (windowWidth-5, windowHeight-5);
  for (var i = 0; i < 60; i++)
  car.push(new Car());
  shipPos = createVector(width/2, height - 200)
  rectMode(CENTER);
}

function draw() {
background(0);

checkForKeys();

for (var i = 0; i < car.length; i++) {
car[i].display();
car[i].drive();

if (car[i].pos.dist(shipPos) < 20.01) {
  car.splice(i,1);
}
}
fill(255)
rect(shipPos.x, shipPos.y, 20, 20)
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) shipPos.x = shipPos.x - 5;
  if (keyIsDown(UP_ARROW)) shipPos.y = shipPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) shipPos.y = shipPos.y + 5;
  if (keyIsDown(RIGHT_ARROW)) shipPos.x = shipPos.x + 5;
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
