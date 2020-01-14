import React,{Fragment} from 'react';
import { withTranslation, Trans } from "react-i18next";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContainerService from "./parts/ContainerService";
import ContactForm from "./parts/ContactForm";
import Welcome from "./parts/Welcome";
import AboutMain from "./parts/AboutMain";
function MainPrepare() {
        return (
            <Fragment>
                <Welcome/>
                <div className="section-services section">
                    <Container>
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'>
                                    <Trans i18nKey="services_title">Наши услуги</Trans>
                                </h2>
                            </Col>
                            <ContainerService backpath='m'  />
                        </Row>
                    </Container>
                </div>
                <AboutMain isheader='false' titlei18nkey='about_title' titlei18text='About Us'/>
                <ContactForm isheader='false' titlei18nkey='contact_title' titlei18text='Contact us'/>
            </Fragment>
        )
}
const Main = withTranslation()(MainPrepare);

export default Main;
