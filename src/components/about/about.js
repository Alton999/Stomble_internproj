import React from 'react';
import Navbar from '../navbar/navbar';
import {Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    mainContainer: {
        background: '#233'
    },
    timeline: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        }
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center">Work experience</Typography>
                <Box component="div" className={classes.timeline}>
                    <Typography variant ="h2">2013</Typography>
                </Box>
            </Box>
        </>
    )
}

export default About;