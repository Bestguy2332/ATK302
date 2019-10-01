var timer = 0;
var myState = 0;
var roll = 0;
var x = 0;
var result = 1000;
var timer2 = 0;
let value = 0;
let threshold = 30;
function setup() {
  setShakeThreshold(threshold);
  createCanvas (windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  ellipseMode(CENTER);
setShakeThreshold(threshold);
  // put drawing code here
  switch(myState) {
    case 0:
    background(0);
    ellipse(windowWidth/2, windowHeight/2, 50, 50);
    break;

    case 1:
    background(0);
    ellipse(windowWidth/3, windowHeight/3, 50, 50);
    ellipse(windowWidth*2/3, windowHeight*2/3, 50, 50);
    break;

    case 2:
    background(0);
    ellipse(windowWidth/3, windowHeight/3, 50, 50);
    ellipse(windowWidth*2/3, windowHeight*2/3, 50, 50);
    ellipse(windowWidth/2, windowHeight/2, 50, 50);
    break;

    case 3:
    background(0);
    ellipse(windowWidth*2/3, windowHeight/3, 50, 50);
    ellipse(windowWidth/3, windowHeight*2/3, 50, 50);
    ellipse(windowWidth/3, windowHeight/3, 50, 50);
    ellipse(windowWidth*2/3, windowHeight*2/3, 50, 50);
    break;

    case 4:
    background(0);
    ellipse(windowWidth*2/3, windowHeight/3, 50, 50);
    ellipse(windowWidth/3, windowHeight*2/3, 50, 50);
    ellipse(windowWidth/3, windowHeight/3, 50, 50);
    ellipse(windowWidth*2/3, windowHeight*2/3, 50, 50);
    ellipse(windowWidth/2, windowHeight/2, 50, 50);
    break;

    case 5:
    background(0);
    ellipse(windowWidth*2/3, windowHeight/3, 50, 50);
    ellipse(windowWidth/3, windowHeight*2/3, 50, 50);
    ellipse(windowWidth/3, windowHeight/3, 50, 50);
    ellipse(windowWidth*2/3, windowHeight*2/3, 50, 50);
    ellipse(windowWidth/3, windowHeight/2, 50, 50);
    ellipse(windowWidth*2/3, windowHeight/2, 50, 50);
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



}
timer = timer + 1;
timer2 = timer2 + 1;

if (timer > result){
  timer = 0;
  myState = myState + 1;
}

if (timer2 > 50) {
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
