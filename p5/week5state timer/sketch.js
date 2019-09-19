var myState = 0 ;
var timer = 0;

function setup() {
  createCanvas (windowWidth, windowHeight)
  // put setup code here
}

function draw() {

  switch(myState) {
    case 0:
    background('red')
    fill(0);

    break ;

    case 1:
    background('yellow')
    fill(0);

    break ;

    case 2:
    background('green')
    fill(0);

    break ;

    case 3:
    background('blue')
    fill(0);

    break;
  }

timer = timer + 1;
    if (timer >= 200) {
      timer = 0
      myState = 1 + myState
    }

    if (myState > 3) {
      myState = 0
    }


  // put drawing code here
}
