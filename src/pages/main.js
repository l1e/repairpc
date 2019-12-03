import React,{Fragment,Component} from 'react';
import '../style/Main.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Service from "./parts/Service";
import ContactForm from "./parts/ContactForm";
import Welcome from "./parts/Welcome";

class Main extends  Component{
    render(){
        return(
            <Fragment>
                <Welcome />
                <div className="section-services section">
                    <Container >
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'>Наши услуги</h2>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service/>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service/>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ContactForm />
            </Fragment>
        )
    }
}

export default Main;
