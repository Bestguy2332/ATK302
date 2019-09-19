var x = 0 ;
function setup() {
createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  background(0);
  rect(x, 10, 10, 10);
  x = x + 1;
  if (x > windowWidth) {
    x = 0 ;
  }
}
