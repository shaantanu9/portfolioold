import Socials from "./Socials";
//See the Location ./components? Correctly
const Body = () => {
  return (
    // <div className="bg-gray-100">
    <>
      <div className="my-0 bg-white">
        <div className="container flex flex-col items-center pt-1 pb-0 mx-auto sm:py-2">
          <div className="justify-between items-center mb-5 w-11/12 sm:w-2/3 lg:flex sm:mb-10">
            <div className="text-center md:mr-20">
              <img
                className=""
                src="https://i.ibb.co/vXLtMvY/portfolio.jpg"
                alt="portfolio"
              />
          {/* <Socials/> */}
            </div>
            <div>
              <h1 className="text-2xl font-black leading-7 text-center text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
                I am
                <span className="text-indigo-700 duration-1000 delay-100 animate-pulse"> Shantanu Bombatkar</span>
              </h1>
              <p className="mt-5 font-normal text-center text-gray-500 md:text-gray-600 sm:text-lg md:text-lg sm:mt-10 lg:w-10/12">
                A
                <span className="text-indigo-700 text-[18px] text-lg font-semibold">
                  {" "}
                  Full Stack Web Developer{" "}
                </span>
                who like to build a Great minimalistic Interface and an
                Automation Crypto Golang Enthusiast
              </p>
            </div>
          </div>
          <a href="mailto:shantanubombatkar2@gmail.com" className="hidden mb-3 tracking-widest lg:block" >shantanubombatkar2@gmail.com</a>

          <div className="flex justify-center items-center mb-2">
            <a
              target="_blank" rel="noreferrer"
              href="https://drive.google.com/file/d/1ui11mYl2kQYNpWebXtYqqkJLCFLu649C/view?usp=sharing"
            >
              <button className="px-4 py-2 text-sm text-white bg-indigo-700 rounded border border-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 lg:text-xl lg:font-bold sm:px-10 sm:py-4">
                Resume
              </button>
            </a>
            <a href="#project">
              <button className="px-4 py-2 ml-4 text-sm text-indigo-700 bg-transparent rounded border border-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:border-indigo-600 lg:text-xl lg:font-bold hover:text-indigo-600 sm:px-10 sm:py-4">
                Projects
              </button>
            </a>
          </div>
          <Socials/>
        </div>
      </div>
    </>
    //   </dh-component>
  );
};

export default Body;
