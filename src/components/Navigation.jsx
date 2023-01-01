import { Github } from "./Svg";
//See the Location ./components? Correctly
const Navigation = () => {
  return (
    <nav className="mb-0 w-full">
      <div className="container flex justify-between items-center px-6 py-5 mx-auto md:py-0">
        <div aria-label="Home. logo" role="img">
          <a className="md:hidden" href="#contact">
            <button className="px-4 py-1 text-sm text-indigo-700 bg-transparent rounded border border-indigo-700 transition duration-150 ease-in-out focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 md:block hover:bg-gray-200 sm:px-8 sm:py-3">
              Contact
            </button>
          </a>
          <img
            className="hidden w-16 h-16 md:block md:w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhsA6Ye9y8fucsqOnQsXwIq1stbCI99UH-JvKmdqqE7p2k4FfTEBGDSbPuxnqsrU0GAhL_3VIBM_qtt1cqlG1cNS6aKo6KeREVF6CmDWPQMOv-6h92M1BPPe0S3o3rc9iUTX2iaPPoeHwSp_qrhIdvUb8AJAvcVPZ97DWZNep5u_qzcCBohf3T3nDY8tA"
            alt="logo"
          />
        </div>
        <div>
          <button
            onClick="toggleMenu(true)"
            className="text-gray-500 sm:block md:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <Github />
          </button>
          <div id="menu" className="hidden md:block lg:block">
            <button
              onClick="toggleMenu(false)"
              className="block fixed top-0 z-30 mt-6 text-gray-500 md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <svg
                aria-label="close main menu"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex fixed top-0 right-0 bottom-0 left-0 z-20 flex-col justify-center items-center py-10 text-3xl bg-white md:text-base md:flex md:flex-row md:relative md:bg-transparent">
              <li className="pt-10 text-base text-gray-700 cursor-pointer hover:text-gray-900 lg:text-lg md:pt-0 md:ml-5 lg:ml-10">
                <a href="#about">About</a>
              </li>
              <li className="pt-10 text-base text-gray-700 cursor-pointer hover:text-gray-900 lg:text-lg md:pt-0 md:ml-5 lg:ml-10">
                <a href="#skills">Skills</a>
              </li>
              <li className="pt-10 text-base text-gray-700 cursor-pointer hover:text-gray-900 lg:text-lg md:pt-0 md:ml-5 lg:ml-10">
                <a href="#project">Projects</a>
              </li>
              <li className="pt-10 text-base text-gray-700 cursor-pointer hover:text-gray-900 lg:text-lg md:pt-0 md:ml-5 lg:ml-10">
                <a href="#contact">Contact</a>
              </li>
              <li className="pt-10 font-semibold text-base text-gray-700 cursor-pointer hover:text-gray-900 lg:text-lg md:pt-0 md:ml-5 lg:ml-10">
                <a href=".././static/">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1ui11mYl2kQYNpWebXtYqqkJLCFLu649C/view?usp=sharing"
        >
          <button className="px-4 py-1 text-sm text-indigo-700 bg-transparent rounded border border-indigo-700 transition duration-150 ease-in-out focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 md:block hover:bg-gray-200 sm:px-8 sm:py-3">
            Resume
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
