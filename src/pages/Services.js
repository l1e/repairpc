import React,{Fragment,Component} from 'react';

import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../style/Menu.css';

import imgRepairPc from '../images/services_repairpc.png';
class Services extends  Component{
    render(){
        return(
            <Fragment>
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

            </Fragment>
        )
    }
}


export default Services;
