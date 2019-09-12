var asdf;

function setup() {
  createCanvas(windowWidth, windowHeight);
  asdf = loadFont('assets/Dancing_Script/DancingScript-Regular.ttf');// put setup code here
  background(0)
}

function draw() {
  background(0)
  // put drawing code here
  fill(random(255), random(255), random(255));
  textFont(asdf);
  textSize(40);
  text('i did a thing', 100, 100);
}
