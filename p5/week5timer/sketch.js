var timer = 300;
var myState = 0;

function setup() {
  createCanvas (windowWidth, windowHeight);
  // put setup code here
}

function draw() {



timer = timer - 1;

    if (timer <= 0){
      background(random(255), random(255), random(255))
      timer = 300
    }


}
