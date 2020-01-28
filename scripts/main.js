// function playRound(playerSelection, computerSelection) {
// 	// your code here!
// }

// const playerSelection = 'rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))
let counterPlayer = 0;
let counterComputer = 0;

// First Round

function playRound (playerSelection, computerSelection) {
 
  if (playerSelection == "scissors" && computerSelection == "paper") {
    alert('Player wins');
    return counterPlayer++;
  } else if (playerSelection == "scissors" && computerSelection == 'rock' ) {
    alert('Computer wins');
    return counterComputer++;
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    alert('Player wins');
    return counterPlayer++;
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert('Computer wins');
    return counterComputer++;
}
else if (playerSelection == "rock" && computerSelection == "scissors") {
  alert('Player wins');
    return counterPlayer++;
}
else if (playerSelection == "rock" && computerSelection == "paper") {
  alert('Computer wins');
    return counterComputer++;
}
else {
  alert('Draw')
}
}

playerSelection = prompt('rock, paper, scissors');
computerSelection = Math.random()
	if (Math.random() <= 0.33) {
		computerSelection = "rock";
	} else if (Math.random() > 0.33 && Math.random() <= 0.66) {
		computerSelection = 'scissors';
	} else {
		computerSelection = "paper";
	}
  

playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(counterPlayer);
console.log(counterComputer);

// Second Round


playerSelection = prompt('rock, paper, scissors');
computerSelection = Math.random()
	if (Math.random() <= 0.33) {
		computerSelection = "rock";
	} else if (Math.random() > 0.33 && Math.random() <= 0.66) {
		computerSelection = 'scissors';
	} else {
		computerSelection = "paper";
	}
  

playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(counterPlayer);
console.log(counterComputer);

// Third Round


playerSelection = prompt('rock, paper, scissors');
computerSelection = Math.random()
	if (Math.random() <= 0.33) {
		computerSelection = "rock";
	} else if (Math.random() > 0.33 && Math.random() <= 0.66) {
		computerSelection = 'scissors';
	} else {
		computerSelection = "paper";
	}
  

playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(counterPlayer);
console.log(counterComputer);

// Fourth Round


playerSelection = prompt('rock, paper, scissors');
computerSelection = Math.random()
	if (Math.random() <= 0.33) {
		computerSelection = "rock";
	} else if (Math.random() > 0.33 && Math.random() <= 0.66) {
		computerSelection = 'scissors';
	} else {
		computerSelection = "paper";
	}
  

playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(counterPlayer);
console.log(counterComputer);

// Fifth Round


playerSelection = prompt('rock, paper, scissors');
computerSelection = Math.random()
	if (Math.random() <= 0.33) {
		computerSelection = "rock";
	} else if (Math.random() > 0.33 && Math.random() <= 0.66) {
		computerSelection = 'scissors';
	} else {
		computerSelection = "paper";
	}
  

playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(counterPlayer);
console.log(counterComputer);



function game(counterPlayer, counterComputer) {
  if (counterPlayer > counterComputer)  {
  alert('Player wins the game');
} else if (counterPlayer < counterComputer) {
  alert('Computer wins the game') 
} else {
  alert('Game draw')
}
}
console.log(game())

