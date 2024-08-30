

let humanScore = 0;
let computerScore = 0;
let humanChoice;


const buttons = document.querySelectorAll(".human li");

const values = document.querySelector(".values");

buttons.forEach(button => {
    
    button.addEventListener("click",()=>{
    button.classList.add("clicked");
    getHumanChoice(button.innerText);
    playGame(humanChoice);

    }); 

    button.addEventListener("transitionend",removeTransition);

});

function removeTransition(e){
    if(e.propertyName != "transform") return;
    this.classList.remove("clicked");
}



function getComputerChoice(){

let choices = ["Rock","Paper","Scissors"];

randChoice = Math.floor(Math.random() * choices.length);

return choices[randChoice];

}

function incrementScore(human , computer){

    humanScore += human;
    computerScore += computer;
    
}

function getHumanChoice(choice){
     humanChoice = choice;

     return choice;
}


    

function playGame(humanChoice){

   

    let computer = getComputerChoice();

    
    playRound(humanChoice,computer);

    values.innerText = `${humanScore} - ${computerScore}`;

    
}

function playRound(human,computer){

    
    human = human.toLowerCase();
    computer = computer.toLowerCase();

   

    if (human == "rock" && computer == "rock" || human == "paper" && computer == "paper" || human == "scissors" && computer == "scissors"){

        incrementScore(0,0);
        console.log(`A Draw! What a coincidence!`)
        return;
    } 
    else if (human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper"  ){

        incrementScore(1,0);
        console.log(`You win! ${human} beats ${computer}.`);
        return;
    }
    else if (computer == "rock" && human == "scissors" || computer == "paper" && human == "rock" || computer == "scissors" && human == "paper"  ){

        incrementScore(0,1);
        console.log(`You lose! ${computer} beats ${human}.`);
        return;
    }
 

}



   


