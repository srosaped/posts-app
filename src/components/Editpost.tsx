import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

import { useForm } from 'react-hook-form';




const Editpost: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const editPost = () => {
        axios.post('http://localhost:3000/posts/')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

        }
    
    return (

        <Form className='form'>
            <h1>Edit Post</h1>
            <Form.Label>Priority</Form.Label>
            <Form.Select className="mb-3" aria-label="Choose priority" name="priority">
                <option>Choose one...</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </Form.Select>

            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    
                />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
                <Form.Control
                type="text"
                as="textarea" 
                rows={3} placeholder="Message" 
                name="body" 
                
                />
            </Form.Group>
            <Button variant="primary" type="submit" onSubmit={() => editPost()}>
                Submit
            </Button>
        </Form>
    );
}

export default Editpost;
