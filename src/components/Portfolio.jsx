import React from 'react'
import { FcTodoList } from "react-icons/fc";

const Portfolio = () => {
  return (
    <>
    <div name="Portfolio" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <h1 className=' text-4xl font-bold mb-4'>Portfolio</h1>
        <span className=' text-xl font-semibold  underline'>Featured Project</span>
        <div className=' items-center mt-14 grid md:grid-cols-4 gap-8'>

        <a href="https://github.com/chiranjibi-kusari/react-todolist" target='_blank'>
        <FcTodoList size={150} className=' rounded-full bg-slate-400' />
        <h3 className=' ml-10 pt-5 font-semibold'>To-do list</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam sed quis.</p>
        <button className=' bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100'>Source Code</button>
        </a>
           <a href="https://github.com/chiranjibi-kusari/react-todolist" target='_blank'>
        <FcTodoList size={150} className=' rounded-full bg-slate-400' />
        <h3 className=' ml-10 pt-5 font-semibold'>To-do list</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam sed quis.</p>
        <button className=' bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100'>Source Code</button>
        </a>
        <a href="https://github.com/chiranjibi-kusari/react-todolist" target='_blank'>
        <FcTodoList size={150} className=' rounded-full bg-slate-400' />
        <h3 className=' ml-10 pt-5 font-semibold'>To-do list</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam sed quis.</p>
        <button className=' bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100'>Source Code</button>
        </a>
        <a href="https://github.com/chiranjibi-kusari/react-todolist" target='_blank'>
        <FcTodoList size={150} className=' rounded-full bg-slate-400' />
        <h3 className=' ml-10 pt-5 font-semibold'>To-do list</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam sed quis.</p>
        <button className=' bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100'>Source Code</button>
        </a>
        <a href="https://github.com/chiranjibi-kusari/react-todolist" target='_blank'>
        <FcTodoList size={150} className=' rounded-full bg-slate-400' />
        <h3 className='ml-10 pt-5 font-semibold'>To-do list</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam sed quis.</p>
        <button className=' bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100'>Source Code</button>
        </a>
        <a href="https://github.com/chiranjibi-kusari/react-todolist" target='_blank'>
        <FcTodoList size={150} className=' rounded-full bg-slate-400' />
        <h3 className='ml-10 pt-5 font-semibold'>To-do list</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam sed quis.</p>
        <button className=' bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100'>Source Code</button>
        </a>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Portfolio