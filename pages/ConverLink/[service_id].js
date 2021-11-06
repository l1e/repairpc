import React,{Fragment, useState, useEffect} from 'react';

import {useParams} from "react-router-dom";

import { useRouter } from 'next/router';


import ServiceSingle from "../../components/parts/ServiceSingle";

import {useSelector} from "react-redux";


import {  withTranslation  } from 'react-i18next';

import * as firebase from 'firebase';


import firebaseConfig from '../../src/config/firebase';

import Layout from "../../components/layouts/Layout";

export default function Index({page_id,backpath}) {


    console.log(page_id);
    console.log(backpath);
    let getBackpath = backpath;

    const [myArticles, setArticles] = useState('');

    // if (!firebase.apps.length) {
    //     firebase.initializeApp({});
    //  }else {
    //     firebase.app(); // if already initialized, use that one
    //  }


    //  let articlesDb = firebase.database().ref('/articles');
    // let articles= [];

    // useEffect(() => {
    //     articlesDb.on('value', snapshot => {
    //         let data = snapshot.val();
    //         articles = Object.values(data);
    //         setArticles( articles );
    //         console.log(articles);
    //     });
    //   }, []);




    console.log(myArticles)


        // let { params } = useParams();

        // const router = useRouter();

        // let service_id = router.query.service_id;
        // //Here i get data from link and send them to render page.
        // console.log(service_id);

        let id = (page_id !== undefined ? page_id.slice(0, -1): 1 )  ;
        // let getBackpath = (service_id !== undefined ? service_id.charAt(service_id.length-1) : 1 );
        // let backpath = 0;
        // console.log(getBackpath) ;
            if (getBackpath.includes('m')===true){
                // console.log('from main Page');
                backpath = '/';
            }else {
                // console.log('from main Part');
                backpath = '/services';
    
    
            }

    return(
        <Layout>
            <Fragment>
                <ServiceSingle id={id} backpath={backpath}  />
            </Fragment>
        </Layout>

        )
}

export async function getServerSideProps(context) {


    // firebase.initializeApp(firebaseConfig);

    // console.log(context.params);



    const data = ['hey loalye', 'kerrewrdsvxcvds'];

    // const articlesData = useSelector(state => state.base.data.articles);

    // console.log(articlesData);
  
    return {
      props: {
        page_id: context.params.service_id,
        backpath: '/'
    }
  }
}
