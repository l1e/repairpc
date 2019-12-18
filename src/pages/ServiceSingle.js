import React,{Fragment,Component} from 'react';
import '../style/ServiceSingle.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {db} from '../config/firebaseConfig';
import i18n from "../component/i18n";
let articlesDb = db.ref('/articles');

class ServiceSingle extends  Component{

    constructor(props){
        super(props);
        this.state={article: ''}
    };

    setCurrentArticle =(props) =>{
        let dataArticle=[];
        let сurrLanguage = i18n.language;
        for (let i = 0; i < props.length ; i++){
            // console.log(props[i]);
            if (props[i].id === this.props.id){
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
        this.setState({article:dataArticle});
    };

    componentDidMount () {
        articlesDb.on('value', snapshot => {
            let data = snapshot.val();
            let article = Object.values(data);
            this.setCurrentArticle(article);
        });
    }
    render(){
        return(
            <Fragment>
                <Container >
                    <Row >
                        <Col lg='12'>
                            <div className="service-single">
                                <p className='service-single__title'>{this.state.article.title}</p>
                                <p className='service-single__desc'> {this.state.article.description} </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

// console.log({this.props.params});

export default ServiceSingle;
