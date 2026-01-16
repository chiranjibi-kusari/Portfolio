import React, { useState } from "react";
import pic from "../../public/pp.jpg";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navlist = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className=" flex justify-between h-24 items-center">
          <div className=" flex space-x-2">
            <img src={pic} className=" h-16 w-16 rounded-full" alt="" />
            <h1 className=" font-semibold text-2xl">
              Chiranjibi
              <p className=" font-bold text-lg">Web developer</p>
            </h1>
          </div>
          <div>
            <ul className=" hidden md:flex space-x-10 text-2xl font-semibold">
              {navlist.map(({ id, text }) => (
                <li
                  className="hover:text-2xl duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setMenu(!menu)}
              className=" cursor-pointer md:hidden text-4xl"
            >
              {menu ? <IoCloseSharp /> : <MdOutlineMenu />}
            </div>
          </div>
        </div>
        {/**mobile navbar */}
        {menu && (
          <div className="">
            <ul className="md:hidden flex flex-col items-center text-center mt-10 gap-2 font-semibold  ">
              {navlist.map(({ id, text }) => (
                <li
                  className="hover:text-2xl duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
