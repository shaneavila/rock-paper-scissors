let computer;
let player;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let rand = choices[Math.floor(Math.random()*choices.length)];
  return rand;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLocaleLowerCase();
  let win = `Congratulations, you won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
  let lose = `Sorry, you lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
  if (playerSelection == computerSelection) {
    return "It's a tie! Try again.";
  }
  else if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      player++;
      return `${win}`;
    }
    if (computerSelection == 'paper') {
      computer++;
      return `${lose}`;
    }
  }
  else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      player++;
      return `${win}`;
    }
    if (computerSelection == 'scissors') {
      computer++;
      return `${lose}`;
    }
  }
  else if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
      player++;
      return `${win}`;
    }
    if (computerSelection == 'rock') {
      computer++;
      return `${lose}`;
    }
  }
}

function game() {
  let numOfRounds = 5; //Odd so there's always a winner
  computer = 0;
  player = 0;
  for (let index = 0; index < numOfRounds; index++) {
    let playerSelection = prompt("Choose rock, paper, or scissors.").toLocaleLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
      console.log("Invalid input. Please try again.");
      index--;
    }
    else {
      let round = playRound(playerSelection, computerPlay());
      console.log(round);
      if (round == "It's a tie! Try again.") {
        index--;
      }
    }
  }
  let winner = (player > computer) ?
    () => winner = `You won! Score: Player - ${player}, Computer - ${computer}`:
    () => winner = `You lost! Score: Player - ${player}, Computer - ${computer}`;
  console.log(winner()); 
}