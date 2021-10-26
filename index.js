
 //Create an array for the 3 selections possible Rock, Paper and Scissors
const answerArray = ['Rock', 'Paper', 'Scissors']


 //Computer picks random element from Rock, Paper or Scissors
function computerPlay() {
    const computerPick = Math.floor(Math.random() * answerArray.length);
    const computerPickUpper = answerArray[computerPick].toUpperCase();
    
    return computerPickUpper;
}

 //User chooses from Rock, Paper or Scissors

 //Put comp answer into variable for Playround func
let computerSelection = computerPlay();
let playerChoice = "";
let playerChoiceUpper = playerChoice.toUpperCase();
 //Values are compared to see who wins
  function playRound(playerChoiceUpper, computerSelection) {
    if (playerChoiceUpper === 'SCISSORS' && computerSelection === 'PAPER') {
        return console.log("You win! Scissors beats Paper!")
    } else if (playerChoiceUpper === 'SCISSORS' && computerSelection === 'ROCK') {
        return console.log("You lose! Rock beats Scissors!")
    } else if (playerChoiceUpper === 'ROCK' && computerSelection === 'SCISSORS') {
        return console.log("You win! Rock beats Scissors")
    } else if (playerChoiceUpper === 'ROCK' && computerSelection === 'PAPER') {
        return console.log("You lose! Paper beats Rock!")
    } else if (playerChoiceUpper === 'PAPER' && computerSelection === 'ROCK') {
        return console.log("You win! Paper beats Rock!")
    } else if (playerChoiceUpper === 'PAPER' && computerSelection === 'SCISSORS') {
        return console.log("You lose! Scissors beats Paper!")
    } else {
        return console.log("You both chose " + playerChoiceUpper + " so its a draw!")
        }
    }






// add functionality to buttons to make UI
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerChoice = "ROCK";
    playRound(playerChoice,computerPlay());
    //alert("You clicked Rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerChoice = "PAPER";
    playRound(playerChoice, computerPlay());
    //alert("You clicked Paper");
});
    

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerChoice = "SCISSORS";
    playRound(playerChoice, computerPlay());
    //alert("You clicked Scissors");
});
    

