function getComputerChoice(){  // make a random choice generator that returns 1,2,3
  let randomChoice = Math.floor((Math.random()*3)+1)
  if (randomChoice ==1){       // assign 1=rock 2=paper 3=scissors 
    return 'rock';
  } 
  else if (randomChoice == 2){
    return 'paper'
  }
  else return 'scissors'
}


let roundPoints = 0;

function playOneRound(playerSelection,computerSelection){ // play one round and return
  if(playerSelection == computerSelection){           // the winner and why. Also added 
    roundPoints = 2;
    return "It's a Tie!";                             // a variable to use later to add up
  }                                                   // the score. 
  else if(playerSelection == 'rock' && computerSelection == 'scissors') {
    roundPoints = 1;
    return 'You Win! Rock beats Scissors.'
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    roundPoints = 1;
    return 'You Win! Scissors beats Paper.'
  } 
  else if (playerSelection == 'paper' && computerSelection == 'rock'){
    roundPoints = 1;
    return 'You Win! Paper beats Rock.'
  } 
  else if(playerSelection == 'rock' && computerSelection == 'paper') {
    roundPoints = 0;
    return 'You Lose! Paper beats Rock.'
  }
  else if(playerSelection == 'paper' && computerSelection == 'scissors') {
    roundPoints = 0;
    return 'You Lose! Scissors beats Paper.'
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    roundPoints = 0;
    return 'You Lose! Rock beats Scissors.'
  }
  else {
    return 'error';
  }
}  



const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const roundCounter = document.querySelector('h2');
const score = document.querySelector('#score');
const end = document.querySelector('#end');

let playerPoints = 0;
let compPoints = 0;
let roundNumber = 1;

buttons.forEach((button) =>{
  button.addEventListener('click', function(e) {
    if(playerPoints < 5 && compPoints < 5){
      roundCounter.textContent = 'Round ' + roundNumber;
      results.textContent = playOneRound(e.target.id,getComputerChoice());
      if(roundPoints==1){
        playerPoints++;
      }
      else if(roundPoints==0){
        compPoints++;
      }
      score.textContent = 'Player: '+ playerPoints + ' | Computer: ' + compPoints;

      roundNumber++;
    }

    if(playerPoints == 5){
      end.textContent = 'Congratulations, You won!';
    }

    if(compPoints == 5){
      end.textContent = 'You lost!';
    }
   
  })
})

