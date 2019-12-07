import React,{Fragment} from "react";
import {NavLink} from 'react-router-dom';
import { withTranslation, Trans  } from 'react-i18next';
import i18n from './i18n';

import '../style/Menu.css';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import goalImg from '../images/logo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class MenuPrepare extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonRu: 'pasive',
            buttonEn: 'active'
        };
    }

    componentDidMount(){
        let getCurrLanguage = i18n.language;

        if (getCurrLanguage ==='ru'){
            this.setState(
                {
                 buttonRu: 'active',
                 buttonEn: 'pasive'
                }
            )
        }

    }

    render(){
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
            this.forceUpdate();
        };
        const changeActive = (lang)=>{
            console.log('active lang is:'+lang);
            if (lang==='ru'){
                this.setState(
                    {
                        buttonRu: 'active',
                        buttonEn: 'pasive'
                    }
                )
            }else{
                this.setState(
                    {
                        buttonRu: 'pasive',
                        buttonEn: 'active'
                    }
                )
            }
        };
        return (
            <Fragment >
                <Container >
                    <Row>
                        <Col>
                            <Navbar  inverse='true' collapseOnSelect expand="lg" >
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
                                            <NavLink className="nav-link" activeClassName="active" to="/Contact" ><Trans i18nKey="menu_cont">Контакты </Trans> </NavLink>
                                        </li>
                                        <Nav className="switch-language">
                                            <Button className={this.state.buttonRu}  variant="light" onClick={() =>
                                            {changeLanguage("ru");
                                                changeActive("ru");
                                            }
                                            }>ru</Button >
                                            <Button className={this.state.buttonEn} variant="light" onClick={() =>
                                            {changeLanguage("en");
                                                changeActive("en");
                                            }
                                            }>en</Button >
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
}
const Menu = withTranslation()(MenuPrepare);

export default Menu;
