import React, { useState } from 'react'

import { aman } from '../menu/Menu';
import './topbar.scss'


export const  ham=React.createRef();
let phela=true;





let yarkuchkaro=(amandeepsh,setamandeepsharmaa)=>{
  

  if(phela){
 
    ham.current.classList.remove("fa-bars");
    ham.current.classList.add("fa-xmark");
    
    oneq.current.style.backgroundColor=  "#ecdd3c";
    oneq.current.style.color="black"
    aman.current.style.backgroundColor= "#ecdd3c";
  aman.current.style.color="black"
  aman.current.style.right="0px";
  
  
  setamandeepsharmaa(true);
  // setPhela(!phela);
  phela=false;
  
}
else{
  
  ham.current.classList.add("fa-bars");
  ham.current.classList.remove("fa-xmark");
  
  oneq.current.style.backgroundColor="white";
  aman.current.style.backgroundColor= "white";
  aman.current.style.color="black"
  aman.current.style.right="-400px";
  setamandeepsharmaa(false);
  // setPhela(true);
  phela=true;
  // console.log(amandeepsh)
}
}

export const oneq=React.createRef()
//..............................


 

export let pillu=()=>{
  phela=true;
  
}


function Topbar({amandeepsh,setamandeepsharmaa}) {
  // const [phela,setPhela]=useState(true);


  // console.log(amandeepsh);
  return (
    <div className='topbar ' ref={oneq} id='topbar'>
     
     <div className="topbar-wrapper">


      <div className="topbar-left">
        <a href="#intro" className='logo'>RESUME.</a>
        <div className="topbar-icons">
      <div className="divisionofiocons">
      <i className="fa-solid fa-person"></i>
        <span>+91-9906535192</span>
      </div>
      <div className="divisionofiocons">
      <i className="fa-solid fa-message"></i>
        <span>AMAN DEEP SHARMA</span>
      </div>
        </div>

      </div>
      <div className="topbar-right">

 <div className="hamberger">
 <i className="fa-solid fa-2x fa-bars" onClick={()=>yarkuchkaro(amandeepsh,setamandeepsharmaa) } ref={ham}></i>
 </div>

      </div>
     </div>
    </div>
  )
}

export default Topbar
