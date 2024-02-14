// import React from 'react';

import { useEffect, useState } from "react";
import Services from "../SingleServices/Services";

const Service = () => {
    const [service, setService] = useState([]);
    useEffect( ()=>{
        fetch('../../../../../public/data.json')
            .then(res => res.json())
            .then(data =>setService(data));
    },[] )
    return (
        <div > 
            <div>
                <h2 className="font-display bg-base-200 text-6xl font-bold text-center pt-10">Service Section {service.length}</h2>
            </div>
            {/* section-1 */}
           
            {
                service.map(services => <Services key={service.id} services={services}></Services>)
            }

            
             {/* section-1 */}
           
        </div>
    );
};

export default Service;