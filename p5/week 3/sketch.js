var score = 0 ;

function setup() {
createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
fill(255)
ellipse(windowWidth/2, windowHeight/2, 100, 100)
rect(mouseX, mouseY, 10, 10)
text('Brennon Best', windowWidth/2, 10)
ellipse(400, 400, 300, 300)
ellipse(400,300,200,200)
ellipse(400,200,100,100)

textSize(10)
text(score, 30, 30)
}
function mouseReleased() {
  stroke(random(255),0,0)
fill(random(255),0,0)
  ellipse(mouseX, mouseY, 100, 100)
  score++ ;
}
