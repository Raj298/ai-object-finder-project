function preload()  {
    img=loadImage('download.jpg')
}

function setup(){
canvas=createCanvas(400,300)
canvas.center()
}

function draw() {
    image(img,0,0,400,300)
}