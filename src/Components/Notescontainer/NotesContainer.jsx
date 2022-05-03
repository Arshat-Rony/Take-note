import React, { useContext, useState } from 'react';
import { ColorContext } from '../../App';
import Notes from '../Notes/Notes';


import "./NotesContainer.css"
const NotesContainer = () => {
    const color = useContext(ColorContext)
    console.log(color)
    return (
        <div className='notesContainer '>
            <Notes color={color}></Notes>
        </div>
    );
};

export default NotesContainer;