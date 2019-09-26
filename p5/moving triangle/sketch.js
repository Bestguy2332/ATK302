var x = 0;
var y = 0;
var myState = 0;

function setup() {
  createCanvas (windowWidth, windowHeight)
  // put setup code here
}

function draw() {
  background(255)
  fill(0);
  x = x + 1;
  y = y + 1;




  switch(myState){
    case 0:
quad( 500 - x, 500, 100, 100 + x, 500, 500 - x, 100 + x, 100);
    break;

    case 1:
quad( 100, 500 - x, 100 + x, 500, 500 - x, 100, 500, 100 + x);
    break;

    case 2:
quad( 100 + x, 100, 500, 500 - x, 100, 100 + x, 500 - x, 500);
    break;

    case 3:
quad( 500, 100 + x, 500 - x, 100, 100 + x, 500, 100, 500 - x,);
    break;
}

if (x > 400) {
  x = 0;
  myState = myState + 1;
}

if (myState > 3) {
  myState = 0
}

}
