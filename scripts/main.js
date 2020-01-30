// variables to count the scoring

let playerScore = 0;
let computerScore = 0;

// function general for Round

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    alert("Computer Wins");
    return computerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("Player Wins");
    return playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("Player Wins");
    return playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("Computer Wins");
    return computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("Player Wins");
    return playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("Computer Wins");
    return computerScore++;
  } else {
    alert("Draw");
  }
}
// functions for playRound selections - Player and Computer

function playerChoose() {
 return prompt("rock, paper, scissors").toLowerCase();
}

function computerChoose() {
  Math.random();
  if (Math.random() <= 0.33) {
    return "rock";
  } else if (Math.random() < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function game including playRound function

function game() {
  return playRound(playerChoose(), computerChoose());
}

// call 5 rounds
game();
game();
game();
game();
game();


// scoring of the final result

if (playerScore > computerScore) {
  console.log('Player Wins the game');
 } else if (playerScore < computerScore) {
    console.log('Computer Wins the game');
 } else {
  console.log('Game finished in a Draw');
 }

console.log(`PLAYER: ${playerScore} COMPUTER: ${computerScore}`);