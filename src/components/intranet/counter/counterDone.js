import React from 'react';
import Button from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';

// const useStyles = makeStyles({
//     individualButton: {
//         marginRight: '1rem',
//         '&:active': {
//             backgroundColor: '#2ecc71',
//             color:'white'
//         }
//     }
// })
const counterDone = (props) => (
    <div>
        <Button onClick={props.clicked}>
            <DoneAllOutlinedIcon  fontSize='large'/>
        </Button>
    </div>
)
    
    


export default counterDone;