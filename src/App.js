import React, {Fragment} from 'react';
import {BrowserRouter  as Router ,Route, Switch} from "react-router-dom";
import './style/App.css';
import './style/BootstrapSettings.sass';

import Header from './component/Header';
import Footer from "./component/Footer";

import Main from './pages/Main';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceSingle from "./pages/ServiceSingle";

function App() {
  return (
      <Router>
          <Fragment>
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
                    <Route path="/ServiceSingle">
                        <ServiceSingle/>
                    </Route>
                 </Switch>
              <Footer />
          </Fragment>
      </Router>
  );
}

export default App;
