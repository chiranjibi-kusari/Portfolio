import axios from 'axios';
import React from 'react'
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const useInfo={
      name:data.name,
      email:data.email,
      message:data.message

    }
    try{
    await axios.post("https://getform.io/f/payglyda",useInfo)
  toast.success("Your message was submitted")

    }catch(error){
      console.log(error);
      toast.error("Something went wrong")

    }
  }
  return (
    <>
    <div name="Contact" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <h1 className=' text-3xl font-bold mb-3'>Contact Me</h1>
        <span className=' text-lg'>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
             onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/payglyda" method='POST'
             className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className=' text-xl font-semibold'>Send Your Message</h1>
                <div className=' flex flex-col mb-4'>
                <label htmlFor="">Full Name: </label>
                <input
                {...register("name", { required: true })}
                 type="text" 
                className=' shadow border-2 border-black py-1 px-4 text-gray-700 focus:outline-none focus:shadow-outline rounded-lg'
                placeholder='Enter Your Name'
                id='name'
                name='name'
                />
                {errors.name && <span>This field is required</span>}
                </div>
                <div className=' flex flex-col mb-4'>
                <label htmlFor="">Email Address: </label>
                <input 
                 {...register("email", { required: true })}
                type="text" 
                className=' shadow border-2 border-black py-1 px-4 text-gray-700 focus:outline-none focus:shadow-outline rounded-lg'
                placeholder='Enter Your Email address'
                id='email'
                name='email'
                />
                {errors.email && <span>This field is required</span>}
                </div>
                <div className=' flex flex-col mb-4'>
                <label htmlFor="">Message:</label>
                <textarea 
                 {...register("message", { required: true })}
                 type="text" 
                className=' shadow border-2 border-black py-1 px-4 text-gray-700 focus:outline-none focus:shadow-outline rounded-lg'
                placeholder='Enter Your Query'
                id='message'
                name='message'
                />
                {errors.message && <span>This field is required</span>}
                </div>
                <button type='submit' className=' bg-black text-white text-lg rounded-xl px-5 py-2 hover:bg-slate-700 duration-300'>Send</button>
              
               
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact