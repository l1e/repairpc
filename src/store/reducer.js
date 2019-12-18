
import {combineReducers} from 'redux'
import { reducer as firebasee } from "react-redux-firebase";
import myLangReducer from './language/reducer'

const allReducers = combineReducers({
    base:  firebasee,
    lang: myLangReducer
});

export default allReducers;
