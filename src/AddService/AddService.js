import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import './AddService.css';
const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,e) => {
    // console.log(data)
    const url = `http://localhost:5000/service`
    axios.post(url,data)
    .then((data)=>{
        // console.log(data)
        if(data.data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Product added successfull.',
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
        }
    })
  };
  return (
    <div className="add-service">
      <h1>Please add your service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name", { required: true })} required/><br/>
        <textarea placeholder="description" {...register("description", { required: true })} rows="4" cols="50" required/><br/>
        <input placeholder="price" type='number' {...register("price", { required: true })} required/><br/>
        <input placeholder="Enter Img link" type='text' {...register("img", { required: true })} required/><br/>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
