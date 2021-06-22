import React, { useState } from "react";
import { calculateWinner, bestMove } from "../helper";
import Board from "./Board";
import SettingsBar from "./SettingsBar";
import HistoryBar from "./HistoryBar";

const App = () => {
  // Tracking opponent and startPlayer
  const [opponent, setOpponent] = useState('human');
  const [startPlayer, setStartPlayer] = useState('human');
  const [disableStartingPlayer,setDisableStartingPlayer] = useState(true);

  // Initialise the board as empty
  const [history, setHistory] = useState([Array(9).fill(null)])

  // Tracking the current step number, xO(X or O)
  const [stepNumber, setStepNumber] = useState(0);
  const [xO, setXO] = useState('X');
  const [xIsNext, setXisNext] = useState(true);

  // Compute winner
  const winner = calculateWinner(history[stepNumber]);

  const handleOpponent = (event, newOpponent) => {

    // Clear Game Data
    reset();

    // Validity Check, if same button is pressed don't allow
    if(newOpponent!=null)
      setOpponent(newOpponent);

    if(newOpponent==='computer'){

      // Enable the start player options
      setDisableStartingPlayer(false);

    }else if(newOpponent==='human'){
        
      // Disable the startplayer options
      setDisableStartingPlayer(true);
    }

  };

  const handleStartPlayer = (event, newStartPlayer) => {
    
    // Validity Check, if same button is pressed don't allow
    if(newStartPlayer != null)
      setStartPlayer(newStartPlayer);

    // Start New Game
    newGame(newStartPlayer);

  }

  const handleClick = (i) => {
    
    // Retrieve Saved Data
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    // Return if won or occupied
    if (winner || squares[i]) return;

    // Move made by human
    squares[i] = xO;
    console.log(`registering this move at ${i} made by human ${xO}`);

    // Problem here useState is asynchronous
    const newXO = (xO ==='X') ? 'O' : 'X';  //So we need to add a separate variable

    if(opponent === 'human'){
      setXO(newXO);

    }else if(opponent==='computer' && winner===null){

      // Move made by computer
      const aiMove = bestMove(squares,newXO);

      // Can we make a move?
      if(aiMove!=null)
        squares[aiMove]=newXO;
      console.log(`registering this move at ${aiMove} made by computer ${newXO}`);

    }

    // Update the Game Data
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);

  };

  const newGame = (player)=>{
    
    // Clear Game Data
    reset();

    // Check startPlayer is computer
    if(player === 'computer'){

      // Retrieve Saved Data
      const historyPoint = history.slice(0, 1);
      const current = historyPoint[0];
      const squares = [...current];

      // Move made by computer
      const aiMove = bestMove(squares,xO);
      squares[aiMove] = xO;
      console.log(`registering this move at ${aiMove} made by ${xO}`);
      
      // Update the Game Data
      setHistory([...historyPoint, squares]);
      setStepNumber(historyPoint.length);
      setXisNext(!xIsNext);
      setXO((xO ==='X') ? 'O' : 'X');

      }
    }

    const reset = () =>{
      setHistory([Array(9).fill(null)]);
      setStepNumber(0);
      setXisNext(true);
      setXO('X');
    }

    const jumpTo = (step) => {

      // Update the stepNumber with the stepNumber of Move component  
      setStepNumber(step);
      setXisNext(step % 2 === 0);

    };

    return (
      <>
        <div className="rowC">
          <div className="rowC">
            <SettingsBar opponent={opponent} startPlayer={startPlayer} winner={winner} xO={xO} status={disableStartingPlayer} onChange={{handleStartPlayer, handleOpponent}} onClick={()=>newGame(startPlayer)}/>
            <HistoryBar history={history} onClick={jumpTo}/>
          </div>
          <Board squares={history[stepNumber]} onClick={handleClick} />
        </div>
      </>
    );
};

export default App;