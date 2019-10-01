var timer = 0;
var myState = 0;
var roll = 0;
var x = 0;
var result = 1000;
var timer2 = 0;
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

  switch(roll) {
  case 0:
  result = 1;

  break;

  case 1:
  result = 5;
  break;

  case 2:
  result = 25;
  break;

  case 3:
  result = 50;
  break;

  case 4:
  result = 100;
  break;

  case 5:
  result = 10000;
  break;

  case 6:
  result = 1;

  break;
}
timer = timer + 1;
timer2 = timer2 + 1;

if (timer > result){
  timer = 0;
  myState = myState + 1;
}

if (timer2 > 100) {
  roll = roll + 1;
  timer2 = 0;
}

  if (myState > 5){
    myState = 0;
  }

 if (result > 200) {
   result = 0;
 }
if (roll > 5) {
  result = 10000;
}
}

function mousePressed () {

roll = 0;
timer2 = 0;

 }

 function deviceShaken  () {

 roll = 0;
 timer2 = 0;

  }
