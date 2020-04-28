import React,{Fragment} from 'react';
import { withTranslation, Trans } from "react-i18next";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContainerService from "./parts/ContainerService";
import ContactForm from "./parts/ContactForm";
import Welcome from "./parts/Welcome";
import About__main from "./parts/About__main";
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
                            <ContainerService />
                        </Row>
                    </Container>
                </div>
                <About__main/>
                <ContactForm/>
            </Fragment>
        )
}
const Main = withTranslation()(MainPrepare);

export default Main;