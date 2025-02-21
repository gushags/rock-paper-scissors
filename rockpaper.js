// Rock, Paper, Scissors Game
// The same game you play with your hands,
// now more complicated.

// INITIALIZE a function called getComputerChoice
// which will be the computer's side of the game
function getComputerChoice() {
  // CREATE computerChoice to store the value of rock, paper or scissors
  let computerChoice;

  // GENERATE a random number and use it to set a value of one, two or three
  let rand = Math.random;

  // SET value of computerChoice
  if (rand <= 0.333) {
    computerChoice = "ROCK";
  } else if (rand > 0.333 && rand < 0.666) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
  // RETURN computerChoice to user
  return computerChoice;
}

// CREATE a new function named getHumanChoice.
function getHumanChoice() {
  // PROMPT user to enter rock, paper or scissors and save to variable humanChoice
  let humanChoice = prompt(
    `Welcome to Rock Paper Scissors!
    Please enter your choice.`
  );

  // TEST that the humanChoice is valid
  humanChoice = humanChoice.toUpperCase();
  if (
    !(
      humanChoice == "ROCK" ||
      humanChoice == "PAPER" ||
      humanChoice == "SCISSORS"
    )
  ) {
    // IF humanChoice is invalid, try again
    alert("Please make a valid choice. Thanks!");
    getHumanChoice();
  }
  return humanChoice;
}

// CREATE playGame function that runs 5 rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    // CREATE a new function named playRound which takes params
    // humanChoice and computerChoice.
    // CREATE two new variables named humanScore and
    // computerScore.
    // INITIALIZE those variables with the value of 0.

    playRound(getHumanChoice(), getComputerChoice());
    function playRound(humanChoice, computerChoice) {
      // In case of a tie, have the human choose again
      if (humanChoice == computerChoice) {
        alert(`${humanChoice} ties ${computerChoice}!
      Please choose again.`);
        playRound(getHumanChoice(), getComputerChoice);

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

    // Log scores after each round
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
}

playGame();
