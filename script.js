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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        console.log(`It's a Tie!`);
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" 
    || computerSelection == "scissors" && playerSelection == "paper"
    || computerSelection == "paper" && playerSelection == "scissors")
    {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else
    {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Rock paper or scissors?");
        playRound(playerSelection, getComputerChoice());
    }
    if (computerScore > playerScore)
    {
        console.log("Computer wins the set!");
    }
    else
    {
        console.log("You win the set!")
    }
}