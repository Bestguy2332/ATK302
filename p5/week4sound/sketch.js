var moto;

function preload() {
  moto = loadSound('assets/moto.mp3');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  moto.play();
}

function draw() {
  // put drawing code here
}

function mouseReleased (){
  moto.stop();

}
