import React from 'react';
import { RiDeleteBin3Fill } from 'react-icons/ri'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import deleteData from '../../utitlitis/deleteData';
import "./Note.css"
import { Link } from 'react-router-dom';
const Note = ({ note, notes, setNotes }) => {
    const { _id, title, message, color } = note;
    const handleDeleteBtn = (id) => {
        const url = `https://notes-app-server-side.herokuapp.com/notes/${id}`
        deleteData(url, id, notes, setNotes)
    }

    return (

        <div style={{ backgroundColor: color }} className='card p-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className={` ${color ? "text-white" : "text-dark"}`}>{title}</h3>
                <Link to={`/update/${_id}`}>
                    <span><BsBoxArrowInUpRight className={color ? "text-white" : "text-dark"} /></span>
                </Link>

            </div>
            <hr className='mb-4' />
            <h6 className={`${color ? "text-white" : "text-dark"}`}>{message}</h6>
            <div className='text-end mt-5'>
                <button onClick={() => handleDeleteBtn(_id)} className="btn btn-danger mt-5 note_btn"><RiDeleteBin3Fill /></button>
            </div>
        </div>


    );
};

export default Note;