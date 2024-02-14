// import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Service from "./HomeService/Service";
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="md:flex  justify-between p-10">
                    <div className="basis-1/4 mt-16 mr-4">
                        <h2 className="font-display text-6xl font-bold text-white">Coxs bazar</h2>
                        <p className="text-base font-display  text-yellow-50">Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className="btn btn-info mt-10 text-white">Booking <FaArrowRight className="mt-1" /></button>
                    </div>
                    <div className="basis-3/4" >
                        <div className="carousel rounded-box">
                            <div id="item1" className="carousel-item mr-5">
                                <div className="">
                                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                                    <h2 className="font-display text-3xl font-bold text-white text-center -mt-16">Coxs bazar</h2>
                                </div>
                            </div>
                            <div id="item2" className="carousel-item mr-5">

                                <div className="">
                                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                                    <h2 className="font-display text-3xl font-bold text-white text-center -mt-16">Coxs bazar</h2>
                                </div>
                            </div>
                            <div id="item3" className="carousel-item mr-5">

                                <div className="">
                                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                                    <h2 className="font-display text-3xl font-bold text-white text-center -mt-16">Coxs bazar</h2>
                                </div>
                            </div>
                            <div id="item4" className="carousel-item mr-5">
                                <div className="">
                                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                                    <h2 className="font-display text-3xl font-bold text-white text-center -mt-16">Coxs bazar</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* section  */}
            <Service></Service>
            {/* section  */}
            
        </div>
    );
};

export default Home;