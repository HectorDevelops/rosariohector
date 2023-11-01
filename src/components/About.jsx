import React from "react";
import hectorMemoji from "../assets/hectorMemoji.png";

const About = () => {
  return (
    <div name="about" className="w-full bg-gray-200 text-white flex-wrap ">
      <div className="max-w-screen-lg p-1 mx-auto w-full  shadow-xl rounded-3xl bg-slate-100 ">
        <div className="">
          <div className="flex flex-wrap h-80 mt-6 place-content-center  text-black">
            <div className="pr-2">
              <p className="text-2xl font-bold w-40 text-right">
                I'm glad you've dropped by. Enjoy looking around!
              </p>
            </div>
            <div className=" w-40 h-38 ml-1 ">
              <img src={hectorMemoji} alt="hectorMemoji" />
            </div>
            <div className="max-w-md text-lg font-medium">
              <p>
                I am a passionate individual who is aspiring to build excellent
                software that will be able to improve the lives of those around
                me and others aroud the world.
                <br />
                In my free time, I enjoy to be active (working out, hiking,
                running), read, improve my coding skills and training my two
                doggos (Jazz - pitty and Otis - doberman).
              </p>
            </div>
          </div>
        </div>
        <br />
        {/* <p className="text-xl">Fill in</p> */}
      </div>
    </div>
  );
};

export default About;
