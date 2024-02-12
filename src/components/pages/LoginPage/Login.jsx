// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Providers";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get("email");
        const password = from.get("password");
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className=" max-w-96 mx-auto text-center">
                <div>
                <h2 className="font-display text-6xl font-bold text-gray-600 mt-14">Login here</h2>
                </div>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"  name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-base ">Dont have an account? <Link to="/create-account" className="font-bold text-pink-700">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;