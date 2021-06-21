export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function bestMove(squares,xO,human) {
  
  //AI's turn 
  let bestScore = -Infinity;
  let move;

  for(let i=0;i<9;i++){

      //Is the spot available?
      if(squares[i]===null){
        
        //Place at the available spot
        squares[i]=xO;
        
        //Compute the score of this move using minimax algo
        let score = minimax(squares);

        //Backtrack
        squares[i]=null;

        //Store the score with the highest value
        if(score>bestScore){
          bestScore=score;
          move=i;
        }
      
    }
  }
  // console.log(`ai makes moves at place${move}`);
  return move;
  // currentPlayer= human;
}

export function minimax(squares){
  return 1;
}
