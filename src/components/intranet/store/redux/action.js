import * as Types from './types'

export const incrementCounter = (count) => ({
    type: Types.INCREMENT,
    payload: count
});