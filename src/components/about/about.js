import React from 'react';
import Navbar from '../navbar/navbar';
import {Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: '#34495e'
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
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: '50%',
                right:  'auto'
            }
        }
    },
    timelineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: '50%',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float:'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before': {
                right:'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    timelineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before' : {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            "&:nth-of-type(2n):before": {
                display: 'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '1.5rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    },
    intro: {
        marginBottom: '1rem',
        fontSize: '1rem',
        color: '#ecf0f1',
        padding: '0 3rem'
    }

}))

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>Timeline</Typography>
                <Typography variant="body1" className={classes.intro}>
                    As an individual with a strong passion for technology I started to learn how to code back in 2018 and that was where this amazing journey all started. I am currently still a student at the University of Sydney studying Design Computing which consist of a good mix between program and well thought of designs.
                </Typography>
                <Box component="div" className={classes.timeline}>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>JUN 2018</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Basics of programming
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            How I started?
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            This was where I was first introduced to programming by a good friend of mine. He introduced me to the books `The Little Schemer` and `Programming for the puzzled` where I got hands on experience with how to solve puzzles using code and the basics of recursion.
                        </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>MAY 2019</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Data Science with Python
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            Completed Hackwagon Singapore's DS101: Introduction to Python Programming course
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            Achieved a distinction grade in the introduction to Python course. This course was design to teach the basics of Python and the applications of Python to create simple loops and conditionals. Although this was extremely basic it has created a strong foundation for which I continued to work on to solve more advanced problems.
                        </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>JUL 2019</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Uplevel project
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            G20 Summit (Text Analysis)
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            In this group project I managed to apply all the knowledge from the course into this real world project. Every few years all the world leaders gather for a meeting to discuss world issues and we wanted to understand the main topics that were discussed and how news articles throughout the world was reporting this. To do this we used NewsRiver to collect and collate thousands of news articles, filtered the responses and performed text analysis and sentiment analysis and the findings were quite interesting.
                        </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>AUG 2019</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Data Science with Python
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            Completed Hackwagon Singapore's DS102: Data Analytics with Pandas
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            This course taught more practical applications of Python in the Data Science industry. We used Python's pandas library along with matplotlib to gather, filter and analyse large datasets through the use of loops and list manipulations. We then used matplotlib to graph the different conclusions that were made. In this course as a group of 3 we were tasked to derive a conclusion with different datasets and in this case we chose a google play store dataset. 
                        </Typography>
                    </Box>
                    
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>DEC 2019</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Data Science with Python
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            Algo Trading (Financial Analysis) 
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            The goal of this project was to analyse different shares and stocks in the stock market by collecting historical company finance data. We collected about 20 years worth of historical data on my chosen company (DBS Bank Singapore) using the Oanda API. We plotted the data found with Matplotlib and was able to apply basic technical analysis on the trends found.  We also collected buy and sell signals and performed a test of investing $10000 into this share. This not only gave us a prediction on whether in the long term this would have returned money or would have lost us money with no risk at all.
                        </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>2020 -></Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Frontend Web Development
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            FoodLoose Website
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            After learning data science and Python I soon realised that I needed a way to display and showcase the findings so I brushed up my front end skills to develop websites with no backend capabilities yet. This way I was able to present my findings and interesting points through a blog.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default About;