function myFunction() {
    document.getElementById("demo").style.color = "red";
};

function myFunctionTwo(event) {
    var x = event.which || event.keyCode;
    if (x == 27) {
        alert ("You pressed the Escape key!");
    }
}

var pressed = {},
    audio = document.getElementById('sound'),
    output = document.getElementById('output'),
    maxValue = 2,
    duration,
    volume;

document.onkeydown = function (e) {
  if (pressed[e.which]) return;
  pressed[e.which] = e.timeStamp;
};

document.onkeyup = function (e) {
  if (!pressed[e.which]) return;
  

  if (e.keyCode === 86) {
    

    duration = (e.timeStamp - pressed[e.which]) / 1000;

    // Calculate new volume
    if (duration >= maxValue) {
      volume = 1;
    } else {
      volume = duration / maxValue;
    }
    
    // Set the volume and play the track
    audio.volume = volume;
    audio.play();
    
    pressed[e.which] = 0;
    
    return false;
  }
};

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "65") {
        console.log("The 'a' key is pressed.");
    }
}
