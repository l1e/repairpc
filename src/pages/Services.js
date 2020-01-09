import React,{Fragment} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from './parts/Title';

import ContainerService from "./parts/ContainerService";


function ServicesPrepare (){
        return(
            <Fragment>
                <div className="section-services section">
                    <Title isheader='true' titlei18nkey='services_title' titlei18text='Services'/>
                    <Container >
                        <Row className='boxes'>
                                <ContainerService />
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
}
const Services = withTranslation()(ServicesPrepare);

export default Services;
