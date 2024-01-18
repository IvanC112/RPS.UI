let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);

    switch (random) {
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This round was a tie, try again!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins+=1;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins+=1;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins+=1;
        return "You Win! Scissors Beat Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins+=1;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins+=1;
        return "You Lose! Scissors beat Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins+=1;
        return "You Win! Paper beats Rock";
    }

 }

 function handleClick(e) {

    const visualplayerWins = document.querySelector('#playerWins');
    const visualcomputerWins = document.querySelector('#computerWins');
    const outputResult = document.querySelector('.outputMessage');

    const roundWinner = singleRound(e.target.alt, getComputerChoice());
    
    outputResult.textContent = roundWinner;

    if (roundWinner.includes('You Win!')) {
        visualplayerWins.textContent++;
    }
    else if (roundWinner.includes('You Lose!')) {
        visualcomputerWins.textContent++;
    }

    if (playerWins === 5) {
        outputResult.textContent = "Cogratulations you won against the machine in a match of first to 5! To play again, please press the reset button!";

        const disableButtons = document.querySelectorAll('.bottom-section input');

        disableButtons.forEach((button)=> {
            button.disabled = true;
        })
        
    }
    else if (computerWins === 5) {
        outputResult.textContent = "You failed us all, the machine dominated you! To get your revent, please press the reset button";

        const disableButtons = document.querySelectorAll('.bottom-section input');

        disableButtons.forEach((button)=> {
            button.disabled = true;
        })
    }

 }

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('.reset');

rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorsButton.addEventListener('click', handleClick);

resetButton.addEventListener('click', ()=> {
    playerWins = 0;
    computerWins = 0;

    const visualplayerWins = document.querySelector('#playerWins');
    const visualcomputerWins = document.querySelector('#computerWins');
    const outputResult = document.querySelector('.outputMessage');

    visualplayerWins.textContent = 0;
    visualcomputerWins.textContent = 0;
    outputResult.textContent = '';

})

