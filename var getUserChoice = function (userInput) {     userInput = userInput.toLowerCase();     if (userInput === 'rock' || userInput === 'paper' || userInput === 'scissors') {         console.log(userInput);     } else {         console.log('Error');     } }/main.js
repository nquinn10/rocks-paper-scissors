
var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error');
    }
};

// console.log(getUserChoice('paper'));

var getComputerScience = function () {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
};
// console.log(getComputerScience());

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game was a tie";
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins! Paper kills rock';
        }

        if (computerChoice === 'scissors') {
                return 'User Wins! Rock kills scissors';
        }
    }
    

    if (userChoice ==='paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins! Scissors cut paper';
        } 
        
        if (computerChoice ==='rock') {
            return 'User wins! Paper covers rock';
        }
    }
    if (userChoice = 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins! Scissors crush rock';
        } 
        
        if (computerChoice === 'paper') {
            return 'User wins! Scissors cut paper';
        }
    }
};
       
// var userChoice = getUserChoice('scissors');
// var computerChoice = getComputerScience();
// console.log(userChoice);
// console.log(computerChoice);

// console.log(determineWinner(userChoice, computerChoice));

// determineWinner(getUserChoice, getComputerScience);

var playGame = function () {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerScience();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
