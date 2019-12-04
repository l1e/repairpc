import React,{Fragment,Component} from 'react';

import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../../style/Service.css';

import imgRepairPc from '../../images/services_repairpc.png';
class Service extends  Component{
    render(props){
        return(
            <Fragment>
                <div className='box'>
                    <img src={imgRepairPc} alt="" className="box__img"/>
                    <h3 className="box__title">{this.props.title}</h3>
                    <p className="box__description">
                        {this.props.description}
                    </p>
                    <Link to="/ServiceSingle">
                        <Button className='box__button' variant="primary"> Подробнее</Button>
                    </Link>
                </div>

            </Fragment>
        )
    }
}


export default Service;
