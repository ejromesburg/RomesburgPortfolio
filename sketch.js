//based //based on https://www.openprocessing.org/sketch/424072 by Abdelrhman Wassim

var x= 280;
var moonRadius = 17;

function setup() {
  var canvas = createCanvas(825, 400);
  canvas.parent('header');
}

function draw() {

	background (188,247,255);
  
	//the moon :)
  fill(222,146,106);
  noStroke();
  ellipse(x,140,40,40);
  x = x + 0.1 ;
  fill(188,247,255);
  rect(340,100,60,100);
	
	 //buildings
	stroke(1);
	line(300,300,300,200);
	line(300,200,350,200);
	line(350,200,350,300);
	line(350,300,340,300);
	line(340,300,340,100);
	line(340,100,370,65);
	line(370,65,400,100);
	line(400,100,400,300);
	line(400,300,375,300);
	line(375,300,375,150);
	line(375,150,430,180);
	line(430,180,430,300);

	
	 //name
	textSize(30);
	fill(122);
	text("Ethan",48,270);
	text("Romesburg",48,295);
	textSize(19);
	fill(122);
	text("(Portfolio)",48,312)
	
	
	
	console.log(mouseX,mouseY);
	
	if (x>width+moonRadius){
		x=-moonRadius;
	}
	
}