var x = 0;

var myState = 0;

function setup() {
  createCanvas (windowWidth, windowHeight)
  // put setup code here
}

function draw() {
  background(255)
  fill(0);
  x = x + 1;





  switch(myState){
    case 0:
rect(100 + x, 100, 100, 100);
    break;

    case 1:
  rect(500, 100 + x, 100, 100);
    break;

    case 2:
  rect(500 - x, 500, 100, 100);
    break;

    case 3:
rect(100, 500 - x, 100, 100);
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
