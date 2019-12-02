import React,{Fragment,Component} from 'react';
import '../../style/Welcome.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Welcome extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-one">
                    <Container >
                        <Row>
                            <Col lg='4'>
                                <h2 className='section-one__title'>
                                    Lorem ipsum dolor sit amet.
                                </h2>
                                <p className="section-one__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus accusantium amet assumenda autem commodi deleniti,
                                    dolores eligendi enim eveniet explicabo, iure nihil nisi non quo totam ut vitae,
                                    voluptas voluptatibus?
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Welcome;
