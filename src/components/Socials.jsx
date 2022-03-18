//import {useState, useEffect,useRef} from 'react'
//import Social from './components/Social' 
import {Reddit,Github, Twitter,LinkedIn,Youtube} from './Svg'
//See the Location ./components? Correctly
const Social = (props)=>{

return(
<>
<div className="my-2">
<Github link="https://github.com/shaantanu9"/>
<Twitter link="https://twitter.com/ShantanuMali9"/>
<LinkedIn link="https://www.linkedin.com/in/shantanu-bombatkar/"/>
<Youtube link="https://www.youtube.com/watch?v=jrT62JBL-zM&t=28s"/>
<Reddit link="https://www.reddit.com/user/shodkkshantanu"/>
</div>
</>

)
}

export default Social;