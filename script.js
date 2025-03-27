"use scrict";

// Main game variables
let humanScore = 0;
let computerScore = 0;
let endGame = false;

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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  } else {
    console.log("Tie!");
  }
}

function gameLoop(e) {
  let rps = e.target.textContent;
  playRound(rps, getComputerChoice());

  let displayWinner = document.createElement("p");
  if (humanScore === 5) {
    endGame = true;
    displayWinner.textContent = "You win!";
    document.body.appendChild(displayWinner);
  } else if (computerScore === 5) {
    endGame = true;
    displayWinner.textContent = "You lose!";
    document.body.appendChild(displayWinner);
  }
}

const buttonContainer = document.querySelector("#container"); // Link to container in HTML file

// Rock button
const selectRock = document.createElement("button");
selectRock.textContent = "rock";
buttonContainer.appendChild(selectRock);

selectRock.addEventListener("click", (e) => {
  if (endGame === true) {
    return;
  }
  gameLoop(e);
  displayHumanScore.textContent = "Human score: " + humanScore;
  displayComputerScore.textContent = "Computer score: " + computerScore;
});

// Paper button
const selectPaper = document.createElement("button");
selectPaper.textContent = "paper";
buttonContainer.appendChild(selectPaper);

selectPaper.addEventListener("click", (e) => {
  if (endGame === true) {
    return;
  }
  gameLoop(e);
  displayHumanScore.textContent = "Human score: " + humanScore;
  displayComputerScore.textContent = "Computer score: " + computerScore;
});

// Scissors button
const selectScissors = document.createElement("button");
selectScissors.textContent = "scissors";
buttonContainer.appendChild(selectScissors);

selectScissors.addEventListener("click", (e) => {
  if (endGame === true) {
    return;
  }
  gameLoop(e);
  displayHumanScore.textContent = "Human score: " + humanScore;
  displayComputerScore.textContent = "Computer score: " + computerScore;
});

// DOM Creation
const resultsDiv = document.createElement("div");
const displayHumanScore = document.createElement("p");
const displayComputerScore = document.createElement("p");

displayHumanScore.textContent = "Human score: " + humanScore;
displayComputerScore.textContent = "Computer score: " + computerScore;

resultsDiv.appendChild(displayHumanScore);
resultsDiv.appendChild(displayComputerScore);

document.body.appendChild(resultsDiv);
