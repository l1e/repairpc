import React,{Fragment,Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imgContact from '../images/contact3.png';
import Form from 'react-bootstrap/Form';


import '../style/Menu.css';

class Contact extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-contact">
                    <Container >
                        <Row >
                            <Col lg='12'>
                                <h2 className='section-contact__title'>Contact us</h2>
                            </Col>
                            <Col lg='6'>
                                <div className="contact-left">
                                    <img className='contact-left__img' src={imgContact} alt=""/>
                                </div>
                            </Col>

                            <Col lg='6'>
                                <div className="contact">
                                    <p className="contact__title">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum dolor, dolorem hic in qui repudiandae suscipit ullam voluptas!  Accusamus debitis deleniti eveniet excepturi in laborum, libero provident quae voluptatem.
                                    </p>

                                    <Form className='contact-form'>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button className='contact-form__button' variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}


export default Contact;
