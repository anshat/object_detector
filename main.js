ig1="";
objects=[];
status="";
function preload(){
    ig1= loadImage('dog_cat.ijg');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(ig1, gotResult);
}
function gotResult(error, results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}