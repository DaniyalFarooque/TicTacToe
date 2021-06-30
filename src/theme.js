import { createMuiTheme } from "@material-ui/core";

//Create a theme instance
export const theme = createMuiTheme({
    
    typography:{
        fontFamily:"Benne",
        body2:{
            fontFamily:"Benne"
        }
    },
    shape:{
        borderRadius: "0.5rem"
    },
    overrides:{
        MuiButton:{
            root:{
                variant: 'contained',
                size: 'large',
                color: 'white',
                margin: '0.75rem',
            },
        },
        MuiCard:{
            root:{
                alignContent: 'center',
                display: 'block',
                height:'450px',
                width: '22rem',
                borderRadius: '1rem',
                backgroundColor: '#e9d8a6',
            }
        }, 
        MuiToggleButton:{
            root:{
                color: 'grey',
                backgroundColor: 'white',
                // '&:focus': {
                //     color: 'grey',
                //     backgroundColor: 'grey'
                // },
            }
        },
    }
});