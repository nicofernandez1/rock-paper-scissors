const playerSelection = prompt("Rock, Paper or Scissors?");
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);

function getComputerChoice() {
    const object = ["Rock", "Paper", "Scissors"];
    return object[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("Tied Game! Rock vs Rock");
        } else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
        } else if (computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors");
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
        } else if (computerSelection == "Paper") {
            console.log("Tied Game! Paper vs Paper");
        } else if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beats Paper");
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
        } else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
        } else if (computerSelection == "Scissors") {
            console.log("Tied Game! Scissors vs Scissors");
        }
    }
}
console.log(playRound(playerSelection, computerSelection));