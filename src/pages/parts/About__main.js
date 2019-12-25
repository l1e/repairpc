import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../style/About.css';

import aboutFace from '../../images/face.jpg';
import aboutCertificate from '../../images/certificate.jpg';

class About__mainPrepare extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-bout section">
                    <Container >
                        <Row>
                            <Col md='12' lg='12'>
                                <h2 className='section-about__title section-title'>
                                    <Trans i18nKey="about_title">О нас</Trans>
                                </h2>
                            </Col>
                            <Col md='12' lg='6' >
                                <Row className="about_biography-inner">
                                    <Col className="about_biography-inner__image" md='5' lg='5'>
                                        <img src={aboutFace} className="about__face" />
                                    </Col>
                                    <Col md='7' lg='7' className="about_biography-inner__bio" >
                                        <p className="about_biography">
                                            <Trans i18nKey="about_presonal_name">Nissim Ezra</Trans>
                                        </p>
                                        <p className="about_biography">
                                             <Trans i18nKey="about_presonal_specialize">Electronic & IT Technician</Trans>
                                        </p>
                                        <p className="about_biography">
                                             <Trans i18nKey="about_presonal_phone">Phone 514-967-5255</Trans>
                                        </p>
                                        <p className="about_biography">
                                             <Trans i18nKey="about_presonal_address">Adress: 5501 Av Adalbert</Trans>
                                        </p>
                                        <p className="about_biography">
                                             <Trans i18nKey="about_presonal_office">Office: 1518</Trans>
                                        </p>
                                        <p className="about_biography">
                                            <Trans i18nKey="about_presonal_street"> Cote Saint Luc H4W 2B1</Trans>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md='12' lg='6'>
                                <Row>
                                    <Col md='6' lg='6'>
                                        <img src={aboutCertificate} className="about__certificate" />
                                    </Col>
                                    <Col md='6' lg='6'>
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
const About__main = withTranslation()(About__mainPrepare);

export default About__main;
