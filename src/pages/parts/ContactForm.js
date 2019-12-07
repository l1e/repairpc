import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imgContact from '../../images/contact3.png';
import Form from 'react-bootstrap/Form';


import '../../style/ContactForm.css';

class ContactFormPrepare extends  Component{
    render(){

        const { t } = this.props;
        return(
            <Fragment>
                <div className="section-contact section">
                    <Container >
                        <Row >
                            <Col lg='12'>
                                <h2 className='section-contact__title section-title'><Trans i18nKey="contact_title">Contact us</Trans></h2>
                            </Col>
                            <Col lg='6'>
                                <div className="contact-left">
                                    <img className='contact-left__img' src={imgContact} alt=""/>
                                </div>
                            </Col>

                            <Col lg='6'>
                                <div className="contact">
                                    <p className="contact__title">
                                        <Trans i18nKey="contact_desc">We perform a full range of services in the field of smartphone repair in Kiev. We carry out a detailed diagnosis of the device, identify the failure and its degree, and advise the client.</Trans>
                                    </p>

                                    <Form className='contact-form'>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label><Trans i18nKey="contact_label_email">Почта</Trans></Form.Label>
                                            <Form.Control type="email" placeholder={t('contact_placeholder_email')} />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label><Trans i18nKey="contact_label_phone">Номер телефона</Trans></Form.Label>
                                            <Form.Control type="number" placeholder={t('contact_placeholder_phone')} />
                                        </Form.Group>
                                        <Button className='contact-form__button' variant="primary" type="submit">
                                            <Trans i18nKey="contact_submit">Отправить</Trans>
                                        </Button>
                                    </Form>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
const ContactForm = withTranslation()(ContactFormPrepare);

export default ContactForm;
