/**
 * This JavaScript code saves and displays high scores for a game. 
 * It retrieves the user's most recent score, 
 * saves it with the user's name and other high scores on the user's computer, 
 * sorts the high scores in descending order, keeps only the top 5 scores, 
 * and updates the webpage to show the user's most recent score 
 * and allow them to save their high score with their name.
 */


//The purpose of the "form" function is to prevent false logins by controlling the enabled "save" button.
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");


//Saves the user's recent score to the end page of the page.
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
};