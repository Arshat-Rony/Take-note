import React from 'react';
import { RiDeleteBin3Fill } from 'react-icons/ri'
import deleteData from '../../utitlitis/deleteData';
import "./Note.css"
const Note = ({ note, notes, setNotes }) => {
    const { _id, title, message, color } = note;
    const handleDeleteBtn = (id) => {
        const url = `http://localhost:5000/notes/${id}`
        deleteData(url, id, notes, setNotes)
    }

    return (
        <div className='d-flex flex-wrap gap-4'>
            <div style={{ backgroundColor: color }} className='card p-4'>
                <h3 className={`mb-4 ${color ? "text-white" : "text-dark"}`}>{title}</h3>
                <h6 className={`${color ? "text-white" : "text-dark"}`}>{message}</h6>
                <div className='text-end'>
                    <button onClick={() => handleDeleteBtn(_id)} className="btn btn-danger mt-5"><RiDeleteBin3Fill /></button>
                </div>
            </div>

        </div>
    );
};

export default Note;