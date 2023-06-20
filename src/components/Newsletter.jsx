import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Newsletter = ({ onValidate, status, message }) => {
    const [email, setemail] = useState('');

    useEffect(()=>{
        if(status === 'success') clearField();
    },[status])


    const clearField = () => {
        setemail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our newsletter</h3>
                        {
                            status === 'sending' && <Alert>sending</Alert>
                        }
                        {
                            status === 'error' && <Alert variant='danger'>{message}</Alert>
                        }
                        {
                            status === 'success' && <Alert variant='success'>{message}</Alert>
                        }
                    </Col>
                    <Col md={6} xl={7}>
                        <form >
                            <div className="new-email-bx">
                                <input value={email} onChange={(e) => setemail(e.target.value)} placeholder='email address' />
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Newsletter;