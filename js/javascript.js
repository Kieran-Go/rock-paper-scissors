// The computer will pick randomly between 0, 1 and 2, which corrsponds to rock, paper and scissors respectively
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:{
            return "ROCK";
        }
        case 1:{
            return "PAPER";
        }
        case 2: {
            return "SCISSORS";
        }
    }
}

// Finds and returns the result of the round by comparing the human and computer choices
function playRound(humanChoice){
    round++;
    let computerChoice = getComputerChoice();

    // Define win conditions using an object
    const winConditions = {
        ROCK: "SCISSORS",
        PAPER: "ROCK",
        SCISSORS: "PAPER"
    }

    let result;
    if (humanChoice === computerChoice) {
        result = "DRAW";
    } else if (winConditions[humanChoice] === computerChoice) {
        result = "WIN";
        playerScore++;
    } else {
        result = "LOSE";
        computerScore++;
    }

    displayResult(result, humanChoice, computerChoice);
}

function displayResult(result, humanChoice, computerChoice){

    // Reset content inside of resultContainer
    resultContainer.innerHTML = "";

    // Create result elements
    const roundHeader = document.createElement("h3");
    roundHeader.classList.add("roundHeader");
    roundHeader.textContent = "Round " + round + " of " + MAX_ROUNDS;
    roundHeader.setAttribute("style", "color: red");
    resultContainer.appendChild(roundHeader);

    const roundResult = document.createElement("p");
    roundResult.classList.add("roundResult");
    roundResult.setAttribute("style", "white-space: pre");
    roundResult.textContent = result + "!\r\n";
    roundResult.textContent += "Player chose " + humanChoice + ", computer chose " + computerChoice;
    resultContainer.appendChild(roundResult);

    const scoreTalley = document.createElement("p");
    scoreTalley.classList.add("scoreTalley");
    scoreTalley.setAttribute("style", "white-space: pre");
    scoreTalley.textContent = "--- SCORE ---\r\n";
    scoreTalley.textContent += "Player: " + playerScore + "\r\n";
    scoreTalley.textContent += "Computer: " + computerScore;
    resultContainer.appendChild(scoreTalley);
}

const resultContainer = document.querySelector(".resultContainer");
const MAX_ROUNDS = 5;
let round = 0;
let playerScore = 0;
let computerScore = 0;

// Init buttons
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => 
    playRound("ROCK"));
btnPaper.addEventListener("click", () =>
    playRound("PAPER"));
btnScissors.addEventListener("click", () =>
    playRound("SCISSORS"));

