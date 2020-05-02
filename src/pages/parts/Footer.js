import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
            <footer className="footer">
                <Container >
                    <Row>
                        <Col>
                            <p className="footer_year">
                                Copyright © 2020
                            </p>
                            <p className="footer__prone">
                                <a href="mailto:myemail@example.com">myemail@example.com</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}

export default Footer;
