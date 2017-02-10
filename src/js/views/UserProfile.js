import React from 'react';
import { Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap';
import makeTemplate from '../services/makeTemplate';

export default class UserProfile extends React.Component {
    render() {
        return (
            makeTemplate(
                <Grid>
                    <br/>
                    <br/>
                    <Row>
                        <div className="profileCard">
                            <Col mdOffset={1} md={2}>
                                <Image src="../../img/thumbnail.png" circle />
                                <br/>
                                <br/>
                                <button>Задать вопрос</button>
                            </Col>
                            <Col md={1}>
                                <h3>Чынгыз</h3>
                                <p> Лайки </p>
                                <p> Отзывы </p>
                            </Col>
                            <Col md={5} mdOffset={1}>
                                <h3>О себе</h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptate similique, quasi nam culpa veritatis, molestiae nisi cupiditate, exercitationem deserunt repellat atque. Nemo itaque, dicta totam, cum architecto dolore quaerat.</p>
                            </Col>
                        </div>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col mdOffset={1} md={8}>
                            <p> Отзыв на задание </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio, voluptatem qui suscipit excepturi, beatae officia. Eveniet nam quia ea consequuntur quidem provident in, natus quod ut illum eligendi, optio!</p>
                            <Col> <a> Автор </a> </Col>
                            <Col md={1} mdOffset={10}>Время: {+new Date()}</Col>
                        </Col>
                    </Row>
                </Grid>
            )
        )
    }
}