function getHumanChoice(){
    return prompt("Enter either 'rock', 'paper' or 'scissors'.").toUpperCase();
}

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

function playRound(humanChoice, computerChoice){
    let win = false;
    let draw = false;

    if(humanChoice === computerChoice){
        draw = true;
        console.log("Draw! Both players used " + humanChoice.toLowerCase() + "!");
    }
    else if(humanChoice === "ROCK"){
        if(computerChoice === "SCISSORS"){
            win = true;
        }
    }
    else if(humanChoice === "PAPER"){
        if(computerChoice === "ROCK"){
            win = true;
        }
    }
    else if(humanChoice === "SCISSORS"){
        if(computerChoice === "PAPER"){
            win = true;
        }
    }

    if(!draw){
        if(win){
            console.log("You Win! Your " + humanChoice.toLowerCase() + " beat the computer's " + computerChoice.toLowerCase() + "!");
            humanScore++;
        }
        else{
            console.log("You lose! Your " + humanChoice.toLowerCase() + " lost to the computer's "
            + computerChoice.toLowerCase() + "!");
            computerScore++;
        }
    }

    console.log("SCORE TALLEY: \n   Player: " + humanScore + "\n" + "   Computer: " + computerScore);
}


let humanScore = 0;
let computerScore = 0;

console.log("ROCK PAPER SCISSORS GAME!");

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice,computerChoice);





