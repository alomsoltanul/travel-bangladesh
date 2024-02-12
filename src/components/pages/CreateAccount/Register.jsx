// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Providers";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get("email");
        const password = from.get("password");
        console.log(email,password);

        createUser(email,password)
         .then(result => {
            console.log(result.user);
         })
         .catch(error => {
            console.error(error);
         })
    }
    return (
        <div>
            <h2 className="font-display text-6xl font-bold text-gray-600 mt-14 text-center">Create an Account for free!</h2>
            <div className=" max-w-96 mx-auto text-center">
                
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" name="first-name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" name="last-name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-base ">Already have an account? <Link to="/login" className="font-bold text-pink-700">Login here!</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;