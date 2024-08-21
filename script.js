

let humanScore = 0;
let computerScore = 0;



console.log(playGame(prompt("How many rounds do you want to play?")));

function getComputerChoice(){

let choices = ["Rock","Paper","Scissors"];

randChoice = Math.floor(Math.random() * choices.length);

return choices[randChoice];

}

function getHumanChoice(){
    let promptResult = prompt("Rock! Paper! Scissors! Choose!");

    return promptResult;
}

function playGame(rounds){

    for(let i = 0 ; i < rounds ; i++){

    let human = getHumanChoice();

    let computer = getComputerChoice();
    
    playRound(human,computer);
    }

    console.log(`Final scores for the player : ${humanScore} and the computer : ${computerScore}`)

    if (computerScore==humanScore){
        console.log("Draw!");
    }
    else if(computerScore > humanScore){
        console.log("You lose!");
    }
    else console.log("You win!");
}

function playRound(human,computer){

    
    human = human.toLowerCase();
    computer = computer.toLowerCase();

   

    if (human == "rock" && computer == "rock" || human == "paper" && computer == "paper" || human == "scissors" && computer == "scissors"){

        console.log(`A Draw! What a coincidence!`)
        return ;
    } 
    else if (human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper"  ){

        humanScore++;
        console.log(`You win! ${human} beats ${computer}.`);
        return ;
    }
    else if (computer == "rock" && human == "scissors" || computer == "paper" && human == "rock" || computer == "scissors" && human == "paper"  ){

        computerScore++;
        console.log(`You lose! ${computer} beats ${human}.`);
        return ;
    }
 

}




