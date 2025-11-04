const phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

let output = ""

function setup() {
    createCanvas(600, 600)
    frameRate(1)
    textSize(60)
}

function draw() {
    background(255)
    output += phrase.charAt(frameCount - 1)
    text(output, 30, 30, 280, 280)
}