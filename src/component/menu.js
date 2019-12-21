import React,{Fragment, useState } from "react";
import {NavLink} from 'react-router-dom';
import { withTranslation, Trans  } from 'react-i18next';
import i18n from './i18n';

import '../style/Menu.css';

import  {useSelector, useDispatch} from 'react-redux';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import goalImg from '../images/logo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import createHistory from 'history/createBrowserHistory'
import {isEmpty, isLoaded} from "react-redux-firebase";
import {myLang} from "../store/language/action";
const history = createHistory();


function MenuPrepare (){
    //Here we have two const for collapse menu.
    const [expanded, setExpanded] = useState(false);
    let myActiveLanguage ;
    let buttonRu = 'pasive';
    let buttonEn = 'active';
    const dispatch = useDispatch();
    const myStoreLang = useSelector(state => state.myLang);
    if (!isLoaded(myStoreLang)) {
        console.log(myStoreLang);
        return "Loading";
    }
    // Show a message if there are no todos
    if (isEmpty(myStoreLang)) {
        console.log(myStoreLang);
        return "Todo list is empty";
    }

    if (isLoaded(myStoreLang)) {
        // console.log(Object.values(articlesData));
        myActiveLanguage = myStoreLang;
        if (myActiveLanguage==='ru'){
            buttonRu= 'active';
            buttonEn= 'pasive';
        }else{
            buttonRu= 'pasive';
            buttonEn= 'active';
        }
        // console.log(articlesData['-LmtiQQmQ4bJ1SS5esff']['en']['descr']);
    }
    console.log(myActiveLanguage);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         buttonRu: 'pasive',
    //         buttonEn: 'active'
    //     };
    // }
    //
    // componentDidMount(){
    //     let getCurrLanguage = i18n.language;
    //
    //     if (getCurrLanguage ==='ru'){
    //         this.setState(
    //             {
    //              buttonRu: 'active',
    //              buttonEn: 'pasive'
    //             }
    //         )
    //     }
    //
    // }

        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
            // this.forceUpdate();
            // appHistory.push('/');
            // history.go(0);
        };
        const changeActive = (lang)=>{
            console.log('active lang is:'+lang);
            if (lang==='ru'){
                buttonRu= 'active';
                buttonEn= 'pasive';
            }else{
                buttonRu= 'pasive';
                buttonEn= 'active';
            }
        };
        return (
            <Fragment >
                <Container >
                    <Row>
                        <Col>
                            <Navbar onClick={() => setExpanded(expanded ? false : "expanded")} expanded={expanded}  inverse='true' collapseOnSelect={true} expand="lg" >
                                <Navbar.Brand >
                                    <NavLink onClick={()=>{setExpanded(false)}}  to='/'>
                                        <img className="logo" src={goalImg} alt=""/>
                                    </NavLink>
                                </Navbar.Brand>

                                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">

                                    <Nav className="ml-auto">
                                        <li className="menu-item">
                                            <NavLink onClick={()=>{setExpanded(false)}} eventKey="1"  className="nav-link" activeClassName={"active"} exact={true} to="/">
                                                <Trans i18nKey="menu_main">Главная</Trans>
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink onClick={()=>{setExpanded(false)}}  eventKey="2" className="nav-link" activeClassName="active" to="/Services" >
                                                <Trans i18nKey="menu_serv">Услуги</Trans>
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink onClick={()=>{setExpanded(false)}} eventKey="3"  className="nav-link" activeClassName="active" to="/Contact" >
                                                <Trans i18nKey="menu_cont">Контакты </Trans>
                                            </NavLink>
                                        </li>

                                        <Nav className="switch-language">
                                            <Button className={buttonRu}  variant="light" onClick={() =>
                                            {changeLanguage("ru");
                                             changeActive("ru");
                                             dispatch(myLang('ru'));
                                            }
                                            }>ru</Button >
                                            <Button className={buttonEn} variant="light" onClick={() =>
                                            {changeLanguage("en");
                                             changeActive("en");
                                             dispatch(myLang('en'));
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
const Menu = withTranslation()(MenuPrepare);

export default Menu;
