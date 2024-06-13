import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import pic from "../../public/pp.jpg"

export const Home = () => {
  return (
   <>
   <div name="Home" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
    <div className='flex flex-col md:flex-row items-center'>
    <div className=' md:w-1/2 mt-12 md:mt-9 space-y-2 order-2 '>
    <span className=' font-bold text-xl'>Welcome in my feed</span>
    <h1 className=' text-4xl font-bold mb-3'>Hello i am <span className=' text-red-700 font-bold'>Chiranjibi</span></h1>
    <p className='text-xl'>I am a front-end developer from Nepal. Iam passionate about building accessible website and user-friendly interface.</p>
    <div className=' space-x-80 pt-4'>
        <div className='space-y-2 '>
            <h1 className=' text-xl font-bold'>Available on</h1>
            <ul className='flex space-x-3 text-2xl cursor-pointer '>
                <li>
                    <a href="https://www.facebook.com/" target='_blank'>
                    <FaFacebookSquare className=' hover:text-3xl'/>
                    </a>
                    </li>

                <li>
                    <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin className=' hover:text-3xl' /></a></li>

                <li>
                    <a href="https://www.youtube.com/channel/UCl72CWM9HAbGyJlc2adKoSQ" target='_blank'><FaYoutube className=' hover:text-3xl' /> </a></li>

                <li> <a href="https://www.instagram.com/" target='_blank'><FaInstagramSquare className=' hover:text-3xl' /></a></li>
                <li> <a href="https://github.com/" target='_blank'><FaSquareGithub className=' hover:text-3xl' /></a></li>
            </ul>
        </div>
        
    </div>
    </div>
    <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2  mt-16'>
    <img src={pic} className=' rounded-[50%] w-[250px] h-[250px] md:w-[400px] md:h-[400px]' alt="" />
    </div>
    </div>
   </div>

   <hr />
   </>
  )
}
