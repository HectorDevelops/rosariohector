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
      className=" w-full h-screen bg-gray-200 flex items-center dark:bg-neutral-900"
    >
      <div className="max-w-screen-lg p-1 mx-auto w-full flex flex-col items-center justify-center px-3 md:flex-row bg-white rounded-3xl shadow-lg dark:bg-neutral-800 dark:border dark:border-gray-600 pt-20 pb-20">
        <div className="flex flex-col min-w-min">
          <div className="pt-5 ">
            <h2 className="text-6xl sm:text-7xl font-bold text-black text-center dark:text-white">
              <span className="wave mr-2">👋🏽</span>Hi, I'm Hector.
            </h2>
            <p className="text-slate-600 py-4 max-w-xl text-center dark:text-gray-400">
              A Full Stack Software Engineer based in San Jose, CA.
            </p>
            <div className="flex justify-center pb-4 ">
              <div className=" text-black flex justify-center gap-3 shadow-2xl ounded-2xl h-14 pl-8 pr-8 pt-1 dark:text-white dark:bg-neutral-800">
                <a
                  href="mailto:HectorDevelops@gmail.com"
                  className="hover:scale-125 hover:text-green-600 mt-1 hover:dark:text-orange-400"
                >
                  <MdMarkEmailRead size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hrosario1/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 hover:text-green-600 mt-1 hover:dark:text-orange-400"
                >
                  <AiOutlineLinkedin size={40} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1X9Hfggg-3ux1U3GHDyhqJwTUPigPFg7V/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 hover:text-green-600 mt-1 hover:dark:text-orange-400"
                >
                  <BiSolidFilePdf size={40} />
                </a>
                <a
                  href="https://github.com/HectorDevelops"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 hover:text-green-600 mt-1 hover:dark:text-orange-400"
                >
                  <BiLogoGithub size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-5/12">
          <div className="aspect-w-2 aspect-h-3 ">
            <img
              src={HeroImage}
              alt="personal-img"
              className="object-cover rounded-3xl w-64 sm:w-72 md:w-86"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
