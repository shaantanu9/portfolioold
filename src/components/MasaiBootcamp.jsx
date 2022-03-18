//import {useState, useEffect,useRef} from 'react'
//import MasaiBootcamp from './components/MasaiBootcamp'

const Unit = ({ heading, from, to, learn1, learn2, learn3, learn4, color }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-between px-4 py-5 mb-6 w-full h-64 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 ${color}`}
      >
        <div>
          <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100 md:text-xl">
            {heading}
          </h4>
          <p className="text-sm text-gray-800 dark:text-gray-100">{learn1}</p>
          <p className="text-sm text-gray-800 dark:text-gray-100">{learn2}</p>
          <p className="text-sm text-gray-800 dark:text-gray-100">{learn3}</p>
          <p className="text-sm text-gray-800 dark:text-gray-100">{learn4}</p>
        </div>
        <div>
          <div className="flex justify-between items-center text-gray-800 dark:text-gray-100">
            <p className="text-sm">{from}</p>
            <p className="text-sm">{to}</p>
          </div>
        </div>
      </div>
    </>
  );
};

//import {useState, useEffect,useRef} from 'react'
//import MasaiBootcamp from './components/MasaiBootcamp'
const MasaiBootcamp = (props) => {
  return (
    <>
          <h1 className="mb-4 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4">
        Learn At Masai Bootcamp
      </h1>
      <div className="grid gap-6 mx-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Unit
          color="bg-green-300"
          from="1 March 2022"
          to="24 March 2022"
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit6"
        />
        <Unit
          color="bg-white"
          from=""
          to=""
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit6"
        />
        <Unit
          color="bg-yellow-300"
          from="1 March 2022"
          to="24 March 2022"
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit5"
        />
        <Unit
          color="bg-white"
          from=""
          to=""
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit5"
        />
        <Unit
          color="bg-indigo-300"
          from="1 March 2022"
          to="24 March 2022"
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit4"
        />
        <Unit
          color="bg-white"
          from=""
          to=""
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit4"
        />
        <Unit
          color="bg-green-300"
          from="1 March 2022"
          to="24 March 2022"
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit3"
        />
        <Unit
          color="bg-white"
          from=""
          to=""
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit3"
        />
        <Unit
          color="bg-rose-300"
          from="1 March 2022"
          to="24 March 2022"
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit2"
        />
        <Unit
          color="bg-white"
          from=""
          to=""
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit2"
        />
        <Unit
          color="bg-green-300"
          from="1 March 2022"
          to="24 March 2022"
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit1"
        />
        <Unit
          color="bg-white"
          from=""
          to=""
          learn1=""
          learn2=""
          learn3=""
          learn4=""
          heading="Unit1"
        />
      </div>
    </>
  );
};

export default MasaiBootcamp;
