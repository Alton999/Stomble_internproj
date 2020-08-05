//Import the required components
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';
import Navbar from '../navbar/navbar'; 
import G20IMG from '../images/g20IMG.jpg'

//CSS Styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#223',
        height: '100%',

    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
    
}))


const Projects = () => {
    const classes = useStyles();
    return (   
        <Box component='div' className={classes.mainContainer}>
            <Navbar/>
            
            <Grid container justify='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 1"
                                height="140"
                                image={G20IMG}
                            /> 
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component='p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 2"
                                height="140"
                                image={G20IMG}
                            /> 
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component='p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 3"
                                height="140"
                                image={G20IMG}
                            /> 
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component='p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 4"
                                height="140"
                                image={G20IMG}
                            /> 
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component='p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>



        
        
        );
  }
  
  export default Projects;

