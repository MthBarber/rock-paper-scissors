

 //Create an array for the 3 selections possible Rock, Paper and Scissors
const answerArray = ['Rock', 'Paper', 'Scissors']


 //Computer picks random element from Rock, Paper or Scissors
function computerPlay() {
    const computerPick = Math.floor(Math.random() * answerArray.length);
    const computerPickUpper = answerArray[computerPick].toUpperCase();
    
    return computerPickUpper;
}

 //User chooses from Rock, Paper or Scissors

 //Values are compared to see who wins
  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
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
    } else {
        return "You both chose " + playerSelection + " so its a draw!"
        }
    }

    //Function test of game result here
const playerSelection = 'Rock';
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
//const gameResult = playRound(playerSelection, computerPlay());
//Create function game so that its a best of 5
function game() {
    let computerScore = 0;
    let userScore = 0;
    for (gamesPlayed = 1; gamesPlayed < 6; gamesPlayed++){
        
       //playRound(playerSelection, computerPlay());
        
        
        
        
        if (playRound(playerSelection, computerPlay()).includes("win")) {
            userScore += 1;
            console.log("The result is", playRound(playerSelection, computerPlay()) + " User: " + userScore + " Computer: " + computerScore);           
            //console.log("User: " + userScore + " Computer: " + computerScore);
        } else if (playRound(playerSelection, computerPlay()).includes("lose")) {
            computerScore +=1;
            console.log("The result is", playRound(playerSelection, computerPlay()) + " User: " + userScore + " Computer: " + computerScore);
            //console.log("User: " + userScore + " Computer: " + computerScore);
        } else {
            console.log("It's a draw, User: " + userScore + " Computer: " + computerScore);            
    
        }
        if (gamesPlayed === 5) {
        
            if(userScore > computerScore) {
                return console.log("You win with a score of " + userScore + " : " + computerScore);
            } else if (userScore < computerScore) {
                return console.log("You lose with a score of " + userScore + " : " + computerScore);
            } else {
                return console.log("Its a draw");
            }
        }
    }

    

}
  