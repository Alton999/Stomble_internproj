import React from 'react';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import avatar from './img/robbie.png';
//This creates an interesting typing animation from Typed.
import Typed from 'react-typed';

//CSS Styles 
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "#bdc3c7",
        fontSize: '2.5rem'
    },
    subtitle: {
        color: '#ecf0f1',
        fontSize: '2rem',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: "absolute",
        //These 3 times centers the contents to the middle
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1,
        // width: "100vw",
        textAlign: "center",

    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Alton Ong"/>
            </Grid>
            
            <Typography className={classes.title} variant="h4">
                Alton Ong
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={['Front-end', 'Javascript', 'Data Analytics']} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
        </Box>
    )
}

export default Home;