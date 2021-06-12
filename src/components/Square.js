import React from "react";

/* 
    value defines the piece placed at the square, 
    it can 'X', 'O' or empty
*/
const Square = ({value,onClick})=>{
    // style is the class to apply css 
    // used ES6 string interpolation/template literals with ` (backticks) and ${expr}
    const style = value ? `square ${value}` : 'square';
    
    return (
        <button className = {style} onClick = {onClick}> 
            {value}
        </button>
    );
}
export default Square;