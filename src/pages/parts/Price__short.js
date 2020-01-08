import React,{Fragment,Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { withTranslation, Trans  } from 'react-i18next';

class Price__shortPrepare extends  Component{
    render(){
        return(
            <Fragment>
                <div className="section-price section">
                    <Container >
                        <Row>
                            <Col lg='12'>
                                <h2 className='section-price__title section-title'>
                                    <Trans i18nKey="price_title">Прайс</Trans>
                                </h2>
                                 <div className="price">
                                     <div className="price-label">
                                         <div className="price-label__name">
                                             <p className="price-label__text">
                                                 <Trans i18nKey="price_label_name">Services</Trans>
                                             </p>
                                         </div>
                                         <div className="price-label__price">
                                             <p className="price-label__text">
                                                 <Trans i18nKey="price_label_cost">Cost</Trans>
                                             </p>
                                         </div>
                                     </div>
                                     <div className="price__data">
                                         <div className="price-row">
                                             <div className="price-row__name">
                                                 <p className="price-row__text"> Service 1</p>
                                             </div>
                                             <div className="price-row__price">
                                                 <p className="price-row__text"> 22</p>
                                             </div>
                                         </div>
                                         <div className="price-row">
                                             <div className="price-row__name">
                                                 <p className="price-row__text"> Service 2</p>
                                             </div>
                                             <div className="price-row__price">
                                                 <p className="price-row__text"> 32</p>
                                             </div>
                                         </div>
                                         <div className="price-row">
                                             <div className="price-row__name">
                                                 <p className="price-row__text"> Service 3</p>
                                             </div>
                                             <div className="price-row__price">
                                                 <p className="price-row__text"> 42</p>
                                             </div>
                                         </div>
                                         <div className="price-row">
                                             <div className="price-row__name">
                                                 <p className="price-row__text"> Service 5</p>
                                             </div>
                                             <div className="price-row__price">
                                                 <p className="price-row__text"> 52</p>
                                             </div>
                                         </div>
                                         <div className="price-row">
                                             <div className="price-row__name">
                                                 <p className="price-row__text"> Service 6</p>
                                             </div>
                                             <div className="price-row__price">
                                                 <p className="price-row__text"> 62</p>
                                             </div>
                                         </div>
                                         <div className="price-row">
                                             <div className="price-row__name">
                                                 <p className="price-row__text"> Service 7</p>
                                             </div>
                                             <div className="price-row__price">
                                                 <p className="price-row__text"> 72</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        )
    }
}

const Price__short = withTranslation()(Price__shortPrepare);

export default Price__short;
