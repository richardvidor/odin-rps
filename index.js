const getComputerChoice = () => {
    const rps = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3);
    let choice = rps[rand];
    return choice;
}

// const getHumanChoice = () => {
//     let choice = prompt('Rock, paper or scissors?');
//     const lowerCaseChoice = choice.toLowerCase();
//     return lowerCaseChoice;
// }

let humanScore = 0;
let computerScore = 0;

// const playRound = (humanChoice, computerChoice) => {
//     if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')) {
//         console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
//         console.log(`${humanChoice} beats ${computerChoice}`);
//         console.log('You win!!');
//         humanScore++;
//     } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
//         (humanChoice === 'paper' && computerChoice === 'scissors') ||
//         (humanChoice === 'scissors' && computerChoice === 'rock')) {
//         console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
//         console.log(`${computerChoice} beats ${humanChoice}`);
//         console.log('You lose');
//         computerScore++;
//     } else {
//         console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
//         console.log('Draw');
//     }
//     console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
// }

// for (let i = 0; i < 5; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
// }

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const displayScore = document.querySelector('.displayScore');
const displayChoices = document.querySelector('.displayChoices');
const displayRoundWinner = document.querySelector('.displayRoundWinner');

rock.addEventListener('click', () => {
    let humanSelection = 'rock';
    let computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);
    if (computerSelection === 'paper') {
        displayChoices.textContent = `You chose rock, computer chose paper`
        displayRoundWinner.textContent = 'Computer wins'
        computerScore++;
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`

    } else if (computerSelection === 'scissors') {
        displayChoices.textContent = `You chose rock, computer chose scissors`
        displayRoundWinner.textContent = 'You win!'
        humanScore++;
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`

    } else {
        displayChoices.textContent = `You chose rock, computer chose rock`
        displayRoundWinner.textContent = 'Draw'
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    }
})

paper.addEventListener('click', () => {
    let humanSelection = 'paper';
    let computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);
    if (computerSelection === 'rock') {
        displayChoices.textContent = `You chose paper, computer chose rock`
        displayRoundWinner.textContent = 'You win!'
        humanScore++;
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    } else if (computerSelection === 'scissors') {
        displayChoices.textContent = `You chose paper, computer chose scissors`
        displayRoundWinner.textContent = 'Computer wins'
        computerScore++;
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    } else {
        displayChoices.textContent = `You chose paper, computer chose paper`
        displayRoundWinner.textContent = 'Draw'
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    }
})

scissors.addEventListener('click', () => {
    let humanSelection = 'scissors';
    let computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);
    if (computerSelection === 'rock') {
        displayChoices.textContent = `You chose scissors, computer chose rock`
        displayRoundWinner.textContent = 'Computer wins'
        computerScore++;
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    } else if (computerSelection === 'paper') {
        displayChoices.textContent = `You chose scissors, computer chose paper`
        displayRoundWinner.textContent = 'You win!'
        humanScore++;
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    } else {
        displayChoices.textContent = `You chose scissors, computer chose scissors`
        displayRoundWinner.textContent = 'Draw'
        displayScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    }
})