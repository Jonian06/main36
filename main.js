nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('clown nose.jpeg');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose', gotposes);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex,nosey,30,30);
}
function takesnapshot(){
save('clownfilter.png');
}
function modelloaded(){
console.log('posenet is initialized');
}
function gotposes(results){
if(results.length>0)
{
console.log(results);
nosex=+results[0].pose.nose.x;
nosey=+results[0].pose.nose.y;
console.log("nosex=",+nosex);
console.log("nosey=",+nosey);
}
}