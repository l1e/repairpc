import React,{Fragment} from 'react';

import {useParams} from "react-router-dom";
import ServiceSingle from "../pages/ServiceSingle";

import {  withTranslation  } from 'react-i18next';

function  ConvertLinkPRepare (){
        let { id } = useParams();
        //Here i get data from link and send them to render page.
        // console.log(id);

        return(
            <Fragment>
                <ServiceSingle id={id} />
            </Fragment>
        )
}

const ConvertLink = withTranslation()(ConvertLinkPRepare);

export default ConvertLink;
