import React,{Fragment,Component} from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import i18n from "../component/i18n";

import {isEmpty, isLoaded} from "react-redux-firebase/";
import {useSelector} from "react-redux";

import Title from './parts/Title';

function ServiceSingle (props){
    let idArticle = props.id;
    let newData ;
    let currentArticle = [];
    const articlesData = useSelector(state => state.base.data.articles);
    const language= useSelector(state=> state.myLang);

    const setCurrentArticle =(props) =>{
        // console.log(props);
        let dataArticle=[];
        let сurrLanguage = language;
        // console.log(сurrLanguage);
        for (let i = 0; i < props.length ; i++){
            // console.log(props[i]);
            if (props[i].id === idArticle){
                if (сurrLanguage === "ru"){
                    // console.log(props[i].ru);
                    dataArticle['title'] = props[i]['ru']['title'];
                    dataArticle['description'] = props[i]['ru']['descr'];

                }else{
                    // console.log(props[i].en);
                    dataArticle['title'] = props[i]['en']['title'];
                    dataArticle['description'] = props[i]['en']['descr'];
                }
            }else {
                // console.log("error");
            }
        }
        currentArticle = dataArticle;
        // console.log(currentArticle);
    };


    if (!isLoaded(articlesData)) {
        // console.log(articlesData);
        return "Loading";
    }
    // Show a message if there are no todos
    if (isEmpty(articlesData)) {
        // console.log(articlesData);
        return "Todo list is empty";
    }
    if (isLoaded(articlesData)) {
        // console.log(Object.values(articlesData));
        newData = Object.values(articlesData);
        // console.log(articlesData['-LmtiQQmQ4bJ1SS5esff']['en']['descr']);
        setCurrentArticle(newData);
        // console.log(newData);
    }
    // console.log(currentArticle);

    return(
            <Fragment>
                <Title isheader='true'  titlei18text={currentArticle.title} headerthree='true'/>

                <Container >
                    <Row >
                        <Col lg='12'>
                            <div className="service-single">
                                {/*{<p className='service-single__title'>{currentArticle.title}</p>}*/}
                                <p className='service-single__desc'> {currentArticle.description} </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
}

// console.log({this.props.params});

export default ServiceSingle;
