
var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log(userInput);
    } else {
        console.log('Error');
    }
}

// getUserChoice('PAper'.toLowerCase());

var getComputerScience = function () {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        console.log('rock');
    } else if (randomNumber === 1) {
        console.log('paper');
    } else if (randomNumber === 2) {
        console.log('scissors');
    }
}
// getComputerScience();

var determineWinner = function (userInput, randomNumber) {
    if (userInput === randomNumber) {
        return "The game was a tie";
    }
    if (userInput === 'rock') {
        if (randomNumber === 'paper') {
            return 'Computer Wins! Paper kills rock';
        } else if (randomNumber = 'scissors') {
            return 'User Wins! Rock kills scissors';
        }
    }
    if (userInput = 'paper') {
        if (random = 'scissors') {
            return 'Computer wins! Scissors cut paper';
        } else if (randomNumber = 'rock') {
            return 'User wins! Paper covers rock';
        }
    }
    if (userInput = 'scissors') {
        if (randomNumber = 'rock') {
            return 'Comupter wins! Rock crushes scissors';
        } else if (randomNumber = 'paper') {
            return 'User wins! Scissors cut paper';
        }
    }
}
       
        
// determineWinner(getUserChoice, getComputerScience);

var playGame = function () {
    userInput = getUserChoice('rock', 'paper', 'scissors');
    randomNumber = getComputerScience();
    console.log(determineWinner(userInput, randomNumber));
}

playGame();
