function setup() {
  createCanvas (windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  background(0);
  fill('red');
  rect(100, 100, 100, 100);
  // put drawing code here
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseY > 100) && (mouseX < 200) && (mouseY < 200)) {
    fill (255);
    textSize (32);
    text ("beep", 500, 500);
    console.log ('beep');




  }
}
