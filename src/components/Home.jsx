import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdMarkEmailRead } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiSolidFilePdf } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import "./Home.css";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-slate-200 flex items-center "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-4/5 px-3 md:flex-row bg-white rounded-3xl ">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-black ">
            <span className="wave mr-2">👋🏽</span>Hi, I'm Hector
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            A Junior Full Stack Software Engineer based in San Jose, CA.
          </p>
          <div className="">
            <div className=" text-black flex justify-center gap-3 shadow-lg rounded-2xl">
              <a
                href="mailto:HectorDevelops@gmail.com"
                className="hover:scale-125 hover:text-green-600"
              >
                <MdMarkEmailRead size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/hrosario1/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 hover:text-green-600"
              >
                <AiOutlineLinkedin size={30} />
              </a>
              <a
                href="https://drive.google.com/file/d/15Ue6ESd0nSuniEOQxEEEUL4P3xKvhDnU/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 hover:text-green-600"
              >
                <BiSolidFilePdf size={30} />
              </a>
              <a
                href="https://github.com/HectorDevelops"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 hover:text-green-600"
              >
                <BiLogoGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-4 border-blue-400 flex justify-center items-center w-96">
          <div className="aspect-w-2 aspect-h-3 ">
            <img
              src={HeroImage}
              alt="personal-img"
              className="object-cover rounded-3xl w-64 sm:w-72 md:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
