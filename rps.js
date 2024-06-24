console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const random_choice = Math.floor(Math.random() * 3);
  return choices[random_choice];
}

function getHumanChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const humanChoice = Number(prompt("For 'Rock' enter 0, for 'Paper' enter 1 and for 'Scissor' enter 2: "));
  return choices[humanChoice];
}

function playRound(humanChoice, computerChoice) {
  console.log(`Round: ${round}. User score = ${humanScore}, Computer score = ${computerScore}`);
  console.log(`User chooses ${humanChoice}, Computer chooses ${computerChoice}.`);
  if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
    console.log("It's a draw!");
  } else if (
    (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") ||
    (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper")
  ) {
    console.log("User won!");
    humanScore += 1;
  } else {
    console.log("Computer won!");
    computerScore += 1;
  }
  round += 1;
}

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

function getWinner(userScore, computerScore) {
  if (userScore > computerScore) return "User";
  else if (computerScore > userScore) return "Computer";
  else return "It's a draw!";
}

function resetGame() {
  round = 1;
  humanScore = 0;
  computerScore = 0;
}

function startGame() {
  resetGame();
  while (round <= totalRounds) {
    playGame();
  }
}

let round = 1;
let humanScore = 0;
let computerScore = 0;
const totalRounds = 5;

const winner = getWinner(humanScore, computerScore);
console.log(`And the winner is: ${winner}`);

startGame();

if (confirm("Do you want to play again?")) {
  startGame();
}
