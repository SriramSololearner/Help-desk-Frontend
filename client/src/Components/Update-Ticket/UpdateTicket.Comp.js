import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { PropTypes } from "prop-types";
export const UpdateTicket = ({ msg, changeHandler, submitHandler }) => {
    return (
        <Form  className="mt-5" onSubmit={submitHandler}>
            <Form.Label>Reply</Form.Label>
            <Form.Control as="textarea" name="detail" value={msg} onChange={changeHandler} placeholder='Pls Reply Your Message...' row="5" />

            <div className=" text-end mt-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
)   
}

UpdateTicket.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
};
