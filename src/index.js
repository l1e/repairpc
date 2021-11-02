import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from  'react-redux'
import {createStore} from 'redux';

import * as firebase from 'firebase';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import firebaseConfig from './config/firebase';

import allReducers from './store/reducer';

import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {}

const rrfProps = {
    firebase,
    config: {
        userProfile: "home"
    },
    dispatch: store.dispatch
};





ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
