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
