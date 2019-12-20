import React,{Fragment} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContainerService from "./parts/ContainerService";


function ServicesPrepare (){
        return(
            <Fragment>
                <div className="section-services section">
                    <Container >
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'>
                                    <Trans i18nKey="services_detailed">Наши услуги</Trans>
                                </h2>
                            </Col>
                                <ContainerService/>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
}
const Services = withTranslation()(ServicesPrepare);

export default Services;
