import React from 'react';
import { Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap';
import makeTemplate from '../services/makeTemplate';

export default class AllTasks extends React.Component {
    render () {
        return (
            makeTemplate(
                <Grid>
                    <Col mdOffset={1} md={2}>
                        <h3>Категории</h3>
                        
                        <ul>
                            <li>
                                <span>kek</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>kek</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>kek</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>kek</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>kek</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>kefa</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>hg</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>hjghj</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>gjhgj</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>gjhgj</span>
                            </li>
                        </ul>
                    </Col>
                    <Col md={8}>
                        <h3>Все заявки </h3>
                        <div className="map"></div>
                        <Row>
                            <Col md={3}>
                                <p>Починить</p>
                                <a> Автор </a>
                            </Col>
                            <Col md={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi enim non porro ratione, corporis animi! Quo earum eum, laboriosam error quasi delectus necessitatibus possimus, distinctio ullam, sapiente quisquam assumenda perferendis?</p>
                            </Col>
                            <Col md={2}>
                                <h3>500сом</h3>
                                <p> Дата </p>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            )
        )
    }
}