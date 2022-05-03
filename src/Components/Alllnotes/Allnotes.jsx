import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import useNotes from '../../hooks/useNotes';
import Note from '../Note/Note';

const Allnotes = () => {
    const [user] = useAuthState(auth)
    const [notes, setNotes] = useNotes(user, "")
    return (
        <div className='d-flex gap-4 flex-wrap'>
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