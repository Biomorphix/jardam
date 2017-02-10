import React from 'react';
import { Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap';
import makeTemplate from '../services/makeTemplate';

export default class Notifications extends React.Component {
    render() {
        return makeTemplate(
            <Grid>
                <h3>Уведомления</h3>
                <Row>
                    <Col md={3}>
                        <h4>Мы вас берем</h4>
                    </Col>
                    <Col md={3}>
                        <p>Задача №13123123</p>
                    </Col>
                    <Col md={2}>
                        <a> Author </a>
                    </Col>
                    <Col md={2}>
                        <button>ok</button>
                        <button>no</button>
                    </Col>
                </Row>
            </Grid>
                )
    }
}