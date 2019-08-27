function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);
  background(100);
  noStroke();

  fill(200, 200, 0);
  triangle(0, 0, 200, 200, 0, 200);

  fill(0,255, 0);
  rect(200, 0, 200, 200);

  fill(204);
  quad(0, 200, 200, 200, 200, 400, 100, 300);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
