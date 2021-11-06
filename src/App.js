import React, {Fragment} from 'react';
import {BrowserRouter  as Router ,Route, Switch} from "react-router-dom";

import './style/index.sass';

import './component/i18n';
import {useFirebaseConnect} from "react-redux-firebase";

import  {useDispatch} from 'react-redux';

import Header from '../components/parts/Header';
import Footer from "../components/parts/Footer";
import Admin from "./pages/admin/Admin";


import Main from './pages/Main';
import Services from "./pages/Services";
import Contact from "../pages/contact";
import ConverLink from './component/ConverLink';
import i18n from "./component/i18n";

import {myLang} from './store/language/action';
import About from "./pages/About";

import Price from "./pages/Price";


const todosQuery = {
    path: "articles",
    queryParams: ["limitToLast=10"]
};

function App() {
    useFirebaseConnect(() => [todosQuery]);
    let getCurrLanguage = i18n.language;
    let dispatch  = useDispatch();
    console.log(getCurrLanguage);
    dispatch(myLang(getCurrLanguage));

  return (
    //   <Router>
    //       <Fragment>
    //           <Header />
    //             <Switch>

    //                 <Route exact path='/'>
    //                     <Main />
    //                 </Route>

    //                 <Route path="/services">
    //                   <Services/>
    //                 </Route>

    //                 <Route path="/about">
    //                     <About/>
    //                 </Route>

    //                 <Route path="/contact">
    //                     <Contact/>
    //                 </Route>

    //                 <Route path="/price">
    //                     <Price/>
    //                 </Route>
    //                 <Route path="/admin">
    //                     <Admin/>
    //                 </Route>

    //                 <Route path="/ConverLink/:params">
    //                     <ConverLink/>
    //                 </Route>

    //              </Switch>
    //           <Footer />
    //       </Fragment>
    //   </Router>

    <p>h</p>
  );
}


export default App;
