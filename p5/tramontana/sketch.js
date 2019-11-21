var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var t=0;t<e.length;t++){var s=e[t].string,n=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,s){if(-1!=s.indexOf(e[t].subString))return e[t].identity}else if(n)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(-1!=t)return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();var pos=0;function isNumber(e){return!isNaN(parseFloat(e))}function get_appropriate_ws_url(e){var t,s=document.URL;"https"==s.substring(0,5)?(t="wss://",s=s.substr(8)):(t="ws://","http"==s.substring(0,4)&&(s=s.substr(7))),s=s.split("/");return t+(""==e?s[0]:e)}function clamp(e,t,s){return e<t?e=t:e>s?e=s:e}String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)},function(e,t){"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof module&&module.exports?module.exports=t():e.ReconnectingWebSocket=t()}(this,function(){function e(t,s,n){function r(e,t){var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,!1,!1,t),s}var a={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3};for(var o in n||(n={}),a)this[o]=void 0!==n[o]?n[o]:a[o];this.url=t,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var i,c=this,d=!1,u=!1,l=document.createElement("div");l.addEventListener("open",function(e){c.onopen(e)}),l.addEventListener("close",function(e){c.onclose(e)}),l.addEventListener("connecting",function(e){c.onconnecting(e)}),l.addEventListener("message",function(e){c.onmessage(e)}),l.addEventListener("error",function(e){c.onerror(e)}),this.addEventListener=l.addEventListener.bind(l),this.removeEventListener=l.removeEventListener.bind(l),this.dispatchEvent=l.dispatchEvent.bind(l),this.open=function(t){i=new WebSocket(c.url,s||[]),t||l.dispatchEvent(r("connecting")),(c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",c.url);var n=i,a=setTimeout(function(){(c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",c.url),u=!0,n.close(),u=!1},c.timeoutInterval);i.onopen=function(){clearTimeout(a),(c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onopen",c.url),c.protocol=i.protocol,c.readyState=WebSocket.OPEN,c.reconnectAttempts=0;var s=r("open");s.isReconnect=t,t=!1,l.dispatchEvent(s)},i.onclose=function(s){if(clearTimeout(a),i=null,d)c.readyState=WebSocket.CLOSED,l.dispatchEvent(r("close"));else{c.readyState=WebSocket.CONNECTING;var n=r("connecting");n.code=s.code,n.reason=s.reason,n.wasClean=s.wasClean,l.dispatchEvent(n),t||u||((c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onclose",c.url),l.dispatchEvent(r("close")));var a=c.reconnectInterval*Math.pow(c.reconnectDecay,c.reconnectAttempts);setTimeout(function(){c.reconnectAttempts++,c.open(!0)},a>c.maxReconnectInterval?c.maxReconnectInterval:a)}},i.onmessage=function(t){(c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",c.url,t.data);var s=r("message");s.data=t.data,l.dispatchEvent(s)},i.onerror=function(t){(c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onerror",c.url,t),l.dispatchEvent(r("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(t){if(i)return(c.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","send",c.url,t),i.send(t);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(e,t){void 0===e&&(e=1e3),d=!0,i&&i.close(e,t)},this.refresh=function(){i&&i.close()}}return e.prototype.onopen=function(){},e.prototype.onclose=function(){},e.prototype.onconnecting=function(){},e.prototype.onmessage=function(){},e.prototype.onerror=function(){},e.debugAll=!1,e.CONNECTING=WebSocket.CONNECTING,e.OPEN=WebSocket.OPEN,e.CLOSING=WebSocket.CLOSING,e.CLOSED=WebSocket.CLOSED,e}),window.tramontanaMaster={},window.tramontanaMaster.state="INIT",window.tramontanaMaster.changedStateInCycle=0,tramontanaMaster.changeState=function(e){e!=tramontana.state&&(tramontanaMaster.state=e,tramontanaMaster.changedStateInCycle=1,jQuery.event.trigger("stateChanged",{}))},window.onbeforeunload=function(){for(var e in tramontanaMaster);},window.tramontana=function(){var e=new Object;return e.socket=new Object,e.status="INIT",e.subscribed={distance:0,orientation:0,attitude:0,magnetometer:0,touch:0,audiojack:0,powersource:0,rxembedded:0,btnsembedded:0,ldrembedded:0},e.callbacks={videoended:0,socketopen:0,distance:0,orientation:0,attitude:0,magnetometer:0,touch:0,audiojack:0,powersource:0,rxembedded:0,btnsembedded:0,ldrembedded:0},e.subscribeFunctions={distance:0,orientation:0,attitude:0,magnetometer:0,touch:0,audiojack:0,powersource:0,rxembedded:0,btnsembedded:0,ldrembedded:0},e.setupSocket=e.start=function(t,s){if(""!=t){-1==t.indexOf(":")&&(t+=":9092"),"Firefox"==BrowserDetect.browser?console.error("Websocket not supported. Please use Safari or Chrome."):e.socket=new ReconnectingWebSocket(get_appropriate_ws_url(t)),null!=s&&(e.callbacks.socketopen=s);try{e.socket.onopen=function(){for(var t in e.status="OPEN",jQuery.event.trigger("socketOpened",[]),e.retrial=0,e.subscribed)e.subscribed[t]&&e.subscribeFunctions[t]();0!=e.callbacks.socketopen&&e.callbacks.socketopen();try{socketOpened()}catch(e){}},e.socket.onmessage=function(t){try{messageObject=JSON.parse(t.data)}catch(e){console.warn("error loading JSON",t,e)}var s=e.socket.url.replace(e.socket.url.slice(-5),"");if(s=s.slice(5),"x"!=messageObject.m&&"xm"!=messageObject.m&&"xt"!=messageObject.m)if(console.info('::: ----\x3e received:"'+messageObject.m+'"',messageObject),"touched"!=messageObject.m)if("a"==messageObject.m)jQuery.event.trigger("a",{address:s,r:messageObject.r,y:messageObject.y,p:messageObject.p}),0!=e.callbacks.attitude&&e.callbacks.attitude(s,{r:messageObject.r,y:messageObject.y,p:messageObject.p});else if("oom"==messageObject.m)jQuery.event.trigger("oom",{address:s});else if("rx"==messageObject.m)jQuery.event.trigger("receivedRx",{address:s,v:messageObject.v}),0!=e.callbacks.rxembedded&&e.callbacks.rxembedded(s,messageObject.v);else if("orientationChanged"==messageObject.m){e.orientation=messageObject.value,0!=e.callbacks.orientation&&e.callbacks.orientation(s,e.orientation);try{orientationChanged(s,e.orientation)}catch(e){}jQuery.event.trigger("orientationChanged",{address:s,value:messageObject.value})}else if("magnetometerUpdate"==messageObject.m){e.magnetometer=messageObject.t,e.magnetometerIntensity=messageObject.i,0!=e.callbacks.magnetometer&&e.callbacks.magnetometer(s,e.magnetometer,e.magnetometerIntensity);try{magnetometerEvent(s,e.magnetometer,e.magnetometerIntensity)}catch(e){}jQuery.event.trigger("magnetometerEvent",{address:s,i:messageObject.i,t:messageObject.t})}else if("distanceChanged"==messageObject.m){e.proximity=messageObject.proximity,0!=e.callbacks.distance&&e.callbacks.distance(s,e.proximity);try{distanceChanged(s,e.proximity)}catch(e){}jQuery.event.trigger("distanceChanged",{address:s,p:messageObject.proximity})}else if("audioJackChanged"==messageObject.m){e.audiojack=messageObject.in,0!=e.callbacks.audiojack&&e.callbacks.audiojack(s,e.audiojack);try{audioJackChanged(s,e.audiojack)}catch(e){}jQuery.event.trigger("audioJackChanged",{address:s,in:messageObject.in})}else if("powerSourceChanged"==messageObject.m){e.powersource=messageObject.source,0!=e.callbacks.powersource&&e.callbacks.powersource(s,e.powersource);try{powerSourceChanged(s,e.powersource)}catch(e){}jQuery.event.trigger("powerSourceChanged",{address:s,in:messageObject.source})}else if("batteryGet"==messageObject.m){e.batteryLevel=messageObject.value;try{gotBatteryLevel(messageObject.value)}catch(e){}jQuery.event.trigger("gotBatteryLevel",{address:s,batteryLevel:messageObject.value})}else if("videoEnded"==messageObject.m){0!=e.callbacks.videoended&&e.callbacks.videoended(s);try{videoEnded()}catch(e){}jQuery.event.trigger("videoEnded",{address:s})}else if("btn"==messageObject.m)0!=e.callbacks.btnsembedded&&e.callbacks.btnsembedded(s,messageObject[n],messageObject[v]),jQuery.event.trigger("btnEvent",{address:s});else if("ldr"==messageObject.m){0!=e.callbacks.ldrembedded&&e.callbacks.ldrembedded(s,messageObject.v);try{ldrEmbeddedReceived(s,messageObject.v)}catch(e){}jQuery.event.trigger("ldrUpdate",{address:s,v:messageObject.v})}else"error"==messageObject.m?console.warn(messageObject.type):"test"==messageObject.m&&console.log(Date.now());else{0!=messageObject.value&&"0"!=messageObject.value||(e.touched=!1),0!=e.callbacks.touched?e.callbacks.touched(s,{x:messageObject.x,y:messageObject.y}):(e.touched=!0,jQuery.event.trigger("touched",{address:s,x:messageObject.x,y:messageObject.y}));try{touched(s,messageObject.x,messageObject.y)}catch(e){}}else jQuery.event.trigger("ping",{address:s,type:messageObject.m})},e.socket.onclose=function(){e.status="CLOSED",console.warn("connection: %s",e.status,e.socket)},e.socket.onerror=function(){e.status="ERROR"}}catch(t){alert("<p>Error"+t),e.status="ERROR"}}else t="192.168.1.:9092"},e.setServoEmbedded=function(e,t){2==arguments.length&&this.sendMessage('{"m":"srv","n":'+e+',"v":'+t+"}")},e.setRelayEmbeddedOff=function(e){this.sendMessage('{"m":"rel","n":'+e+',"v":0}')},e.setRelayEmbeddedOn=function(e){this.sendMessage('{"m":"rel","n":'+e+',"v":1}')},e.setRelayEmbedded=function(e,t){2==arguments.length&&this.sendMessage('{"m":"rel","n":'+e+',"v":'+Math.round(t)+"}")},e.sendSerialMessageEmbedded=function(e){1==arguments.length&&this.sendMessage('{"m":"tx","v":"'+e+'"}')},e.setColorEmbedded=function(e,t,s,n){this.sendMessage('{"m":"col","n":"'+e+'","r":"'+Math.floor(t)+'","g":"'+Math.floor(s)+'","b":"'+Math.floor(n)+'"}')},e.blinkColorEmbedded=function(e,t,s,n){4==arguments.length&&this.sendMessage('{"m":"blk","n":"'+e+'","r":"'+Math.floor(t)+'","g":"'+Math.floor(s)+'","b":"'+Math.floor(n)+'"}')},e.setAllColorEmbedded=function(e,t,s){3==arguments.length&&this.sendMessage('{"m":"all","r":"'+Math.floor(e)+'","g":"'+Math.floor(t)+'","b":"'+Math.floor(s)+'"}')},e.setColor=function(e,t,s,n){if(3!=arguments.length&&4!=arguments.length||((e>1||t>1||s>1)&&(e/=255,t/=255,s/=255,n/=255),this.sendMessage('{"m":"setColor","r":"'+e+'","g":"'+t+'","b":"'+s+'","a":"'+n+'"}')),1==arguments.length&&arguments[0].hasOwnProperty(r)){var a=e;(a.r>1||a.g>1||a.b>1)&&(a.r=a.r/255,a.g=a.g/255,a.b=a.b/255,a.a=a.a/255),this.sendMessage('{"m":"setColor","r":"'+a.r+'","g":"'+a.g+'","b":"'+a.b+'","a":"'+a.a+'"}')}},e.setFlashLight=function(e){e=clamp(e,0,e),this.sendMessage('{"m":"setLED","value":"1","in":"'+e+'"}')},e.pulseFlashLight=function(e,t,s){3==arguments.length?this.sendMessage('{"m":"pulseLED","t":"'+e+'","d":"'+t+'","i":"'+s+'"}'):console.warn("pulseLED requires 3 inputs: numberOfPulses,duration,intensity")},e.showImage=function(e){"string"==typeof e?this.sendMessage('{"m":"showImage","url":"'+e+'"}'):console.warn("showImage requires a string input")},e.playVideo=function(t,s){e.callbacks.videoended=null!=s?s:0,"string"==typeof t?this.sendMessage('{"m":"playVideo","url":"'+t+'"}'):console.warn("playVideo requires a string input")},e.loopVideo=function(t,s){e.callbacks.videoended=null!=s?s:0,"string"==typeof t?this.sendMessage('{"m":"loopVideo","url":"'+t+'"}'):console.warn("loopVideo requires a string input")},e.playAudio=function(e){"string"==typeof e?this.sendMessage('{"m":"playAudio","url":"'+e+'"}'):console.warn("playAudio requires a string input")},e.setBrightness=function(e){isNumber(e)?this.sendMessage('{"m":"setBrightness","b":"'+e+'"}'):console.warn("setBrighness requires one numerical parameter")},e.takePicture=function(e,t){if(arguments.length>0&&isNumber(e)){var s='{"m":"takePicture","c":"'+e+'"';arguments.length>1&&"ui"==t&&(s+=',"i":"ui"'),s+="}",this.sendMessage(s)}else this.sendMessage('{"m":"takePicture"}')},e.transitionColors=function(e,t,s){3==arguments.length?(isNumber(s)||(s=5,console.warn("transitionColors: duration is not a number")),this.sendMessage('{"m":"transitionColors","r1":"'+e.r+'","g1":"'+e.b+'","b1":"'+e.g+'","a1":"'+e.a+'","r2":"'+t.r+'","g2":"'+t.g+'","b2":"'+t.b+'","a2":"'+t.a+'","duration":"'+s+'"}')):console.warn("transitionColors requires 3 parameters: color1,color2,duration")},e.getBatteryLevel=function(){e.sendMessage('{"m":"getBattery"}')},e.subscribeFunctions.distance=e.subscribeDistance=function(t){e.subscribed.distance=1,e.sendMessage('{"m":"registerDistance"}'),e.callbacks.distance=null!=t?t:0},e.releaseDistance=function(){e.subscribed.distance=0,e.sendMessage('{"m":"releaseDistance"}')},e.subscribeFunctions.touch=e.subscribeTouch=function(t){e.subscribed.touch=1,e.sendMessage('{"m":"registerTouch"}'),e.callbacks.touch=null!=t?t:0},e.releaseTouch=function(){e.subscribed.touch=0,e.sendMessage('{"m":"releaseTouch"}')},e.subscribeFunctions.attitude=e.subscribeAttitude=function(t,s){e.subscribed.attitude=1,e.sendMessage('{"m":"registerAttitude","f":"'+t+'"}'),e.callbacks.attitude=null!=s?s:0},e.releaseAttitude=function(t){e.subscribed.attitude=0,e.sendMessage('{"m":"releaseAttitude"}')},e.subscribeFunctions.audiojack=e.subscribeAudioJack=function(t){e.subscribed.audiojack=1,e.sendMessage('{"m":"registerAudioJack"}'),e.callbacks.audiojack=null!=t?t:0},e.releaseAudioJack=function(){e.subscribed.audiojack=0,e.sendMessage('{"m":"releaseAudioJack"}')},e.subscribeFunctions.powersource=e.subscribePowerSource=function(t){e.subscribed.powersource=1,e.sendMessage('{"m":"registerPowerSource"}'),e.callbacks.powersource=null!=t?t:0},e.releasePowerSource=function(){e.subscribed.powersource=0,e.sendMessage('{"m":"releasePowerSource"}')},e.subscribeFunctions.magnetometer=e.subscribeMagnetometer=function(t){e.subscribed.magnetometer=1,e.sendMessage('{"m":"registerMagnetometer"}'),e.callbacks.magnetometer=null!=t?t:0},e.releaseMagnetometer=function(){e.subscribed.magnetometer=0,e.sendMessage('{"m":"releaseMagnetometer"}')},e.subscribeFunctions.orientation=e.subscribeOrientation=function(t){e.subscribed.orientation=1;e.sendMessage('{"m":"registerOrientation"}'),e.callbacks.orientation=null!=t?t:0},e.releaseOrientation=function(){e.subscribed.orientation=0,e.sendMessage('{"m":"releaseOrientation"}')},e.subscribeFunctions.rxembedded=e.subscribeRxEmbedded=function(t){e.subscribed.rxembedded=1,e.sendMessage('{"m":"srx"}'),e.callbacks.rxembedded=null!=t?t:0},e.releaseRxEmbedded=function(){e.subscribed.rxembedded=0,e.sendMessage('{"m":"drx"}')},e.subscribeFunctions.ldrembedded=e.subscribeLDREmbedded=function(t,s){var n='{"m":"sldr","f":"'+t+'"}';e.subscribed.ldrembedded=1,e.sendMessage(n),e.callbacks.ldrembedded=null!=s?s:0},e.releaseLDREmbedded=function(){e.subscribed.ldrembedded=0,e.sendMessage('{"m":"dldr"}')},e.subscribeFunctions.btnsembedded=e.subscribeButtonsEventEmbedded=function(t){e.subscribed.btnsembedded=1,e.sendMessage('{"m":"sbtn"}'),e.callbacks.btnsembedded=null!=t?t:0},e.releaseButtonsEventEmbedded=function(){e.subscribed.btnsembedded=0,e.sendMessage('{"m":"dbtn"}')},e.makeVibrate=function(t){var s;s=""!=t&&null!=t&&""!=t?'{"m":"makeVibrate","duration":"'+t+'"}':'{"m":"makeVibrate"}',e.sendMessage(s)},e.sendMessage=function(t){try{e.socket.send(t),e.retrial=0}catch(s){e.retrial<3?(e.socket.refresh(),e.retrial++,setTimeout(function(){e.sendMessage(t)},100)):console.warn("communication error: "+s)}},e};

var control1;
var control2;
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
var field;
var menu;

function setup() {
  createCanvas ((windowWidth), (windowHeight - 100));



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
  field = loadImage('assets/field.jpg')
  menu = loadImage('assets/menu.jpg')
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);


  paddle2Pos = createVector(5, height/2);
  paddle1Pos = createVector(width - 5, height/2);
  score1 = 0;
  score2 = 0;


}

function draw() {

  switch (myState) {
    case 1:
      imageMode(CORNER);
      background(menu);
      imageMode(CENTER);




      break;

      case 2:

        Game();


  control1 = attitudeContentR1.textContent
  control2 = attitudeContentR2.textContent



if (control1 >= .5) {
  paddle2Pos.y = paddle2Pos.y - vel1;
  if (paddle2Pos.y <= 0) {
    vel1 = 0;
  } else{
    vel1 = 6;
  }
}

if (control1 <= -.5) {
  paddle2Pos.y = paddle2Pos.y + vel2;
  if (paddle2Pos.y >= height) {
    vel2 = 0;
  } else{
    vel2 = 6;
  }
}

if (control2 >= .5) {
  paddle1Pos.y = paddle1Pos.y - vel5;
  if (paddle1Pos.y <= 0) {
    vel5 = 0;
  } else{
    vel5 = 6;
  }
}
if (control2 <= -.5) {
  paddle1Pos.y = paddle1Pos.y + vel6;
  if (paddle1Pos.y >= height) {
    vel6 = 0;
  } else{
    vel6 = 6;
  }
}

break;
case 3:
background(0);
image(trophy, width/2, height/2);
text('Player 2 wins', width/2, height/2);

break;
case 4:
background(0)
image(trophy , width/2, height/2);
text('Player 1 wins', width/2, height/2);


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
    vel1 = 6;
  }

  if (keyIsDown(DOWN_ARROW)) paddle1Pos.y = paddle1Pos.y + vel2;
  if (paddle1Pos.y >= height) {
    vel2 = 0;
  } else{
    vel2 = 6;
  }

  if (keyIsDown(LEFT_ARROW)) paddle1Pos.x = paddle1Pos.x - vel3;
  if (paddle1Pos.x <= 0) {
    vel3 = 0;
  } else{
    vel3 = 6;
  }

  if (keyIsDown(RIGHT_ARROW)) paddle1Pos.x = paddle1Pos.x + vel4;
  if (paddle1Pos.x >= width) {
    vel4 = 0;
  } else{
    vel4 = 6;
  }
  if (keyIsDown(87)) paddle2Pos.y = paddle2Pos.y - vel5;
  if (paddle2Pos.y <= 0) {
    vel5 = 0;
  } else{
    vel5 = 6;
  }
  if (keyIsDown(83)) paddle2Pos.y = paddle2Pos.y + vel6;
  if (paddle2Pos.y >= height) {
    vel6 = 0;
  } else{
    vel6 = 6;
  }
  if (keyIsDown(65)) paddle2Pos.x = paddle2Pos.x - vel7;
  if (paddle2Pos.x <= 0) {
    vel7 = 0;
  } else{
    vel7 = 6;
  }
  if (keyIsDown(68)) paddle2Pos.x = paddle2Pos.x + vel8;
  if (paddle2Pos.x >= width) {
    vel8 = 0;
  } else{
    vel8 = 6;
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
  imageMode(CORNER);
  background(field);
  imageMode(CENTER);
  
  noStroke();
  fill('blue');
  textSize(50);
  text(score1, width/4, height/2);
  text(score2, (3*width/4), height/2);


  for (var i = 0; i < ball.length; i++) {
  ball[i].display();
  ball[i].drive();


    if (((abs(ball[i].pos.x - paddle2Pos.x)) <= 20)  && (abs(ball[i].pos.y - paddle2Pos.y)) <= 50){
    ball[i].vel.x = abs(ball[i].vel.x)+1;
    if (ball[i].vel.x >= 19) {
      ball[i].vel.x = 19;
    }
    leftp.play();
    }


    if (((abs(ball[i].pos.x - paddle1Pos.x)) <= 20)  && (abs(ball[i].pos.y - paddle1Pos.y)) <= 50){
    ball[i].vel.x = -(abs(ball[i].vel.x)+1);
    if (ball[i].vel.x >= 19) {
      ball[i].vel.x = 19;
    }
    rightp.play();
    }

  }

  fill(255);
  rect(paddle2Pos.x, paddle2Pos.y, 10, 100);
  rect(paddle1Pos.x - 5, paddle1Pos.y, 10, 100);

  if (((abs(paddle1Pos.x - paddle2Pos.x)) <= 10) && ((abs(paddle1Pos.y - paddle2Pos.y))) <= 50) {
    paddle2Pos.x = 5;
    paddle2Pos.y = height/2;
    paddle1Pos.x = width - 5;
    paddle1Pos.y = height/2;
}

  checkForKeys();




}

function mouseReleased() {
 switch (myState) {
   case 1:
   if ((mouseX >=0) && (mouseY >=0) )
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

  paddle2Pos.x = 5;
  paddle2Pos.y = height/2;
  paddle1Pos.x = width - 5;
  paddle1Pos.y = height/2;

}

function ballReset() {
  ball.splice(i);
  for (var i = 0; i < 1; i++)
  ball.push(new Ball()) ;

}
