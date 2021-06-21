import React, { useState } from "react";
import { Card, Button } from '@material-ui/core';
import { calculateWinner, bestMove } from "../helper";
import Board from "./Board";
import Infobar from "./Infobar";

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

      // Update the stepNumber with pressed button stepNumber
      setStepNumber(step);
      setXisNext(step % 2 === 0);

    };
    
    const renderMoves = () =>
      history.map((_step, move) => {
        // Create each history button
        const destination = move ? `Go to move #${move}` : "Go to Start";
        return (
          <li key={move}>
            <Button variant="contained"
            onClick={() => jumpTo(move)}
            >
            {destination} 
            </Button>
          </li>
        );
      });
    

    // CSS
    const style = {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    };

    return (
      <>

        <div className="rowC">

          <Infobar style = {style} opponent={opponent} startPlayer={startPlayer} winner={winner} xO={xO} status={disableStartingPlayer} onChange={{handleStartPlayer, handleOpponent}} onClick={()=>newGame(opponent)}/>

          <Board style = {style} squares={history[stepNumber]} onClick={handleClick} />

          <div className="info-wrapper">
            <div className="main">
              <Card style = {style}>
                <h3>History</h3>
                {renderMoves()}
              </Card>
            </div>
          </div>

        </div>
      </>
    );
};

export default App;