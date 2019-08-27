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

  fill(181, 101, 29);
  rect(475, 800, 50, 200);

  fill(0, 150, 0)
  triangle(500, 700, 400, 800, 600, 800)
  triangle(500, 650, 400, 750, 600, 750)
  triangle(500, 600, 400, 700, 600, 700)

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
}
