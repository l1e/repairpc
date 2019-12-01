import React from 'react';
import {BrowserRouter  as Router ,Route, Switch} from "react-router-dom";
import './style/App.css';
import './style/BootstrapSettings.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './component/Header';

import Main from './pages/Main';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

function App() {
  return (
      <Router>
          <Header />
          <Container >
              <Row>
                  <Col>
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
                    </Col>
                </Row>
          </Container>
          <Footer />
      </Router>
  );
}

export default App;
