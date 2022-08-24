let cp = "str";
let score = 0;

// game function doesnt work properly i think 

// function game(){
//     for(let i = 0; i<5; i++){
//         let input = window.prompt("Rock, Paper or Scissors?")
//         let n = Math.floor(Math.random() * 3);
//         computerPlay(n);
//         playRound(input, cp);
//     }
//     console.log("You've won "+score+ " times!")
//     score=0;
// }

const btn= document.querySelector('#rock')



function computerPlay(num) {
  if (num == 0) {
    cp = "rock";
    console.log("Computer plays " + cp);
  } else if (num == 1) {
    cp = "scissors";
    console.log("Computer plays " + cp);
  } else {
    cp = "paper";
    console.log("Computer plays " + cp);
  }
}

function playRound(ps, cs) {
    let psI = ps.toLowerCase();
    if (psI == cs) {
        console.log("You played " + psI);
        console.log("Draw, you both played " + psI);
    } else if (
        (psI == "rock" && cs == "scissors") ||
        (psI == "paper" && cs == "rock") ||
        (psI == "scissors" && cs == "paper")
        ) {
            score++;
            console.log("You played " + psI);
            console.log("You win, " + psI + " beats " + cs + "!");
        } else if (
            (psI == "rock" && cs == "paper") ||
            (psI == "paper" && cs == "scissors") ||
            (psI == "scissors" && cs == "rock")
            ) {
                console.log("You played " + psI);
                console.log("You lose, " + cs + " beats " + psI + "!");
            }
        }
        

game()

