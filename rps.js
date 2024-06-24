console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const random_choice = Math.floor(Math.random() * 3);
  return choices[random_choice];
}
