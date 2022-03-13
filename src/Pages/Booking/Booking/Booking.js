import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h3>Name: {service.name}</h3>
        </div>
    );
};

export default Booking;