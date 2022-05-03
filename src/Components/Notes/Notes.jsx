import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import "./Notes.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Notes = ({ color }) => {
    const [user] = useAuthState(auth)
    const handleSubmit = e => {
        e.preventDefault()
        const title = e.target.title.value;
        const message = e.target.message.value;
        const email = user?.email;
        const data = {
            title: title,
            message: message,
            color: color,
            email: email,
        }
        const url = `http://localhost:5000/notes`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => toast("You have added a note "))
        e.target.reset()

    }

    return (
        <div className='notes_container mt-5 mt-md-0 p-5'>

            <div className="notes">
                <Form style={{ backgroundColor: color }} className={`border border-secondary rounded-3 p-4 `} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className={`fw-bold ${color ? "text-white" : "text-dark"}`} type="text" name='title' placeholder="Set title" />
                    </Form.Group>
                    <textarea className={`ps-3 ${color ? "text-white" : "text-dark"}`} name="message" id="message" cols="30" rows="10" placeholder='Start Writting here....'></textarea>
                    <Button variant='info' id='note_add_btn' type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Notes;