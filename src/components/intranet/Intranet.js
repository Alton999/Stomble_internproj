import React, {useState} from 'react';
import {Box, Grid, Card, CardActionArea, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, TextField, IconButton} from '@material-ui/core' 
import {makeStyles, withStyles} from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';
import ClearIcon from '@material-ui/icons/Clear';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Navbar from '../navbar/navbar'
import Typed  from 'react-typed';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import person1 from './avatar/robbie.png'
import { connect } from 'react-redux';
import * as actionTypes from './store/redux/types'


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: '#ecf0f1',
        height: '100%',
        paddingTop: '2rem',
        color: '#34495e'
    },
    headerContainer: {
        textAlign: 'center',
        backgroundColor: '#fa923f',
        color: 'white',
        padding: '0.5rem 0'
    },
    header: {
        fontSize: '2.3rem'
    },
    mainContent: {
        height: '100%',
        marginLeft: '1rem'
    },
    teamContainer: {
        margin: '1rem 2rem'
    },
    inline: {
        display: 'inline'
    },
    mainContainer2: {
        backgroundColor: 'white'
    },
    cardContainer: {
        margin: '3rem auto'
    },
    employeeCard: {
        display: 'inline-flex',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#ecf0f1',
        color: '#34495e',
        marginBottom: '1rem'
        
    },
    cardAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    },
    personName: {
        marginTop: '0.4rem',
        marginLeft: '1.5rem'
    },
    attendenceButtons: {
        marginLeft: 'auto',
        marginTop: '0.4rem',
        marginRight: '1rem',
        
    },
    individualButton: {
        marginRight: '1rem',
        '&:active': {
            backgroundColor: '#2ecc71',
            color:'white'
        }
    },
    counter: {
        marginLeft: '1rem'
    },
    addTeamMemberButton: {
        margin: '1rem 0.5rem',
        '&:hover': {
            backgroundColor: '#34495e',
            color: 'white'
        }
    },
    addTeamMemberButtonIcon: {
        marginLeft: '1rem'
    }
}))
// const InputField = withStyles({
//     root: {
//         '& label.Mui-focused': {
//             color: 'tomato',
//         },
//         '& label': {
//             color: 'tan'
//         },
//         '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//                 borderColor: 'tan'
//             },
//             '&:hover fieldset': {
//                 borderColor: 'tan'
//             },
//             '& .Mui-focused fieldset': {
//                 borderColor: 'tan'
//             }
//         },
        

//     },
// })(TextField);

const Intranet = (props) => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
                <Box component='header' className={classes.headerContainer}>
                    <Typography className={classes.header}>
                        <Typed strings={['Welcome to the Team Manager!', 'Find out everything to do today!']} typeSpeed={40} backSpeed={60} loop/>
                    </Typography>
                </Box>
            <Box component='div' className={classes.mainContainer}>
                <Grid container justify='center'>
                    <Grid item lg={5}>
                        <Card className={classes.cardContainer}>
                            <CardHeader title='Team 1 Attendence' subheader='21st Aug 2020' action={<IconButton aria-label='settings'><MoreVertIcon/></IconButton>}/>
                            <Card className={classes.employeeCard}>
                                <Avatar alt='dev1' src={person1} className={classes.cardAvatar}/>
                                <Typography variant='h5' className={classes.personName}>Alton Ong</Typography>
                                <Box className={classes.attendenceButtons}>
                                    <Button className={classes.individualButton}>
                                        <DoneAllOutlinedIcon fontSize='large'/>
                                    </Button>
                                    <Button className={classes.individualButton}>
                                        <ClearIcon  fontSize='large'/>
                                    </Button>
                                </Box>               
                            </Card>                          
                            <Box className={classes.counter}>
                                <Typography variant='h6'>Total working today: 10</Typography>
                                <Typography>Total absent today: 10</Typography>
                                <Typography>Total missing: 10</Typography> 
                                <Button className={classes.addTeamMemberButton}>Add Team Member <AddCircleIcon className={classes.addTeamMemberButtonIcon}/></Button>                
                            </Box>    
                            
                            
                        </Card>
                    </Grid>
                    
                </Grid>                          
            </Box>
        </>
    )
}


const mapStateToProps = state => {
    return {
      count: state
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        //This function will be avaliable through this property therefore whenever this property is executed then this dispatch is also gonna be executed
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}), 
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Intranet);
