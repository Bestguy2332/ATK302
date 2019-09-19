var myState = 0 ;

function setup() {
  createCanvas (windowWidth, windowHeight);
  // put setup code here
}

function draw() {

  // put drawing code here
  switch(myState) {
    case 0:
    background('red')
    fill(0);
    rect(100, 100, 100, 100);
    break ;

    case 1:
    background('yellow')
    fill(0);
    rect(100, 100, 100, 100);
    break ;

    case 2:
    background('green')
    fill(0);
    rect(100, 100, 100, 100);
    break ;

    case 3:
    background('blue')
    fill(0);
    rect(100, 100, 100, 100);
    break;
  }
}

function mouseReleased() {

  if ((mouseX > 100) && (mouseY > 100) && (mouseX < 200) && (mouseY < 200))
    myState = myState + 1;
  if (myState > 3) {
    myState = 0;

  }
}
