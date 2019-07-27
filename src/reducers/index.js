
//import function to combine all reducers
import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    emailInput: postReducer
})