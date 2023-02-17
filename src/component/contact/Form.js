import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    let {register,handleSubmit,formState:{errors},reset}=useForm()

    let contactForm=(data,e)=>{
        e.preventDefault()
        console.log(data);
        axios.post("https://eveningbatch-febc9-default-rtdb.firebaseio.com/contactus.json",data)
        reset()
    }

    return (
        <>
            <form action="" className='shadow p-4' onSubmit={handleSubmit(contactForm)}>
                <label htmlFor="" className='form-label'>Enter Name</label>
                <input type="text" name='Name' {...register("Name",{required:"Name is required!"})} className='form-control' />
                <p className='text-danger'>{errors.Name?.message}</p>
                <label htmlFor="" className='form-label'>Enter Email</label>
                <input type="email" name='Email' {...register("Email",{required:"Email is required!",pattern:/^\S+@\S+$/i})} className='form-control' />
                <p className='text-danger'>{errors.Email?.message}</p>
                <label htmlFor="" className='form-label'>Enter Phone</label>
                <input type="number" name='Phone' {...register("Phone",{required:"Phone is required!",minLength:{value:10,message:"minimum 10 digits required!"},maxLength:{value:10,message:"maximum 10 digits required!"}})} className='form-control' />
                <p className='text-danger'>{errors.Phone?.message}</p>
                <input className='btn btn-success' type="submit" />
            </form>
        </>
    )
}

export default Form