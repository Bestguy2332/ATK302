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
background('white');
fill(0)
rect (500,100,300,500)
fill('red')

ellipse(650, 200, 100, 100)
    break;

    case 1:
background('white');
fill(0)
rect (500,100,300,500)
fill('green')

ellipse(650, 500, 100, 100)
    break;

    case 2:
background('white');
fill(0)
rect (500,100,300,500)
fill('yellow')
ellipse(650, 350, 100, 100)
    break;


}

if (x > 200) {
  x = 0;
  myState = myState + 1;
}

if (myState > 2) {
  myState = 0
}

}
