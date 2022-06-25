function computerPlay() {
    return Math.floor(Math.random() * 3) + 1
}

// In the function playRound(playerSelection, computerSelection) 1 stands for ROCK, 2 for PAPER and 3 for SCISSORS!

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == 1) {
        result = "Tie";
        return result;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == 2) {
        result = "You lose! Paper beats Rock";
        return result;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == 3) {
        result = "You win! Rock beats Scissors";
        return result;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == 1) {
        result = "You win! Paper beats Rock";
        return result;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == 2) {
        result = "Tie";
        return result;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == 3) {
        result = "You lose! Scissors beats Paper";
        return result;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == 1) {
        result = "You lose! Rock beats Scissors";
        return result;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == 2) {
        result = "You win! Scissors beats Paper";
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

let playerSelection = prompt("Choose: ROCK, PAPER or SCISSORS");
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));