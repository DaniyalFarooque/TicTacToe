import React from "react";
import { Button } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ClearIcon from '@material-ui/icons/Clear';

/* 
    value defines the piece placed at the square, 
    it can 'X', 'O' or empty
    onClick is a function
*/
const Square = ({value,onClick})=>{

    //choose mark to display on button
    let mark, color;
    if (value==='X') {
        color="primary";
        mark = <ClearIcon />;
    }
    else if(value==='O') {
        color="secondary";
        mark = <RadioButtonUncheckedIcon/>;
    }
    else 
        mark = null;

    return (
        <>
            <Button
                variant="contained"
                children={mark}
                onClick = {onClick}
                color = {color}
            >
            </Button>
        </>
    );
}
export default Square;