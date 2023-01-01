//import {useState, useEffect,useRef} from 'react'
//import ProjectList from './components/ProjectList'
import Project from "./Project";

function Img({ src, title }) {
  return (
    <img
      className="object-cover object-center w-10 h-10 rounded-full transition duration-500 transform hover:brightness-125 hover:bg-blue-600 hover:scale-110"
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
          team=" Tried to clone the website using HTML5, CSS, Javascript DOM and Advanced JavaScript. Added Backend Server for login and storing Game Details"
          member="Team"
          livelink="https://epic-games-full-stack.vercel.app/"
        >
          <Img
            src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3"
            title="TailwindCss"
          />
          <Img
            src="https://expressjs.com/images/favicon.png"
            title="ExpressJs"
          />
          <Img src="https://nodejs.org/static/images/logo.svg" title="NodeJs" />
          <Img
            title="MongoDb"
            src="https://sathish-portfolio.vercel.app/images/icons8-mongodb.svg"
          />
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
            title="Javascript"
          />
        </Project>
        <Project
          title=" Express Schema Generator"
          category="Npm Package"
          Githublink="https://github.com/shaantanu9/express-schema-generator"
          src="https://i.ibb.co/RpnncqQ/Screenshot-at-2022-03-17-23-49-50.png"
          description="Package to Create the Express+Mongoose MVC Patterned BoilerPlate"
          team="While learning react I come to know about MVC. Implementing DRY Concept, I created this package that Create Express Sever in Seconds"
          member="200+ Downloads"
          livelink="https://www.npmjs.com/package/express-schema-generator"
        >
          <Img
            src="https://expressjs.com/images/favicon.png"
            title="ExpressJs"
          />
          <Img src="https://nodejs.org/static/images/logo.svg" title="NodeJs" />
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
            title="Javascript"
          />
          <Img title="" />
          <Img title="" />
        </Project>
        <Project
          title="Research Papers Shodkk"
          category="Telegram Bot"
          Githublink=""
          src="https://ph-files.imgix.net/a3951183-23fd-4e1b-9588-8a4b08d07966.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&bg=0fff&dpr=1"
          // src="https://www.producthunt.com/posts/research-paper-shodkk-bot"
          description="Search Any Research Paper and Download it from Publically Available Database"
          team="While Learning Chemical Engineering Want to read Research Paper but not found any Source To Search and Download at same time "
          member="1000+Subscribers"
          livelink="https://www.producthunt.com/posts/research-paper-shodkk-bot"
        >
          <Img
            src="https://www.python.org/static/apple-touch-icon-72x72-precomposed.png"
            title="Python"
          />
          <Img
            src="https://scrapy.org/favicons/apple-touch-icon-72x72.png"
            title="Scrapy"
          />
          <Img
            src="https://hwk0702.github.io/img/bs.png"
            title="BeautifulSoup"
          />
          <Img
            src="https://core.telegram.org/favicon.ico?4"
            title="Teleagrm API"
          />
          {/* <Img src="" title="" /> */}
        </Project>
        <Project
          title="Lakme Clone Site"
          category="Website"
          Githublink="https://github.com/shaantanu9/lakmeindia"
          src="https://user-images.githubusercontent.com/66282953/158450698-03e2595e-6e6d-4649-9216-6c3175647bab.png"
          description="This is clone of Lakme.com. Lakmé is an Indian cosmetics brand, as it is owned by Hindustan Unilever."
          team=" Where we have used HTML, CSS and Advance Javascript. Scrape the data using Python form original site and make json file.This project was completed by team of 5 members within 4 days."
          member="Team"
          livelink="https://sauravsaran99.github.io/lakmeindia/"
        >
          <Img
            src="https://sathish-portfolio.vercel.app/images/icons8-css3.svg"
            title="HTML5"
          />
          <Img
            src="https://sathish-portfolio.vercel.app/images/icons8-html-5.svg"
            title="CSS5"
          />
          <Img
            src="https://sathish-portfolio.vercel.app/images/icons8-javascript.svg"
            title="Javascript"
          />
          <Img
            src="https://www.python.org/static/apple-touch-icon-72x72-precomposed.png"
            title="Python"
          />
          <Img
            src="https://scrapy.org/favicons/apple-touch-icon-72x72.png"
            title="Scrapy"
          />
        </Project>
        <Project
          title="Configure Tailwind for React"
          category="NPM Package"
          Githublink="https://github.com/shaantanu9/configure-tailwind"
          src="https://i.ibb.co/8Y8FZqj/Configure-Tailwind.png"
          description="NPM Package that Create React App already Configure for TailwindCSS"
          team="While Starting Learning React i want to use Tailwind with it and So i Found it takes lot of time to Copy paste and Configure Tailwind for Raact app So Made this Package that do all this 5-7min thing in SINGLE Click"
          member="50+ Downloads"
          livelink="https://www.npmjs.com/package/configure-tailwind"
        >
          <Img src="https://nodejs.org/static/images/logo.svg" title="NodeJs" />
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
            title="Javascript"
          />
          {/* <Img title="" />
          <Img title="" />
          <Img title="" /> */}
        </Project>
        <Project
          title="The Hindu Vocab"
          category="Instagram Bot"
          Githublink=""
          src="https://i.ibb.co/TLbGB2g/The-Hindu-Vocab-Telegram-Bot.png"
          description="Instagram Bot that Upload English Words with Hindi Meaning when start"
          team="While Preparing for Goverment Exam i found that Vocabulary and English is important, but addicted to Social media a little so to use Instagram for learning and For Healping Others Like me, Created this Bot "
          member="1000+ Follower 1800+ Post"
          livelink="https://www.instagram.com/hindu_vocab/"
        >
          <Img
            src="https://www.python.org/static/apple-touch-icon-72x72-precomposed.png"
            title="Python"
          />
          <Img
            src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
            title="Instagram UnOfficial API"
          />
          {/* <Img title="" />
          <Img title="" /> */}
        </Project>
        {/* <Project
          title=""
          category=""
          Githublink=""
          src=""
          description=""
          team=""
          member=""
          livelink=""
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
