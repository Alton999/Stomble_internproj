import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: '0px',
            maxWidth: '250px'
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '1.8rem'
            }
        }
    },
})

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width='auto' style={{background: '#222'}}>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<FacebookIcon/>}/>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<TwitterIcon/>}/>
            <BottomNavigationAction className={classes.root}  style={{padding: 0}} icon={<InstagramIcon/>}/>
                 
        </BottomNavigation>
    )
}

export default Footer