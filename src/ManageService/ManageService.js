import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[]);
    const handleDelete = (id) =>{
        const url = `http://localhost:5000/services/${id}`
        // console.log(url)
        axios.delete(url)
        .then((data) => {
            console.log('Delete successful', data)
            if(data.data.deletedCount > 0){
                const remainingService = services.filter(service=>service._id !== id);
                setServices(remainingService);
            }
        });
    } 
    return (
        <div>
            <h1>Your total Services {services.length}</h1>
            <ul>
            {
                services.map((service)=><li key={service._id}>
                    <span>{service.name}</span>{"   "}<button onClick={()=>handleDelete(service._id)}>Delete</button>
                </li>)
            }
            </ul>
        </div>
    );
};

export default ManageService;