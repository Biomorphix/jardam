import React from 'react';
import makeTemplate from '../services/makeTemplate';
import {Grid, Col, Row} from 'react-bootstrap';

export default class AllCategories extends React.Component {
    render () {
        return (
            makeTemplate(
                <Grid>
                    <Row>
                        <Col xs={4} md={3} mdOffset={2} xsOffset={2}>
                            <ul>
                                <li>
                                    <a href="adsad">adsad</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="adsd">dad</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="asds">asds</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="asdsd">hghj</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="hghjg">gjgj</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={4} md={3}>
                        <ul>
                                <li>
                                    <a href="adsad">adsad</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="adsd">dad</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="asds">asds</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="asdsd">hghj</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="hghjg">gjgj</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={4} md={3}>
                        <ul>
                                <li>
                                    <a href="adsad">adsad</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="adsd">dad</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="asds">asds</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="asdsd">hghj</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="hghjg">gjgj</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>                
            )
        )
    }
}