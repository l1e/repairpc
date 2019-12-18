import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Service from "./parts/Service";

import {isLoaded, isEmpty} from "react-redux-firebase";
import  {useSelector} from 'react-redux';

function ServicesPrepare (){
    let newData ;
    const articlesData = useSelector(state => state.base.data.articles);

    if (!isLoaded(articlesData)) {
        console.log(articlesData);
        return "Loading";
    }
    // Show a message if there are no todos
    if (isEmpty(articlesData)) {
        console.log(articlesData);
        return "Todo list is empty";
    }
    if (isLoaded(articlesData)) {
        console.log(Object.values(articlesData));
        newData = Object.values(articlesData);
        console.log(articlesData['-LmtiQQmQ4bJ1SS5esff']['en']['descr']);
    }

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

                                <Service articles={newData} />
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
}
const Services = withTranslation()(ServicesPrepare);

export default Services;
