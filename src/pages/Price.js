import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Price__short from  './parts/Price__short';

class Price extends  Component{
    render(){
        return(
            <Fragment>
                <Price__short/>
            </Fragment>
        )
    }
}


export default Price;
