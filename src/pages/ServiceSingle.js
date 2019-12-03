import React,{Fragment,Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ServiceSingle extends  Component{
    render(){
        return(
            <Fragment>
                <Container >
                    <Row >
                        <Col lg='12'>
                            <p>Услуги подробнее</p>
                            <p>{this.props.name}</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}


export default ServiceSingle;
