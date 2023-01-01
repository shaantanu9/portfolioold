//import {useState, useEffect,useRef} from 'react'
//import Porject from './components/Porject'
import { Github } from "./Svg";
//See the Location ./components? Correctly
const Project = ({
  title,
  description,
  category,
  Img,
  children,
  src,
  Githublink,
  team,
  member,
  livelink,
}) => {
  return (
    <>
      {/* <!--First card--> */}
      <div className="p-2 bg-white md:p-8">
        {/* <!--Banner image--> */}
        <img
          className="w-full h-64 bg-blue-400 rounded-lg transition duration-500 transform hover:brightness-125 hover:bg-blue-600 hover:scale-105"
          alt={title}
          src={src}
        />
        <div className="flex items-center mt-2 space-x-2">{children}</div>
        {/* <!--Tag--> */}
        <div className="flex justify-between">
          <p className="mt-2 text-base font-semibold text-indigo-500">{category}</p>
          <p className="mt-2 text-base font-semibold text-indigo-500">{member}</p>
        </div>
        {/* <!--Title--> */}
        <h1 className="mt-1 text-xl font-semibold leading-none text-gray-900 capitalize truncate">
          {title}
        </h1>
        {/* <!--Description--> */}
        <div className="max-w-full">
          <p className="mt-1 text-base font-medium tracking-wide text-gray-600">
            {description}
            <span>
              <br />
              {team}
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Github link={Githublink} />
          <LiveLink link={livelink} title={title} />
        </div>
      </div>
      {/* <!--End of first card--> */}
    </>
  );
};

export default Project;

function LiveLink({ link, title }) {
  return (
    <>
      <a
        href={link}
        alt={title}
        title={title + " demo"}
        target="_blank"
        rel="noreferrer"
        className="px-2 mt-[-21px] font-semibold text-white bg-gray-900 rounded-lg hover:bg-black"
      >
        Demo
      </a>
    </>
  );
}
