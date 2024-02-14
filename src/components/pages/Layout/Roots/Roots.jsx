// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";

const Roots = () => {
    return (
        <div>
            <div className="mx-w-96 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;