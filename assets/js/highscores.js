//Load and display high scores from local storage
/**
 * This code uses JavaScript to show the user's high scores on a webpage.
 * It does this by selecting the location on the webpage to display the high scores,
 * retrieving the high scores from the user's computer, creating a new list with HTML for
 * each high score, compiling the HTML list items into one string, and updating the content
 * of the highScoresList location on the webpage with the new string and high scores using innerHTML.
 */
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map((score) => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");