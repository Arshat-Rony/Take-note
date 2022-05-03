
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCZrGwBw9Fx4NhOfiCwF2LZZ_SwAk0ifho",
    authDomain: "notes-app-7b2dd.firebaseapp.com",
    projectId: "notes-app-7b2dd",
    storageBucket: "notes-app-7b2dd.appspot.com",
    messagingSenderId: "164207196688",
    appId: "1:164207196688:web:d01aa3650d567afdd42895"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;