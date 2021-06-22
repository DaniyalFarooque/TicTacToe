import React from 'react';
import {Card} from '@material-ui/core';
import Move from './Move';

const HistoryBar = ({history,onClick})=>{
    const style = {
        display: 'block',
        backgroundColor: 'transparent',
        // boxShadow: 'none'
    };
    
    return (
        <>
            <Card style = {style}>
                <h3>History</h3>
                <div className="info-wrapper">
                    {history.map((_step, move) => {
                        const destination = move ? `Go to move #${move}` : "Go to Start";
                        return (
                        <Move move={move} destination={destination} onClick={onClick}/>
                        );
                    })}
                </div>
            </Card>
        </>
    )
}

export default HistoryBar;