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
        minWidth: '200px',
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
      },
      alignCenter: {
          alignItems: 'center'
      }
      
  }));
  


const ProjectCard = (props) => {
    const classes = useStyles();
    const { avatarSrc, title, subtitle, description, imgSrc } = props;
    return (
        <Card className={classes.root}>
            <CardMedia image={imgSrc} className={classes.media}/>
            <CardHeader
                    avatar={<Avatar src={avatarSrc}/>}
                    action={<IconButton aria-label="settings" className={classes.alignCenter}><ShareIcon /></IconButton>}
                    titleTypographyProps={{variant: 'h6'}}
                    title= {title}
                    subheaderTypographyProps={{variant:'subtitle2'}}
                    subheader={subtitle}
                />
            {/* <CardContent>
                
            </CardContent> */}
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;