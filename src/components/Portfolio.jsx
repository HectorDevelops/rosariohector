import React from "react";
import ExchangeMainPage from "../assets/portfolio/ExchangeMainPage.png";
import PortfolioMainPage from "../assets/portfolio/PortfolioMainPage.png";

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      src: PortfolioMainPage,
      demoLink: "https://github.com/HectorDevelops/Portfolio",
      codeLink: "https://github.com/HectorDevelops/Portfolio",
    },
    {
      id: 2,
      src: ExchangeMainPage,
      demoLink: "https://youtu.be/d9WD5Huiwvk",
      codeLink: "https://github.com/HectorDevelops/Exchange/tree/main",
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
                className="rounded-md duration-200 hover:scale-105 h-60"
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
