let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    }
    else if (randomInt === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
    }
    else if (humanChoice.toLowerCase() === "paper") {
        return "paper";
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        return "scissors";
    }
    else {
        getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
        }
        else if (humanChoice === computerChoice) {
            console.log("Tie!");
        }
        else {
            computerScore++;
            console.log("You lost! " + computerChoice + " beats " + humanChoice + ".");
        }
        return 0;
    }
    for(let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    console.log("You: " + humanScore);
    console.log("Bot: " + computerScore);
}

console.log(playGame());
