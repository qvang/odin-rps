"use scrict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?", "");
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    hChoice = humanChoice.toLowerCase();

    if (
      (hChoice === "rock" && computerChoice === "scissors") ||
      (hChoice === "paper" && computerChoice === "rock") ||
      (hChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win! " + hChoice + " beats " + computerChoice + ".");
      humanScore++;
    } else if (
      (hChoice === "rock" && computerChoice === "paper") ||
      (hChoice === "paper" && computerChoice === "scissors") ||
      (hChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log("You lose! " + computerChoice + " beats " + hChoice + ".");
      computerScore++;
    } else {
      console.log("Tie!");
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("Human Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

playGame();
