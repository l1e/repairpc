import React,{Fragment,Component} from 'react';

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
