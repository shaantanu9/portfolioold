//import {useState, useEffect,useRef} from 'react'
//import AddvertiseCard from './components/AddvertiseCard'
const AddvertiseCard = (props) => {
  return (
    <>
      {/* <div className="flex justify-center items-center m-0 h-screen"> */}

      <card className="grid grid-cols-6 justify-center mx-auto mt-4 max-w-5xl bg-blue-800 rounded-xl">
        <div className="col-span-4">
          <h2 className="mt-8 ml-10 text-3xl font-bold text-white">
            One Stop Solution for Your Entire Online Journey
          </h2>

          <p className="mt-5 ml-10 text-sm font-semibold text-white">
            “Whether you want to uncover the secrets of the universe, or you
            just want to pursue a career in the 21st century, basic computer
            programming is an essential skill to learn.” — Stephen Hawking
          </p>

          <a href="#contact" alt="contactme">
            {" "}
            <button className="mt-5 mb-8 ml-10 font-semibold text-white group">
              Contact me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6 transition delay-100 group-hover:translate-x-2 transition-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </a>
        </div>

        <div className="relative col-span-2">
          <img
            src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
            alt="vectorImage"
            className="absolute right-0 bottom-0"
          />
        </div>
      </card>

      {/* </div> */}
    </>
  );
};

export default AddvertiseCard;
