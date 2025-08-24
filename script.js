// Function randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(randomOutput) {

    let randomValue = Math.floor(Math.random() * 3);

    if (randomValue === 0) {
        randomOutput = "rock";
    } else if (randomValue === 1) {
        randomOutput = "paper";
    } else {
        randomOutput = "scissors"
    }
}

