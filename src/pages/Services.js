import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {db} from '../config/firebaseConfig';

import Service from "./parts/Service";

let articlesDb = db.ref('/articles');


class ServicesPrepare extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        articlesDb.on('value', snapshot => {
            let data = snapshot.val();
            console.log(data);
            let articles = Object.values(data);
            this.setState({ articles });
            console.log(this.state.articles);

        });

    };

    render(){
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

                                <Service articles={this.state.articles} />
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
    }
}
const Services = withTranslation()(ServicesPrepare);

export default Services;
