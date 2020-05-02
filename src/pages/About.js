import React,{Fragment,Component} from 'react';

import AboutMain from "./parts/AboutMain";
import AboutDesc from "./parts/AboutDesc";

class About extends  Component{
    render(){
        return(
            <Fragment>
                <AboutMain isheader='true' titlei18nkey='about_title' titlei18text='About Us' />
                <AboutDesc/>
            </Fragment>
        )
    }
}


export default About;
