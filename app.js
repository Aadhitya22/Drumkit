// THE FUNCTIONALITY

// Detecting mouse click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      var selectedButton = this.innerHTML;
      playSound(selectedButton);
      animateButton(selectedButton);
    });
}

// Detecting key press
document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  playSound(keyPressed);
  animateButton(keyPressed);
});

// Button animation
function animateButton(keyValue) {
  document.querySelector("." + keyValue).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + keyValue).classList.remove("pressed");
  }, 100);
}

// Play sound
function playSound(keyValue) {
  switch (keyValue) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      console.log(selectedButton);
      break;
  }
}
