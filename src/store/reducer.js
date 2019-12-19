
import {combineReducers} from 'redux';
import { reducer as firebasee } from "react-redux-firebase";
import {myLangReducer,setMyLangReducer} from './language/reducer';

const allReducers = combineReducers({
    base:  firebasee,
    myLang: myLangReducer,
    setLang: setMyLangReducer
});

export default allReducers;
