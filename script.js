let computerScore = 0;
let humanScore = 0;

// Returns a random choice “rock”, “paper” or “scissors”.
function getComputerChoice(computerChoice) {

    // Generate a random value from 0 to 2.
    let randomValue = Math.floor(Math.random() * 3);
    
    if (randomValue === 0) {
        return computerChoice = "rock";
    } else if (randomValue === 1) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
    
}

// Gets the input of the human
function getHumanChoice(humanChoice) {
    return humanChoice = prompt("Choose rock, paper or scissors", "");
}

function playRound() {

    if (getComputerChoice() === "rock" && getHumanChoice() === "paper") {
        console.log("You win paper wins against rock!");
    } else if (getComputerChoice() === "rock" && getHumanChoice() === "scissors") {
        console.log("You lose and the scissors break!");
    } else if (getComputerChoice() === "paper" && getHumanChoice() === "rock") {
        console.log("You lose rock loses against paper!");
    } else if (getComputerChoice() === "paper" && getHumanChoice() === "scissors") {
        console.log("You win scissors wins against paper!");
    } else if (getComputerChoice() === "scissors" && getHumanChoice() === "rock") {
        console.log("You win rock wins against scissors");
    } else if (getComputerChoice() === "scissors" && getHumanChoice() === "paper") {
        console.log("You lose paper loses against scissors")
    } else if (getComputerChoice() === getHumanChoice()) {
        console.log("Draw, no one wins")
    }
}

// console.log("You played " + getHumanChoice() + " against " + getComputerChoice());