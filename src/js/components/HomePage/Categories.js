import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class Categories extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={5} md={3} mdOffset={2}>
                        <h3>Перевозка</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nobis inventore, consectetur </p>
                        <ul>
                            <li>
                                <a href="#">пешком</a>
                            </li>
                            <li>
                                <a href="#">машина</a>
                            </li>
                            <li>
                                <a href="#">пешком</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={5} md={3}>
                        <h3>Перевозка</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nobis inventore, consectetur </p>
                        <ul>
                            <li>
                                <a href="#">пешком</a>
                            </li>
                            <li>
                                <a href="#">машина</a>
                            </li>
                            <li>
                                <a href="#">пешком</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={5} md={3}>
                        <h3>Перевозка</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nobis inventore, consectetur </p>
                        <ul>
                            <li>
                                <a href="#">пешком</a>
                            </li>
                            <li>
                                <a href="#">машина</a>
                            </li>
                            <li>
                                <a href="#">пешком</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3} xsOffset={5} mdOffset={5}>
                        <button> Все категории </button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}