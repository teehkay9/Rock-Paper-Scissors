// global variables
let userScore = 0;
let computerScore = 0;

const userScoreNode = document.querySelector("#user");
const computerScoreNode = document.querySelector("#computer");

let userChoice = null;
let computerChoice = null;

// functions
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const random_choice = Math.floor(Math.random() * 3);
  return choices[random_choice];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return null;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissor") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissor" && computerChoice === "Paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

function updateScore(winner) {
  if (winner === "user") {
    userScore += 1;
    userScoreNode.textContent = `User Score: ${userScore}`;
  } else if (winner === "computer") {
    computerScore += 1;
    computerScoreNode.textContent = `Computer Score: ${computerScore}`;
  } else return;
}

function shouldEndGame(userScore, computerScore) {
  if (userScore >= 5 || computerScore >= 5) {
    return true;
  }
  return false;
}

function handleButtonClick(event) {
  let target = event.target;

  if (target.tagName.toLowerCase() === "button") {
    const parentLi = target.parentElement;

    switch (parentLi.id) {
      case "rock":
        userChoice = "Rock";
        break;
      case "paper":
        userChoice = "Paper";
        break;
      case "scissor":
        userChoice = "Scissor";
        break;
    }
  }

  // get computer choice
  computerChoice = getComputerChoice();

  // play a round
  let winner = playRound(userChoice, computerChoice);

  if (winner) {
    console.log(`The user chooses: ${userChoice}, the computer chooses ${computerChoice}. The winner is ${winner}!`);
  } else {
    console.log(`The user chooses: ${userChoice}, the computer chooses ${computerChoice}. It's a draw!`);
  }

  updateScore(winner);

  if (shouldEndGame(userScore, computerScore)) {
    // if game ends, create a new div to display final score, winner and reset global variables
    const resultDiv = document.createElement("h2");
    resultDiv.textContent = `The final winner is ${winner.toUpperCase()}`;

    const container = document.querySelector("body");
    container.appendChild(resultDiv);

    // Delay the prompt to ensure the DOM updates are applied
    setTimeout(() => {
      const playNewRound = prompt("If you want to play a new game, type yes.");
      if (playNewRound.toLowerCase() === "yes" || playNewRound.toLowerCase() === "y") {
        userScore = 0;
        computerScore = 0;

        userScoreNode.textContent = `User Score: ${userScore}`;
        computerScoreNode.textContent = `Computer Score: ${computerScore}`;

        resultDiv.remove();
        playGame();
      }
    }, 100); // Adjust the delay as needed
  }
}

function playGame() {
  // button event handler
  let ulButton = document.querySelector(".ul-buttons");

  // Remove any existing event listeners
  ulButton.removeEventListener("click", handleButtonClick);
  ulButton.addEventListener("click", handleButtonClick);
}

playGame();
