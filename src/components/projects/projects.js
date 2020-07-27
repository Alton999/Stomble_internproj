
//Import the required components
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Grid} from '@material-ui/core';
import Navbar from '../navbar/navbar'; 
import ProjectCard from './cards/cards';
import DataAvatar from './cards/cardImages/data-science.svg';
import G20IMG from './cards/cardImages/g20IMG.jpg';

// import AlgoProjectCard from './cards/algoCard';

//CSS Styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        color: "#ecf0f1",
        // textAlign: "center",
        height: '130vh'
    },
    mainHeader: {
        paddingTop: '2rem',
        paddingBottom: '1rem',
        color: "#ecf0f1",
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subHeader: {
        fontSize: '2rem',
        fontWeight: 'light',
        color: "#bdc3c7",
        paddingBottom: '1rem',
        textAlign: 'center'
    },
    cardMargin: {
        paddingLeft: '10%',
        paddingRIght: '10%',
        maxWidth: '95%'
    }
    
}))
const Projects = () => {
    const classes = useStyles();
    return (   
        <> 
        <Navbar/>
        <Box component="header" className ={classes.mainContainer}>
            <Typography className={classes.mainHeader}>All Past Projects</Typography>
            <Box component ="div">
            <Typography className={classes.subHeader}>Data Science Projects</Typography>
                {/* Here will the the different project cards */} 
                <Grid container spacing={2} className = {classes.cardMargin} justify="center">
                    {/* Empty grid container to add auto margins along the sides */}
                    {/* We still need to turn each card into a changable component using inputs */}
                    <Grid item xs={12} lg={6}>
                        <ProjectCard title={'G20 Text Analysis'} subtitle={'Data Science'} description={''} avatarSrc={DataAvatar} imgSrc={G20IMG}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <ProjectCard title={'G20 Text Analysis'} subtitle={'Data Science'} description={''} avatarSrc={DataAvatar} imgSrc={G20IMG}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <ProjectCard title={'G20 Text Analysis'} subtitle={'Data Science'} description={''} avatarSrc={DataAvatar} imgSrc={G20IMG}/>
                    </Grid>
                </Grid>

            </Box>
        </Box>
        
        </>
        );
  }
  
  export default Projects;

