import React from 'react';
import PropTypes  from 'prop-types';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';



export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
  return (
    <Container className="shadow-lg bg-white p-3 w-25" >
        <Row>
            <Col>
                <h2>Client Login</h2>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={pass}
                            onChange={handleOnChange}
                            placeholder="password"
                            
                        />
                    </Form.Group>
                    <Button className="my-4" type="submit">Login</Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
                <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired, 
    pass: PropTypes.string.isRequired
}
