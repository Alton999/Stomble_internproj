import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Divider, Avatar, Container} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import ShareIcon from'@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
// import g20IMG from '/cardImages/scott-graham-5fNmWej4tAA-unsplash.jpg';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '700px'
    },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      media: {
          height: "350px"
      },
      headerTitle: {
          fontSize: '1em'
      }
  }));
  
const cardInfo = [
    {
        projectName: 'G20 Text Analysis',
        projectClass: 'D',
        projectDescription: "There were many ways of understanding news articles, one could be simply reading newspapers, blogging about it online or even talking about it with your peers. What we wanted to do was the analyse thousands of different articles from different sources and this was when programming really came in handy.",
        imageUrl: '/cardImages/scott-graham-5fNmWej4tAA-unsplash'
    }
]

const ProjectCard = (props) => {
    const classes = useStyles();
    const { avatarSrc, title, subtitle, description, imgSrc } = props;
    return (
        <Card className={classes.root}>
            <CardHeader
                    avatar={<Avatar src={avatarSrc}/>}
                    action={<IconButton aria-label="settings"><ShareIcon /></IconButton>}
                    title= {title}
                    subheader={subtitle}
                />
            <CardMedia image={imgSrc} className={classes.media}/>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;