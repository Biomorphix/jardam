import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import makeTemplate from '../services/makeTemplate';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Grid, Col } from 'react-bootstrap';

export default class CreateTaskMenu extends React.Component {
    render() {
        function FieldGroup({id, label, help, ...props}) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            )
        }

        return (
            makeTemplate(
                <form className="createTaskForm">
                    <Grid>
                        <h3>Создание заявки</h3>
                        <Col xsOffset={3} mdOffset={1} xs={4} md={4}>
                            <FieldGroup
                                id="taskTitle"
                                type="text"
                                label="Название"
                                placeholder="Название"
                            />

                            <FormGroup controlId="taskDescription">
                                <ControlLabel>Подробное описание</ControlLabel>
                                <FormControl componentClass="textarea" />
                            </FormGroup>

                            <FieldGroup
                                id="taskDate"
                                type="date"
                                label="Дата"
                            />
                            <FieldGroup
                                id="taskAddr"
                                type="text"
                                label="Адрес"
                            />
                            <FieldGroup
                                id="taskSum"
                                type="text"
                                label="Сумма"
                            />
                            <button>Создать заявку</button>
                        </Col>
                    </Grid>
                </form>
            )
        )
    }
}