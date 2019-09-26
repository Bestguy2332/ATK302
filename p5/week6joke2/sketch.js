var myState = 0;
var timer = 0;
function setup() {
  createCanvas (windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  timer = timer + 1;

  switch(myState) {

    case 0:
    background(255);
    textSize(16);
    text('how do you fix a tuba?', windowWidth/2, windowHeight/2);

       break ;

    case 1:
    background(255);
    textSize(16);
    text('a tuba glue', windowWidth/2, windowHeight/2);
       break ;


}
if (timer > 500) {
  myState = myState + 1;
  timer = 0;
}
if (myState > 1) {
  myState = 0;
}
}


  // put drawing code here
