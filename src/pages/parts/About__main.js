import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../style/About.css';

import aboutFace from '../../images/face.jpg';
import aboutCertificate from '../../images/certificate.jpg';

class About__main extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-bout section">
                    <Container >
                        <Row>
                            <Col lg='12'>
                                <h2 className='section-about__title section-title'>
                                    <Trans i18nKey="about_title">О нас</Trans>
                                </h2>
                            </Col>
                            <Col lg='6'>
                                <Row>
                                    <Col lg='5'>
                                        <img src={aboutFace} className="about__face" />
                                    </Col>
                                    <Col lg='7'>
                                        <p className="about_biography">Nissim Ezra</p>
                                        <p className="about_biography">Electronic & IT Technician</p>
                                        <p className="about_biography">Phone 514-967-5255</p>
                                        <p className="about_biography">Adress: 5501 Av Adalbert</p>
                                        <p className="about_biography">Office: 1518</p>
                                        <p className="about_biography">Cote Saint Luc H4W 2B1</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg='6'>
                                <Row>
                                    <Col lg='6'>
                                        <img src={aboutCertificate} className="about__certificate" />
                                    </Col>
                                    <Col lg='6'>
                                        <img src={aboutCertificate} className="about__certificate" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
    }
}


export default About__main;
