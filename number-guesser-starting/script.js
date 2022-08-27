let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target) => {
    const humanDifference = Math.abs(human - target);
    const computerDifference = Math.abs(computer - target);
    if (computerDifference < humanDifference) {
        return false;
    } else {
        return true;
    }
} 

const updateScore = winner => {
    if (winner === 'human'){
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore ++;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}

const alert = () => {
    if (humanGuessInput > 9 || humanGuessInput < 0) {
        console.log('Try a number between 0 and 9.')
    }
}


//Test Scripts
/*
updateScore('human');
advanceRound();

console.log(generateTarget());
console.log(compareGuesses(3, 7, generateTarget()));
console.log(computerScore);
console.log(humanScore);
console.log(currentRoundNumber);
*/