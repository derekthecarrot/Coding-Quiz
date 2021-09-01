//highscore input
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const fnlScore = document.getElementById('score1')
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHigh = document.getElementById('clearHigh');

const MAX_HIGH_SCORES = 5;
console.log(highScores);


finalScore.innerText = mostRecentScore;
fnlScore.innerText = mostRecentScore;
//event listener for username input

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

//save button with local storage to print a list to screen

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))

    console.log(highScores);
};

highScoresList.innerHTML = highScores
     .map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
})
.join("");
//clear button

clearHigh.addEventListener('click', function(event){
    localStorage.clear();
})
