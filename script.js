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
  else {
    roundPoints = 0;
    return 'You Lose! Rock beats Scissors.'
  }
}  
let roundPoints = 0;

function playGame(){

  let playerPoints = 0;
  let compPoints = 0;
  let roundNumber = 1;

  for(let i = 0; i < 5; i++){
    console.log('Round ' + roundNumber)
    roundNumber++;
    console.log(playOneRound(getPlayerChoice(),getComputerChoice()));
    console.log(roundPoints);
    if(roundPoints==1){
      playerPoints++;
    }
    else if(roundPoints==0){
      compPoints++;
    }else{
      i--;
    }
    console.log('Player: '+ playerPoints + ` | Computer: `+ compPoints);
  } 

  let finalScore = 'Final score: Player - ' + playerPoints + ' Computer - ' + compPoints;

  if(playerPoints > compPoints){
    console.log('You Won! Congratulations!');
    console.log(finalScore);
  }
  else{
    console.log('You Lost!');
    console.log(finalScore);
  }
}

playGame();


