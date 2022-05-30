import React from 'react'

function Cards() {
  return (
      <div className='container'>
      <div className='row'>
      <div className='col-sm-6 col-lg-3 '>
      <div className="card" id='card'>
        <div className="card-body">
        <img src='medic.jpeg'></img>
          <div className="card-title">SAFETY FIRST</div>
          <p>Counselors certified in pet first aid and CPR put your dog's health and happiness first.</p>
        </div>
      </div>
  </div>
  <div className='col-sm-6 col-lg-3 '>
      <div className="card" id='card'>
        <div className="card-body">
        <img src='paw.jpeg'></img>
          <div className="card-title">MONITOR YOUR PUP</div>
          <p>Access our live webcams on your computer or smartphone.</p>
        </div>
      </div>
  </div>

  <div className='col-sm-6 col-lg-3 '>
      <div className="card" id='card'>
        <div className="card-body">
        <img src='tail.jpeg'></img>
          <div className="card-title">SPACIOUS PLAY YARDS</div>
          <p>Our oasis offers large, climate-controlled play yards for optimal tail wags.</p>
        </div>
      </div>
  </div>


  <div className='col-sm-6 col-lg-3 '>
      <div className="card" id='card'>
        <div className="card-body">
        <img src='house.jpeg'></img>
          <div className="card-title">ALL-IN-ONE PRICING</div>
          <p>Treat your pet to all-inclusive fun at one convenient rate.</p>
        </div>
      </div>
  </div>

      </div>
    </div>
  )
}

export default Cards