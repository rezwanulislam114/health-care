import React from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css'

const SignUp = () => {
    return (
        <div className="authentication">
            <h1 className="title text-center">Sign Up</h1>
            <from>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="submit" className="btn-regular" value="Sign Up" />
            </from>
            <hr />
            <button className="btn-regular input-btn">Sign Up With Google</button>
            <p className="text-center mt-5">Already have an accout? <Link to="/login">Login Here</Link></p>
        </div>
    );
};

export default SignUp;