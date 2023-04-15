const webcamElement = document.getElementById("videoElement");
const canvasElement = document.getElementById("canvas");
const snapSoundElement = document.getElementById("snapSound");
const webcam = new Webcam(
    webcamElement,
    "user",
    canvasElement,
    snapSoundElement
);
webcam
    .start()
    .then((result) => {
        console.log("webcam started");
    })
    .catch((err) => {
        console.log(err);
    });