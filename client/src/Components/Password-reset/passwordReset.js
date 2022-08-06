import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export const ResetPassword = ({ changeHandler, email, handleOnResetSubmit,formSwitcher }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ "color": "blueviolet" ,"fontSize" :"25px" }}>ResetPassword!</h1>
                        <hr />
                        <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={changeHandler} />
                            </Form.Group>
                            
                            <Button type="submit">Reset</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a style={{ textDecoration: "none" }} href='#!' onClick={() => formSwitcher('login')} >Login Now </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

