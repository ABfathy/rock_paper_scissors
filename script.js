

let humanScore = 0;
let computerScore = 0;




let human = getHumanChoice();

let computer = getComputerChoice();

console.log(playRound(human,computer));

function getComputerChoice(){

let choices = ["Rock","Paper","Scissors"];

randChoice = Math.floor(Math.random() * choices.length);

return choices[randChoice];

}

function getHumanChoice(){
    let promptResult = prompt("Rock! Paper! Scissors! Choose!");

    return promptResult;
}

function playRound(human,computer){

    
    human = human.toLowerCase();
    computer = computer.toLowerCase();

   

    if (human == "rock" && computer == "rock" || human == "paper" && computer == "paper" || human == "scissors" && computer == "scissors"){

        return `A Draw! What a coincidence!`;
    } 
    else if (human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper"  ){

        humanScore++;
        return `You win! ${human} beats ${computer}`;
    }
    else if (computer== "rock" && human == "scissors" || computer == "paper" && human == "rock" || computer == "scissors" && human == "paper"  ){

        computerScore++;
        return ` You lose! ${computer} beats ${human} `;
    }
 

}




