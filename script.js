function computerPlay() {
    return Math.floor(Math.random() * 3) + 1
}

// The following variables are to keep track of the scores in the game

let x = 0;
let y = 0;

// In the function playRound(playerSelection, computerSelection) 1 stands for ROCK, 2 for PAPER and 3 for SCISSORS!

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == 1) {
        result = "Tie";
        return result;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == 2) {
        result = "You lose! Paper beats Rock";
        y++;
        return result;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == 3) {
        result = "You win! Rock beats Scissors";
        x++;
        return result;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == 1) {
        result = "You win! Paper beats Rock";
        x++;
        return result;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == 2) {
        result = "Tie";
        return result;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == 3) {
        result = "You lose! Scissors beats Paper";
        y++;
        return result;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == 1) {
        result = "You lose! Rock beats Scissors";
        y++;
        return result;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == 2) {
        result = "You win! Scissors beats Paper";
        x++;
        return result;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == 3) {
        result = "Tie";
        return result;
    }
    else {
        result = "Not a valid option";
        return result;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose: ROCK, PAPER or SCISSORS");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
console.log(x + " vs " + y);