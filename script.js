

function getComputerChoice(){

let choices = ["Rock","Paper","Scissor"];

randChoice = Math.floor(Math.random() * choices.length);

return choices[randChoice];

}

function getHumanChoice(){
    let promptResult = prompt("Rock! Paper! Scissors! Choose!");

    return promptResult;
}

console.log(getHumanChoice())