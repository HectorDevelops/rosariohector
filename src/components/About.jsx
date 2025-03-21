import React from "react";
import hectorMemoji from "../assets/hectorMemoji.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gray-200 text-white flex-wrap pb-32 dark:bg-neutral-900"
    >
      <div className="max-w-screen-lg p-1 mx-auto w-full shadow-lg rounded-3xl bg-white dark:bg-neutral-800 dark:border border-gray-600 pt-10 pb-10">
        <div className="">
          <div className="flex flex-wrap h-80 place-content-center  text-black dark:text-white">
            <div className=" w-40 ml-1 ">
              <img src={hectorMemoji} alt="hectorMemoji" />
            </div>
            <div className="max-w-2xl text-lg font-medium">
              <p>
                <p className="text-2xl font-bold w-40">
                  Welcome!
                </p>
                I'm a Full Stack Developer with a passion for
                creating efficient and user-friendly web applications.
                My experience building projects with React.js, Python, and
                SQL has equipped me with a strong foundation in both front-end
                and back-end development. I'm driven by the desire to build impactful
                software that solves real-world problems and enhances user experiences.
                I'm eager to contribute my skills to create innovative and impactful
                software solutions.
                <br />
                In my free time, I enjoy to be active by working out, hiking,
                running, read, improve my coding skills and training my two
                doggos, Jazz and Otis.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;
