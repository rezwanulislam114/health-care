import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { loginWithEmail, error, loginWithGoogle, setUser, setError, resetPassword, setLoading, success } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect_url = location.state?.from || "/home"

    const handleLogin = e => {
        e.preventDefault();
        loginWithEmail(email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                history.push(redirect_url)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="authentication">
            <h1 className="title text-center">Login</h1>
            <Form onSubmit={handleLogin}>
                <input onBlur={e => setEmail(e.target.value)} required type="email" placeholder="Email" />
                <input onBlur={e => setPassword(e.target.value)} required type="password" placeholder="Password" />
                <div>
                    {
                        error ? <p className="text-danger">{error}</p> :
                            <p className="text-success">{success}</p>
                    }
                </div>
                <input type="submit" className="btn-regular" value="Login" />
            </Form>
            <p className="text-center">Forgot password? <button onClick={() => resetPassword(email)} className="reset-button">Reset password</button></p>
            <hr />
            <button onClick={handleGoogleLogin} className="btn-regular input-btn">Login With Google</button>
            <p className="text-center mt-5">Haven't any account? <Link to="/signup">Sign up Here</Link></p>
        </div>
    );
};

export default Login;