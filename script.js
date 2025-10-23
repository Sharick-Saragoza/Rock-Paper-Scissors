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
// function getHumanChoice(humanChoice) {
//     return humanChoice = prompt("Choose rock, paper or scissors", "").toLowerCase();
// }

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    // Starts a round
    function playRound(computerChoice, humanChoice) {

        console.log("You chose " + humanChoice.toUpperCase() + " against " + computerChoice + ".")

        // Looks for the winner of the round
        if (computerChoice === "rock" && humanChoice === "paper") {
            humanScore += 1;
            console.log("You win paper wins against rock!");
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore += 1;
            console.log("You lose and the scissors break!");
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore += 1;
            console.log("You lose rock loses against paper!");
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            humanScore += 1;
            console.log("You win scissors wins against paper!");
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            humanScore += 1;
            console.log("You win rock wins against scissors");
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore += 1;
            console.log("You lose paper loses against scissors")
        } else if (computerChoice === humanChoice) {
            console.log("Draw, no one wins");
        }

        console.log("Score: " + humanScore + " - " + computerScore)
    }

    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())

    // Looks for the winner based on the score
    if (computerScore < humanScore) {
        console.log("You win " + "score: " + humanScore + " - " + computerScore)
    } else if (computerScore > humanScore) {
        console.log("You lose " + "score: " + humanScore + " - " + computerScore)
    } else if (computerScore === humanScore) {
        console.log("It's a tie no one wins.")
    }


}

playGame();