import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import Infobar from "./Infobar";

const App = () => {
    
    // Initialise opponent
    const [opponent, setOpponent] = useState('computer');

    // Initialise the board as empty
    const [history, setHistory] = useState([Array(9).fill(null)])
    
    // For tracking the current step number
    const [stepNumber, setStepNumber] = useState(0);

    //xIsNext tells if it is X player turn or O player turn 
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleOpponent = (event, newOpponent) => {
      if(newOpponent!=null)
        setOpponent(newOpponent);
      console.log(newOpponent);
    };

    const handleClick = (i) => {
      const historyPoint = history.slice(0, stepNumber + 1);
      const current = historyPoint[stepNumber];
      const squares = [...current];

      // return if won or occupied
      if (winner || squares[i]) return;
      
      // select square
      squares[i] = xO;
      setHistory([...historyPoint, squares]);
      setStepNumber(historyPoint.length);
      setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
      setStepNumber(step);
      setXisNext(step % 2 === 0);
    };
    
    const renderMoves = () =>
      history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : "Go to Start";
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{destination}</button>
          </li>
        );
      });
    

    return (
      <>
        <h1> Tic Tac Toe</h1>

        <div className="rowC">

          <Infobar opponent={opponent} winner={winner} xO={xO} onChange={handleOpponent}/>

          <Board squares={history[stepNumber]} onClick={handleClick} />

          <div className="info-wrapper">
            <div>
              <h3>History</h3>
              {renderMoves()}
            </div>

          </div>

        </div>
      </>
    );
};

export default App;