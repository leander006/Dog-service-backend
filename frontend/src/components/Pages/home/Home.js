import React from 'react'

import Navbar from '../../Navbar/Navbar'
import './home.css'

import Footer from '../../footer/Footer'

import Cards from '../../card/Cards'
function Home() {

  // const {user} = useContext(Context)

  return (
    <>
      <Navbar/>
     <div className='home'>

       <div className='upper'>
       <img src='dd1.png'></img><img src='dd1.png'></img>
      </div>


      <div className='main-1'>
        <Cards/>
      </div>


      {/* <!-- Testimonials --> */}

<div id="testimonials">
 
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active container-fluid">
        <h2 class="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on Dogtopia.</h2>
        <img class="text-image" src="dog-img.jpg" alt="dog-profile"/>
        <em>Pebbles, New York</em>
      </div>
      <div class="carousel-item container-fluid">
        <h2 class="testimonial-text">My dog used to be so lonely, but with Dogtopia's help, they've found the love of their life. I think.</h2>
  <img class="text-image" src="lady-img.jpg" alt="lady-profile"/>
  <em>Beverly, Illinois</em>
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</div>


<div className='main-3'>
    <h1>Services we offer</h1>

</div>

    </div>
        <Footer/>
    </>
  )
}

export default Home