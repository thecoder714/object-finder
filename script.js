level = false;
objects = [];
value = "";
const synth = window.speechSynthesis;

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

function gotResult() {
    if(error) {console.error(error);} else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video, 0, 0, 480, 480);
    if(level = true) {
        for (let i = 0; i < array.length; i++) {
            percent = Math.floor(objects[i].confidence) * 100;
            text(objects[i].label + ": " + percent + "%", objects[i].x + 15, objects[i].y + 15);


            if(value == objects[i].label) {
                video.stop();
                objectDetector.detect(gotResult);
                document.getElementById('status').innerHTML = "Object found";
                utterThis = new SpeechSynthesisUtterance('The object that was mentioned has been found.');
                synth.speak(utterThis);
            } else {
                document.getElementById('status').innerHTML = "Object not found";
                
            }
        }
    }
}