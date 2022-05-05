import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import useNotes from '../../hooks/useNotes';
import Note from '../Note/Note';
import "./Allnotes.css"
const Allnotes = ({ searchText }) => {
    const [user] = useAuthState(auth)
    const [notes, setNotes] = useNotes(user, searchText || '')
    return (
        <div className='allnotes_container p-5 pt-2'>
            {
                notes.map(note =>
                    <Note
                        key={note._id}
                        note={note}
                        notes={notes}
                        setNotes={setNotes}
                    ></Note>
                )
            }

        </div>
    );
};

export default Allnotes;