//highscore input
const username = document.getElementById("username")
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore')
const mostRecentScore = localStorage.getItem("mostRecentScore")

finalScore.innerText = mostRecentScore; // need to set a localstorage in index.html to get mostRecentScore

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
}

const highScoresList = document.getElementById('highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];