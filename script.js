let computerScore = 0;
let humanScore = 0;

// Function randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(computerChoice) {

    // Generate a random value from 0 to 2.
    let randomValue = Math.floor(Math.random() * 3);

    if (randomValue === 0) {
        computerChoice = "rock";
    } else if (randomValue === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // console.log(computerChoice, randomValue)
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Choose rock, paper or scissors", "");
    console.log(humanChoice);
}

// getHumanChoice()