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
    return document.getElementById('user').innerHTML = userScore;
}

 //Values are compared to see who wins
  function playRound(playerChoiceUpper, computerSelection) {
    if (playerChoiceUpper === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScoreUpdate()
        console.log("Userscore is:" + document.getElementById('user').innerHTML);
        
        return console.log("You win! Scissors beats Paper!")
    } else if (playerChoiceUpper === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScoreUpdate();
        return console.log("You lose! Rock beats Scissors!")
    } else if (playerChoiceUpper === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScoreUpdate()
        console.log("Userscore is:" + document.getElementById('user').innerHTML);
        
        return console.log("You win! Rock beats Scissors")
    } else if (playerChoiceUpper === 'ROCK' && computerSelection === 'PAPER') {
        computerScoreUpdate();
        return console.log("You lose! Paper beats Rock!")
    } else if (playerChoiceUpper === 'PAPER' && computerSelection === 'ROCK') {
        playerScoreUpdate()
        console.log("Userscore is:" + document.getElementById('user').innerHTML);
        
        return console.log("You win! Paper beats Rock!")
    } else if (playerChoiceUpper === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScoreUpdate();
        return console.log("You lose! Scissors beats Paper!")
    } else {
        return console.log("You both chose " + playerChoiceUpper + " so its a draw!")
        }
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
    

