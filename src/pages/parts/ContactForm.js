import React,{Fragment,Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imgContact from '../../images/contact3.png';
import Form from 'react-bootstrap/Form';


import '../../style/ContactForm.css';

class ContactForm extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-contact section">
                    <Container >
                        <Row >
                            <Col lg='12'>
                                <h2 className='section-contact__title section-title'>Свяжитесь с нами</h2>
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
                                            <Form.Label>Почта</Form.Label>
                                            <Form.Control type="email" placeholder="Введите имейл" />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label>Номер телефона</Form.Label>
                                            <Form.Control type="number" placeholder="Ваш номер телефона" />
                                        </Form.Group>
                                        <Button className='contact-form__button' variant="primary" type="submit">
                                            Отправить
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


export default ContactForm;
