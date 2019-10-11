






function setup() {
  createCanvas (windowWidth, windowHeight);

  var names = [];
  names [0] = "chewie";
  names [1] = "leia";
  names [2] = "luke";
  names [3] = "kylo ren";

  var dwarves = [] ;
  dwarves[0] = "dopey" ;
  dwarves[1] = "doc" ;
  dwarves[2] = "grumpy" ;
  dwarves[3] = "happy" ;
  dwarves[4] = "sleepy" ;
  dwarves[5] = "sneezy" ;
  dwarves[6] = "bashful" ;


  for (var i = 0; i < names.length; i = i + 1) {
  console. log(names[i]);
}
  for (var i = 0; i < dwarves.length; i = i + 1){
  console. log(dwarves[i]);
}

var randomNumbers = new Array(100) ;

for (var i = 0; i < 100; i++) {

  randomNumbers[i] = random(100) ; // put a random number in the array

  //console.log(randomNumbers[i]) ;  // print out these array elements
console.log("the number in space " + i + " = " + randomNumbers[i]) ;
}

}

function draw() {

}
