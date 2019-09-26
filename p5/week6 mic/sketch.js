var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);

  if ((vol > 1) & (vol < 2)) {
    // do something
    y= y + 5 ;
    background('green');
  }
  if (vol > 2) {
    // do something
    background('red');
}
ellipse(200, y, 100, 10) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this




  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
