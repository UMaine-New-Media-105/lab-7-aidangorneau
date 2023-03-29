let offest;
let xcoord = 0;
let ycoord = 0;
let colorarray = ["red", "orange", "yellow", "green", "blue", "purple"];//array of colors
function setup() {
  createCanvas(400, 400);
  offset = width / 12;
  noLoop();//makes the squares stay on screen
}

function draw() {
  background(220);
  for (squares = 0; squares < 12; squares++) {//loop calling 12 times
    fill(random(colorarray));//picks the random colors for each square
    sprites(xcoord * offset, ycoord * offset);//calls the square function 
    xcoord += 30;//increase the x and y coord for each new time
    ycoord += 30;
  }
}
function sprites(x, y) {//draws the square at each new x and y coord
  rect(xcoord, ycoord, 30);
}
