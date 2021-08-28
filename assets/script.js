
// variables for page manipulation
const startButton = document.getElementById('start-btn')
const sectionOne = document.getElementById('section-1')
const sectionTwo = document.getElementById('section-2')
const timerSection = document.getElementById('timer-section')

// STARTS TIMER ON START QUIZ BUTTON
startButton.addEventListener('click', startGame)

var timeEl = document.getElementById("time");
var secondsLeft = 60;

function startGame(){

    // Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          alert = "Time is up!";

      }
      // shows and hides proper sections based on button clicks
      sectionOne.classList.add('hide')
      sectionTwo.classList.remove('hide')
      timerSection.classList.remove('hide')

      
      
  }, 1000);
}