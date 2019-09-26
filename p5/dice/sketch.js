var timer = 0;
var myState = 0;
var roll = 1;
function setup() {
  createCanvas (windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  ellipseMode(CENTER);

  // put drawing code here
  switch(myState) {
    case 0:
    background(0);
    ellipse(windowWidth/2, windowHeight/2, 100, 100);
    break;

    case 1:
    background(0);
    ellipse(windowWidth/3, windowHeight/3, 100, 100);
    ellipse(windowWidth*2/3, windowHeight*2/3, 100, 100);
    break;

    case 2:
    background(0);
    ellipse(windowWidth/3, windowHeight/3, 100, 100);
    ellipse(windowWidth*2/3, windowHeight*2/3, 100, 100);
    ellipse(windowWidth/2, windowHeight/2, 100, 100);
    break;

    case 3:
    background(0);
    ellipse(windowWidth*2/3, windowHeight/3, 100, 100);
    ellipse(windowWidth/3, windowHeight*2/3, 100, 100);
    ellipse(windowWidth/3, windowHeight/3, 100, 100);
    ellipse(windowWidth*2/3, windowHeight*2/3, 100, 100);
    break;

    case 4:
    background(0);
    ellipse(windowWidth*2/3, windowHeight/3, 100, 100);
    ellipse(windowWidth/3, windowHeight*2/3, 100, 100);
    ellipse(windowWidth/3, windowHeight/3, 100, 100);
    ellipse(windowWidth*2/3, windowHeight*2/3, 100, 100);
    ellipse(windowWidth/2, windowHeight/2, 100, 100);
    break;

    case 5:
    background(0);
    ellipse(windowWidth*2/3, windowHeight/3, 100, 100);
    ellipse(windowWidth/3, windowHeight*2/3, 100, 100);
    ellipse(windowWidth/3, windowHeight/3, 100, 100);
    ellipse(windowWidth*2/3, windowHeight*2/3, 100, 100);
    ellipse(windowWidth/3, windowHeight/2, 100, 100);
    ellipse(windowWidth*2/3, windowHeight/2, 100, 100);
    break;
  }
timer = timer + 1
  if (timer >= roll) {
    timer = 0;
    myState = 1 + myState;
  }

  if (myState > 5){
    myState = 0;
  }

  if (roll > 100) {
    roll = 0;
  }
}

function mouseReleased () {
 if (roll = 0) {
   roll = 1;
 }

 }
