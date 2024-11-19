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

let humanScore = 0;
let computerScore = 0;

console.log("ROCK PAPER SCISSORS GAME!");

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();





