import React from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';


const validationPost = yup.object().shape({
    priority: yup.string().required("Choose one priority level!"),
    title: yup.string().required("The title is mandatory!").max(40, "The title must be 40 chars or less!"),
    body: yup.string().required("The message is mandatory!").max(500, "The message must be 150 chars or less!")
});


const Addpost: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    });

    const apiUrl ='http://localhost:3000/posts/';

    let history : any = useNavigate();

    const addPost = (data: any) => axios.post(apiUrl, data)
        .then((response) => {
            console.log(response);
            history(0);
        })
        .catch((error) => {
            console.log(error);
        })

    
    return (

        <Form className='form' onSubmit={handleSubmit(addPost)}>
            <h1>Add Post</h1>
            <Form.Group className="mb-3">
                <Form.Label>Priority</Form.Label>
                <Form.Control 
                    as="select" 
                    type='text'
                    aria-label="Choose priority" 
                    {...register("priority")}
                >
                    <option value="null">Choose one...</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </Form.Control>
                
            </Form.Group>
            <p className="error-message">{errors.priority?.message}</p>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Title" 
                    {...register("title")}
                    
                />
                <p className="error-message">{errors.title?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
                <Form.Control
                type="text"
                as="textarea" 
                rows={3} placeholder="Message" 
                {...register("body")}
                />
                <p className="error-message">{errors.body?.message}</p>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Addpost;

