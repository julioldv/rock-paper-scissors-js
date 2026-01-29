const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    //Make a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    //Lets compare choices
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }else{
        switch(playerChoice){
            case "rock":""
                if (computerChoice === "paper"){
                    result = "COMPUTER WINS!";
                }else{
                    result = "PLAYER WINS!";
                }
                break;
            case "paper":
                if (computerChoice === "scissors"){
                    result = "COMPUTER WINS!";
                }else{
                    result = "PLAYER WINS!";
                }
                break;
            case "scissors":
                if (computerChoice === "rock"){
                    result = "COMPUTER WINS!";
                }else{
                    result = "PLAYER WINS!";
                }
                break;
        }
    }

    playerDisplay.textContent =  `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "PLAYER WINS!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            break;
        case "COMPUTER WINS!":
            resultDisplay.classList.add("redText");
            computerScore++;
            break;
    }

    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}