import React from "react";
import codingdojo from "../assets/codingdojo.png";
import buffalostate from "../assets/buffalostate.png";

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      src: codingdojo,
      alt: "codingdojo",
      degree: "Full Stack Developer Certificate",
      concentration: "Online Full-Time",
      college: "Coding Dojo - Colorado Technical University",
      date: "January 2023 - May 2023",
    },
    {
      id: 2,
      src: buffalostate,
      alt: "buffalostate",
      degree: "BS in Individualized Studies ",
      concentration: "Computer Information Systems & Creative Studies",
      college: "The State University of New York at Buffalo State",
      date: "January 2014 - May 2018",
    },
  ];
  return (
    <div
      id="education"
      className="bg-gray-200  text-white h-full pb-16 dark:bg-neutral-900"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white shadow-lg rounded-2xl bg-white dark:bg-neutral-800 dark:border border-gray-600">
        <div className="">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline text-black dark:text-white">
            Education
          </h2>
        </div>
        <div className="">
          {educationHistory.map(
            ({ id, src, alt, degree, date, college, concentration }) => (
              <div key={id} className="px-7 py-7 flex ">
                <div className="drop-shadow-lg w-28 h-28 ">
                  <img src={src} alt={alt} />
                </div>
                <div className="px-8 py-3 shadow-xl hover:scale-105 ">
                  <h2 className="font-bold text-black dark:text-white">
                    {degree}
                  </h2>
                  <p className="font-bold text-black dark:text-gray-400">
                    {concentration}
                  </p>
                  <h2 className="text-neutral-400 dark:text-gray-200">
                    {college}
                  </h2>
                  <p className="text-sm text-black font-semibold dark:text-white">
                    {date}
                  </p>
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
