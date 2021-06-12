import React from "react";
import Square from "./Square";

//onClick function to store history of moves, parameter => index of square
const Board = ({squares, onClick}) => {

    return (
        <div className="board">
            {squares.map((square,i) => {
                return <Square key={i} value={square} onClick = {()=>onClick(i)} />
            })}
        </div>
    );
}

export default Board;