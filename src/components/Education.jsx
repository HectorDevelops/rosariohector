import React from "react";
import codingdojo from "../assets/codingdojo.png";
import buffalostate from "../assets/buffalostate.png";
import azurefundamentals from "../assets/azurefundamentals.png";
import coursera from "../assets/coursera.png";

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      src: coursera,
      alt: "coursera",
      degree: <a href="https://shorturl.at/D11Gh" target="_blank" rel="noreferrer">Java Programming: Solving Problems with Software</a>,
      concentration: "Online",
      college: "Coursera = Duke University",
      date: "January 17, 2025",
    },
  {
      id: 2,
      src: azurefundamentals,
      alt: "azurefundamentals",
      degree: <a href="https://shorturl.at/mNuJE" target="_blank" rel="noreferrer">Azure Fundamentals</a>,
      concentration: "Online",
      college: "Microsoft",
      date: "January 13, 2025",
    },
 {
      id: 3,
      src: coursera,
      alt: "coursera",
      degree: <a href="https://shorturl.at/TCVeT" target="_blank" rel="noreferrer">Fundamentals of Java Programming</a>,
      concentration: "Online",
      college: "Coursera - Board Infinity",
      date: "June 23, 2024",
    },
    {
      id: 4,
      src: codingdojo,
      alt: "codingdojo",
      degree: <a href="https://shorturl.at/M29c7" target="_blank" rel="noreferrer">Full Stack Developer Certificate</a>,
      concentration: "Online Full-Time",
      college: "Coding Dojo - Colorado Technical University",
      date: "January 2023 - May 2023",
    },
   {
      id: 5,
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
      className="bg-gray-200 text-white h-full pb-16 dark:bg-neutral-900"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white shadow-lg rounded-2xl bg-white dark:bg-neutral-800 dark:border border-gray-600">
        <div className="">
          <h2 className="text-4xl font-bold border-gray-500 inline text-black dark:text-white">
            Education and Certifications:
          </h2>
          <h1></h1>
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
