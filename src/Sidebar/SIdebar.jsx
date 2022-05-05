import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImPlus } from 'react-icons/im'
import { IoMdColorFill } from 'react-icons/io'
import { GrDocumentNotes, GrNotes } from "react-icons/gr"
import './Sidebar.css'

const SIdebar = ({ colors, setColor }) => {
    const location = useLocation()
    return (
        <div className='side_bar p-5'>
            <div className='d-flex flex-column align-items-start'>
                <Link className={`text-dark text-decoration-none `} to="/notescontainer">
                    <p style={{ cursor: "pointer" }} className='fw-bold fs-4'><span className='me-2 '><ImPlus /></span> Add Notes</p>
                </Link>

                <h5 className='mb-4 mt-5'> <span className='fs-4'><IoMdColorFill /></span> Choose Color</h5>
                <div className='d-flex flex-wrap gap-3'>
                    {
                        colors.map((itemcolor, index) =>
                            <li onClick={() => {
                                setColor(itemcolor)
                            }} className='list-unstyled  mb-3 rounded-circle' key={index} style={{ backgroundColor: itemcolor }}></li>
                        )
                    }
                </div>
                <div className='mt-4'>
                    <Link className={`text-decoration-none text-dark mt-2 fw-bold d-block ${location.pathname === "/allnotes" && "active_bar"}`} to="/allnotes">
                        <GrDocumentNotes className='me-3' />  All Notes
                    </Link>

                    <Link className={`text-decoration-none text-dark mt-2 fw-bold d-block ${location.pathname === "/recent" && "active_bar"}`} to="/recent">
                        <GrNotes className='me-3' />  Recent
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SIdebar;