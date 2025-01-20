import { useState } from "react";
import ExchangeGIF from "../assets/portfolio/ExchangeGIF.gif";
import ReactCardFlip from "react-card-flip";
import { FiInfo } from "react-icons/fi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Searchable from "../assets/portfolio/SearchableGIF.gif";
import PortfolioGIF from "../assets/portfolio/PortfolioGIF.gif";

const Portfolio = () => {
  const [isFlipped, setIsFlipped] = useState([]);

  function flipCard(id) {
    setIsFlipped((prevFlippedCards) =>
      prevFlippedCards.includes(id)
        ? prevFlippedCards.filter((cardId) => cardId !== id)
        : [...prevFlippedCards, id]
    );
  }

  const portfolioProjects = [
    {
      id: 1,
      src: PortfolioGIF,
      title: "Portfolio",
      demoLink: "https://rosariohector.com",
      codeLink: "https://github.com/HectorDevelops/hectordevelops.io",
      project: "Portfolio",
      technology1: "JavaScript",
      technology2: "React",
      technology3: "Tailwind",
      summary:
        "The primary goal of this portfolio is to share my work with a wider audience, whether you're a fellow developer, a potential employer, or someone interested in tech projects. Here, you'll find a curated collection of my projects that reflect my passion for software development and my ability to turn ideas into reality.",
    },
    {
      id: 2,
      src: ExchangeGIF,
      title: "Exchange",
      demoLink: "https://youtu.be/d9WD5Huiwvk",
      codeLink: "https://github.com/HectorDevelops/Exchange/tree/main",
      project: "Exchange",
      technology1: "Python",
      technology2: "Flask",
      technology3: "MySQL",
      summary:
        "This project uses Flask and CSS for design. Exchange was created to offer a simple and user-friendly experience for people looking to buy or sell a vehicle. I also added the Google Maps API to enable users to search for nearby buying or selling locations by entering their zip code.",
    },
    {
      id: 3,
      src: Searchable,
      title: "Searchable",
      demoLink: "https://searchable.quest",
      codeLink:
        "https://github.com/HectorDevelops/Searchable/tree/main/Desktop",
      project: "Searchable",
      technology1: "JavaScript",
      technology2: "React",
      technology3: "API",
      summary:
        "Introducing an intuitive application designed to offer users a user-friendly interface while harnessing the power of the Unsplash API to seamlessly retrieve images from across the web. This project also incorporates a valuable Dark Mode accessibility feature, enhancing user experience.",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gray-200 text-white max-h-max pb-32 dark:bg-neutral-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full pb-10 rounded-3xl shadow-lg bg-white dark:bg-neutral-800 dark:border dark:border-gray-600 ">
        <div className=" pt-5 text-black dark:text-white">
          <p className="text-4xl font-bold inline border-gray-500 ">
            Portfolio:
          </p>

          <p className="py-6 text-xl">
            Here are some of the things I have worked on:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-black font-semibold dark:text-white  justify-center">
          {portfolioProjects.map(
            ({
              id,
              src,
              title,
              demoLink,
              codeLink,
              project,
              technology1,
              technology2,
              technology3,
              summary,
            }) => (
              <ReactCardFlip
                flipDirection="horizontal"
                isFlipped={isFlipped.includes(id)}
              >
                <div
                  key={id}
                  className="card shadow-2xl shadow-black-600 rounded-lg"
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 h-60 w-96"
                  />
                  <div className="flex justify-center mt-5">
                    <h1 className="text-lg">{title}</h1>
                  </div>
                  <div className="flex items-center justify-center">
                    <a href={demoLink} target="_blank" rel="noreferrer">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                      </button>
                    </a>
                    <button
                      className="w-1/2 px-4 py-3 m-2 duration-200 hover:scale-105 bg-green-600 rounded-lg shadow-white dark:bg-orange-400"
                      onClick={() => flipCard(id)}
                    >
                      <FiInfo size={24} className="text-white" />
                    </button>
                    <a href={codeLink} target="_blank" rel="noreferrer">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card card-back shadow-2xl shadow-black-600 rounded-lg h-[365px] text-sm p-2 flex items-center">
                  <div className=" mb-12">
                    <div className="mb-4 text-black dark:text-white">
                      Name:{" "}
                      <span className="text-gray-500  dark:text-gray-300">
                        {project}
                      </span>
                    </div>
                    <div className="mb-4 text-black dark:text-white">
                      Description:{" "}
                      <span className="text-gray-500 dark:text-gray-300">
                        {summary}
                      </span>
                    </div>
                    <div className=" flex items-center justify-between text-center dark:text-gray-300">
                      <h1 className="border-2 rounded-lg border-slate-600 w-20">
                        {technology1}
                      </h1>
                      <h1 className="border-2 rounded-lg border-slate-600 w-20">
                        {technology2}
                      </h1>
                      <h1 className="border-2 rounded-lg border-slate-600 w-20">
                        {technology3}
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-center absolute inset-x-1 bottom-5">
                    <button
                      className="px-4 py-3 duration-200 hover:scale-105 bg-green-600 rounded-lg shadow-white flex items-center justify-center mt-2 dark:bg-orange-400"
                      onClick={() => flipCard(id)}
                    >
                      <MdOutlineKeyboardBackspace
                        size={24}
                        className="text-white"
                      />
                    </button>
                  </div>
                </div>
              </ReactCardFlip>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
