var namesArray = [];
var vel = 0;
function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1cAu6qZDwwvCML12UB8LRyfY0zeH11_-Ol-BwEMzsDqc'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].name, data[i].color)) ;
   }

}


function draw() {
  background(0);

  // // iterate through the namesArray and display the objects!
  for (let i = 0 ; i < namesArray.length ; i++) {
    namesArray[i].display() ;
    namesArray[i].drive();


  }

}


// my circle class
function Circle(myName, myColor) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.name = myName;
  this.color = myColor;



  this.display = function() {

    if (myColor === 'red') {
    fill(255, 0,  0);
    ellipse(this.pos.x, this.pos.y, 100, 100);
  }
   if (myColor === 'orange') {
     fill(255, 127, 0);
     ellipse(this.pos.x, this.pos.y, 100, 100);
   }
   if (myColor === 'yellow') {
   fill(255, 255,  0);
   ellipse(this.pos.x, this.pos.y, 100, 100);
 }
 if (myColor === 'green') {
 fill(0, 255,  0);
 ellipse(this.pos.x, this.pos.y, 100, 100);
}
if (myColor === 'blue') {
fill(0,0,255);
ellipse(this.pos.x, this.pos.y, 100, 100);
}
if (myColor === 'purple') {
fill(255, 0,  255);
ellipse(this.pos.x, this.pos.y, 100, 100);
}
    fill(0);
    text(myName, this.pos.x, this.pos.y);

    this.drive = function() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }

  }

}
