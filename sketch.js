function setup() {
  createCanvas(400, 400);
  background('gray');
}

function draw() {
  
  fill('white');
if(mouseIsPressed) {  rect (mouseX, mouseY, 20, 20);
  stroke('black');
}
}
