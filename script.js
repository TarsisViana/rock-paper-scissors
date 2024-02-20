function getComputerChoice(){  // make a random choice generator that returns 1,2,3
  let randomChoice = Math.floor((Math.random()*3)+1)
  if (randomChoice ==1){       // assign 1=rock 2=paper 3=scissors 
    return 'Rock';
  } 
  else if (randomChoice == 2){
    return 'Paper'
  }
  else return 'Scissors'
}


function getPlayerChoice(){  // funcion to ask and return the player choice
  let choice = '';
  let check = false;
  while(!check){ // Loop to ensure that the player selects a valid option, if not asks for another try.

    choice = (prompt('Make your choice, type: Rock, Paper or Scissors')).toLowerCase();
    if( choice == 'rock' || choice == 'paper' || choice == 'scissors') {
      check = true;
    } 
    else {
      alert('Invalid choice, please try again.');
    }
  }  
  return choice;
}

let roundPoints = 0;



function oneRound(playerSelection,computerSelection){ // play one round and return who's
  if(playerSelection == computerSelection){           // the winner and why. Also added 
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
  else {
    roundPoints = 0;
    return 'You Lose! Rock beats Scissors.'
  }
}  





