function computerPlay() {
    return Math.floor(Math.random() * 3) + 1
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == 1) {
        result = "Tie";
        return result;
    }
    else if (playerSelection == "ROCK" && computerSelection == 2) {
        result = "You lose! Paper beats Rock";
        return result;
    }
    else if (playerSelection == "ROCK" && computerSelection == 3) {
        result = "You win! Rock beats Scissors";
        return result;
    }
    else {
        result = "Not a valid option";
        return result;
    }
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
