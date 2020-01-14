import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PriceShort from './parts/PriceShort';

class Price extends  Component{
    render(){
        return(
            <Fragment>
                <PriceShort isheader='true' titlei18nkey='price_title' titlei18text='Price'/>
            </Fragment>
        )
    }
}


export default Price;
