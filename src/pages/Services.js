import React,{Fragment,Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Service from "./parts/Service";
class Services extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-services section">
                    <Container >
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'>Наши услуги</h2>
                            </Col>

                            <Col lg='4' md='6' sm='12'>
                                <Service name='sicret'/>
                            </Col>

                            <Col lg='4' md='6' sm='12'>
                                <Service name='sicret' />
                            </Col>

                            <Col lg='4' md='6' sm='12'>
                                <Service name='sicret' />
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service name='sicret' />
                            </Col>

                            <Col lg='4' md='6' sm='12'>
                                <Service name='sicret' />
                            </Col>

                            <Col lg='4' md='6' sm='12'>
                                <Service name='sicret' />
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
    }
}


export default Services;
