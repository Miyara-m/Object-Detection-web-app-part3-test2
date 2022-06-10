var status = "";
objects = [];
function preload() 
{
    img = loadImage("small simple garden.jpg");
}
function setup() 
{
 canvas = createCanvas(640, 480);
 canvas.center();
 Coco = ml5.objectDetector("cocossd", modelLoaded);
 document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw() 
{
 image(img, 0, 0, 640, 480);
 if (status != "") {
    objects.detect(img, gotResults);
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status: Detected Objects";
      document.getElementById("number").innerHTML = "Number of Objects:" + objects.length;
      confidence = objects[i].confidence;
      label = objects[i].label;
      x = objects[i].x;
      y = objects[i].y;
      height = objects[i].height;
      width = objects[i].width;
      fill("sienna");
      text(label, x, y - 20);
      noFill();
      stroke("teal");
      rect(x, y, width, height - 30);
    }
  }
}
function modelLoaded()
{
    status = true;
    console.log("Model Loaded!");
    Coco.detect(img, gotResults);

}
function gotResults(error, results)
{
 if(error)
 {
  console.log(error);
 }
 else{
    console.log(results);
 }
}