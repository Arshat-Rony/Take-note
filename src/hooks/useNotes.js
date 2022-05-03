import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseinit";

const useNotes = (user, searchText) => {

    const [notes, setNotes] = useState([])

    const email = user?.email;

    console.log(searchText)
    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/notes?email=${email}`
            console.log("i am fired once")
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const remaining = data.filter(note => note.title.toLowerCase().includes(searchText) || note.message.toLowerCase().includes(searchText))
                    setNotes(remaining)

                })
        }
    }, [email, searchText])
    return [notes, setNotes]
}

export default useNotes;