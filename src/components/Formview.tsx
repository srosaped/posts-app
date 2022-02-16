import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Formview() {
    return (
        <Form className='form'>
            <h1>Manage Posts</h1>
            <Form.Label>Priority</Form.Label>
            <Form.Select className="mb-3" aria-label="Choose priority">
                <option>Choose one...</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </Form.Select>

            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Formview;