//This is completely hard coded, should create project objects that passes in the repetitive details like steps project name. This program was intended to 
//be the portfolio where I can easily add new or upcoming projects to this site through inputs.

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'
import {Divider} from '@material-ui/core';

//This is where we store our styles for each class method in the component
const useStyles = makeStyles({
    dividerStyle: {
        marginBottom: '1rem',
        marginTop: '1rem'
    },
    headerStyles: {
        fontSize: '1.3rem'
    },
    paragraphStyles: {
        marginBottom: '1rem'
    }
  });
  
const AlgoProjectCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
            <Typography variant="h4">
                Algo Trading financials
            </Typography>
            <CardMedia src="/imgs/fabio-oyXis2kALVg-unsplash" title="g20"/>
            <Divider className={classes.dividerStyle}/>
            <Typography variant="h4" component="h2" className={classes.paragraphStyles}>
                What was this project about?
            </Typography>
            <Typography className ={classes.paragraphStyles}>
                Everyday the stock markets are going up and down and for a while it was a passion to understand how the market works. What better way to do that
                then to code a program and that predict your gains and loses? Through this project I created buy and sell signals to indicate in which point in time
                was the best point of purchase. This may not seem very interesting yet but once we trained machine learning models and predicted the next few years
                using computing prowess... that's when it got really interesting!
            </Typography>
            <Typography variant="h4" className = {classes.paragraphStyles}>
                Steps we took:
            </Typography>
            <Typography variant="h6">
                1. Call the Oanda API and input the query string to gather the objects for a specific company and 
                <br/>
                <br/>
                2. Store and sort all the collected data to a Pandas framework.
                <br/>
                <br/>
                3. Sorted and filtered unnecessary data
                <br/>
                <br/>
                4. Imagine if we had invested $10000 and use that to calculate the daily returns(%) without compounding
                <br/>
                <br/>
                5. Plot a smoothed time graph to produce gain the general trend of that specific company
                <br/>
                <br/>
                6. Generate buy and sell signals based on the smoothing
                <br/>
                <br/>
                6. Run the program through the machine learning algorithm to get the future predictions
                
            </Typography>
            <Typography>
                If you're interested to find out more about the success and flow of this project, hit me up at my contacts page!
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default AlgoProjectCard;