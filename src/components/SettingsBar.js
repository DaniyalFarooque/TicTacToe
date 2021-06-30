import React from 'react';
import {motion} from 'framer-motion';
import {Button, Grid} from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';

const SettingsBar = ({opponent,startPlayer,winner,xO,onChange,status,onClick})  => { 
    let message;
    if(winner === null){
        message = `Next Player:  ${xO}`;
    }else if(winner === 'draw'){
        message = 'Draw';
    }else{
        if(opponent === 'computer')
            message = 'Lose';
        else
            message = `Winner ${winner}`;
    }

    return (
        <>
            <motion.div className = 'setbar'> {/*animate = {{x: -150 , scale: 1.1,  }}>*/}
                <Grid  container justify = 'center'  item>
                    <h3>Opponent</h3>
                    <ToggleButtonGroup value = {opponent} exclusive onChange = {onChange.handleOpponent}>
                        <ToggleButton value = 'human' aria-label = 'human' color = 'primary'>
                            <PersonIcon />
                        </ToggleButton>
                        <ToggleButton value = 'computer' aria-label = 'computer' color = 'primary'>
                            <ComputerIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <h3>Starting Player</h3>
                    <ToggleButtonGroup value = {startPlayer} exclusive  onChange = {onChange.handleStartPlayer}>
                        <ToggleButton value = 'human' disabled = {status} aria-label = 'human' color = 'primary'>
                            <PersonIcon />
                        </ToggleButton>
                        <ToggleButton value = 'computer' disabled = {status} aria-label = 'computer' color = 'primary'>
                            <ComputerIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <h3>{ message }</h3> 
                </Grid>

                { winner != null && (
                    <motion.div id = 'result' animate = {{x: 550, y:-200, scale: 1.2,  }}>
                        <h1>{ message }</h1> 

                        <Button 
                            style = {{ 
                                background: 'linear-gradient(90deg, rgba(56,237,46,1) 0%, rgba(245,252,70,1) 100%)',
                                fontFamily: 'Benne',
                                height: '50px',
                                width: '150px',
                            }}  
                            onClick = {onClick} 
                            component = {motion.div}
                            whileHover = {{
                                scale: 1.2,
                                transition: { duration: 0.3 }
                            }}
                            whileTap = {{ scale: 0.9 }}
                        >
                            New Game
                        </Button>
                    </motion.div>
                )}
            </motion.div>
        </>
    );
}

export default SettingsBar;