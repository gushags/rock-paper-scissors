// Rock, Paper, Scissors Game
// The same game you play with your hands,
// now more complicated.

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;

  // GENERATE a random number and use it to set comp choice
  let rand = Math.random();
  console.log(rand);

  // SET value of computerChoice
  if (rand <= 0.333) {
    computerChoice = "ROCK";
  } else if (rand > 0.333 && rand < 0.666) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  // In case of a tie, have the human choose again
  if (humanChoice == computerChoice) {
    alert(`${humanChoice} ties ${computerChoice}!
      Please choose again.`);

    // IF human is rock, rock loses to paper, beats scissors
    // INCREMENT appropriate score
  } else if (humanChoice == "ROCK") {
    if (computerChoice == "PAPER") {
      console.log("Paper beats Rock. You lost.");
      computerScore++;
    } else {
      console.log("Rock beats Scissors. You WON!");
      humanScore++;
    }

    // IF human is paper, paper loses to scissors, beats rock
    // INCREMENT appropriate score
  } else if (humanChoice == "PAPER") {
    if (computerChoice == "SCISSORS") {
      console.log("Scissors beats Paper. You lost.");
      computerScore++;
    } else {
      console.log("Paper beats Rock. You WON!");
      humanScore++;
    }
    // Human is scissors
  } else {
    if (computerChoice == "ROCK") {
      console.log("Rock beats Scissors. You lost.");
      computerScore++;
    } else {
      console.log("Scissors beats Paper. You WON!");
      humanScore++;
    }
  }
}

// Create event listeners on three buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  console.log("Player clicked rock.");
  playRound("ROCK", getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  console.log("Player clicked paper.");
  playRound("PAPER", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  console.log("Player clicked scissors.");
  playRound("SCISSORS", getComputerChoice());
});
