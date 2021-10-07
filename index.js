

//Create an array for the 3 selections possible Rock, Paper and Scissors
const answerArray = ['Rock', 'Paper', 'Scissors']


//Computer picks random element from Rock, Paper or Scissors
    function computerPlay() {
        const computerPick = Math.floor(Math.random() * answerArray.length);
        const computerPickUpper = answerArray[computerPick].toUpperCase();
        console.log(computerPickUpper);
        return computerPickUpper;
    }

 //User chooses from Rock, Paper or Scissors

 //Values are compared to see who wins
  function gameResult(playerSelection, computerSelection) {
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return "You win! Scissors beats Paper!"
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        return "You lose! Rock beats Scissors!"
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        return "You lose! Paper beats Rock!"
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        return "You win! Paper beats Rock!"
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        return "You lose! Scissors beats Paper!"
    }   else {
        return "You both chose " + playerSelection + " so its a draw!"
        }
    }

    //Function test of game result here
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(gameResult(playerSelection, computerSelection));

//Create function game so that its a best of 5
function game(gameResult) {
    
}
  