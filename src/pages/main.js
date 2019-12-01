import React,{Fragment,Component} from 'react';
import '../style/Main.css';
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import imgRepairPc from '../images/services_repairpc.png';
import imgContact from '../images/contact3.png';

class Main extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-one">
                    <Container >
                        <Row>
                            <Col lg='4'>
                                    <h2 className='section-one__title'>
                                        Lorem ipsum dolor sit amet.
                                    </h2>
                                    <p className="section-one__text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusamus accusantium amet assumenda autem commodi deleniti,
                                        dolores eligendi enim eveniet explicabo, iure nihil nisi non quo totam ut vitae,
                                        voluptas voluptatibus?
                                    </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section-services">
                    <Container >
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h1 className='section-services__title'>Наши услуги</h1>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <div className='box'>
                                    <img src={imgRepairPc} alt="" className="box__img"/>
                                    <h2 className="box__title"> Ремон компьютера</h2>
                                    <p className="box__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Beatae dolorem doloribus earum enim,
                                        illum nemo non odio sapiente unde ut veniam veritatis voluptas voluptatum.
                                        Ab amet blanditiis distinctio dolore minima.
                                    </p>
                                    <Link to="/ServiceSingle">
                                        <Button variant="light"> Подробнее</Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <div className='box'>
                                    <img src={imgRepairPc} alt="" className="box__img"/>
                                    <h2 className="box__title"> Ремон компьютера</h2>
                                    <p className="box__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Beatae dolorem doloribus earum enim,
                                        illum nemo non odio sapiente unde ut veniam veritatis voluptas voluptatum.
                                        Ab amet blanditiis distinctio dolore minima.
                                    </p>
                                    <Link to="/ServiceSingle">
                                        <Button variant="light"> Подробнее</Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <div className='box'>
                                    <img src={imgRepairPc} alt="" className="box__img"/>
                                    <h2 className="box__title"> Ремон компьютера</h2>
                                    <p className="box__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Beatae dolorem doloribus earum enim,
                                        illum nemo non odio sapiente unde ut veniam veritatis voluptas voluptatum.
                                        Ab amet blanditiis distinctio dolore minima.
                                    </p>
                                    <Link to="/ServiceSingle">
                                        <Button variant="light"> Подробнее</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
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


export default Main;
