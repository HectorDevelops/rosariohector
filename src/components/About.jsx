import React from "react";
import hectorMemoji from "../assets/hectorMemoji.png";

const About = ({ isDark }) => {
  return (
    <div
      name="about"
      className="w-full bg-gray-200 text-white flex-wrap pb-32 dark:bg-neutral-900"
    >
      <div className="max-w-screen-lg p-1 mx-auto w-full shadow-lg rounded-3xl bg-slate-100 dark:bg-neutral-800 dark:border border-gray-600 pt-10 pb-10">
        <div className="">
          <div className="flex flex-wrap h-80 place-content-center  text-black dark:text-white">
            <div className="pr-2">
              <p className="text-2xl font-bold w-40 text-right">
                I'm glad you've dropped by. Enjoy looking around!
              </p>
            </div>
            <div className=" w-40 ml-1 ">
              <img src={hectorMemoji} alt="hectorMemoji" />
            </div>
            <div className="max-w-md text-lg font-medium">
              <p>
                I am a passionate individual who is aspiring to build excellent
                software that will be able to improve the lives of those around
                me and others aroud the world.
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
