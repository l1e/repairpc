import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/Footer.css';
function Footer() {
    return (
            <footer className="footer">
                <Container >
                    <Row>
                        <p className="footer_year">
                            © 2019
                        </p>
                    </Row>
                </Container>
            </footer>
    )
}

export default Footer;
