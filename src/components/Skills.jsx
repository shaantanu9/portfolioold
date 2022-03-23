//import {useState, useEffect,useRef} from 'react'
//import Skills from './components/Skills' 
const Skills = (props)=>{

  function SkillImg({src,title}){
    return(
      <img className="w-20 h-20 rounded-full transition duration-500 transform lg:mx-6 hover:brightness-125 hover:bg-blue-600 hover:scale-105" src={src} alt={title} title={title} />
    )
  }

return(
<>

<h1 id="skills" className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4">
        SKILLS
      </h1>
      <p className="mx-4 my-2 font-semibold text-center text-gray-600">The future belongs to those who learn more skills and combine them in creative ways. ― Robert Greene</p>
      <div class="block lg:justify-between lg:flex lg:item-center">
      
      <div className="mx-10 lg:ml-40"><a href="#skills"><iframe width="300" height="300"  title="skill" href="#skills" src="https://giphy.com/embed/4xyQcPmh44YiiZEEuZ" frameBorder="0" className="mr-2 ml-2 giphy-embed" allowFullScreen></iframe></a></div>
      
    <div className="grid grid-cols-3 justify-between mt-8 ml-2 lg:mr-44 lg:ml-32 lg:grid-cols-6"> 
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-html-5.svg" alt="HTML5" title="HTML5" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-css3.svg" alt="CSS5" title="CSS5" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-javascript.svg" alt="Javascript" title="Javascript" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-nodejs.svg" alt="Nodejs" title="NodeJs" />
      <SkillImg src="https://camo.githubusercontent.com/97d0a6e43d5635a95918b239346676fa9e85bd3ecbf1664b2cd122f85d5a3756/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d68747470732533412532462532467777772e6d656d656e746f746563682e696e253246617373657473253246696d6167657325324669636f6e73253246657870726573732e706e6726663d31266e6f66623d31" alt="" title="" />
      <SkillImg src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3" alt="Tailwind" title="TailwindCSS" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-mongodb.svg" alt="Mongodb" title="MongoDB" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-react-native.svg" alt="React" title="React" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-redux.svg" alt="Redux" title="Redux" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-github.svg" alt="Github" title="Github" />
      <SkillImg src="https://sathish-portfolio.vercel.app/images/icons8-heroku.svg" alt="Heroku" title="Heroku" />
      <SkillImg src="https://scrapy.org/favicons/apple-touch-icon-72x72.png" alt="Scrapy" title="Scrapy" />
      <SkillImg src="https://hwk0702.github.io/img/bs.png" alt="BeautifulSoup" title="BeautifulSoup" />
      <SkillImg src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" title="FastAPI" />
      <SkillImg src="https://www.svgrepo.com/show/7095/linux.svg" alt="LinuxOS" title="LinuxOS" />
      
      <SkillImg src="https://www.python.org/static/apple-touch-icon-72x72-precomposed.png" alt="Python" title="Python" />
      <img className="ml-2 w-20 h-20 rounded-full transition duration-500 transform hover:brightness-125 hover:bg-blue-600 hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="Wordpress" title="Wordpress" />

    </div> 
      </div>
    
</>

)
}

export default Skills;