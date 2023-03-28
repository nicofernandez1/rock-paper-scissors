let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let object = ["Rock", "Paper", "Scissors"];
    return object[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    
    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        if (playerScore === 5 || computerScore === 5) {
            return;
        } else if (playerScore < 4) {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        } else if (playerScore === 4) {
            result = "You Won the Game!";
            playerScore += 1;
        }
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        if (playerScore === 5 || computerScore === 5) {
            return;
        } else if (computerScore < 4) {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScore += 1;
        } else if (computerScore === 4) {
            result = "You Lost the Game!"
            computerScore += 1;
        }
    } else if (playerSelection === computerSelection) {
        if (playerScore === 5 || computerScore === 5) {
            return;
        } else if (playerScore < 5 && computerScore < 5) {
            result = "Tie!";
        }
    }
    results.textContent = `${result}. Player: ${playerScore} - Computer: ${computerScore}`;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');


rock.addEventListener('click', function() {
    playRound("Rock", getComputerChoice());
});
paper.addEventListener('click', function() {
    playRound("Paper", getComputerChoice());
});
scissors.addEventListener('click', function() {
    playRound("Scissors", getComputerChoice());
});