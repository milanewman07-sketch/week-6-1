let font1, font2, currentFont;

function preload() {
    font1 = loadFont('assets/MomoSignature-Regular.ttf');
    font2 = loadFont('assets/Oswald-VariableFont_wght.ttf');
}

function setup() {
    createCanvas(600, 600);
    currentFont = font1;
    textFont(currentFont);
    textSize(40);
}

function draw() {
    background(255);
    fill(0);
    text('Press F to swap fonts', 20, 200);
}

function keyPressed() {
    if (key === 'f') {
        currentFont = (currentFont === font1) ? font2 : font1;
        textFont(currentFont);
    }
}