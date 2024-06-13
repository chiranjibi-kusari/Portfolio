import React from 'react'
import { FaFacebookSquare, FaLinkedin,FaInstagramSquare,FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <hr />
    <footer>
    <div name="Footer" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col items-center justify-center'>
            <div className=' flex space-x-4 text-center items-center'>
            <a href="https://www.facebook.com/" target='_blank'>
                    <FaFacebookSquare className=' hover:text-3xl' size={24}/>
                    </a>
                    
                    <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin className=' hover:text-3xl' size={24} /></a>
                    <a href="https://www.instagram.com/" target='_blank'><FaInstagramSquare className=' hover:text-3xl' size={24} /></a>
                    <a href="https://www.youtube.com/channel/UCl72CWM9HAbGyJlc2adKoSQ" target='_blank'><FaYoutube className=' hover:text-3xl' size={24} /> </a>
                
            </div>
          <div className='mt-8 border-t-2 border-gray-500 pt-5'>
            <p className=' text-lg font-semibold'> &copy; 2024 chiranjibi kusari. All rights reserved</p>

          </div>
        </div>
        
    </div>
    </footer>
    </>
  )
}

export default Footer