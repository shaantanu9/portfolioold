import Aboutme from './components/Aboutme' 
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import Socials from "./components/Socials";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import AddvertiseCard from "./components/AddvertiseCard";

// import MasaiBootcamp from "./components/MasaiBootcamp";

//See the Location ./components? Correctly
import Body from "./components/Body";

// function

function App() {
  return (
    <div className="bg-white App dark:text-gray-100 w-[50%] m-auto">
      <Navigation />
      <Body />
      <Aboutme/>
      <Skills />
      {/* <AddvertiseCard/> */}
      <h1 className="mt-44 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4 hover:animate-pulse">
        PROJECTS
      </h1>
      <ProjectList />

      <Form />
      <div className="text-center footerCredit">
        <Socials />
        <p className="mt-0 text-red-500">Made With Love+Reactjs+Tailwind</p>
      </div>
    </div>
  );
}

export default App;
