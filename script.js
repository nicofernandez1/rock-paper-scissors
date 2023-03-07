let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let object = ["rock", "paper", "scissors"];
    return object[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    
    if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        result = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
        playerScore += 1;
    } else if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"
        ) {
        result = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        computerScore += 1;
    } else {
        result = "Tie!"
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    if (playerScore > computerScore) {
        return "You Won the Game!";
    } else if (computerScore > playerScore) {
        return "You Lost the Game!";
    } else {
        return "It's a Tie!";
    }
}

console.log(game());
console.log(playerScore);
console.log(computerScore);