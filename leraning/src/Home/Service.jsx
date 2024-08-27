import React from 'react'
import './Service.css';

function Service() {
  return (
    // <div>Service</div>
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-12 ">
            <h3 className='text-center mt-5'>FEATURES</h3>
            <h1 className='text-center mb-5'>Our Features & Services .</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-5 text-center">
                  <div className="card ">
                    <img src="image/elearning2.png" alt="" className='featureimage' />
                    <h4 className='text-center'>One-to-One Interaction</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-5 text-center">
                  <div className="card">
                    <img src="image/onetoone.png" alt="" className='featureimage' />
                    <h4 className='text-center'>User Friendly Interface</h4>
                  </div>
                </div>
                <div className="col-md-4 mb-5 text-center">
                  <div className="card">
                    <img src="image/elearning3.png" alt="" className='featureimage' />
                    <h4 className='text-center'>Flexible Session Scheduling</h4>
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

export default Service