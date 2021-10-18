import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { loginWithEmail, error } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        loginWithEmail(email, password)
    }

    return (
        <div className="authentication">
            <h1 className="title text-center">Login</h1>
            <Form onSubmit={handleLogin}>
                <input onBlur={e => setEmail(e.target.value)} required type="email" placeholder="Email" />
                <input onBlur={e => setPassword(e.target.value)} required type="password" placeholder="Password" />
                <p className="text-danger">{error}</p>
                <input type="submit" className="btn-regular" value="Login" />
            </Form>
            <p className="text-center">Forgot password? <button className="reset-button">Reset password</button></p>
            <hr />
            <button className="btn-regular input-btn">Sign Up With Google</button>
            <p className="text-center mt-5">Haven't any account? <Link to="/signup">Sign up Here</Link></p>
        </div>
    );
};

export default Login;