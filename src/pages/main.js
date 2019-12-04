import React,{Fragment,Component} from 'react';
import '../style/Main.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Service from "./parts/Service";
import ContactForm from "./parts/ContactForm";
import Welcome from "./parts/Welcome";

class Main extends  Component{
    render(){
        return(
            <Fragment>
                <Welcome />
                <div className="section-services section">
                    <Container >
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'>Наши услуги</h2>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service title='Ремонт Компьютеров' description='Ноутбук, стационарный компьютер или любая другая техника имеет свой рабочий ресурс. Кроме того, на стабильность и качество работы столь сложных систем влияет масса факторов от правильности и своевременности периодического обслуживания до некоторых нюансов эксплуатации.' />
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service title='Компьютерная Помощь' description='Специалисты компании «RepairPc» имеют более 10 лет опыта по обслуживанию компьютерной техники. К Вам приедет именно тот мастер, который быстрее других поможет решить Вашу проблему!'/>
                            </Col>
                            <Col lg='4' md='6' sm='12'>
                                <Service title='Восстановление Данных' description='Если полной уверенности в том, что файлы удалены мимо корзины (комбинацией Shift+Delete) нет, то имеет смысл заглянуть в корзину. Встроенные инструменты вроде строки поиска или сортировки по дате удаления помогут обнаружить удалённый файл, если корзина не была очищена в промежуток времени между удалением и поиском.'/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ContactForm />
            </Fragment>
        )
    }
}

export default Main;
