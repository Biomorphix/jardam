import React from 'react';
import { form, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class LoginPage extends React.Component {
    render() {
        return (
            <form className="loginForm">
                <h3>Пожалуйста авторизуйтесь</h3>
                <div className="form-group">
                    <input type="text" className="form-control" id="loginInput" placeholder="Ваш логин"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Ваш пароль"/>
                </div>
            </form>
        )
    }
}