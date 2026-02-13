/* ===== Background Music Auto Start ===== */

const bgMusic = new Audio("public/music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;

let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

document.addEventListener("click", startMusicOnce);
document.addEventListener("touchstart", startMusicOnce);

/* ===== End Music Code ===== */
var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch('send_mail.php')
      .then(response => {
        if (response.ok) {
          button.textContent = "Muwaah 🩷";
        } else {
          console.error('Failed to send email');
          button.textContent = "Muwaah 🩷";
        }
      })
      .catch(error => {
        // Handle network errors or other issues
        console.error('Error:', error);
        button.textContent = "Muwaah 🩷";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // Sentence 1
    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Out of all the endless possibilities written in this universe,", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Out of all the endless possibilities written in this universe,", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 500){ opacity = 0; }

    // Sentence 2
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("somehow our hearts found each other, Zaina.", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("somehow our hearts found each other, Zaina.", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 1000){ opacity = 0; }

    // Sentence 3
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "What began as a simple moment turned into nights",
            "filled with laughter, arguments, healing, and love."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "What began as a simple moment turned into nights",
            "filled with laughter, arguments, healing, and love."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    if(frameNumber == 1500){ opacity = 0; }

    // Sentence 4
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Across borders and distance that try to define us,",
            "our hearts built something that refuses to be divided."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Across borders and distance that try to define us,",
            "our hearts built something that refuses to be divided."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    if(frameNumber == 2000){ opacity = 0; }

    // Sentence 5
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "We have faced fear and days that felt like the world",
            "was breaking, yet we stood stronger together."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "We have faced fear and days that felt like the world",
            "was breaking, yet we stood stronger together."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    if(frameNumber == 2500){ opacity = 0; }

    // Sentence 6
    if(frameNumber > 2500 && frameNumber < 2750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Every time I look at you, my butterfly,",
            "I see the light that changed my life."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }

    if(frameNumber >= 2750){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        drawTextWithLineBreaks([
            "I love you, Zaina, more deeply than words can explain.",
            "Maybe we are apart this year, but I will do everything",
            "to make sure our next Valentine’s Day is together."
        ], canvas.width/2, canvas.height/2 + 60, fontSize, lineHeight);
        secondOpacity += 0.01;
    }

    if(frameNumber >= 3000){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine’s Day, meri jaan <3", canvas.width/2, canvas.height/2 + 140);
        thirdOpacity += 0.01;

        button.style.display = "block";
    }

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
