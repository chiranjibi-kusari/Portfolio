import React from "react";
import { FcTodoList } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { SiGoogleauthenticator } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
const Portfolio = () => {
  return (
    <>
      <div
        name="Portfolio"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className=" text-4xl font-bold mb-4">Portfolio</h1>
        <span className=" text-xl font-semibold  underline">
          Featured Project
        </span>
        <div className=" items-center mt-14 grid md:grid-cols-3 gap-8">
          <a
            href="https://github.com/chiranjibi-kusari/e-commerce--"
            target="_blank"
          >
            <GiClothes size={150} className=" rounded-full bg-slate-400" />
            <h3 className=" ml-10 pt-5 font-semibold text-xl">
              E-commerce Website
            </h3>
            <p className="text-md">
              This e-commerce wesite is just design of the clothing website.
              This project is made for learning purpose for begining of the
              coding.
            </p>
            <div className="flex gap-4">
              <button className=" bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100">
                Source Code
              </button>
              <a
                href="https://chiruecommerce.netlify.app/"
                target="_blank"
                className=" bg-lime-700 rounded-lg py-2 px-4 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100"
              >
                Live
              </a>
            </div>
          </a>

          <a
            href="https://github.com/chiranjibi-kusari/gym_webiste"
            target="_blank"
          >
            <CgGym size={150} className=" rounded-full bg-slate-400" />
            <h3 className=" ml-10 pt-5 font-semibold text-xl">Gym Website</h3>
            <p>
              This Gym webiste have same animation while opening the website and
              this website also implementation backend.
            </p>
            <div className="flex gap-4">
              <button className=" bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100">
                Source Code
              </button>
              <a
                href="https://flexhubgym.netlify.app/"
                target="_blank"
                className=" bg-lime-700 rounded-lg py-2 px-4 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100"
              >
                Live
              </a>
            </div>
          </a>
          <a
            href="https://github.com/chiranjibi-kusari/fullstack-two-factor-auth-"
            target="_blank"
          >
            <SiGoogleauthenticator
              size={150}
              className=" rounded-full bg-slate-400"
            />
            <h3 className=" ml-10 pt-5 font-semibold text-xl">
              Two Factor Authentation
            </h3>
            <p>
              In this project have two factor authentation for security.In this
              code while you enter login credientals then otp send then after
              the verify the opt then login successfully.
            </p>
            <button className=" bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100">
              Source Code
            </button>
          </a>
          <a
            href="https://github.com/chiranjibi-kusari/OnlineCourse"
            target="_blank"
          >
            <IoBookOutline size={150} className=" rounded-full bg-slate-400" />
            <h3 className=" ml-10 pt-5 font-semibold text-xl">Online Course</h3>
            <p>
              This is the full stack online course selling website.This
              application was developed using React for the frontend, Express.js
              for the backend, and MongoDB as the database
            </p>
            <button className=" bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100">
              Source Code
            </button>
          </a>
          <a
            href="https://github.com/chiranjibi-kusari/Todo-App-fullstack"
            target="_blank"
          >
            <FcTodoList size={150} className=" rounded-full bg-slate-400" />
            <h3 className="ml-10 pt-5 font-semibold">To-do list</h3>
            <p>
              This is the fullstack todo list website. This application was
              developed using React for the frontend, Express.js for the
              backend, and MongoDB as the database
            </p>
            <button className=" bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100">
              Source Code
            </button>
          </a>
          {/*<a
            href="https://github.com/chiranjibi-kusari/react-todolist"
            target="_blank"
          >
            <FcTodoList size={150} className=" rounded-full bg-slate-400" />
            <h3 className="ml-10 pt-5 font-semibold">To-do list</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              neque consectetur, eius quo laboriosam ipsam rerum optio quibusdam
              sed quis.
            </p>
            <button className=" bg-lime-700 rounded-lg p-2 mt-3 text-lg font-semibold hover:bg-slate-400 duration-100">
              Source Code
            </button>
          </a>*/}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Portfolio;
