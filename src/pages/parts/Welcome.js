import React,{Fragment,Component} from 'react';
import '../../style/Welcome.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { withTranslation, Trans } from "react-i18next";
import i18n from "../../component/i18n";

class  WelcomePrepare extends React.Component{
    render(){
        const { t } = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        return(
            <Fragment>
                <div className="section-one">
                    <Container >
                        <Row>
                            <Col lg='4'>
                                <h2 className='section-one__title '>
                                    <Trans i18nKey="welcome_title"></Trans>
                                </h2>
                                <p className="section-one__text">
                                    <Trans i18nKey="welcome_desc"></Trans>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

const Welcome = withTranslation()(WelcomePrepare);

export default Welcome;
