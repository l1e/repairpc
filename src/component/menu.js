import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React,{Fragment} from "react";
import '../style/Menu.css';
import goalImg from '../images/logo.png';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useTranslation, Trans } from "react-i18next";
import i18n from './i18n';

function Menu() {
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    const { t, i18n } = useTranslation();
    return (
        <Fragment >
            <Container >
                <Row>
                    <Col>
                        <Navbar inverse fluid collapseOnSelect expand="lg" >
                            <Navbar.Brand >
                                <NavLink  to='/'>
                                    <img className="logo" src={goalImg} alt=""/>
                                </NavLink>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="ml-auto">
                                    <li className="menu-item">
                                        <NavLink className="nav-link" activeClassName={"active"} exact={true} to="/"><Trans i18nKey="menu_main">Главная</Trans></NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/Services" ><Trans i18nKey="menu_serv">Услуги</Trans></NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/Contact" ><Trans i18nKey="menu_cont">Контакты</Trans></NavLink>
                                    </li>
                                    <Nav className="switch-language">
                                        <Button  variant="light" onClick={() => changeLanguage("ru")}>ru</Button >
                                        <Button  variant="light" onClick={() => changeLanguage("en")}>en</Button >
                                    </Nav>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Menu;
