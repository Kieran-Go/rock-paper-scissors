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

// Determine the result of the round by comparing the human and computer choices
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

/* Update the result container with the outcome of the current round,
    displaying the round number, choices and scores*/
function displayResult(result, humanChoice, computerChoice){

    // Clear result container
    resultContainer.innerHTML = "";

    if(round === MAX_ROUNDS){
        announceWinner();
    }
    else{
        // Create result elements
        const roundHeader = document.createElement("h3");
        roundHeader.textContent = "Round " + round + " of " + MAX_ROUNDS;
        roundHeader.setAttribute("style", "color: red");
        resultContainer.appendChild(roundHeader);

        const roundResult = document.createElement("p");
        roundResult.setAttribute("style", "white-space: pre");
        roundResult.textContent = result + "!\r\n";
        roundResult.textContent += "Player chose " + humanChoice + ", computer chose " + computerChoice;
        resultContainer.appendChild(roundResult);

        const scoreTalley = document.createElement("p");
        scoreTalley.setAttribute("style", "white-space: pre");
        scoreTalley.textContent = "--- SCORE ---\r\n";
        scoreTalley.textContent += "Player: " + playerScore + "\r\n";
        scoreTalley.textContent += "Computer: " + computerScore;
        resultContainer.appendChild(scoreTalley);
    }
}

function announceWinner(){
    const matchHeader = document.createElement("h3");
    matchHeader.setAttribute("style", "color: red");
    if(playerScore === computerScore){
        matchHeader.textContent = "DRAW!";
    }
    else if(playerScore > computerScore){
        matchHeader.textContent = "YOU WIN!";
    }
    else{
        matchHeader.textContent = "YOU LOSE!";
    }
    resultContainer.appendChild(matchHeader);

    const matchDetails = document.createElement("p");
    matchDetails.setAttribute("style", "white-space: pre");
    matchDetails.textContent = "Your score: " + playerScore + "\r\n";
    matchDetails.textContent += "Computer score: " + computerScore;
    resultContainer.appendChild(matchDetails);

    const btnRestart = document.createElement("button");
    btnRestart.textContent = "Play again?";
    resultContainer.appendChild(btnRestart);

    btnRestart.addEventListener("click", () => 
    restartGame());
}

function restartGame(){
    // Reset match data
    round = 0;
    playerScore = 0;
    computerScore = 0;

    // Clear result container
    resultContainer.innerHTML = "";
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

btnRock.addEventListener("click", () => {
    if(round < MAX_ROUNDS){
        playRound("ROCK")
    }
    // Do nothing if game is over
    return;
});
btnPaper.addEventListener("click", () => {
    if (round < MAX_ROUNDS) {
        playRound("PAPER");
    }
    // Do nothing if game is over
    return;
});
btnScissors.addEventListener("click", () => {
    if (round < MAX_ROUNDS) {
        playRound("SCISSORS");
    }
    // Do nothing if game is over
    return;
});

