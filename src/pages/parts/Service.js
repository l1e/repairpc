import React,{Fragment,Component} from 'react';
import i18n from "../../component/i18n";

import '../../style/Service.css';

import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import imgRepairPc from '../../images/services_repairpc.webp';
import { Trans, withTranslation  } from 'react-i18next';

function ServicePrepare(){
    console.log(this.props.myLang);
    // constructor(props){
    //     super(props);
    //     let getCurrLanguage = i18n.language;
    //     this.state={lang: getCurrLanguage}
    // }
    //
    // componentDidMount(){
    //     let getCurrLanguage = i18n.language;
    //     if (getCurrLanguage ==='ru'){
    //         this.setState(
    //             {
    //                 lang: 'ru',
    //             }
    //         );
    //     }else {
    //         this.setState(
    //             {
    //                 lang: 'en',
    //             }
    //         );
    //     }
    //     console.log('Component remount');
    //
    // }
    // componentWillUnmount() {
    //     console.log('Component remount fro,m componentWillUnmount');
    // }
        // console.log(this.props.articles);
        return(
            <Fragment>
                {
                    this.props.articles.map((item, index) => {
                    return (
                        <Col key={index} lg='4' md='6' sm='12'>
                            <div className='box' >
                                <img src={imgRepairPc} alt="" className="box__img"/>
                                <h3 className="box__title">

                                    {this.props.lang === "ru" ? (
                                        item.ru.title
                                    ) : (
                                        item.en.title
                                    )}
                                    </h3>
                                <p className="box__description">
                                    {this.props.lang === "ru" ? (
                                        item.ru.descr
                                    ) : (
                                        item.en.descr
                                    )}
                                </p>
                                <Link to={"ConverLink/"+item.id} id={item.id}>
                                    <Button className='box__button' variant="primary"> <Trans i18nKey="services_detailed">Наши услуги</Trans></Button>
                                </Link>
                            </div>
                        </Col>
                    );
                })};
            </Fragment>
        )
}
const Service = withTranslation()(ServicePrepare);

export default Service;
