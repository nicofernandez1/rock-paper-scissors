const playerSelection = prompt("Rock, Paper or Scissors?");
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);

function getComputerChoice() {
    const object = ["Rock", "Paper", "Scissors"];
    return object[Math.floor(Math.random() * 3)];
}