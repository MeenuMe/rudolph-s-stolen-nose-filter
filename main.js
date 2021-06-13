function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0,0,300,300);
}

function take_snapshot(){
    save('i_have_a_red_nose.png');
}

function modelLoaded(){
    console.log("the model has loaded as usual");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        console.log("leftEar x = "+results[0].pose.leftEar.x);
        console.log("rightEar y = "+results[0].pose.rightEar.y);
    }
}