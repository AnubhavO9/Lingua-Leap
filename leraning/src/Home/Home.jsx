import React from 'react';
import '../Home/Home.css';

import About from './About';
import Service from './Service';
import Review from './Review';
import LoginPortal from './LoginPortal';
import Tutor from './Tutor';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
function Home() {
  return (
   <>
   {/* <Header/> */}
      <div className="container-fluid background1">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-4 text-center">
            <h1 className='text-center font'>Welcome to <span className='back3'>Lingua Leap</span> </h1>
            <h3 className='text-center'>Learn , Connect and Grow </h3>
            <img src="image/home.png" alt="" className='w-75 h-75' />
           <div className='text-center'>  <a href="/about" className=' btn border border-1 bg-primary text-white'>Explore</a></div>
           
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <About/>
      <LoginPortal/>
      <Service/>
      <Review/>
      <Tutor/>
    <Footer/>
   </>
  )
}

export default Home