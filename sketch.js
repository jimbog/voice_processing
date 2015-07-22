var rt = {text: ""};
var mic;
var vol;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(event) {
  console.log(event);
  results =  event.results;
  results = results[results.length -1];
  results = results[results.length -1].transcript;
  rt.text = results;
}
recognition.start();


function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // draw stuff here
  vol = 1000*mic.getLevel();
  background(255);
  textSize(vol);
  text(rt.text, mouseX, mouseY);
}
