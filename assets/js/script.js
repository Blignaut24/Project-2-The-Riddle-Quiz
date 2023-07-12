//Get elements by id
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

//Variables that keep track of player's score and progress
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

//Riddle Question Bank
let questions = [
    {
        question: "What is always in front of you but can't be seen?",
        choice1: "The future",
        choice2: "The past",
        choice3: "The present",
        choice4: "Time",
        answer: 1,
    },
    {
        question: "What has a bottom at the top?",
        choice1: "A leg",
        choice2: "A bottle",
        choice3: "A hat",
        choice4: "A chair",
        answer: 3,
    },
    {
        question: " What is full of holes but still holds water?",
        choice1: "A sponge",
        choice2: "A strainer",
        choice3: "A colander",
        choice4: "A sieve",
        answer: 1,
    },
    {
        question: "What is so fragile that saying its name breaks it?",
        choice1: "Silence",
        choice2: "Glass",
        choice3: "Ice",
        choice4: "A heart",
        answer: 1,
    },
    {
        question: "What has a neck but no head?",
        choice1: "A pencil",
        choice2: "A giraffe",
        choice3: "A bottle",
        choice4: "A sweater",
        answer: 3,
    },
    {
        question: "What has a thumb and four fingers but is not alive?",
        choice1: "A mitten",
        choice2: "A hand",
        choice3: "A puppet",
        choice4: "A glove",
        answer: 4,
    },
    {
        question:
            " I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but I need water to live. What am I?",
        choice1: "A tree",
        choice2: "Fire",
        choice3: "Mold",
        choice4: "Ice",
        answer: 3,
    },
    {
        question: "What goes through cities and fields, but never moves?",
        choice1: "A river",
        choice2: "A road",
        choice3: "A bridge",
        choice4: "A street",
        answer: 2,
    },

    {
        question:
            "What comes once in a minute, twice in a moment, but never in a thousand years?",
        choice1: "The Letter M",
        choice2: "The number one",
        choice3: "The word time",
        choice4: "The word never",
        answer: 1,
    },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        choice1: "A penny",
        choice2: "A snake",
        choice3: "A stick",
        choice4: "A train",
        answer: 1,
    },
    {
        question:
            " I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
        choice1: "A battery",
        choice2: "A diamond",
        choice3: "A pencil",
        choice4: "A book",
        answer: 3,
    },
    {
        question:
            "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but I need water to live. What am I?",
        choice1: "Fire",
        choice2: "A plant",
        choice3: "Ice",
        choice4: "A rock",
        answer: 1,
    },

    {
        question:
            "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        choice1: "A bird",
        choice2: "A plant",
        choice3: "An echo",
        choice4: "A ghost",
        answer: 3,
    },
    {
        question: "What can be broken but is never held?",
        choice1: "A heart",
        choice2: "An egg",
        choice3: "A promise",
        choice4: "A secret",
        answer: 3,
    },
    {
        question: " The more you take, the more you leave behind. What am I?",
        choice1: "Footsteps",
        choice2: "Money",
        choice3: "Time",
        choice4: "Love",
        answer: 1,
    },
    {
        question: "What has a heart that doesn't beat?",
        choice1: "A tree",
        choice2: "A clock",
        choice3: "A painting",
        choice4: "A stone",
        answer: 3,
    },
    {
        question:
            "I am always hungry, I must always be fed .The finger I touch, will soon turn red. What am I?",
        choice1: "Poison",
        choice2: "Water",
        choice3: "Blood",
        choice4: "Fire",
        answer: 4,
    },

    {
        question:
            "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but I need water to live. What am I?",
        choice1: "Fire",
        choice2: "A plant",
        choice3: "Ice",
        choice4: "A rock",
        answer: 2,
    },
];

/**
 * Constants set the point value of each answer and the
 * maximum number of questions that the player will answer.
 */
//Here you can choose how many points a correct answer will get
const CORRECT_BONUS = 1;
//Number of Riddle Questions Setting
const MAX_QUESTIONS = 10;
//Questions score and counter function

/**
 * The startGame() initializes the game by setting
 * the score and question counter to 0 and loading all the
 * questions from the question file
 */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

/**
 * The getNewQuestion() randomly selects a question
 * from the list of available questions and displays it on
 * the screen. It also updates the progress bar and counter.
 */
getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //Go to the end.html page after quiz is completed
        return window.location.assign("./end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

/**The code block controls the animation for feedback, 
 * the Head-Up Display (HUD), and how questions and scores are displayed.
 */
choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

//The function that updates correct answered display
incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

//The startGame function is called to begin the game.
startGame();
