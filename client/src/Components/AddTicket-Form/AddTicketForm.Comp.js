import React from 'react'
import Button from "react-bootstrap/Button";
import { Form, Row, Col} from 'react-bootstrap';
import {PropTypes} from 'prop-types';

export const AddTicketForm = ({ submitHandler,changeHandler,frmData }) => {

    console.log(frmData)

    return (

        <div className='AddTicket mt-5 bg-light'>
            <h1 className='text-center text-info'>Add New Ticket</h1>
            <hr/>
            <Form autoComplete="off"  onSubmit={submitHandler}>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control  name="Subject" value={frmData.Subject} placeholder="Subject" minLength="5" maxLength="100" onChange={changeHandler} required/>
                    </Col>
                </Form.Group> 

                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3} >IssueDate</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="date" name="IssueDate" value={frmData.date} onChange={changeHandler} required />
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="textarea" name="Details" value={frmData.Details} minLength="5" maxLength="100" rows="4" onChange={changeHandler} required />
                    </Col>
                </Form.Group>
                <div className="d-grid gap-5 d-block">
                    <Button type="submit" variant='info' size="lg">Login</Button>
                </div>
            </Form>
        </div>
    );
};


AddTicketForm.propTypes = {

    submitHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired,
    frmData: PropTypes.object.isRequired
};