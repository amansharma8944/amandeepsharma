import React, { useState } from 'react'
import './contact.scss';
function Contact() {
let amandeepsharmaa=(e)=>{
e.preventDefault();
setclicked(true);

}

  const [clicked,setclicked]=useState(false);
  return (
    <div className="contact" id='contacts'>
     

<div className="wrapper">

  <div className="left">

<img src="assets/shake.svg" alt="" />


  </div>

  <div className="right">




<div className="formm">

<h1>CONTACT</h1>
<form action="">


<input type="text"  className='aman' placeholder="EMAIL" />
<textarea className='vikas' placeholder='enter message' />


<button  onClick={amandeepsharmaa} >Send</button>
{clicked && <span >thanks , i will reply asap</span>}
</form>


</div>

  </div>
</div>

    </div>
  )
}

export default Contact
