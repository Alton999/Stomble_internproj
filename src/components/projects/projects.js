//Import the required components
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Avatar, CardHeader} from '@material-ui/core';
import Navbar from '../navbar/navbar'; 
import G20IMG from '../images/g20IMG.jpg';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Typed from 'react-typed' 

//CSS Styles
const useStyles = makeStyles(theme => ({
    //Styles for intro section
    introContainer: {
        backgroundColor: '#130f40',
        height: '100%', 
    },
    introHeader: {
        fontSize: '2.2rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'light',
        color: '#f6e58d',
        paddingTop: '3rem'
    },
    introSubheader: {
        color: '#ff7979',
        fontSize: '1.6rem',
        textAlign: 'center',
        fontWeight: 'light'
    },
    introContent: {
        color: '#eb4d4b',
        margin: '0 10%',
        fontSize: '1.4rem',
        paddingTop: '3rem',
        textAlign: 'center'
    },
    //Styles for card section
    datasciCard: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    webdevCard: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    mainContainer: {
        backgroundColor: '#130f40',
        height: '100%',
    },
    cardContainer: {
        maxWidth: 450,
        margin: '3rem auto'
    },
    cardContent: {
        fontSize: '0.9rem',
        marginBottom: '0.5rem'
    },
    subHeading: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '0.4rem'
    }
}))


const Projects = () => {
    const classes = useStyles();
    return (   
        <>
        <Navbar/>
        <Box component='header' className={classes.introContainer}>
            <Box>
                <Typography className={classes.introHeader}>Projects Archive</Typography>
                <Typography className={classes.introSubheader}>
                    <Typed strings={['Welcome to my projects archive...']} typeSpeed={40}/>
                </Typography>
                <Typography className={classes.introContent}>Here you can find all the things I've worked on as well as the things I inspire to work on. Each of these projects are of varying difficulties and requires different skills that I have worked on over the course of my career.</Typography>
            </Box>
        </Box>
        <Box component='div'>
            <Grid container justify='center' className={classes.mainContainer}>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card className={classes.cardContainer}>
                        <CardHeader 
                            avatar=
                            {<Avatar aria-label='Data Science' className={classes.webdevCard}>
                                D
                            </Avatar>} 
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title= "G20 Text Analysis"
                            titleTypographyProps= {{variant: 'h5'}}
                            subheader= "Date Completed: Aug 2019"
                        />   
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="250"
                            image={G20IMG}
                        /> 
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.cardContent} component='p'>
                                    Every few years leaders throughout the globe meet for a summit to discuss world issues. The recent G20 Summit held in Osaka commenced on the 28th Jun 2019. This is the few times that every leader in the world so most of the global issues will be covered during this meeting. Things such as world hunger, third world poverty and climate change are all common topics for this summit. 
                                </Typography>
                                <br/>
                                <Typography className={classes.subHeading} color="textSecondary" component='p'>
                                    How did programming help us?
                                </Typography>
                                <Typography className={classes.cardContent} component='p'>
                                    This was such a wide scale event covered by almost every main country such as Japan, Korea, USA, Australia just to name a few. This would mean that thousands of news outlets across the world would release articles on this particular event. Reading a few articles would possibly provide a biased report as each country would report good news/reports on their respective countries. How do we eliminate this and find a trend or average between thousands of reports without reading a single article? This is when Data Science truly shines.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                See More
                            </Button>
                            <Button size='small' color='secondary'>
                                Code Repository 
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card className={classes.cardContainer}>
                        <CardHeader 
                            avatar=
                            {<Avatar aria-label='Data Science' className={classes.webdevCard}>
                                D
                            </Avatar>} 
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title= "Algotrading Financial Analysis"
                            titleTypographyProps= {{variant: 'h5'}}
                            subheader= "Date Completed: Dec 2019"
                        />   
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="270"
                            image={G20IMG}
                        /> 
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.cardContent} component='p'>
                                    Understanding the economics world and stock market used to be extremely difficult. Often the people that master these topics are highly educated with Postgraduate degrees or a minimum of a bachelor studying this field specifically. This meant that people who wanted to invest in stocks or shares had to go through an agent or professional in order to invest. 
                                </Typography>
                                <br/>
                                <Typography className={classes.subHeading} color="textSecondary" component='p'>
                                    How did the use of programming eliminate this issue?
                                </Typography>
                                <Typography className={classes.cardContent} component='p'>
                                    What if we're able to collect and do all the difficult analysis work for the people through code? Collect and present the data in a way that normal people without masters in economics can understand and make their own decisions through basic technical analysis? Through code it is possible to collect decades worth of historical company data and plot and analyse the data to predict at which points is the best to make a stock purchase. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                See More
                            </Button>
                            <Button size='small' color='secondary'>
                                Code Repository 
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card className={classes.cardContainer}>
                        <CardHeader 
                            avatar=
                            {<Avatar aria-label='Data Science' className={classes.webdevCard}>
                                D
                            </Avatar>} 
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title= "Google Play Store Analysis"
                            titleTypographyProps= {{variant: 'h5'}}
                            subheader= "Date Completed: Aug 2019"
                        />   
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height="360"
                            image={G20IMG}
                        /> 
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.cardContent} component='p'>
                                    Have you ever wondered what the most popular apps are in the play store? What kinds of apps are the most downloaded or reviewed? Is it photo editing apps, dating apps or games? This project took a step forward in analysisng what was going on in Google's android playstore!
                                </Typography>
                                <br/>
                                <Typography className={classes.subHeading} color="textSecondary" component='p'>
                                    Why did we have to use programming and how was this considered Data Science?
                                </Typography>
                                <Typography className={classes.cardContent} component='p'>
                                    It is possible to find out what was going on in the playstore by looking through the actual playstore but how much of that content is filtered and positioned in a manipulative way for users to make purchases? All these issues can be eliminated simply by using a dataset which is exactly what we did!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                See More
                            </Button>
                            <Button size='small' color='secondary'>
                                Code Repository 
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>   
        </>
        );
  }
  
  export default Projects;

