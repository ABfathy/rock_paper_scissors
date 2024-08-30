

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;


const buttons = document.querySelectorAll(".human li");
const compLis = document.querySelectorAll(".computer li");
const values = document.querySelector(".values");
const result = document.createElement('div');
const center = document.querySelector(".center");


buttons.forEach(button => {
    
    button.addEventListener("click",()=>{
    button.classList.add("clicked");
    getHumanChoice(button.innerText);
    computerChoice = getComputerChoice();
    playGame(humanChoice,computerChoice);

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

}


    

function playGame(humanChoice,computerChoice){

   
    compLis.forEach(compLi=> {

        if (compLi.innerText==computerChoice){
            compLi.classList.add("clicked");
        }
    
        compLi.addEventListener("transitionend",removeTransition);
    })
    
    playRound(humanChoice,computerChoice);

    values.innerText = `${humanScore} - ${computerScore}`;
    

    if( humanScore == 5 ) {

        result.innerText = "You win!"
        center.appendChild(result);
        setTimeout(resetScores,500);
        
    }

    if(computerScore == 5) {

        result.innerText = "You lose!"
        center.appendChild(result);
        setTimeout(resetScores,500);

    }

    

    
    
}

function resetScores(){
    humanScore = 0;
    computerScore = 0;
    center.removeChild(result);
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



   


