// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../../../Shared/Header/Header";

const Roots = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;