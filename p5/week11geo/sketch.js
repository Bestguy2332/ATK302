var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var winds = 0;
var temper = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'http://api.openweathermap.org/data/2.5/weather?zip=62034,us&units=imperial&';
  var myIDString = 'appid=efc4ec8f6638764c3e3c0af9bebd1d03'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.
  textAlign(CENTER);
  ellipseMode(CENTER);
}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}


function draw() {

  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill(0);

    text("we have weather", 100, 20) ;
    text(weather.name,100,60);
     // this will return 32.5 from the data below

     // this will return “Chicago” from the data below
winds = winds + weather.wind.speed/10;
temper = weather.main.temp;

    ellipse(winds, (height/2), 75, 75);
    ellipse(winds+30, (height/2), 50, 50);
    ellipse(winds-30, (height/2), 50, 50);
    fill(255);
    text(weather.wind.speed,winds,height/2)
    if (winds>= width) {
      winds = 0;
    }

    fill('red');
    rect(width/2-50, height, 100, -temper*3)
    fill(0);
    text(weather.main.temp, width/2, height-(weather.wind.speed/2)) ;


    // this will return 1019 from the data below
// parse the weather object and put some text for some at least 3 different weather data!
    break;

}


}
