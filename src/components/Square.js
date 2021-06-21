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

    //choose icon to display on button
    let icon, color;
    
    if (value==='X') {
        color="primary";
        icon = <ClearIcon />;
    }
    else if(value==='O') {
        color="secondary";
        icon = <RadioButtonUncheckedIcon/>;
    }
    else 
        icon = null;

    return (
        
        <Button
            variant="contained"
            children={icon}
            onClick = {onClick}
            color = {color}
        >
        </Button>
        
    );
}
export default Square;