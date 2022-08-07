import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import {PropTypes} from 'prop-types';
export const SearchForm = ({handleOnchange, str}) => {

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm = '3'></Form.Label>
                    <Col ms='10'>
                        <Form.Control name="Search" placeholder="Search..."  style={{"fontWeight":"bold"}} value={str} onChange={handleOnchange}/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

SearchForm.propTypes = {
    handleOnchange:PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
    };