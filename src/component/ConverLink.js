import React,{Fragment} from 'react';

import {useParams} from "react-router-dom";
import ServiceSingle from "../pages/ServiceSingle";

import {  withTranslation  } from 'react-i18next';


function  ConvertLinkPRepare (){
        let { params } = useParams();
        //Here i get data from link and send them to render page.
        console.log(params);

        let id =  params.slice(0, -1);
        let getBackpath = params.charAt(params.length-1);
        let backppath = 0;
        console.log(getBackpath) ;
        if (getBackpath.includes('m')===true){
            // console.log('from main Page');
            backppath = '/';
        }else {
            // console.log('from main Part');
            backppath = '/Services';


        }
    return(
            <Fragment>
                <ServiceSingle id={id} backppath={backppath} />
            </Fragment>
        )
}

const ConvertLink = withTranslation()(ConvertLinkPRepare);

export default ConvertLink;
