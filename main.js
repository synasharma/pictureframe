
function preload()
{}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    
  

    fill(0,128,0);
    stroke(0,128,0);
    rect(0,0,640,480);
    image(video,10,10,620,460);
     
    fill(255,0,0);
    stroke(255,0,0);
    circle(10,10,40);
    circle(630,10,40);
    circle(10,470,40);
    circle(630,470,40);
   
}

function take_pic()
{
    save("framepic.png");
}