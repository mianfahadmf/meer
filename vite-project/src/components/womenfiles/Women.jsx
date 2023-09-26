import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Women.css';
import { women } from './WomenData';


function Women() {
  // Declare and set initial state for an array of card data
  const [cardsData, setCardsData] = useState(women);

  return (
    // <div className="cards-container d-flex flex-wrap gap-4 justify-content-center">
    //   {cardsData.map((card, index) => (
    //     <div key={index} className="card" style={{ width: '18rem' }}>
    //       <img src={card.image} className="card-img-top w-100 h-75 " alt="Card Image" />
    //       <div className="card-body">
    //         <h5 className="card-title">{card.title}</h5>
    //         <p className="card-text">{card.description}</p>
    //         <p className='price text-success'>{card.price}</p>
    //         <Link to={{ pathname: `/Women/${index}`, state: { cardData: card } }} className="btn btn-primary w-75">Buy Now</Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>


      <div className="cards-container d-flex flex-wrap gap-4 justify-content-center">
      <div className="women-banner">
        <img src='/src/assets/Women-assets/women-banner.jpg'/>
      </div>
        {cardsData.map((card, index) => (
          <div key={index} className="card-custom">
            <img src={card.image} alt="Card Image" />
    
            {/* Content hidden initially */}
            <div className="textcontent">
              <h2>{card.title}</h2>
              <h5>{card.description}</h5>
              <h6 style={{color:'green'}}>{card.price}</h6>
              <Link to={{ pathname: `/Women/${index+1}`, state: { cardData: card } }}> <button>Buy Now</button></Link>
            </div>
    
          </div>
        ))}
      </div>
    );
    

}

export default Women;













