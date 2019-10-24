var paddle1Pos;
var paddle2Pos;
var ball = [];
var score1;
var score2;
var myState = 1;
var font1;
var trophy;
var bot;
var topw;
var leftp;
var rightp;
var score;
var win;
var vel1;
var vel2;
var vel3;
var vel4;
var vel5;
var vel6;
var vel7;
var vel8;

function setup() {
  createCanvas (windowWidth - 5, windowHeight - 5);
for (var i = 0; i < 1; i++)
ball.push(new Ball()) ;

font1 = loadFont('assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf');
trophy = loadImage('assets/trophy.png');
bot = loadSound('assets/bottomwall.wav');
topw = loadSound('assets/topwall.wav');
leftp = loadSound('assets/leftpaddle.wav');
rightp = loadSound('assets/rightpaddle.wav');
score = loadSound('assets/score.wav');
win = loadSound('assets/win.wav');
//  Montserrat_Subrayada/MontserratSubrayada-Bold.ttf

  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);


  paddle1Pos = createVector(5, height/2);
  paddle2Pos = createVector(width - 5, height/2);
  score1 = 0;
  score2 = 0;

}

function draw() {


switch (myState) {
  case 1:
    background(0);
    fill(255);
    textFont(font1);
    textSize(20);
    text('Player 1 Controls', width/4, height/2 - 15);
    text('Arrow Keys', width/4, height/2 + 15);
    text('Player 2 Controls', (3*width/4), height/2 - 15);
    text('W A S D', (3*width/4), height/2 + 15);

    textSize(50);
    text('GNOP', width/2, 100)
    text('Click to start', width/2, height-100)

  break;
  case 2:

    Game();

  break;
  case 3:
  background(0);
  image(trophy, width/2, height/2);
  text('Player 1 wins', width/2, height/2);

  break;
  case 4:
  background(0)
  image(trophy , width/2, height/2);
  text('Player 2 wins', width/2, height/2);


  break;

}

  if (score1 >= 7){
  myState = 3;
  win.play();
  score1=0;
  score2=0;
}
if (score2 >= 7){
myState = 4;
win.play();
score1=0;
score2=0;
}

}


function checkForKeys() {

  if (keyIsDown(UP_ARROW)) paddle1Pos.y = paddle1Pos.y - vel1;
  if (paddle1Pos.y <= 0) {
    vel1 = 0;
  } else{
    vel1 = 5;
  }

  if (keyIsDown(DOWN_ARROW)) paddle1Pos.y = paddle1Pos.y + vel2;
  if (paddle1Pos.y >= height) {
    vel2 = 0;
  } else{
    vel2 = 5;
  }

  if (keyIsDown(LEFT_ARROW)) paddle1Pos.x = paddle1Pos.x - vel3;
  if (paddle1Pos.x <= 0) {
    vel3 = 0;
  } else{
    vel3 = 5;
  }

  if (keyIsDown(RIGHT_ARROW)) paddle1Pos.x = paddle1Pos.x + vel4;
  if (paddle1Pos.x >= width) {
    vel4 = 0;
  } else{
    vel4 = 5;
  }
  if (keyIsDown(87)) paddle2Pos.y = paddle2Pos.y - vel5;
  if (paddle2Pos.y <= 0) {
    vel5 = 0;
  } else{
    vel5 = 5;
  }
  if (keyIsDown(83)) paddle2Pos.y = paddle2Pos.y + vel6;
  if (paddle2Pos.y >= height) {
    vel6 = 0;
  } else{
    vel6 = 5;
  }
  if (keyIsDown(65)) paddle2Pos.x = paddle2Pos.x - vel7;
  if (paddle2Pos.x <= 0) {
    vel7 = 0;
  } else{
    vel7 = 5;
  }
  if (keyIsDown(68)) paddle2Pos.x = paddle2Pos.x + vel8;
  if (paddle2Pos.x >= width) {
    vel8 = 0;
  } else{
    vel8 = 5;
  }

}
function Ball() {
  this.pos = createVector(windowWidth/2, windowHeight/2);

  this.vel = createVector(random(-1, 1), random(-5, 5));
  if (this.vel.x>=0) {
    this.vel.x = 5;
  }
  if (this.vel.x<0) {
    this.vel.x = -5;
  }




  this.display = function() {
      fill(255);
    ellipse(this.pos.x, this.pos.y, 10, 10);

  }

  this.drive = function() {
    this.pos.add(this.vel);


    if (this.pos.x < (0 - 200)) {
      score2 = score2 + 1;
      this.pos.x = width/2;
      ballReset();
      score.play();

      this.vel.x = -this.vel.x;

    }
    if (this.pos.x > (width + 100)) {
      score1 = score1 + 1;
      this.pos.x = width/2;
      this.vel.x = -this.vel.x;
      ballReset();
      score.play();


    }

    if (this.pos.y >= height) {
      this.vel.y = -this.vel.y;
      topw.play();
    }
    if (this.pos.y <= 0) {
       this.vel.y = -this.vel.y;
       bot.play();
     }


  }
}

function Game() {
  background(0);
  fill(200);
  rect(width/2, height - 10, width - 35, 5);
  rect(width/2, 10, width - 35, 5);
  rect(20, height/2, 5, height-20)
  rect(width-20, height/2, 5, height-20)
  rect(width/2, height/2, 5, height-20)
  noStroke();
  fill('blue');
  textSize(50);
  text(score1, width/4, height/2);
  text(score2, (3*width/4), height/2);


  for (var i = 0; i < ball.length; i++) {
  ball[i].display();
  ball[i].drive();


    if (((abs(ball[i].pos.x - paddle1Pos.x)) <= 20)  && (abs(ball[i].pos.y - paddle1Pos.y)) <= 50){
    ball[i].vel.x = abs(ball[i].vel.x)+1;
    if (ball[i].vel.x >= 19) {
      ball[i].vel.x = 19;
    }
    leftp.play();
    }


    if (((abs(ball[i].pos.x - paddle2Pos.x)) <= 20)  && (abs(ball[i].pos.y - paddle2Pos.y)) <= 50){
    ball[i].vel.x = -(abs(ball[i].vel.x)+1);
    if (ball[i].vel.x >= 19) {
      ball[i].vel.x = 19;
    }
    rightp.play();
    }

  }

  fill(255);
  rect(paddle1Pos.x, paddle1Pos.y, 10, 100);
  rect(paddle2Pos.x - 5, paddle2Pos.y, 10, 100);

  checkForKeys();




}

function mouseReleased() {
 switch (myState) {
   case 1:
     myState = 2
     break;

    case 3:
    myState = 1;
resetTheGame();
    score1 = 0;
    score2 = 0;
    break;

    case 4:
    myState = 1;
    score1 = 0;
    score2 = 0;
resetTheGame();
 }
}

function resetTheGame() {

  paddle1Pos.x = 5;
  paddle1Pos.y = height/2;
  paddle2Pos.x = width - 5;
  paddle2Pos.y = height/2;

}

function ballReset() {
  ball.splice(i);
  for (var i = 0; i < 1; i++)
  ball.push(new Ball()) ;

}
