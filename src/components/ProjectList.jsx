//import {useState, useEffect,useRef} from 'react'
//import ProjectList from './components/ProjectList'
import Project from "./Project";

function Img({ src, title }) {
  return (
    <img
      class="object-cover object-center w-10 h-10 rounded-full transition duration-500 transform hover:brightness-125 hover:bg-blue-600 hover:scale-110"
      // className=""
      src={src}
      alt={title}
      title={title}
    />
  );
}

const ProjectList = (props) => {
  return (
    <>
      <div className="grid justify-between lg:grid-cols-3" id="project">
        <Project
          title="Epic Game Clone"
          category="WebSite"
          Githublink="https://github.com/shaantanu9/Epic_Games"
          src="https://loving-jones-ff749a.netlify.app/assets/img/epic.png"
          description="Epic Games, Inc. is an American video games Ecommerce and software developer and publisher."
          team=" We have tried to clone the website using HTML5, CSS, Javascript DOM and Advanced JavaScript."
          member="Team"
          livelink=""

        >
          <Img
            src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3"
            title="TailwindCss"
          />
          <Img src="https://expressjs.com/images/favicon.png" title="ExpressJs" />
          <Img src ="https://nodejs.org/static/images/logo.svg" title="NodeJs" />
          <Img title="MongoDb" src="https://sathish-portfolio.vercel.app/images/icons8-mongodb.svg"/>
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" title="Javascript"/>
          
        </Project>
        <Project
          title=" Express Schema Generator"
          category="Npm Package"
          Github="https://github.com/shaantanu9/express-schema-generator"
          src="https://i.ibb.co/RpnncqQ/Screenshot-at-2022-03-17-23-49-50.png"
          description="Package to Create the Express+Mongoose MVC Patterned BoilerPlate"
          team="Implementing DRY Concept, I created this package that Create Express Sever in Seconds"
          member="200+ Downloads"
          livelink="https://www.npmjs.com/package/express-schema-generator"
        >
          <Img src="https://expressjs.com/images/favicon.png" title="ExpressJs" />
          <Img src ="https://nodejs.org/static/images/logo.svg" title="NodeJs" />
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" title="Javascript"/>
          <Img title="" />
          <Img title="" />
        </Project>
        <Project
          title="Research Papers Shodkk"
          category="Telegram Bot"
          Github=""
          src="https://ph-files.imgix.net/a3951183-23fd-4e1b-9588-8a4b08d07966.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&bg=0fff&dpr=1"
          // src="https://www.producthunt.com/posts/research-paper-shodkk-bot"
          description="Search Any Research Paper and Download it from Publically Available Database"
          team="While Learning Chemical Engineering Want to read Research Paper but not found any Source To Search and Download at same time "
          member="1000+Subscribers"
          livelink="https://www.producthunt.com/posts/research-paper-shodkk-bot"

        >
          <Img src="https://www.python.org/static/apple-touch-icon-72x72-precomposed.png" title="Python" />
          <Img src="https://scrapy.org/favicons/apple-touch-icon-72x72.png" title="Scrapy" />
          <Img src="https://hwk0702.github.io/img/bs.png" title="BeautifulSoup" />
          <Img src="https://core.telegram.org/favicon.ico?4" title="Teleagrm API" />
          {/* <Img src="" title="" /> */}
        </Project>
        {/* <Project
          title=""
          category=""
          Github=""
          src=""
          description=""
          team=""
          member=""
        >
          <Img title="" />
          <Img title="" />
          <Img title="" />
        </Project> */}
      </div>
    </>
  );
};

export default ProjectList;
