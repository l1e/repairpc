import React,{Fragment, useState } from "react";
import {NavLink} from 'react-router-dom';
import { withTranslation, Trans  } from 'react-i18next';
import i18n from '../../component/i18n';

import  {useSelector, useDispatch} from 'react-redux';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import goalImg from '../../images/logo_white.png';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {isEmpty, isLoaded} from "react-redux-firebase";
import {myLang} from "../../store/language/action";

function MenuPrepare (){

    //Here we have two const for collapse menu.
    const [expanded, setExpanded] = useState(false);

    //In this valible i set active language
    let myActiveLanguage ;

    //Set default class for language button
    let statusLanguageRu = 'pasive';
    let statusLanguageEn = 'active';

    //optimize mobile menu
    let displayWidth= window.innerWidth;
    // let mobileMenu = false;

    //create dispatch
    const dispatch = useDispatch();

    //get language from store
    const myStoreLang = useSelector(state => state.myLang);

    //waiting for get language from store
    if (!isLoaded(myStoreLang)) {
        return <Trans i18nKey="language_status_loading">Loading</Trans>;
    }

    // check about existing data in language variable
    if (isEmpty(myStoreLang)) {
        console.log(myStoreLang);
        return <Trans i18nKey="language_status_empty">Language variable is empty or not set</Trans>;
    }

    //set current language and change button class
    if (isLoaded(myStoreLang)) {
        myActiveLanguage = myStoreLang;
        if (myActiveLanguage==='ru'){
            statusLanguageRu= 'active';
            statusLanguageEn= 'pasive';
        }else{
            statusLanguageRu= 'pasive';
            statusLanguageEn= 'active';
        }
    }

    //set mobile
    // if (displayWidth < 993){
    //     mobileMenu = true;
    // }else{
    //     mobileMenu = false;
    // }

    window.addEventListener("resize", ()=>{
        console.log(myActiveLanguage);
        displayWidth = window.innerWidth;

        // if (displayWidth < 993){
        //     mobileMenu = true;
        // }else{
        //     mobileMenu = false;
        // }
        // console.log(mobileMenu);
    });

        //set new active language
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };

        //set new active language label
        const setActiveLanguageLabel = (lang)=>{
            if (lang==='ru'){
                statusLanguageRu= 'active';
                statusLanguageEn= 'pasive';
            }else{
                statusLanguageRu= 'pasive';
                statusLanguageEn= 'active';
            }
        };

        return (
            <Fragment >
                <Container >
                    <Row>
                        <Col>
                            <Navbar
                                    expanded={expanded}  inverse='true' collapseOnSelect={true} expand="md" variant="dark">
                                <Navbar.Brand onClick={() =>{
                                    if (displayWidth < 993){
                                        setExpanded( false)}
                                    }

                                }>
                                    <NavLink
                                        onClick={()=>{
                                            setExpanded(false);
                                        }}
                                        to='/'>
                                        <img className="logo" src={goalImg} alt=""/>
                                    </NavLink>
                                </Navbar.Brand>

                                <Navbar.Toggle
                                    onClick={() =>{
                                        setExpanded(expanded ? false : "expanded")
                                    }}
                                    aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">

                                    <Nav className="ml-auto">
                                        <li className="menu-item">
                                            <NavLink
                                                onClick={()=>{
                                                        setExpanded(false);
                                                }}
                                                eventkey="1"
                                                className="nav-link"
                                                activeClassName={"active"}
                                                exact={true}
                                                to="/">
                                                <Trans i18nKey="menu_main">Main</Trans>
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink
                                                onClick={()=>{
                                                    setExpanded(false);
                                                }}
                                                eventkey="2"
                                                className="nav-link"
                                                activeClassName="active"
                                                to="/Services" >
                                                <Trans i18nKey="menu_serv">Services</Trans>
                                            </NavLink>
                                        </li>

                                        <li className="menu-item">
                                            <NavLink
                                                onClick={()=>{
                                                    setExpanded(false);
                                                }}
                                                eventkey="3"
                                                className="nav-link"
                                                activeClassName="active"
                                                to="/About" >
                                                <Trans i18nKey="menu_about">About</Trans>
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink
                                                onClick={()=>{
                                                    setExpanded(false);
                                                }}
                                                eventkey="3"
                                                className="nav-link"
                                                activeClassName="active"
                                                to="/Price" >
                                                <Trans i18nKey="menu_price">Price</Trans>
                                            </NavLink>
                                        </li>

                                        <li className="menu-item">
                                            <NavLink
                                                onClick={()=>{
                                                    setExpanded(false);
                                                }}
                                                eventkey="4"
                                                className="nav-link"
                                                activeClassName="active"
                                                to="/Contact" >
                                                <Trans i18nKey="menu_cont">Contact </Trans>
                                            </NavLink>
                                        </li>

                                        <Nav className="switch-language">
                                            <Button className={"switch-language__button " + statusLanguageRu}  variant="light"
                                                onClick={() => {
                                                    changeLanguage("ru");
                                                    setActiveLanguageLabel("ru");
                                                    dispatch(myLang('ru'));
                                                }}
                                            >ru</Button >
                                            <Button className={"switch-language__button " + statusLanguageEn} variant="light"
                                                onClick={() => {
                                                    changeLanguage("en");
                                                    setActiveLanguageLabel("en");
                                                    dispatch(myLang('en'));
                                                }}
                                            >en</Button >
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
