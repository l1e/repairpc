import React,{Fragment,Component} from 'react';
import i18n from "../../component/i18n";


import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import imgRepairPc from '../../images/services_repairpc.webp';
import { Trans, withTranslation  } from 'react-i18next';

function ServicePrepare(props){
    const cutStringToValue =(string) =>{
        if (string.length > 200){
            let newString= string.slice(0, 200);
            return newString + '...';
        } else{
            return string;
        }
    };

    let myActiveLanguage = props.lang;
    let backpath= props.backpath;
    // console.log(myActiveLanguage);
        return(
            <Fragment>{
                    props.articles.map((item, index) => {
                    return (
                            <Col key={index} lg='4' md='6' sm='12'>
                                <div className='box' >
                                    <img src={imgRepairPc} alt="" className="box__img"/>
                                    <h3 className="box__title">

                                        {myActiveLanguage === "ru" ? (
                                            item.ru.title
                                        ) : (
                                            item.en.title
                                        )}
                                        </h3>
                                    <p className="box__description">
                                        {myActiveLanguage === "ru" ? (
                                            cutStringToValue(item.ru.descr)
                                        ) : (
                                            cutStringToValue(item.en.descr)
                                        )}
                                    </p>
                                    <Link to={"ConverLink/"+item.id+backpath} id={item.id} >
                                        <Button className='box__button' variant="primary"> <Trans i18nKey="services_detailed">Наши услуги</Trans></Button>
                                    </Link>
                                </div>
                            </Col>
                        );
                    })
                };
            </Fragment>
        )
}
const Service = withTranslation()(ServicePrepare);

export default Service;
