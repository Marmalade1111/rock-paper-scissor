
 




const choice = ["Rock", "Paper", "Scissors"]
const random = Math.floor((Math.random() * choice.length));

 function computerPlay() {
   return (choice[random]);
 }
    
 console.log(computerPlay(choice));


  



 function playRound(playerSelection, computerSelection) {

    if (playerSelection == ["Rock"] && computerSelection == ["Rock"])
    return "It's a draw. You both picked rock!"
 else if (playerSelection == ["Rock"] && computerSelection == ["Paper"]) {
    return "You loose! Paper beats Rock!"
} else if (playerSelection == ["Rock"] && computerSelection == ["Scissors"]) {
    return "You win! Rock beats Scissors!"
    // Rock choices 

} else if (playerSelection == ["Paper"] && computerSelection ==["paper"]) {
    return "It's a draw! You both picked Paper!"
} else if (playerSelection == ["Paper"] && computerSelection ==["Scissors"]) {
    return "You loose! Scissors beats Paper!"
} else if (playerSelection == ["Paper"] && computerSelection == ["Rock"]) {
    return "You win! Paper beats Rock!"
    // Paper choices

} else if (playerSelection == ["Scissors"] && computerSelection == ["Scissors"]) {
    return "Its a draw! You both picked Scissors!"
} else if (playerSelection == ["Scissors"] && computerSelection == ["Paper"]) {
    return "You win! Scissors beats Paper!"
} else if (playerSelection == ["Scissors"] && computerSelection == ["Rock"]) {
    return "You loose! rock beats scissors!"
} }  // Scissor choices








const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
// function game() {
//    playRound((prompt(playerSelection, computerSelection))); 
  
// }


