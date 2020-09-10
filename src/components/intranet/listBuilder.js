import React, {Component} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {TextField, Button, Card, Avatar, Box, Typography} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import person1 from './avatar/robbie.png'



const styles = theme => ({
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
});

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '& .Mui-focused fieldset': {
                borderColor: 'tan'
            }
        },
    },
})(TextField);

class ListBuilder extends Component {
    state= {
        names: ['Alton', 'Gladys']
    }
    
    addPerson() {
        this.setState({names: [...this.state.names, ' ']})
    }
    handleChange(e, index) {
        this.state.names[index] = e.target.value
        this.setState({names: this.state.names})
    }
    render() {
        const {classes} = this.props
        return (
            <div>
                <h1>Names list</h1>
                <ul>
                    {this.state.names.map((person, index)=> {
                        return(
                            <>
                            <Card key={index} className={classes.employeeCard}>
                                <Avatar alt='dev1' src={person1} className={classes.cardAvatar}/>
                        <Typography variant='h5' className={classes.personName}>{person}</Typography>
                                <Box className={classes.attendenceButtons}>
                                    <Button className={classes.individualButton}>
                                        <DoneAllOutlinedIcon fontSize='large'/>
                                    </Button>
                                    <Button className={classes.individualButton}>
                                        <ClearIcon  fontSize='large'/>
                                    </Button>
                                </Box>                  
                            </Card>    
                            <input value={person} onChange={(e) => this.handleChange(e, index)}></input>                  
                            </>        
                        ) 
                    })}
                    <button onClick={(e) => this.addPerson(e)}>Add person</button>
                </ul>
            </div>
        )
    }
}
export default withStyles(styles, {withTheme: true})(ListBuilder);