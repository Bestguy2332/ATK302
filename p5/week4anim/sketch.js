var x = 0 ;
var y = 0 ;
var a = 0 ;
var b = 0 ;
var vela = 5;
var velb = 5;
function setup() {
  createCanvas(windowWidth, windowHeight)

  // put setup code here
}

function draw() {
background(0)

  fill(random(255), random(255), random(255))
  translate(x, y)
  rect (10, 10, a, a)

  x = x + vela;
  y = y + velb;
  a = a + 1;
  b = b - 1;
  if (( x > windowWidth) || (x < 0)) {
    vel = -vela;
  }


  if ((y > windowHeight) || (y < 0)) {
    vel = -velb;
  }

  if ( a > 100) {
    a = 0;
    a = b;
    b = 100;
    }

}// put drawing code here
