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
