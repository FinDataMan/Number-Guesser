let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  return Math.abs(targetNumber - humanGuess) <= Math.abs(targetNumber - computerGuess)
}

const updateScore = (winner) => {
  switch (winner){
    case 'human':
      humanScore ++;
      break;
    case 'computer':
      computerScore ++;
      break;
    default:
      break;
  } 
}

const advanceRound = () => currentRoundNumber ++;