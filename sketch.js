var score = 0

var xBall = 300
var yBall = 200
var ballYSpeed = 2
var ballXSpeed = 0

var xPaddle = 200
var paddleSpeed = 40
var paddleWidth = 200

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  fill(255)

  isPaddleAtEdge()
  isBallAtEdge()

  yBall = yBall + ballYSpeed
  xBall = xBall + ballXSpeed

  isPaddleCollision()

  if (isOffScreen()) {
    ballYSpeed = 0
    ballXSpeed = 0
    text('Game Over!', 10, 150)
    text('Score: ' + score, 10, 170)
  } else {
    rect (-1,-1,601,7)
    text('Score: ' + score, 10, 30)

    ellipse(xBall,yBall,10,10)
    rect(xPaddle, 385, paddleWidth, 10)
  }


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

function isPaddleCollision() {
  if (xBall > xPaddle && xBall < xPaddle + paddleWidth && yBall > 385 || yBall < 7) {
    if(yBall < 388 && yBall > 385) {
      score++
      ballXSpeed = Math.floor((Math.random() * 10) + 1)
      ballYSpeed = Math.floor((Math.random() * 10) + 1)
    }
    ballYSpeed = ballYSpeed * -1
  }
}

function isBallAtEdge() {
  if (xBall < 0 || xBall > 600) {
    ballXSpeed = ballXSpeed * -1
  }
}

function isOffScreen() {
  if (yBall > 400) {
    return true
  }
}
