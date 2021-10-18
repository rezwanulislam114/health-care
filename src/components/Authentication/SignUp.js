import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Authentication.css'

const SignUp = () => {
    const { signUpWithEmail, error, setError, success, loginWithGoogle } = useAuth();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const handleSignUp = e => {
        e.preventDefault();


        if (password !== confirmPass) {
            setError('Password didnt match.')
        }
        else {
            signUpWithEmail(name, email, password);
        }
    }

    return (
        <div className="authentication">
            <h1 className="title text-center">Sign Up</h1>
            <Form onSubmit={handleSignUp}>
                <input onBlur={e => setName(e.target.value)} type="text" required placeholder="Name" />
                <input onBlur={e => setEmail(e.target.value)} type="email" required placeholder="Email" />
                <input onBlur={e => setPassword(e.target.value)} type="password" required placeholder="Password" />
                <input onBlur={e => setConfirmPass(e.target.value)} type="password" required placeholder="Confirm Password" />
                <p className="text-danger">{error}</p>
                <p className="text-success">{success}</p>
                <input type="submit" className="btn-regular" value="Sign Up" />
            </Form>
            <hr />
            <button onClick={loginWithGoogle} className="btn-regular input-btn">Sign Up With Google</button>
            <p className="text-center mt-5">Already have an accout? <Link to="/login">Login Here</Link></p>
        </div>
    );
};

export default SignUp;