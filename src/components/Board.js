import React from "react";
import Square from "./Square";
import {Card} from '@material-ui/core';

//onClick function to store history of moves, parameter => index of square
const Board = ({style, squares, onClick}) => {

    return (
        <>
            <div className="main">
                <Card style = {style}> <h1>Tic Tac Toe</h1></Card>

                <div className="board">
                    {squares.map((square,i) => {
                        return <Square key={i} value={square} onClick = {()=>onClick(i)} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Board;