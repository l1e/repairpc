import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import aboutFace from '../images/face.jpg';
import aboutCertificate from '../images/certificate.jpg';
import About__main from "./parts/About__main";
import About__desc from "./parts/About_desc";

class About extends  Component{
    render(){
        return(
            <Fragment>
                <About__main />
                <About__desc/>
            </Fragment>
        )
    }
}


export default About;
