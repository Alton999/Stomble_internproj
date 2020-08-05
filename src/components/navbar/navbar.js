import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, ListItem, IconButton, ListItemText,  Divider, List,  Box, ListItemIcon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import Footer from '../footer'

// import classes from '*.module.css';
// CSS STYLES
const useStyles = makeStyles((theme)=> ({
    hiddenMenuContainer: {
        width: 250,
        background: '#27ae60',
        height: "100%",
        paddingTop: '5rem'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: '#ecf0f1'
    },
    
}))

//Menu Links which would be an array of objects
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "About Me",
        listPath: "/about"

    },
    {
        listIcon: <Apps/>,
        listText: "See our projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact us",
        listPath: '/contact'
    }
]
//Main Content for Navbar
const Navbar = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false
    })
    //toggleSlider cerates the animation for the sidebar
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    //Generates the contents of the sidebar
    const sideList = slider => (
        <Box className = {classes.hiddenMenuContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
            <Divider/>
            <List>
                {/* Calls different object values from the previously constructed object */}
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component ={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}   
            </List>
            <Divider/>
        </Box>
    )
    return (
        <>
        {/* This component includes the navbar with styling and triggers the slider menu to come out */}
        {/* Since there wasn't much styling under the navbar having the styles in here temporarily is fine */}
        <Box component="nav">
            <AppBar position="static" style={{background: "#2c3e50"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}>
                        <ArrowBack style={{color: '#f1c40f'}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: '#ecf0f1'}}>
                        See more
                    </Typography>
                    <MobileRightMenuSlider
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider('right', false)}
                    > {sideList('right')}
                    <Footer/>
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
};

export default Navbar;