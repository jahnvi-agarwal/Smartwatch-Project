var blackColor = document.getElementById("black");
var redColor = document.getElementById("red");
var purpleColor = document.getElementById("purple");
var pinkColor = document.getElementById("pink");
var time = document.getElementById("time");
var heartRate = document.getElementById("heart-rate");
var smartwatchDisplay = document.getElementById("smartwatch-display");
var timeDisplay = document.getElementById("time_display");
var imgSmartwatch = document.getElementById("img-smartwatch");



blackColor.addEventListener('click', function() {
    var imagePath = 'black.png'; 
    imgSmartwatch.src = imagePath;
});

redColor.addEventListener('click', function() {
    var imagePath = 'red.png'; 
    imgSmartwatch.src = imagePath;
});

purpleColor.addEventListener('click', function() {
    var imagePath = 'purple.png'; 
    imgSmartwatch.src = imagePath;
});

pinkColor.addEventListener('click', function() {
    var imagePath = 'pink.png'; 
    imgSmartwatch.src = imagePath;
});

displayTime();

function displayTime() {
    timeDisplay = document.createElement("p");
    timeDisplay.id = "time_display"; // Set the id for timeDisplay
    smartwatchDisplay.appendChild(timeDisplay);
    timeDisplay.textContent = displayCurrentTime();
    setInterval(function () {
        timeDisplay.textContent = displayCurrentTime();
    }, 1000);
}

displayWatch();

function displayWatch(){
    var imagePath = './iOeUBV7.png'; 
    imgSmartwatch.src = imagePath;
}

var heartDisplay;
heartRate.addEventListener('click', function () {
    heartDisplay = document.createElement("img");
    heartDisplay.src = "heart.png";
    heartDisplay.id = "heart_display"; // Set the id for heartDisplay
    smartwatchDisplay.removeChild(timeDisplay); // Remove timeDisplay
    smartwatchDisplay.appendChild(heartDisplay); // Add heartDisplay

    const image = document.getElementById('heart_display'); // Use getElementById to select by id
    let scaleUp = true;
    let scaleFactor = 1;

    function animate() {
        if (scaleUp) {
            scaleFactor += 0.01;
            if (scaleFactor >= 1.2) {
                scaleUp = false;
            }
        } else {
            scaleFactor -= 0.01;
            if (scaleFactor <= 1) {
                scaleUp = true;
            }
        }

        image.style.transform = `scale(${scaleFactor})`;

        requestAnimationFrame(animate);
    }

    animate();
});

time.addEventListener('click', function(){
    timeDisplay = document.createElement("p");
    timeDisplay.id = "time_display"; // Set the id for timeDisplay
    smartwatchDisplay.removeChild(heartDisplay); // Remove timeDisplay
    smartwatchDisplay.appendChild(timeDisplay);
    timeDisplay.textContent = displayCurrentTime();
    setInterval(function () {
        timeDisplay.textContent = displayCurrentTime();
    }, 1000);
});

function displayCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    return currentTimeString;
}


