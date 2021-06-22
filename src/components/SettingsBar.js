import React from "react";
import {Card, Button, Grid} from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';

const SettingsBar = ({opponent,startPlayer,winner,xO,onChange,status,onClick}) => { 
    const style = {
        display: 'block',
        height: '450px',
        backgroundColor: 'transparent',
        width: '150px'
        // boxShadow: 'none'
    };
    let message;
    if(winner===null){
        message = `Next Player:  ${xO}`;
    }else if(winner==="draw"){
        message = "Draw";
    }else{
        message = `Winner ${winner}`;
    }

    return (
        <>
            <Card style = {style}>
                <h3>Opponent</h3>
                <Grid container justify="center" alignItems="center" item>
                    <ToggleButtonGroup value={opponent} exclusive onChange={onChange.handleOpponent}>
                        <ToggleButton value="human" aria-label="human" color="primary">
                            <PersonIcon />
                        </ToggleButton>
                        <ToggleButton value="computer" aria-label="computer" color="primary">
                            <ComputerIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                <h3>Starting Player</h3>
                <ToggleButtonGroup value={startPlayer} exclusive  onChange={onChange.handleStartPlayer}>
                    <ToggleButton value="human" disabled = {status} aria-label="human" color="primary">
                        <PersonIcon />
                    </ToggleButton>
                    <ToggleButton value="computer" disabled = {status} aria-label="computer" color="primary">
                        <ComputerIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            
                <h3>{message}</h3> 

                <Button style = {{ background: 'linear-gradient(45deg, #ef476f 30%, #ffafcc 90%)'}} variant="contained" onClick = {onClick} >
                    New Game
                </Button>
                </Grid>

            </Card>
        </>
    );
}

export default SettingsBar;