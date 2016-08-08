var R = 0
var G = 0
var B = 0
function setup() {
  createCanvas(1200, 1200)
  background(0, 0, 0);
}
function draw() {
    fill(R, G, B);
    R = random(255);
    G = 30;
    B = 150;
    noStroke();
    ellipse(mouseX, mouseY, 13, 13);
    if(mouseIsPressed){
      noStroke();
      fill(0, 0, 0);
      ellipse(mouseX, mouseY, 15, 15);
    }
  

}