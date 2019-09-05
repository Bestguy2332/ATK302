let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let vel=0;
let by=-20;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  background(0)
  stroke(255);
   a = height / 2;
   b = height;
   c = height / 3;
   d = height / 4;
   e = height / 3;
   f = height / 4;
   g = 0;
   h = height;
   i = mouseY - 5;
}


function mousePressed() {

}



function draw() {
 noStroke()

background(0)

  // put drawing code here
  fill (255,255,255)
rect(mouseX - 5, mouseY - 50, 10, 100)
triangle(mouseX, mouseY - 15, mouseX, mouseY + 5, mouseX - 50, mouseY + 15)
triangle(mouseX, mouseY - 15, mouseX, mouseY + 5, mouseX + 50, mouseY + 15)
triangle(mouseX - 5, mouseY - 50, mouseX + 5, mouseY - 50, mouseX, mouseY - 75)
triangle(mouseX - 25, mouseY + 50, mouseX, mouseY + 35, mouseX + 25, mouseY + 50)

fill(50)
ellipse(115, a, 50, 50)
ellipse(185, a, 50, 50)
ellipse(150, a, 75, 75)
ellipse(765, b, 50, 50)
ellipse(835, b, 50, 50)
ellipse(800, b, 75, 75)
ellipse(500, c, 75, 75)
ellipse(535, c, 50, 50)
ellipse(465, c, 50, 50)
ellipse(1000, d, 75, 75)
ellipse(1035, d, 50, 50)
ellipse(965, d, 50, 50)
ellipse(215, e, 50, 50)
ellipse(285, e, 50, 50)
ellipse(250, e, 75, 75)
ellipse(865, f, 50, 50)
ellipse(935, f, 50, 50)
ellipse(900, f, 75, 75)
ellipse(400, g, 75, 75)
ellipse(435, g, 50, 50)
ellipse(365, g, 50, 50)
ellipse(1100, h, 75, 75)
ellipse(1135, h, 50, 50)
ellipse(1065, h, 50, 50)

// gun
fill(255, 0, 0)
  rect(mouseX + 15, by, 5, 10)
  rect(mouseX - 20, by, 5, 10)
  by=by+vel;
  if (by < -10){
    vel=0;
  }

if (mouseIsPressed) {

}

line(0, a, width, a);
  a = a + 1;
  if (a > 900) {
    a = 0;
  }
  line(0, b, width, b);
    b = b + 1.1;
    if (b > 900) {
      b = 0;
    }
    line(0, c, width, c);
      c = c + 1.2;
      if (c > 900) {
        c = 0;
      }
        line(0, d, width, d);
          d = d + 1.3;
          if (d > 900) {
            d = 0;
          }
            line(0, e, width, e);
              e = e + 1.8;
              if (e > 900) {
                e = 0;
              }
                line(0, f, width, f);
                  f = f + 1.7;
                  if (f > 900) {
                    f = 0;
                  }
                    line(0, h, width, h);
                      h = h + 1.6;
                      if (h > 900) {
                        h = 0;
                      }
                        line(0, g, width, g);
                          g = g + 1.5;
                          if (g > 900) {
                            g = 0;
                          }
                          line(0, i, width, i);
                            i = i - 2;
                            if (i > 900) {
                              i = 0;
                            }

}
function mouseReleased () {
  by = mouseY;
vel = -10;
}
