import React from "react";
import codingdojo from "../assets/codingdojo.png";
import buffalostate from "../assets/buffalostate.png";

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      src: codingdojo,
      degree: "Full Stack Developer Certificate",
      concentration: "Online Full-Time",
      college: "Coding Dojo - Colorado Technical University",
      date: "January 2023 - May 2023",
    },
    {
      id: 2,
      src: buffalostate,
      degree: "BS in Individualized Studies ",
      concentration: "Computer Information Systems & Creative Studies",
      college: "The State University of New York at Buffalo State",
      date: "January 2014 - May 2018",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-800 text-white h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white shadow-lg rounded-2xl">
        <div className="">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Education
          </h2>
        </div>
        <div className="">
          {educationHistory.map(
            ({ id, src, degree, date, college, concentration }) => (
              <div key={id} className=" px-7 py-7 flex">
                <div className="drop-shadow-lg  w-28 h-28">
                  <img src={src} alt="codingdojo" />
                </div>
                <div className="px-8 py-3 shadow-xl hover:scale-105">
                  <h2 className="font-bold">{degree}</h2>
                  <p className="font-bold">{concentration}</p>
                  <h2 className="text-neutral-400">{college}</h2>
                  <p className="text-sm">{date}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
