let offest;
let xcoord = 0;
let ycoord = 0;
let color = 255
//let colorarray = ["red", "orange", "yellow", "green", "blue", "purple"];//array of colors
function setup() {
  createCanvas(400, 400);
  offset = width / 12;
  noLoop();//makes the squares stay on screen
}

function draw() {
  background(220);
  for (let xsquares = 0; xsquares < 12; xsquares++) {//loop calling 12 times
    for (let ysquares = 0; ysquares < 12; ysquares ++){
    fill(0-ycoord, color-xcoord, color-ycoord);//picks the gradient colors for each square
    sprites(xcoord * offset, ycoord * offset);//calls the square function 
    xcoord += 30;//increase the x and y coord for each new time
    }
    xcoord = 0
    ycoord +=30
  }
}
function sprites(x, y) {//draws the square at each new x and y coord
  rect(xcoord, ycoord, 30);
}
