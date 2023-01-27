import React, { useState, useEffect } from 'react'
import List from './List';
import './portfolio.scss';


import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../Data';

function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const Listj = [
    { id: "featured", title: "Featured" },

    { id: "Web", title: "Web App" },
    { id: "Mobile App", title: "Mobile App" },
    { id: "Sports", title: "Sports" },
    { id: "Content", title: "Content" }
  ];


  useEffect(() => {

    switch (selected) {

      case "featured": setData(featuredPortfolio);
        break;
      case "Web": setData(webPortfolio);
        break;
      case "Mobile App": setData(mobilePortfolio);
        break;
      case "Sports": setData(designPortfolio);
        break;
      case "Content": setData(contentPortfolio);
        break;
      default: return



    }

  }, [selected]);
  return (
    <div className='portfolio' id='portfolio' >
      <h1>Portfolio</h1>
      <ul>
        {Listj.map((e) => {
          return <List title={e.title} setSelected={setSelected} active={e.id === selected} id={e.id} />
        })}
      </ul>
      <div className="container">


        {
          data.map((we) =>
          (
            <div className="item">

              <img src={we.img} alt="" />
              <span>{we.title}</span>
            </div>)

          )


        }

      </div>


      <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
    </div>


  )
}

export default Portfolio
