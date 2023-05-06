import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import Testinomial from './components/testinomial/Testinomial';
import './app.scss'
import  Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import { useState } from 'react';





function App() {
  const [amandeepsharma,setamandeepsharma]=useState(false);
//  console.log(amandeepsharma);
  return (
    <div className="App">
    <Topbar amandeepsh={amandeepsharma} setamandeepsharmaa={setamandeepsharma}/>    
  <Menu kyahai={amandeepsharma}/>

    <div className="sections">
  <Intro/>
  <Portfolio/>
  <Work/>
  <Testinomial/>


    </div>
    </div>
  );
}

export default App;
