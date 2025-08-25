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
    return humanChoice =  prompt("Choose rock, paper or scissors", "").toLowerCase();
}


const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// Starts a round
function playRound(computerChoice, humanChoice) {

    // Looks for the winner
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win paper wins against rock!");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose and the scissors break!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose rock loses against paper!");
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win scissors wins against paper!");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win rock wins against scissors");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose paper loses against scissors")
    } else if (computerChoice === humanChoice) {
        console.log("Draw, no one wins");
    }

    console.log("You chose " + humanChoice)
    console.log("The computer chose " + computerChoice)
}


playRound(computerSelection, humanSelection);