import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "education",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-shark bg-slate-100 fixed z-50 shadow dark:bg-neutral-800 dark:border-b dark:border-gray-600">
      <div>
        <a
          href="https://rosariohector.com"
          className="object-contain flex items-center"
        >
          <h1 className="text-5xl font-anton hover:scale-105 bg-midnight hover:text-green-600 dark:text-gray-300 hover:dark:text-orange-500">
            Hector.
          </h1>
        </a>
      </div>
      <div className=""></div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-xl font-bold text-shark-900 hover:scale-105 duration-200 dark:text-gray-300"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
        <DarkModeSwitch />
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center  items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
