function trans() {
  translate(width / 2, height / 2);
}

function fil(c) {
  fill(color(c))
}

function flow() {
  stroke(color("#cc00ff"));
  strokeWeight(5);
  translate(width / 2, height / 2);
  for (var i = 0; i < 10; i++) {
    line(0, 0, 0, 127);
    rotate(PI / 5);
  }
}
var colorList = ["#ffbf00", "#f4b2b2", "#f4f1b2", "#dbf4b2", "#b2f4b9", "#b2f4e9", "#b2c1f4", ""]

function setup() {
  createCanvas(800, 600);
  background(100);
  angleMode(DEGREES);

}

function draw() {
  var m = minute();
  text("Current minute: \n" + m, 5, 50);


  //for (var a = 0; a >= 59; a -= 59) {
  //if (a = 59) {
  //for (var c = 0; c < colorList.length; c++) {

//sec
push();
  noStroke();
  //var cl = colorList[c];
  //fil();
  trans();
  rotate(second() * 6);
  fill(lerpColor(color('#700020'), color('#500060'), (frameCount % 120) / 120));
  arc(0, 0, 250, 250, 0, 6);
  pop();
  
  //min
  
  noStroke();
  trans();
  rotate(minute() * 6);
  fill(lerpColor(color('#ea0043'), color('#0fefca'), (frameCount % 120) / 120));
  arc(0, 0, 300, 300, 0, 6);
  
  //hora
  strokeWeight(2);
  trans();
  rotate(hour() * 15);
  stroke(lerpColor(color('#ff7f00'), color('#cece00'), (frameCount % 120) / 120));
  line(0, 0, 30, 30);





  //stroke("#089a99");
  //fil("#089a99");
  //trans();
  //rotate(minute());
  //line(0, 0, 250, 250);
  //text("\n" + m, 5, 50);

  //stroke(255);
  //trans();
  //rotate(hour())
  //line(0, 0, 250, 250);


  // Do things while call clockhand()
  //clockHand(parameters
  //for hours);
  //clockHand(parameters
  //for minutes);
  //clockHand(parameters
  //for seconds);
}

function clockHand() {
  // Do parametric things
}