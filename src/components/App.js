import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const App = () => {
    
    // Initialise the board as empty
    const [history, setHistory] = useState([Array(9).fill(null)])
    
    // For tracking the current step number
    const [stepNumber, setStepNumber] = useState(0);

    //Change naem here
    //xis next tell its the X player turn or Y player turn 
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

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
        <h1 className="banner"> Tic Tac Toe</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>History</h3>
            {renderMoves()}
          </div>
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
      </>
    );
};

export default App;