function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1; 
    switch(computerChoice) {
        case 1:
            computerChoice = `Rock`;
            break;
        case 2:
            computerChoice = `Paper`;
            break;
        case 3:
            computerChoice = `Scissors`;
            break;
        default:
            return 1;
    }
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    document.getElementById('computerchoice').setAttribute('src', `images/${computerSelection}.png`);
    document.getElementById('playerchoice').setAttribute('src', `images/${playerSelection}.png`);
    document.getElementById('computerchoice').setAttribute('alt', `${computerSelection}`);
    document.getElementById('playerchoice').setAttribute('alt', `${playerSelection}`);
    if(playerSelection == computerSelection)
    {
        document.getElementById('results').innerHTML = `It's a Tie!`;
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissors" 
    || computerSelection == "Scissors" && playerSelection == "Paper"
    || computerSelection == "Paper" && playerSelection == "Rock")
    {
        computerScore++;
        document.getElementById('computer-score').innerHTML = `Computer: ${computerScore}`;
        document.getElementById('results').innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    else
    {
        playerScore++;
        document.getElementById('player-score').innerHTML = `Player: ${playerScore}`;
        document.getElementById('results').innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerScore > 4 || computerScore > 4)
    {
        if (playerScore > computerScore)
        {
            document.getElementById('modal-text').innerHTML = `Game over! You win!`;
            on();
            return;
        }
        document.getElementById('modal-text').innerHTML = `Game over! Computer wins!`;
        on();
        return;
    }
}

//Selects the eelement 'rock' and adds an event listener to play a round of RPS
document.getElementById('rock').addEventListener('click', () => {
    playRound('Rock', getComputerChoice())
})

//Selects the element 'paper' and adds an event listener to play a round of RPS
document.getElementById('paper').addEventListener('click', () => {
    playRound('Paper', getComputerChoice())
})

//Selects the element 'scissors' and adds an event listener to play a round of RPS
document.getElementById('scissors').addEventListener('click', () => {
    playRound('Scissors', getComputerChoice())
})

const on = () => {
    document.getElementById("overlay").style.display = "block";
}

const off = () => {
    document.getElementById("overlay").style.display = "none";
}

//Restarts the game, resets the scores to 0
document.getElementById('restart').addEventListener('click', () => {
    playerScore = 0;
    document.getElementById('player-score').innerHTML = 'Player: 0';
    computerScore = 0;
    document.getElementById('computer-score').innerHTML = 'Computer: 0';
    document.getElementById('results').innerHTML = 'First to 5 wins!';
    document.getElementById('playerchoice').setAttribute('src', `images/Rock.png`);
    document.getElementById('computerchoice').setAttribute('src', `images/Rock.png`);
    document.getElementById('computerchoice').setAttribute('alt', `Rock`);
    document.getElementById('playerchoice').setAttribute('alt', `Rock`);
    off();
})