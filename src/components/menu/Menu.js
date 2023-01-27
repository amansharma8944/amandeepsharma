import React from 'react'
import Li from './Li';
import './menu.scss';
import {Vikass} from './Yedalne'
export const aman=React.createRef();

let vikas=false;



function Menu({kyahai}) {



console.log(kyahai);
if (kyahai) {
    aman.current.style.right="0px";
    vikas=true;
  
}
else{
    
    if(vikas){
        aman.current.style.right="-400px";
        vikas=false;
        

    }
 
}




  
  return (
    <div ref={aman} className='menu'>
  <ul>
    
  {Vikass.map((k,i)=><Li key={i}  textt={k.text} hreff={k.href}  kyah={kyahai} ui={aman}/>)}
   
    </ul>      
    </div>
  )
}

export default Menu
