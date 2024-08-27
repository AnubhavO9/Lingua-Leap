import React from 'react'
import './About.css';
function About() {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="container aboutheight ">
          <div className="row">
            <div className="col-md-5 mt-5">
              <h1 className='about3'><b>India's <span className='about2'>Biggest & Most Trusted</span> <br /> Educational Platform </b> </h1>
              <p className='back7 mt-3'>Unlock your potential by signing up with Lingua Leap- The most affordable learning solution . </p>
              <div className='text-center'>
                <a href="/studentsignup" className=' btn border border-1 bg-primary text-white pt-2 pb-2 mb-5 mt-4 px-5'>Get Started</a>
              </div>

            </div>

            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <img src="image/about.jpg" alt="" className='mt-5 w-100 h-75 rounded shadow-lg' />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About

