import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="authentication">
            <h1 className="title text-center">Login</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" className="btn-regular" value="Login" />
            </form>
            <p className="text-center">Forgot password? <button className="reset-button">Reset password</button></p>
            <hr />
            <button className="btn-regular input-btn">Sign Up With Google</button>
            <p className="text-center mt-5">Haven't any account? <Link to="/signup">Sign up Here</Link></p>
        </div>
    );
};

export default Login;