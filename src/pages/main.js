import React,{Fragment,Component} from 'react';
import { withTranslation, Trans } from "react-i18next";

import '../style/Main.css';
import {db} from "../config/firebaseConfig";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Service from "./parts/Service";
import ContactForm from "./parts/ContactForm";
import Welcome from "./parts/Welcome";

let articlesDb = db.ref('/articles');

class MainPrepare extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        articlesDb.on('value', snapshot => {
            let data = snapshot.val();
            let articles = Object.values(data);
            this.setState({ articles });
            console.log(this.state.articles);
        });

    };

    render(){
        return(
            <Fragment>
                <Welcome />
                <div className="section-services section">
                    <Container >
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'><Trans i18nKey="services_title">Наши услуги</Trans></h2>
                            </Col>
                            <Service articles={this.state.articles} />
                        </Row>
                    </Container>
                </div>
                <ContactForm />
            </Fragment>
        )
    }
}
const Main = withTranslation()(MainPrepare);

export default Main;
