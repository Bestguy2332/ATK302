var song;

function preload() {
  song = loadSound('assets/moto.mp3');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  song.play();
}

function draw() {
  // put drawing code here
}


function mouseReleased (){

  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
