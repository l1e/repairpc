import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import '../style/Menu.css';
import goalImg from '../images/logo.png';
import {NavLink} from 'react-router-dom';

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
    )
}

export default Menu;
