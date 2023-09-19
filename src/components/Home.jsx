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
      className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 flex items-center"
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-4/5 px-3 md:flex-row ">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            👋🏽Hi, I'm Hector
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            A Junior Full Stack Software Engineer based in San Jose, CA.
          </p>
          <div className="">
            <div className=" text-white flex justify-center gap-3 shadow-lg rounded-2xl">
              <a
                href="mailto:HectorDevelops@gmail.com"
                className="hover:scale-125"
              >
                <MdMarkEmailRead size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/hrosario1/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125"
              >
                <AiOutlineLinkedin size={30} />
              </a>
              <a
                href="https://drive.google.com/file/d/15Ue6ESd0nSuniEOQxEEEUL4P3xKvhDnU/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125"
              >
                <BiSolidFilePdf size={30} />
              </a>
              <a
                href="https://github.com/HectorDevelops"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125"
              >
                <BiLogoGithub size={30} />
              </a>
            </div>
            ;
          </div>
        </div>
        <div className="">
          <img
            src={HeroImage}
            alt="personal-img"
            className="rounded-3xl mx-auto w-2/5 md:w-7/12 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
