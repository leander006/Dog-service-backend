import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { SpinnerCircular } from 'spinners-react'
import { Context } from '../../../Contexts/ContextProvider'
import Footer from '../../footer/Footer'
import Navbar from '../../Navbar/Navbar'
import Services from '../../offers/Offers'

function Offers() {

  const {user} = useContext(Context)
  const [offers, setOffers] = useState([])
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    const getOffers = async() =>{
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
        const posts = await axios.get("http://localhost:4003/api/service",config)
        setUploading(true)
        setOffers(posts.data)
        // setUploading(false)   
    }
    getOffers()
    setUploading(false)
  },[user])

  return (
    <>
      <Navbar/>
      {uploading?<Offers offers={offers}/>:<SpinnerCircular size="90" className='spinner-register' thickness='100'  speed="400" color='red' secondaryColor="grey"/>}
      <Footer/>
    </>
  )
}

export default Offers