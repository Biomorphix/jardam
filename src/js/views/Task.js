import React from 'react';
import { Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap';
import makeTemplate from '../services/makeTemplate';

export default class Task extends React.Component {
    render () {
       return makeTemplate (
            <Grid> 
                <Row>
                    <Col md={6}>
                        <h3>Название</h3>
                        <a> статус </a>
                        <a> статус </a>
                        <a> статус </a>
                        <a> статус </a>
                    </Col>
                    <Col md={2}>
                        <h3>500som</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <div className="map"></div>
                    </Col>
                    <Col md={3}>
                        <p> Заказчик Чынгыз </p>
                        <Image src="../../img/thumbnail.png" />
                        <p> Отзывы </p>
                        <p> Лайки </p>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={3}>
                        <p> Адрес </p>
                    </Col>
                    <Col md={6}>
                        <p> Сов скряб </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p> Описание </p>
                    </Col>
                    <Col md={6}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ad veniam culpa dolorum officiis excepturi, labore tenetur. Provident consequuntur nam in pariatur qui, non delectus libero maiores, incidunt molestias sit. </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p> Дата </p>
                    </Col>
                    <Col md={6}>
                        <p> Дата </p>
                    </Col>
                </Row>
                <button>Предложить себя</button>
            </Grid>
        )
    }
}