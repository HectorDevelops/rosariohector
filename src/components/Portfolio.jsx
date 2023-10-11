import React from "react";
import PortfolioGIF from "../assets/portfolio/PortfolioGIF.gif";
import ExchangeGIF from "../assets/portfolio/ExchangeGIF.gif";
import SearchableGIF from "../assets/portfolio/SearchableGIF.gif";

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      src: PortfolioGIF,
      demoLink: "https://hectordevelops.github.io/hectordevelops.io/",
      codeLink: "https://github.com/HectorDevelops/Portfolio",
    },
    {
      id: 2,
      src: ExchangeGIF,
      demoLink: "https://youtu.be/d9WD5Huiwvk",
      codeLink: "https://github.com/HectorDevelops/Exchange/tree/main",
    },
    {
      id: 3,
      src: SearchableGIF,
      demoLink: "https://www.Searchable.quest",
      codeLink:
        "https://github.com/HectorDevelops/Searchable/tree/main/Desktop",
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

          <p className="py-6">Here's some of the things i have worked on</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioProjects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-2xl shadow-black-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-60 object-fit"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
