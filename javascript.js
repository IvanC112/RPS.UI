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

function getPlayerChoice() {
    let choice = prompt("Please select your choice!");

    if (choice === null){
        return "You cancled the game";
    }
    else {

    choice = choice.toLowerCase();

    while (choice !== "rock" && choice!== "paper" && choice != "scissors"){
        choice = prompt("Please select your choice!").toLowerCase();
    }

    switch (choice) {
        case "rock":
            return choice;
            break;
        case "paper":
            return choice;
            break;
        case "scissors":
            return choice;
            break;
    }
}

}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("This round was a tie, try again!");
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        return singleRound(playerSelection, computerSelection);
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
    else if (playerSelection === "paper" && playerSelection === "scissors") {
        computerWins+=1;
        return "You Lose! Scissors beat Paper";
    }
    else {
        playerWins+=1;
        return "You Win! Paper beats Rock";
    }
 }

 function game() {

    for(let i = 0; i < 5; ++i) {

        let playerChoice = getPlayerChoice();

        if(playerChoice === "You cancled the game") {
            console.log("You canceled the game");
            break;
        }

        let computerChoice = getComputerChoice();

        console.log(singleRound(playerChoice, computerChoice));

        if (playerWins === 3) {
            console.log(`You won ${playerWins} times out of 5!`);
            break;
        }
        else if (computerWins === 3) {
            console.log(`Computer dominated, it won ${computerWins} times out of 5! `);
            break;
        }
    }
 }
 
game();