// Store necessary values
let human, ai, scores;

function set_variables (xO){
  ai = xO;
  human = (xO === 'X' ? 'O' : 'X');
  if(ai==='O'){
    scores = {
      'X': -10,
      'O': 10,
      'draw': 0
    };
  }else if(ai==='X'){
    scores = {
      'X': 10,
      'O': -10,
      'draw': 0
    };
  }
}

export function calculateWinner(squares) {

  //Winning combinations
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

    // Are there 3 marks in a row (up, down, across, or diagonally) ? 
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  for(let i=0;i<9;i++){

    // Is the spot available?
    if(squares[i]===null){
      return null;
    }
  }

  // Return draw, no empty square && winning combination
  return "draw";

}

export function bestMove(squares,xO) {
  const result = calculateWinner(squares);
  if (result !== null) {
    return null;
  }

  // Set variables
  set_variables(xO);

  // AI to make its turn
  let bestScore = -Infinity;
  let move;

  for(let i=0;i<9;i++){

    // Is the spot available?
    if(squares[i]===null){
      
      // Place at the available spot
      squares[i]=xO;
      
      // Compute the score of this move using minimax algo
      let score = minimax(squares,0,false);

      // Backtrack
      squares[i]=null;

      // Store the score with the highest value and the position
      if(score>bestScore){
        bestScore=score;
        move=i;
      }
    }
  }

  // Return the positon with maximum score
  return move;

}


export function minimax(squares,depth,isMaximizing){
  const result = calculateWinner(squares);
  if (result !== null) {
    return scores[result];
  }
  let bestScore;

  if (isMaximizing) {
    bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {

      // Is the spot available?
      if(squares[i]===null){

        //Place at the available spot
        squares[i] = ai;
        let score = minimax(squares, depth + 1, false);
        
        //Backtrack
        squares[i]=null;

        //Store the score with the highest value
        if(score>bestScore)
          bestScore=score;

      }
    }
  } else {
    bestScore = Infinity;
    for (let i = 0; i < 9; i++) {

      // Is the spot available?
      if(squares[i]===null){

        //Place at the available spot ()
        squares[i] = human;
        let score = minimax(squares, depth + 1, true);
        
        //Backtrack
        squares[i]=null;

        //Store the score with the lowest value
        if(score<bestScore)
          bestScore=score;

      }
    }
  }

  // Return bestScore according to the policy
  return bestScore;

}
