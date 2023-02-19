prediciton1=""
prediciton2=""

Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality:90
})


camera = document.getElementById("camera")

webcam.attach( '#camera' );

function Takesnapshot() {
    webcam.snap(function(data_url)) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_url'">"'
    }
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.jason',modelLodaded);

function modelLodaded() {
    console.log('model Lodaded')
}