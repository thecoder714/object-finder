level = false;
objects = [];

function setup() {
    canvas = createCanvas(480, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status Detecting Objects';
    value = document.getElementById('object').value;
}

function modelLoaded() {console.log('Model loaded'); level = true;}

function draw() {
    image(video, 0, 0, 480, 480);
}