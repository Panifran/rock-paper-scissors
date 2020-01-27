// function playRound(playerSelection, computerSelection) {
// 	// your code here!
// }

// const playerSelection = 'rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))

let counterPlayer = 0;
let counterComputer = 0;


function playRound1(playerSelection, computerSelection) {
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return counterPlayer++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return counterComputer++;
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    return counterPlayer++;
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
    return counterComputer++;
}
else if (playerSelection == "rock" && computerSelection == "scissors") {
    return counterPlayer++;
}
else if (playerSelection == "rock" && computerSelection == "paper") {
    return counterComputer++;
}
}
// const playerSelection = 'rock';
// const computerSelection = 'paper';
playerSelection = "scissors";
computerSelection = Math.random();

	if (computerSelection < 0.34) {
		computerSelection = "rock";
	} else if (computerSelection < 0.67) {
		computerSelection = "paper";
	} else {
		computerSelection = "scissors";
    }

console.log(playRound1(playerSelection, computerSelection));

console.log(computerSelection);
console.log(`Player: ${counterPlayer} Computer: ${counterComputer}`);
