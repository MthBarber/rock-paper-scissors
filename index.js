const newDiv = document.createElement("div")
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

//put html elements into variables so they can be incremented by PlayRound function
function computerScoreUpdate(){
    let computerScore = document.getElementById('computer');
    let computerNumber = computerScore.innerHTML;
    computerNumber++;
    computerScore = computerNumber;
    return document.getElementById('computer').innerHTML = computerScore;
}
function playerScoreUpdate(){
    let userScore = document.getElementById('user');
    let userNumber = userScore.innerHTML;
    userNumber++;
    userScore = userNumber;
    console.log(typeof userScore);
    return document.getElementById('user').innerHTML = userScore;
}

 //Values are compared to see who wins
  function playRound(playerChoiceUpper, computerSelection) {
    if (playerChoiceUpper === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScoreUpdate();
        outcome();     
        return document.getElementById('game').innerHTML = "You win! Scissors beats Paper!";
    } else if (playerChoiceUpper === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScoreUpdate();
        outcome();
        return document.getElementById('game').innerHTML = "You lose! Rock beats Scissors!";
    } else if (playerChoiceUpper === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScoreUpdate();
        outcome();        
        return document.getElementById('game').innerHTML = "You win! Rock beats Scissors";
    } else if (playerChoiceUpper === 'ROCK' && computerSelection === 'PAPER') {
        computerScoreUpdate();
        outcome();
        return document.getElementById('game').innerHTML = "You lose! Paper beats Rock!";
    } else if (playerChoiceUpper === 'PAPER' && computerSelection === 'ROCK') {
        playerScoreUpdate();
        outcome();        
        return document.getElementById('game').innerHTML = "You win! Paper beats Rock!"
    } else if (playerChoiceUpper === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScoreUpdate();
        outcome();
        return document.getElementById('game').innerHTML = "You lose! Scissors beats Paper!";
    } else {
        return document.getElementById('game').innerHTML = "You both chose " + playerChoiceUpper + " so its a draw!";
        }
    }

    //function to declare winner
    function outcome() {
        if (document.getElementById('user').innerHTML == 5){
            document.getElementById('outcome').innerHTML = "You win! As you won 5 games!";
        }else if (document.getElementById('computer').innerHTML == 5) {
            document.getElementById('outcome').innerHTML = "You lose! As the computer won 5 games!"
        }else
            return
    }




// add functionality to buttons to make UI
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerChoice = "Rock";
    let playerChoiceUpper = playerChoice.toUpperCase();
    playRound(playerChoiceUpper,computerPlay());
    //alert("You clicked Rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerChoice = "Paper";
    let playerChoiceUpper = playerChoice.toUpperCase();
    playRound(playerChoiceUpper, computerPlay());
    //alert("You clicked Paper");
});
    

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerChoice = "Scissors";
    let playerChoiceUpper = playerChoice.toUpperCase();
    playRound(playerChoiceUpper, computerPlay());
    //alert("You clicked Scissors");
});
    

