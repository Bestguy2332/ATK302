var img;

function setup() {
  createCanvas(windowWidth, windowHeight, 1000);
  img = loadImage("assets/bunny.jpg");
}

function draw() {
  // put drawing code here
  image(img, 20, 100) ;
}
