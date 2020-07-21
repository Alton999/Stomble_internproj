
//Import the required components
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Grid} from '@material-ui/core';
import Navbar from '../navbar/navbar'; 
import ProjectCard from './cards/cards';
import AlgoProjectCard from './cards/algoCard';

//CSS Styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#34495e",
        color: "#ecf0f1",
        textAlign: "center",
        height: '130vh'
    },
    mainHeader: {
        paddingTop: '2rem',
        paddingBottom: '1rem',
        color: "#1abc9c",
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    subHeader: {
        fontSize: '2rem',
        fontWeight: 'light',
        color: "#2ecc71",
        paddingBottom: '2rem',
    },
    cardMargin: {
        margin: 'auto'
    }
    
}))
const Projects = () => {
    const classes = useStyles();
    return (   
        <> 
        <Navbar/>
        <Box component="header" className ={classes.mainContainer}>
            <Typography className={classes.mainHeader}>Past Projects</Typography>
            <Box component ="div">
            <Typography className={classes.subHeader}>Data Science Projects</Typography>
                {/* Here will the the different project cards */}
                
                <Grid container spacing={3}>
                    <Grid item xs={false} sm={1}></Grid>
                    <Grid item xs={12} sm={5}>
                        <ProjectCard className={classes.cardMargin}/>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <AlgoProjectCard className={classes.cardMargin}/>
                    </Grid>
                    <Grid item xs={false} sm={1}></Grid>
                </Grid>
            </Box>
        </Box>
        
        </>
        );
  }
  
  export default Projects;

