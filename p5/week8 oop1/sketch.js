var myCar ;
var myCar1;
var myCar2;
var vel;

function setup() {
  createCanvas (windowWidth, windowHeight);
  myCar = new Car() ;
  myCar1 = new Car();
  myCar2 = new Car();
}

function draw() {
  background(100);

  myCar.display();
  myCar.drive();

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();
}

function Car() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);

  this.vel = random(10);

  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.x = 0 ;

  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this. y, 10, 10);
  }

  this.drive = function() {
    this.x = this.x + this.vel;
    if (this.x > windowWidth) this.x = 0;
  }
}
