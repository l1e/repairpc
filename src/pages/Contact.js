import React,{Fragment,Component} from 'react';

import ContactForm from './parts/ContactForm';
import Map from "./parts/Map";

class Contact extends  Component{
    render(){
        return(
            <Fragment>
                <ContactForm/>
                <Map/>
            </Fragment>
        )
    }
}


export default Contact;
