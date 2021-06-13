import React from "react";
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Infobar = ({winner,xO}) => { 

    return (
        <>
            <h3>Opponent</h3>
            <ToggleButtonGroup>
                <ToggleButton value="left" aria-label="left aligned">
                    <ComputerIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="centered">
                    <PersonIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <div className="infobar">
                <h3 >{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
            </div>
        </>
    );
}

export default Infobar;