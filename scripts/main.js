// variables to count the scoring

let counterPlayer = 0;
let counterComputer = 0;

// function general for Round

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("Player wins");
    return counterPlayer++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("Computer wins");
    return counterComputer++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("Player wins");
    return counterPlayer++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("Computer wins");
    return counterComputer++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("Player wins");
    return counterPlayer++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("Computer wins");
    return counterComputer;
  } else {
    alert("Draw");
  }
}
// functions for playRound selections - Player and Computer

function outputPlayer() {
  return prompt("rock, paper, scissors");
}

function outputComputer() {
  Math.random();
  if (Math.random() <= 0.33) {
    return "rock";
  } else if (Math.random() > 0.33 && Math.random() <= 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}

// function game including playRound function

function game() {
  playRound(outputPlayer(), outputComputer());
}

// call 5 rounds

game();
game();
game();
game();
game();

// scoring of the final result

if (counterPlayer > counterComputer) {
  alert("Player wins the game");
} else if (counterPlayer < counterComputer) {
  alert("Computer wins the game");
} else {
  alert("Game draw");
}


