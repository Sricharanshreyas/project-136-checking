status=false;
function preload(){
    
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(400,400);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
}
function start(){
    cocoSSD=ml5.objectDetector("cocossd",modelloaded);
    
    document.getElementById("status").innerHTML="Detecting objects";
}
function modelloaded(){
    console.log("cocossd is loaded");
    status=true;
}