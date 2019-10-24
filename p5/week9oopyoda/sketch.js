  var car = [];
  var shipPos;
  var myState = 0;
  var timer = 0;
    var yodaRight, yodaLeft, yoda;
    var bird;
    var birds = [];

function setup() {
  createCanvas (windowWidth-5, windowHeight-5);
//spawn
birds[0] = loadImage("assets/bird1.png");
birds[1] = loadImage("assets/bird2.png");
birds[2] = loadImage("assets/bird3.png");
  for (var i = 0; i < 2; i++) {
  car.push(new Car());

}
yodaLeft = loadImage("assets/yodaleft.gif");
yodaRight = loadImage("assets/yoda.gif") ;

yoda=yodaRight;

//starting position
  shipPos = createVector(width/2, height - 200);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  switch(myState) {

  case 0:
  background(100);
  text('Click to Start', width/2, height/2);

  break;

  case 1:
  game();
  timer++ ;
  if (timer > 600) {
    timer = 0;
    myState = 3;
  }
  break;

  case 2:
  background('green');
  text('win', width/2, height/2);
  break;

  case 3:
  background('red');
  text('fail',  width/2, height/2);

  break;
}

}
function keyPressed() {

  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) shipPos.x = shipPos.x - 5;
  if (keyIsDown(UP_ARROW)) shipPos.y = shipPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) shipPos.y = shipPos.y + 5;
  if (keyIsDown(RIGHT_ARROW)) shipPos.x = shipPos.x + 5;
}

function Car() {
  //spawn location and velocity
  this.pos = createVector(windowWidth/2, windowHeight/2);
  this.vel = createVector(random(-5, 5), random(-5, 5));

  //variable for color
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length-1));
  this.timer = random(10,30);

  this.display = function() {
    noStroke()
      fill(this.r, this.g, this.b);
    //ellipse(this.pos.x, this.pos.y, 10, 10);
    //image(bird1 ,this.pos.x, this.pos.y, 20, 20)
    image(birds[this.birdNum], this.pos.x, this.pos.y, 50, 50)
this.timer = this.timer + 1;
if (this.timer > 20) {
  this.timer = 0;
  this.birdNum = this.birdNum + 1;
}
if (this.birdNum > 2) {
  this.birdNum = 0;
}
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function game() {
  background(255);

  checkForKeys();

  //car array
  for (var i = 0; i < car.length; i++) {
  car[i].display();
  car[i].drive();

  // distance between items
  if (car[i].pos.dist(shipPos) < 20.01) {
    car.splice(i,1);
}

  if (car.length == 0) {
    myState = 2;
    timer = 0;
  }


  }
  fill(255)
    image(yoda, shipPos.x, shipPos.y, 50, 50);
}

function mouseReleased() {
 switch (myState) {
   case 0:
     myState = 1
     break;

    case 2:
    myState = 0
    resetTheGame();
    break;

    case 3:
    myState = 0
    resetTheGame();
 }
}

function resetTheGame() {
  if (car.length>0) {
    car.splice(i)
  }
  for (var i = 0; i < 2; i++) {
  car.push(new Car());
}
}
