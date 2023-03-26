let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let object = ["Rock", "Paper", "Scissors"];
    return object[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    
    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
    } else {
        result = "Tie!";
    }
    div.textContent = `${result}. Player: ${playerScore}, Computer: ${computerScore}`;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const div = document.querySelector('div');


rock.addEventListener('click', function() {
    playRound("Rock", getComputerChoice());
});
paper.addEventListener('click', function() {
    playRound("Paper", getComputerChoice());
});
scissors.addEventListener('click', function() {
    playRound("Scissors", getComputerChoice());
});