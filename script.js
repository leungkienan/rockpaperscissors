let cp = "str";
let score = 0;
function game(){
    let input = window.prompt("Rock, Paper or Scissors?")
    for(let i = 0; i<5; i++){
        let n = Math.floor(Math.random() * 3);
        computerPlay(n);
        playRound(input, cp);
    }
}

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
            console.log("You played " + psI);
            console.log("You win, " + psI + " beats " + cs + "!");
            score++;
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

