import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './offer.css'


function Offer({newService}) {
  return (

  <div className='col-sm-6 col-lg-4 '>
      <div className="card" >
      <img src={newService.OfferImage} className="card-img-top"/>
        <div className="card-body">
        <h1>{newService.offername}</h1>
          <p className="card-text">{newService?.desc}</p>
          <div className='flex'>
          <h3 className='discount'>Discount:{newService.offer} %</h3>
          <h3 className='price'>Total Price:{newService.price} Rs</h3>
          </div>
        </div>
      
      </div>

  </div>

  )
}

export default Offer