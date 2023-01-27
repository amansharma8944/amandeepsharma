import React from 'react'
import { ham,oneq, pillu} from '../topbar/Topbar'


export let Ad=true;
let Li=({hreff,textt,kyah,ui})=> {
    


return <li > <a   onClick={()=>{ui.current.style.right="-400px"
ham.current.classList.remove("fa-xmark")
ham.current.classList.add("fa-bars");
console.log(oneq.current.style.backgroundColor="white")
oneq.current.backgroundColor="white"
pillu();



}} href={hreff}  >{textt} </a></li>
}


  


export default Li
