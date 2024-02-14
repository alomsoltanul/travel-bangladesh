// import React from 'react';

import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsService = () => {
    const dService = useLoaderData();
    const { id } = useParams();
    const IntId = parseInt(id);
    const detailService = dService.find(detailService => detailService.id === IntId);
    return (
        <div>
            <div className="hero h-screen" style={{ backgroundImage: `url(${detailService.bg_img})`, backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content">
                    <div className="grid grid-cols-2 gap-6 place-items-center">
                        <div className=" items-center">
                            <h2 className=" font-display font-bold text-6xl tracking-widest">{detailService.service}</h2>
                            <p className=" font-semibold text-xl tracking-wider my-6">{detailService.service_details}</p>
                            <h6 className=" font-bold text-2xl text-orange-700 tracking-wider">Price we Offering: {detailService.price}$</h6>
                            <div className="flex gap-4 my-6">
                                <button className="btn btn-info">{detailService.member_service}</button>
                                <button className="btn btn-outline btn-secondary">{detailService.premium_service}</button>
                            </div>
                        </div>
                        <div>
                            <Link>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={detailService.image} alt={detailService.alt} className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;