import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';
import useForm from 'react-hook-form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imgContact from '../../images/contact3.webp';
import Form from 'react-bootstrap/Form';
import Title from './Title';

function ContactFormPrepare (props){
    const { register, handleSubmit, errors } = useForm({
        // by setting validateCriteriaMode to 'all',
        // all validation errors for single field will display at once
        validateCriteriaMode: "all"
    }); // initialise the hook
    const onSubmit = data => {
        console.log(data);
    };
        const { t } = props;
        return(
            <Fragment>
                <div className="section-contact section">

                    <Title isheader={props.isheader} titlei18nkey={props.titlei18nkey} titlei18text={props.titlei18text}/>
                    <Container >
                        <Row >
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

                                    <Form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label><Trans i18nKey="contact_label_email">Почта</Trans></Form.Label>
                                            <Form.Control name="email" ref={register({ required: true, minLength: 5, maxLength: 30 })} type="email" placeholder={t('contact_placeholder_email')} />
                                            <p className="error">
                                                {errors.email && errors.email.types.required && (<Trans i18nKey="contact_error_email_required">Почтовый адрес является обязательным</Trans>)}
                                                {errors.email && errors.email.types.minLength && (<Trans i18nKey="contact_error_email_minlenght">Минимальное количество символов 5</Trans>)}
                                                {errors.email && errors.email.types.maxLength && (<Trans i18nKey="contact_error_email_maxlenght">Максимальное количество символов 30</Trans>)}
                                                </p>
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label><Trans i18nKey="contact_label_phone">Номер телефона</Trans></Form.Label>
                                            <Form.Control name="phone" ref={register({ required: true, minLength: 10, maxLength: 13 })} type="tel"  placeholder={t('contact_placeholder_phone')} />
                                            <p className="error">
                                                {errors.phone && errors.phone.types.required && (<Trans i18nKey="contact_error_phone_required">Почтовый адрес является обязательным</Trans>)}
                                                {errors.phone && errors.phone.types.minLength && (<Trans i18nKey="contact_error_phone_minlenght">Минимальное количество символов 10</Trans>)}
                                                {errors.phone && errors.phone.types.maxLength && (<Trans i18nKey="contact_error_phone_maxlenght">Максимальное количество символов 13</Trans>)}
                                            </p>
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
const ContactForm = withTranslation()(ContactFormPrepare);

export default ContactForm;
