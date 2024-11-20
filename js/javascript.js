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
    let computerChoice = getComputerChoice();

    // Define winning conditions by using an object
    const winConditions = {
        ROCK: "SCISSORS",
        PAPER: "ROCK",
        SCISSORS: "PAPER"
    }

    let result;

    if (humanChoice === computerChoice) {
        result = "Draw";
    } else if (winConditions[humanChoice] === computerChoice) {
        result = "Win";
    } else {
        result = "Lose";
    }

    console.log(result);
    console.log("Player chose " + humanChoice + ", computer chose " + computerChoice);
}


// function playGame(rounds){
//     // Init game variables
//     let humanScore = 0;
//     let computerScore = 0;
//     let humanChoice;
//     let computerChoice;
//     let roundResult;

//     // Use a for loop to play the game for all rounds
//     // for (let i = 1; i < rounds+1; i++){
//         // Display the round number
//         // console.log("--- ROUND " + i + " ---");

//         // Get the player's choice
//         // humanChoice = getHumanChoice();

//         // Get the computer's choice
//         computerChoice = getComputerChoice();

//         // Get the round result by calling playRound
//         roundResult = playRound(humanChoice, computerChoice);

//         // Display the appropriate message and increment the score
//         switch(roundResult){
//             case "Win":{
//                 console.log("You Win! Your " + humanChoice.toLowerCase() + " beat the computer's " + computerChoice.toLowerCase() + "!");
//                 humanScore++;
//                 break;
//             }
//             case "Lose":{
//                 console.log("You lose! Your " + humanChoice.toLowerCase() + " lost to the computer's "
//                 + computerChoice.toLowerCase() + "!");
//                 computerScore++;
//                 break;
//             }
//             case "Draw":{
//                 console.log("Draw! Both players used " + humanChoice.toLowerCase() + "!");
//                 break;
//             }
//         // }

//         // Display the score
//         console.log("SCORE TALLEY: \n   Player: " + humanScore + "\n" + "   Computer: " + computerScore);
//     }

//     // Display match results
//     displayMatchResults(humanScore, computerScore);
    
// }

// // Function that writes the match results to the console
// function displayMatchResults(humanScore, computerScore){
//     console.log("MATCH RESULTS:")
//     if(humanScore === computerScore){
//         console.log("Draw! Both players had " + humanScore + " points!");
//     }
//     else if(humanScore > computerScore){
//         console.log("You win! You scored " + humanScore + " points, while the computer scored " + computerScore + " points!");
//     }
//     else if(humanScore < computerScore){
//         console.log("You lose! You scored " + humanScore + " points, while the computer scored " + computerScore + " points!");
//     }
// }

console.log("ROCK PAPER SCISSORS GAME!");

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener("click", () => 
    playRound("ROCK"));
btnPaper.addEventListener("click", () =>
    playRound("PAPER"));
btnScissors.addEventListener("click", () =>
    playRound("SCISSORS"));








