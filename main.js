Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Wecam.attach( '#camera' )


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', l5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is" +prediction_1;
    speak_data_2 = "And the second prediction is" +prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document
    }
}