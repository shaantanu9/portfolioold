import axios from 'axios'
import {useState} from 'react'
const Form = (props)=>{
	
const [formData, setForm] = useState({ name:'', email:'',subject:'',discription:'' });

const onChangeForm = (e) => {
	const {id,value} = e.target
	// console.log(id,"=",value)
	setForm({ ...formData,[id]:value})
	// console.log(formData,"formData")
}

const formSubmit = (e) => {
  
	e.preventDefault()
	function postData(url){
	axios.post(url,formData).then(console.log('posted'))
	}
	postData('https://fakeservershodkk.herokuapp.com/contactme')
  
  } 

// const onClickfo = () => {
// //if not empty then add
// if(fo!=='') setfoItemsList([...foItems, {items:fo,key:nanoid()}])
// return() 
// }

return(


<>
<h1 id="ContactMe" className="my-2 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4">
        Contact Me
<div className="mt-1 h-screen md:flex" id="contact">
<div className="hidden overflow-hidden relative justify-around items-center w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 md:flex i">
	
	{/* <div className="hidden overflow-hidden relative justify-around items-center w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 lg:block md:flex i"> */}
		<div>
			<h1 className="font-sans text-4xl font-bold text-white">Hire / Freelancing</h1>
			<p className="mt-1 text-lg font-semibold text-white">Bring Your Business Online and Enlease the Potential of <span className="text-xl font-bold">World Wide Web</span></p>
			<div class="flex justify-between">
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ui11mYl2kQYNpWebXtYqqkJLCFLu649C/view?usp=sharing" alt="Resume" title="Shantanu Bombatkar Resume"  ><button type="submit" className="block py-2 mt-4 mb-2 w-28 font-bold text-indigo-800 bg-white rounded-2xl">Resume</button></a>
                <a target="_blank" rel="noreferrer" href="https://tech.shodkk.com" alt="Shodkk Blog"  title="Shodkk Blog"><button type="submit" className="block py-2 mt-4 mb-2 w-28 font-bold text-indigo-800 bg-white rounded-2xl">Blog</button></a>
            </div>
            <div class="flex justify-between">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shantanu-bombatkar/" alt="Linkedin"  title="Linked"><button type="submit" className="block py-2 mt-4 mb-2 w-28 font-bold text-indigo-800 bg-white rounded-2xl">Linkedin</button></a>
                <a target="_blank" rel="noreferrer" href="mailto:shantanubombatkar2@gmail.com" alt="Gmail"  title="shantanubombatkar2@gmail.com"><button type="submit" className="block py-2 mt-4 mb-2 w-28 font-bold text-indigo-800 bg-white rounded-2xl">Gmail</button></a>
            </div>
			<p className="mt-1 text-lg font-semibold text-white">Single Page Responsive WebSite for your Business<span className="text-xl font-bold"> Free Free Free !</span></p>
            
		</div>
		<div className="absolute -bottom-32 -left-40 w-60 h-60 rounded-full border-4 border-t-8 border-opacity-30 lg:w-70 lg:h-70 md:w-10 md:h-1" ></div>
		<div className="absolute -left-20 -bottom-40 w-80 h-80 rounded-full border-4 border-t-8 border-opacity-30 lg:w-70 lg:h-70 md:w-10 md:h-1" ></div>
		<div className="absolute -right-0 -top-40 w-80 h-80 rounded-full border-4 border-t-8 border-opacity-30 lg:w-70 lg:h-70 md:w-10 md:h-1" ></div>
		<div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border-4 border-t-8 border-opacity-30 lg:w-70 lg:h-70 md:w-10 md:h-1" ></div>
	</div>
	<div className="flex justify-center items-center py-10 bg-white md:w-1/2">
		{/* <form action="mailto:shantanubombatkar2@gmail.com" method="POST" className="bg-white"> */}
		<form onSubmit={formSubmit}>
		{/* <form action="https://formsubmit.co/911062f154a29009dc9856d8a0f84b82" method="POST"> */}
			<h1 className="mb-1 text-2xl font-bold text-gray-800">Hello Again! 10x Growth</h1>
			<p className="mb-2 text-sm font-normal text-gray-600">Dont think Lets Connect !! we will discuss</p>
			<p className="mb-7 text-sm font-normal text-gray-600">How to bring your Business Online?</p>
			<div className="flex items-center px-3 py-2 mb-4 rounded-2xl border-2">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input required onChange={onChangeForm} className="pl-2 border-none outline-none" type="text" name="fullname" id="name" placeholder="Full name" />
      </div>
				<div className="flex items-center px-3 py-2 mb-4 rounded-2xl border-2">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input required onChange={onChangeForm} className="pl-2 border-none outline-none" type="text" name="subject" id="subject" placeholder="Subject" />
      </div>
					<div className="flex items-center px-3 py-2 mb-4 rounded-2xl border-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input required onChange={onChangeForm} className="pl-2 border-none outline-none" type="email" name="email" id="email" placeholder="Email Address" />
      </div>
						<div className="flex items-center px-3 py-2 rounded-2xl border-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<textarea onChange={onChangeForm} className="pl-2 w-32 h-32 border-none outline-none" type="textbox" name="discription" id="shortdetail" placeholder="Short Detail. . ." ></textarea>
      </div>
							<input type="submit" value="Contact Me" className="block py-2 mt-4 mb-2 w-full font-semibold text-white bg-indigo-600 rounded-2xl"/>
							{/* <button type="submit" className="block py-2 mt-4 mb-2 w-full font-semibold text-white bg-indigo-600 rounded-2xl">Contact Me</button> */}
	</form>
	</div>
</div>
</>

)
}

export default Form;



