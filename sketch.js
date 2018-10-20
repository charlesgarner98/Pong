var score = 0
var xBall = 300
var yBall = 200
var xPaddle = 200
var paddleSpeed = 20
var paddleWidth = 200

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  fill(255)

  //Non moving
  rect (-1,-1,601,7)
  text('Score: ' + score, 10, 30)

  isPaddleAtEdge()

  ellipse(xBall,yBall,10,10)
  rect(xPaddle, 385, paddleWidth, 10)

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      xPaddle = xPaddle - paddleSpeed
  } else if (keyCode === RIGHT_ARROW) {
      xPaddle = xPaddle + paddleSpeed
  }
}

function isPaddleAtEdge() {
  if(xPaddle > 600 - paddleWidth) {
    xPaddle = 600 - paddleWidth
  } else if (xPaddle < 0) {
    xPaddle = 0
  }
}
