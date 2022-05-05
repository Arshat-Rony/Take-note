import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Update.css'
const Update = ({ color }) => {
    console.log(color)
    const { id } = useParams()
    const [note, setNote] = useState({})
    const [messageValue, setMessgaeValue] = useState('')
    const [title, setTitle] = useState('')
    const url = `https://notes-app-server-side.herokuapp.com/notes/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setNote(data))
    }, [])
    const handleSubmit = e => {
        e.preventDefault()
        const bgcolor = color;
        const data = {
            title: title,
            message: messageValue,
            color: bgcolor,
        }
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast("Your note is updated")
                console.log(data)
            }
            )


    }
    return (
        <div className='update_container m-4'>
            <Form style={{ background: color }} className={`border border-secondary rounded-3 p-4 `} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e) => setTitle(e.target.value)} controlid='title' className={`fw-bold  ${color ? "text-white" : "text-dark"}`} type="text" name='title' placeholder={note.title} />
                </Form.Group>
                <Form.Group controlId="formBasictextarea">
                    <textarea onBlur={(e) => setMessgaeValue(e.target.value)} className={`ps-3 w-100 ${color ? "text-white" : "text-dark"}`} name="messages" id="message" cols="30" rows="10" placeholder={note.message} ></textarea>
                </Form.Group>

                <Button onClick={handleSubmit} variant='info' id='note_add_btn' type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default Update;