import React from 'react';
import {Container,Row,Col,Form, Button} from 'react-bootstrap';
export const AdminLoginForm = ({ changeHandler, email, pass, submitHandler, formSwitcher }) => {
    return ( 
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 style={{"color":"blueviolet", "fontSize" : "25px"}}>Admin Login!</h1>
                    <hr/>
                        <Form autoComplete='off' onSubmit={submitHandler}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={changeHandler} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value = {pass} placeholder="Password" onChange={changeHandler} />
                            </Form.Group>
                            <Button type="submit">Login</Button>
                        </Form>
                        <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a style={{ textDecoration: "none" }} href='#!' onClick={() =>  formSwitcher('reset')}>Forget password? </a>
                    </Col>
                </Row>
            </Container>
        </div> 
    )
}

