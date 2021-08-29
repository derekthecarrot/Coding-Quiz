//highscore input
const username = document.getElementById("username")
const saveScoreBtn = document.getElementById('saveScoreBtn');

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