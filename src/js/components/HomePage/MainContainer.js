import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default class CenterContent extends React.Component {

    render() {
        const jumbotron = (
            <Jumbotron>
                <h1>Так круто только у нас</h1>
                <p><Button bsStyle="primary">Создать заявку</Button></p>
                <p> <a href="#">Войти как исполнитеь</a> </p>
            </Jumbotron>
        )
        return (
            <div className="homepageCenterContainer">
                <Jumbotron className="jumbotronContent">
                    <h2>Так круто только у нас</h2>
                    <p><Button bsStyle="primary">Создать заявку</Button></p>
                    <p> <a href="#">Войти как исполнитеь</a> </p>
                </Jumbotron>
            </div>
        ) 
    }
}