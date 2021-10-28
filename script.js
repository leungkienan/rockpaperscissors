let n = Math.floor(Math.random() * 3);


function computerPlay() {
  if(n==0){
      console.log("Computer plays Rock", n)
  } else if(n==1){
      console.log("Computer plays Paper", n)
    } else{
      console.log("Computer plays Scissors", n)
  }
}

computerPlay()