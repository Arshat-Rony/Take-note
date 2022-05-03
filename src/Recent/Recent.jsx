import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Note from '../Components/Note/Note';
import auth from '../firebaseinit';
import useNotes from '../hooks/useNotes';

const Recent = () => {
    const [user] = useAuthState(auth)
    const [notes, setNotes] = useNotes(user, "")
    const note = notes[notes.length - 1]
    console.log(note)
    return (
        <div>
            <div style={{ backgroundColor: note?.color }} className={`card w-25 p-5`}>
                <h3 className={`${note?.color ? "text-white" : "text-dark"}`}>{note?.title}</h3>
                <h5 className={`${note?.color ? "text-white" : "text-dark"}`}>{note?.message}</h5>
            </div>
        </div>
    );
};

export default Recent;