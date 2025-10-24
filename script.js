// Returns a random choice “rock”, “paper” or “scissor”.
function getComputerChoice(computerChoice) {

    // Generate a random value from 0 to 2.
    let randomValue = Math.floor(Math.random() * 3);

    if (randomValue === 0) {
        return computerChoice = "rock";
    } else if (randomValue === 1) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissor";
    }
}

const playBtn = document.getElementById("playBtn");
const gameContainer = document.querySelector(".game-container");

playBtn.addEventListener("click", () => {
    gameContainer.style.display = "block";
    playBtn.style.display = "none";
});

let humanChoice = "";

// Get button value
const rockBtn = document.getElementById("rockBtn").addEventListener("click", () => {
    humanChoice = "rock";
    playRound(getComputerChoice(), humanChoice);
});

const paperBtn = document.getElementById("paperBtn").addEventListener("click", () => {
    humanChoice = "paper";
    playRound(getComputerChoice(), humanChoice);
});

const scissor = document.getElementById("scissorBtn").addEventListener("click", () => {
    humanChoice = "scissor";
    playRound(getComputerChoice(), humanChoice);
});

const score = document.querySelector(".score");
let computerScore = 0;
let humanScore = 0;

const displayHumanChoice = document.querySelector(".human-choice");
const displayComputerChoice = document.querySelector(".computer-choice");

// Starts a round
function playRound(computerChoice, humanChoice) {

    console.log("You chose " + humanChoice.toUpperCase() + " against " + computerChoice + ".")

    // Looks for the winner of the round
    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1;
        console.log("You win paper wins against rock!");
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
        computerScore += 1;
        console.log("You lose and the scissor break!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1;
        console.log("You lose rock loses against paper!");
    } else if (computerChoice === "paper" && humanChoice === "scissor") {
        humanScore += 1;
        console.log("You win scissor wins against paper!");
    } else if (computerChoice === "scissor" && humanChoice === "rock") {
        humanScore += 1;
        console.log("You win rock wins against scissor");
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
        computerScore += 1;
        console.log("You lose paper loses against scissor")
    } else if (computerChoice === humanChoice) {
        console.log("Draw, no one wins");
    }

    score.textContent = `${humanScore} - ${computerScore}`;
    console.log("Score: " + humanScore + " - " + computerScore)

    if (humanChoice === "rock") {
        displayHumanChoice.textContent = "🪨";
    } else if (humanChoice === "paper") {
        displayHumanChoice.textContent = "🧻";
    } else if (humanChoice === "scissor") {
        displayHumanChoice.textContent = "✂️";
    }

    if (computerChoice === "rock") {
        displayComputerChoice.textContent = "🪨";
    } else if (computerChoice === "paper") {
        displayComputerChoice.textContent = "🧻";
    } else if (computerChoice === "scissor") {
        displayComputerChoice.textContent = "✂️";
    }

    if (humanScore >= 4) {
        alert("You won!");
        gameContainer.style.display = "none";
        restartBtn.style.display = "block";
    } else if (computerScore >= 4) {
        alert("You lose!");
        gameContainer.style.display = "none";
        restartBtn.style.display = "block";
    }
}

const restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", () => {
    window.location.reload();
});
restartBtn.style.display = "none";















