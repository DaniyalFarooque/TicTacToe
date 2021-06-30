import React from "react";
import {Button, ThemeProvider} from '@material-ui/core';
import { motion } from "framer-motion";
import { theme } from '../theme';

const Move = ({ destination, onClick}) => {
    // console.log(move);
    return (
        <>
            <div>
                <ThemeProvider theme={theme}>
                    <Button 
                        style = {{ 
                            background: '#006d77'
                        }}  
                        onClick = {onClick}
                        component = {motion.div}
                        whileHover = {{
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                        whileTap = {{ scale: 0.9 }}
                    >
                        {destination} 
                    </Button>
                </ThemeProvider>
            </div>
        </>
    )
}

export default Move;
