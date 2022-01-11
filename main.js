function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    //canvas.center();
    video=createCapture(VIDEO);
    video.size(600,550);
    video.hide();
    tint_color="";
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}



function modelLoaded(){
console.log('posenet is initialised');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
    }
}


function draw(){
    image(video,0,0,300,300);
    tint(tint_color);

}
function take_snapshot(){
    save('MyPic.jpg');
}