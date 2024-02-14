// import React from 'react';

import { Link } from "react-router-dom";

const Services = ({ services }) => {

    const { id, service, image, service_details, price } = services;
    return (
        <div>
            <div className="hero bg-base-200 pb-16">
                <div className="hero-content flex-col lg:flex-row-reverse w-9/12 border-solid border-2 border-sky-200 rounded-md my-6">
                    <img  style={{ width:"100%", height:"300px"}}src={image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{service}</h1>
                        <p className="py-6">{service_details}</p>
                        <p className="pb-6 text-green-600  font-bold">Price Starts From {price}$ </p>
                        <Link to={`/service-details/${id}`}>
                            <button className="btn btn-outline btn-primary"> Know Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;