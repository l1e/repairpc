import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import '../style/Menu.css';
import goalImg from '../images/logo.png';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Menu() {
    return (
        <Container >
            <Row>
                <Col>
                    <Navbar inverse fluid collapseOnSelect expand="lg" >
                        <Navbar.Brand href="/">
                            <img className="logo" src={goalImg} alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <li className="menu-item">
                                    <NavLink className="nav-link" activeClassName={"active"} exact={true} to="/">Главная</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/Services" >Услуги</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/Contact" >Контакты</NavLink>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;
