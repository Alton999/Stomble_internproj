import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'
import {Divider} from '@material-ui/core';

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
  
const ProjectCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
            <Typography variant="h4">
                G20 Text Analysis
            </Typography>
            <CardMedia src="/imgs/fabio-oyXis2kALVg-unsplash" title="g20"/>
            <Divider className={classes.dividerStyle}/>
            <Typography variant="h4" component="h2" className={classes.paragraphStyles}>
                What was this project about?
            </Typography>
            <Typography className ={classes.paragraphStyles}>
                This was an extremely interesting project that involved the use of Python's amazing Pandas framework. The goal of this project was to 
                analyse what was going on during the G20 world summit. It was easy and very possible to to get the general idea of the topics that were 
                discussed by reading one or two news articles but how about thousands of articles? This is where it gets intersting...
            </Typography>
            <Typography variant="h4" className = {classes.paragraphStyles}>
                Steps we took:
            </Typography>
            <Typography variant="h6">
                1. Call API to collect news articles from new outlets.
                <br/>
                <br/>
                2. Store and sort all the collected data to a Pandas framework.
                <br/>
                <br/>
                3. Sorted and filtered unnecessary data
                <br/>
                <br/>
                4. Extracted each word from each article and appended to an array
                <br/>
                <br/>
                5. Removed all duplicate and unnecessary words
                <br/>
                <br/>
                6. Generated word cloud with the most common "topic" words
                <br/>
                <br/>
                7. Sentiment analysis on every word reported
                <br/>
                <br/>
                8. Plot with matplot.lib the overall compound score
                <br/>
                <br/>
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

export default ProjectCard;