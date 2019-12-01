import React from 'react';
import {BrowserRouter  as Router ,Route, Switch} from "react-router-dom";
import './App.css';
import './style/BootstrapSettings.sass';

import Header from './component/Header';

import Main from './pages/Main';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
              <Main />
          </Route>
            <Route path="/Services">
              <Services/>
            </Route>
            <Route path="/Contact">
                <Contact/>
            </Route>
        </Switch>
          <Footer />
      </Router>
  );
}

export default App;
