const getComputerChoice = () => {
    const rps = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3);
    let choice = rps[rand];
    return choice;
}

const getHumanChoice = () => {
    let choice = prompt('Rock, paper or scissors?');
    const lowerCaseChoice = choice.toLowerCase();
    return lowerCaseChoice;
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
        console.log(`${humanChoice} beats ${computerChoice}`);
        console.log('You win!!');
        humanScore++;
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
        console.log(`${computerChoice} beats ${humanChoice}`);
        console.log('You lose');
        computerScore++;
    } else {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
        console.log('Draw');
    }
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}