import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import coffee from './assets/coffee.avif'
import Navbar from'./Components/Navbar'
import image from './assets/image.jpg'
import vdv from './assets/new.webp'
import Banner from './Components/Banner'
import Destinations from './Components/Destinations'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
      <div>
        <img className='img' src={image} />
        <Navbar/>
        <img className='img2' src={vdv}/>
        <h4>Login</h4>
        <Banner/> <br />
        <h5>Our Packages</h5>
        <Destinations/> 
        <center>
          <h4>Booking iNformation</h4>
          <input type="date" name="" id="" /> <hr />
          
          <input type="text" placeholder='No.Of Days' />
          
        </center>
        <Footer/>
      </div>
  
    </>
  )
}

export default App
