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
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>Jun 2018</Typography>
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
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>May 2019</Typography>
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
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>Jul 2019</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Uplevel project
                        </Typography>
                        <Typography variant="body1" style={{color: 'tomato'}}>
                            G20 Summit Analysis (Text analysis)
                        </Typography>
                        <Typography variant="subtitle1" style={{color: 'tan'}}>
                            This is where I found great sense of purpose and where I found a home.
                        </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>Aug 2019</Typography>
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
                    
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>2017</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Mern Stack
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: 'tomato'}}>
                            Company name where worked
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: 'tan'}}>
                            This is where I found great sense of purpose and where I found a home.
                        </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timelineYear} ${classes.timelineItem}`}>2018-2020</Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Current knowledge
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: 'tomato'}}>
                            Company name where worked
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: 'tan'}}>
                            This is where I found great sense of purpose and where I found a home.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default About;