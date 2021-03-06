import React, { useState } from 'react';
import { FaUser, FaUserLock } from "react-icons/fa"
import { MdAlternateEmail } from 'react-icons/md'
import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
const Signup = () => {
    const location = useLocation()
    const [displayName, setDisplayName] = useState('');
    const [updateProfile] = useUpdateProfile(auth);
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home')
        console.log(user)
    }

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const data = {
            email,
            password
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
            .then(res => {
                navigate(from, { replace: true });
            })

        fetch('https://notes-app-server-side.herokuapp.com/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acccesstoken)
                localStorage.setItem('accesstoken', data.acccesstoken)
            })
        e.target.reset()

    }
    const handleGoogle = () => {
        signInWithGoogle()
            .then(res => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='login-form  p-5 rounded-3'>
            <h5 className='mt-3 fw-bold text-center'>Registration</h5>
            <hr className='mb-5 ' />
            <form onSubmit={handleSubmit}>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="text" name="name" id="name" placeholder='Username' />
                    <p className='user'><FaUser></FaUser></p>
                </div>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="email" name="email" id="email" placeholder='User Email' />
                    <p className='user'><MdAlternateEmail /></p>
                </div>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="password" name="password" id="password" required placeholder='User Password' />
                    <p className='user-pass'><FaUserLock /></p>
                </div>

                <input className='w-100 btn-danger btn fw-bold' type="submit" value="Login" />
            </form>
            <p className='mt-4 text-center'>Or</p>
            <hr className='mt-2' />
            <div className='text-center'>
                <button onClick={handleGoogle} className="google bg-danger px-5 py-2 border-0  text-white">
                    <FcGoogle className='mb-1 me-2' /> Google
                </button>
                <p className='mt-3'>Already have an account ? <Link to='/login' className='text-danger fw-bold text-decoration-none'>Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;