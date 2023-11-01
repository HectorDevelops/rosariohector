import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import cSharp from "../assets/cSharp.png";
import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";
import flask from "../assets/flask.png";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vsc from "../assets/vsc.png";

const Skills = () => {
  const skillProficiency = [
    {
      id: 1,
      src: html,
      name: "HTML",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      src: python,
      name: "python",
    },
    {
      id: 5,
      src: cSharp,
      name: "c#",
    },
    {
      id: 6,
      src: bootstrap,
      name: "bootstrap",
    },
    {
      id: 7,
      src: express,
      name: "express",
    },
    {
      id: 8,
      src: flask,
      name: "flask",
    },
    {
      id: 9,
      src: github,
      name: "github",
    },
    {
      id: 10,
      src: mongodb,
      name: "mongoDB",
    },
    {
      id: 11,
      src: mysql,
      name: "MySQL",
    },
    {
      id: 12,
      src: node,
      name: "node",
    },
    {
      id: 13,
      src: react,
      name: "react",
    },
    {
      id: 14,
      src: tailwind,
      name: "tailwind",
    },
    {
      id: 15,
      src: vsc,
      name: "VSC",
    },
  ];

  return (
    <div className="bg-gray-200  text-white flex flex-wrap ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col flex-wrapjustify-center w-full text-black shadow-lg rounded-2xl mb-20 bg-slate-100">
        <div className="">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </h2>
          <p className="mt-5 text-xl">
            Experience with Languages, Technologies, and Tools:
          </p>
        </div>
        <div className="w-full flex flex-wrap text-center justify-center font-semibold">
          {skillProficiency.map(({ id, src, name }) => (
            <div key={id} className="">
              <div className=" duration-500 rounded-lg ">
                <div className="w-30">
                  <img
                    src={src}
                    alt={name}
                    className="mt-10 object-contain h-20 hover:scale-125"
                  />
                  <p className="capitalize mt-2">{name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
