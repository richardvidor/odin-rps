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


}

// getComputerChoice();
// getHumanChoice();