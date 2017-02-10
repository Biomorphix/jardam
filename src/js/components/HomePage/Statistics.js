import React from 'react';
import {Col} from 'react-bootstrap';


export default class Statistics extends React.Component {
    constructor () {
        super();
        this.state = {
            totalOrder: 233,
            totalExecutor: 1337
        }
    }

    render () {
        return (
            <div className="statisticsContainer">
                <Col className="statistics" xs={5} md={3} mdOffset={2}>Всего заказов: {this.state.totalOrder}</Col>
                <Col className="statistics" xs={5} md={3}>Всего исполнителей: {this.state.totalExecutor}</Col>
                <Col className="statistics" xs={5} md={3}>Всего исполнителей: {this.state.totalExecutor}</Col>
            </div>
        )
    }
}