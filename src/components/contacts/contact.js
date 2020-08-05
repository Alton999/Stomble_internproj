import React from 'react';
import Navbar from'../navbar/navbar';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
     form: {
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         position: 'absolute'
     },
     button: {
         marginTop: '1rem',
         color: 'tomato',
         borderColor: 'tomato'
     }
}))

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '& .Mui-focused fieldset': {
                borderColor: 'tan'
            }
        },
        

    },
})(TextField);

const Contacts = () => {
    const classes = useStyles()
    return(
        <>
            <Navbar/>
            <Box component='div' style={{background: '#233', height: '100vh'}}> 
                <Grid container justify='center'>
                    <Box component='form' className={classes.form}>
                        <Typography variant='h5' style={{color: 'tomato', textAlign: 'center', textTransform: 'uppercase'}}>
                            Hire or contact me
                        </Typography>
                        <InputField fullWidth={true} label='Name' variant='outlined' margin='dense' size='medium' inputProps={{style: {color: 'white'}}}/>
                        <br/>
                        <InputField fullWidth={true} label='Email' variant='outlined' margin='dense' size='medium' inputProps={{style: {color: 'white'}}}/>
                        <br/>
                        <InputField fullWidth={true} label='Company Name' variant='outlined' margin='dense' size='medium' inputProps={{style: {color: 'white'}}}/>
                        <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>}>Contact Me</Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contacts;