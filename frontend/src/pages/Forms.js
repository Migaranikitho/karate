import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function FormExample() {

     const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter the Last Name.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>            
                    </Form.Group>
                     <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Phone Number"
                    />
                    

                </Form.Group>


            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default FormExample;