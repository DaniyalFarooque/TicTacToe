import React from "react";
import Square from "./Square";
import {Card} from '@material-ui/core';

//onClick function to store history of moves, parameter => index of square
const Board = ({ squares, onClick}) => {
    return (
        <>
            <Card> 
                <h1>Tic Tac Toe</h1>
                <div className="board">
                    {squares.map((square,i) => {
                        return <Square key={i} value={square} onClick = {()=>onClick(i)} />
                    })}
                </div>
            </Card>
        </>
    );
}

export default Board;