import React from 'react'
import './intro.scss'
// import { init } from 'ityped'
import Typewriter from 'typewriter-effect'; 
function Intro() {
  return (
    <div className='intro'  id='intro'>
      

      <div className="leftpart">
        <div className="imagecontainer">
        <img src="assets/man1.png"  className='imageleftpart' alt="" />
        </div>


      </div>
      <div className="rightpart">

        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Aman Deep Sharma</h1>
          <h3>
          <Typewriter 
           
           options={{ 
           strings:["Student at WIT", "FrontEnd Developer", "Learner"],
           autoStart:true,
           delay:50,
           loop:true
           }}
           
           /> 
          </h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro
