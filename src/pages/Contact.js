import React,{Fragment,Component} from 'react';

import ContactForm from './parts/ContactForm';
import Map from "./parts/Map";

class Contact extends  Component{
    render(){
        return(
            <Fragment>
                <ContactForm isheader='true' titlei18nkey='contact_title' titlei18text='Contact us'/>
                <Map/>
            </Fragment>
        )
    }
}


export default Contact;
