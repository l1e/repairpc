import React,{Fragment} from 'react';

import {useParams} from "react-router-dom";
import ServiceSingle from "../pages/ServiceSingle";

import {  withTranslation  } from 'react-i18next';


function  ConvertLinkPrepare (){
        let { params } = useParams();
        //Here i get data from link and send them to render page.
        // console.log(params);

        let id =  params.slice(0, -1);
        let getBackpath = params.charAt(params.length-1);
        let backpath = 0;
        console.log(getBackpath) ;
        if (getBackpath.includes('m')===true){
            // console.log('from main Page');
            backpath = '/';
        }else {
            // console.log('from main Part');
            backpath = '/Services';


        }
    return(
            <Fragment>
                <ServiceSingle id={id} backpath={backpath} />
            </Fragment>
        )
}

const ConvertLink = withTranslation()(ConvertLinkPrepare);

export default ConvertLink;
