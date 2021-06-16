Webcam.set({
    height: 300,
    width: 300,
    img_format: "jpeg",
    jpeg_quality: 90,

    constraints:{
        facingMode: 'environment'
    }
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'/>";
    });
}

console.log("ml5.version" + ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
}

function check()
{
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label +", " + results[1].label +", " + results[2].label;
    }
}