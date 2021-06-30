import React from 'react';
import {motion} from 'framer-motion';
import {Card, ThemeProvider} from '@material-ui/core';
import Move from './Move';
import { theme } from '../theme';

const HistoryBar = ({history,onClick})=>{
    
    return (
        <>
            <motion.div className = "histbar"> {/* animate={{x:-10 ,scale:1.1}} */}
                <ThemeProvider theme={theme}>
                    <Card style = { {backgroundColor: '#cdb4db'} }>
                        <h3>History</h3>
                        <div className="history">
                            {history.map((_step, move) => {
                                const destination = move ? `Go to move #${move}` : "Go to Start";
                                return (
                                    <Move key={move} destination={destination} onClick={() => onClick(move)}/>
                                );
                            })}
                        </div>
                    </Card>
                </ThemeProvider>
            </motion.div>

        </>
    )
}

export default HistoryBar;