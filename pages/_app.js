import {Provider} from  'react-redux'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as firebase from 'firebase';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import firebaseConfig from '../src/config/firebase';

import allReducers from '../src/store/reducer';

import '../styles/index.sass';


import '../src/component/i18n';
import {useFirebaseConnect} from "react-redux-firebase";

import  {useDispatch} from 'react-redux';

import i18n from '../src/component/i18n';

const todosQuery = {
  path: "articles",
  queryParams: ["limitToLast=10"]
};


function MyApp({ Component, pageProps }) {




  let store = createStore(allReducers,
    composeWithDevTools(applyMiddleware()));
    
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

  return (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
      <Component {...pageProps} />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default MyApp


