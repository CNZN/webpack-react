import {combineReducers} from 'redux';

function name (state = null, action)  {

    switch (action.type) {
        case 'HOME_NAME':
            return action.payload
        default:
            return state
    }
}

function age (state = null, action)  {
    console.log(action);
    switch (action.type) {
        case 'HOME_AGE':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    name,
    age
})