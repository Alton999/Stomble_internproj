//import actions
import * as Types from './types';

// Initial state
const initState = {
    count: 0,
    
}

// Reducer
const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        // Sets the values for the search
        case Types.INCREMENT: {
            return { ...state, count: payload }
        }
        default: {
            return state
        }
    }

}

export default reducer;
