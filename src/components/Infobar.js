import React from "react";
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Infobar = ({opponent,winner,xO,onChange}) => { 
    
    return (
        <>
            <div className="infobar">
                <h3>Opponent</h3>
                <ToggleButtonGroup value={opponent} exclusive onChange={onChange}>
                    <ToggleButton value="computer" aria-label="computer" color="primary">
                        <ComputerIcon />
                    </ToggleButton>
                    <ToggleButton value="human" aria-label="human" color="primary">
                        <PersonIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <h3 >{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
            </div>
        </>
    );
}

export default Infobar;