
// variables for page manipulation
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementsByClassName('next-btn')
const sectionOne = document.getElementById('section-1')
const sectionTwo = document.getElementById('section-2')
const timerSection = document.getElementById('timer-section')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers-btn')

let shuffledQuestions, currentQuestionIndex

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
      shuffledQuestions = questions.sort(() => Math.random() - .5)
      currentQuestionIndex = 0
      sectionTwo.classList.remove('hide')
      timerSection.classList.remove('hide')
      setNextQuestion()

      
      
  }, 1000);
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('next-btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  for (var i = 0; i<nextButton.length; i++) {
    elements[i].classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.first)
  }
}
}
function selectAnswer() {

}

// QUESTION VARIABLES

const questions = [
  {
      question: 'JavaScript is a ___ -side programming language.',
      answers: [
          { text: '<Client>', correct: false },
          { text: '<Server>', correct: false },
          { text: '<Both>', correct: true },
          { text: '<None>', correct: false }
      ]
  },

  {
      question: 'Select a String function that creates a string and display in a big font as if it were in a tag?',
      answers: [
          { text: 'italics() =', correct: false },
          { text: 'big()', correct: true },
          { text: 'blink()', correct: false },
          { text: 'link()', correct: false }
      ]
  },

  {
      question: 'What is the function of Array object that adds and/or removes elements from an array?',
      answers: [
          { text: 'sort()', correct: false },
          { text: 'unshift()', correct: false },
          { text: 'splice()', correct: true },
          { text: 'toSource()', correct: false }
      ]
  },

  {
      question: 'What is the function of Array object that runs through each element of the array?',
      answers: [
          { text: 'forEach()', correct: true },
          { text: 'every()', correct: false },
          { text: 'filter()', correct: false },
          { text: 'concat()', correct: false }
      ]
  },

  {
      question: 'Which of the following statements is valid for the features of JavaScript?',
      answers: [
          { text: 'JavaScript is designed for creating network-centric applications.', correct: false },
          { text: ' JavaScript is complementary to and integrated with Java.', correct: false },
          { text: 'JavaScript is a lightweight, interpreted programming language.', correct: false },
          { text: 'All', correct: true }
      ]
  },
]