function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}

let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(1000, 900);
  fill(240);
  noStroke();
}

function draw() {
  background(0);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
fill(255)
    ellipse(this.posX, this.posY, this.size);
  };


  noStroke();

  fill(181, 80, 29);
  rect(325, 800, 50, 200);

  fill(0, 125, 0)
  triangle(350, 700, 450, 800, 250, 800)
  triangle(350, 650, 450, 750, 250, 750)
  triangle(350, 600, 450, 700, 250, 700)

  fill(181, 80, 29);
  rect(625, 800, 50, 200);

  fill(0, 125, 0)
  triangle(650, 700, 550, 800, 750, 800)
  triangle(650, 650, 550, 750, 750, 750)
  triangle(650, 600, 550, 700, 750, 700)

  fill(181, 101, 29);
  rect(825, 800, 50, 200);

  fill(0, 125, 0)
  triangle(850, 700, 750, 800, 950, 800)
  triangle(850, 650, 750, 750, 950, 750)
  triangle(850, 600, 750, 700, 950, 700)

  fill(181, 101, 29);
  rect(125, 800, 50, 200);

  fill(0, 125, 0)
  triangle(150, 700, 50, 800, 250, 800)
  triangle(150, 650, 50, 750, 250, 750)
  triangle(150, 600, 50, 700, 250, 700)

  fill(181, 101, 29);
  rect(475, 800, 50, 200);

  fill(0, 150, 0)
  triangle(500, 700, 400, 800, 600, 800)
  triangle(500, 650, 400, 750, 600, 750)
  triangle(500, 600, 400, 700, 600, 700)

  fill(181, 101, 29);
  rect(725, 800, 50, 200);

  fill(0, 150, 0)
  triangle(750, 700, 650, 800, 850, 800)
  triangle(750, 650, 650, 750, 850, 750)
  triangle(750, 600, 650, 700, 850, 700)

  fill(181, 101, 29);
  rect(225, 800, 50, 200);

  fill(0, 150, 0)
  triangle(250, 700, 350, 800, 150, 800)
  triangle(250, 650, 350, 750, 150, 750)
  triangle(250, 600, 350, 700, 150, 700)


  fill(100)
  ellipse(800, 150, 100, 100)

  fill(50)
  ellipse(115, 100, 50, 50)
  ellipse(185, 100, 50, 50)
  ellipse(150, 100, 75, 75)
  ellipse(415, 120, 50, 50)
  ellipse(485, 120, 50, 50)
  ellipse(450, 120, 75, 75)
  ellipse(315, 80, 50, 50)
  ellipse(385, 80, 50, 50)
  ellipse(350, 80, 75, 75)
  ellipse(mouseX + 400, mouseY, 50, 50)
  ellipse(mouseX - 400, mouseY, 50, 50)
  ellipse(mouseX, mouseY, 75, 75)
  rect(mouseX - 400, mouseY - 13, 800, 25)
  rect(mouseX - 5, mouseY - 100, 10, 100)

  fill(200)
  rect(0, 850, 1000, 50)

text("x = " + mouseX + ", y = " + mouseY, 40, 40)
}
