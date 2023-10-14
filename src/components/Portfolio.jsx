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
      demoLink: "https://hectordevelops.github.io/hectordevelops.io/",
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
      className="bg-gradient-to-b from-gray-800 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full pb-40">
        <div className="pb-3 mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="py-6">Here's some of the things i have worked on:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioProjects.map(
            ({
              id,
              src,
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
                    className="rounded-md duration-200 hover:scale-105 h-60"
                  />
                  <div className="flex items-center justify-center">
                    <a href={demoLink} target="_blank" rel="noreferrer">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                      </button>
                    </a>
                    <button
                      className="w-1/2 px-4 py-3 m-2 duration-200 hover:scale-105 bg-cyan-900 rounded-lg shadow-white"
                      onClick={() => flipCard(id)}
                    >
                      <FiInfo />
                    </button>
                    <a href={codeLink} target="_blank" rel="noreferrer">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card card-back shadow-2xl shadow-black-600 rounded-lg h-80 text-sm p-2 ">
                  <div className="mt-5 mb-1 text-gray-500">
                    Name: <span className="text-white">{project}</span>
                  </div>
                  <div className="mb-1 text-gray-500">
                    Description: <span className="text-white">{summary}</span>
                  </div>
                  <div className="mb-1 flex items-center justify-between text-center mt-2">
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
                  <div className="flex items-center justify-center">
                    <button
                      className="px-4 py-3 duration-200 hover:scale-105 bg-cyan-900 rounded-lg shadow-white flex items-center justify-center mt-2"
                      onClick={() => flipCard(id)}
                    >
                      <MdOutlineKeyboardBackspace />
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
