import React from 'react'
import PropTypes  from 'prop-types';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

export const PasswordReset = ({handleOnChange, handleOnSubmit, formSwitcher, email}) => {
  return (
    <Container className="shadow-lg bg-white p-3 w-25" >
        <Row>
            <Col>
                <h2>Reset Your Password</h2>
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
                    <Button className="my-4" type="submit">Login</Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
                <a href="#!" onClick={() => formSwitcher('login')}>Login</a>
            </Col>
        </Row>
    </Container>
  )
}

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired, 
}

