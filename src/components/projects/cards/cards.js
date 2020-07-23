import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Divider, Avatar, Container} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    dividerStyle: {
        marginBottom: '1rem',
        marginTop: '1rem'
    },
    headerStyles: {
        fontSize: '0.8rem'
    },
    paragraphStyles: {
        marginBottom: '1rem'
    },
    avatarStyles: {
        // flex: '1',
        marginLeft: 'auto',
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500]
    },
    inlineFlexContent: {
        display: "flex"
    },
  }));
  
const ProjectCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Container className={classes.inlineFlexContent}>
                    <Typography variant="h4">
                        G20 Text Analysis
                    </Typography>
                    <Avatar className={classes.avatarStyles}>D</Avatar>
                </Container>
            <Divider className={classes.dividerStyle}/>
            <Typography variant="h6" component="h2" className={classes.paragraphStyles}>
                What was this project about?
            </Typography>
            <Typography className ={classes.paragraphStyles}>
                This was an extremely interesting project that involved the use of Python's amazing Pandas framework. The goal of this project was to 
                analyse what was going on during the G20 world summit. It was easy and very possible to to get the general idea of the topics that were 
                discussed by reading one or two news articles but how about thousands of articles? This is where it gets intersting...
            </Typography>
            <Typography variant="h6" className = {classes.paragraphStyles}>
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