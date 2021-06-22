import React from "react";
import {Button} from '@material-ui/core';

const Move = ({move, destination,onClick}) => {
    return (
        <>
            <li key={move}>
                <Button className="button" variant="contained"
                onClick={() => onClick(move)}
                >
                {destination} 
            </Button>
          </li>
        </>
    )
}

export default Move;