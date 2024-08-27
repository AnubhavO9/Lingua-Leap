import React from 'react'
import './Review.css';


function Review() {
  return (
    <>
      <div className="container-fluid backreview">
        <div className="container ">
          <div className="row">
            <h1 className='text-center mt-4'>Reviews</h1>
            <div className="col-md-1"></div>
            <div className="col-md-5  text-center  mt-4 mb-2 ">
              <div className="   reviewimage backcard ">
                <center><img src="image/review1.jpeg" alt="" className='imagereview mt-2 ' /></center>
                <h6>Sarah Lee <br /> Teacher</h6>
                <p className='content pb-2'>As a teacher on this platform , I appreciate the personalized approach to teach each student .</p>
              </div>
            </div>
            <div className="col-md-5 text-center mt-4 mb-2 ">
              <div className="  reviewimage  backcard">
                <center><img src="image/review2.jpeg" alt="" className='imagereview mt-2  ' /></center>
                <h6>Sameer Kaur <br /> Student</h6>
                <p className='content pb-2'> As a student on this platform ,I appreaciate the personalised approach to learn . Highly Recommended !!</p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-md-1"></div>
            <div className="col-md-5 text-center  mt-2 mb-5 ">
              <div className="  reviewimage   backcard">
                <center><img src="image/review3.jpeg" alt="" className='imagereview mt-2 ' /></center>
                <h6>Sarah Lee <br /> Teacher</h6>
                <p className='content pb-2'>As a teacher on this platform , I appreciate the personalized approach to teach each student .</p>
              </div>
            </div>
            <div className="col-md-5 text-center mt-2 mb-5     ">
              <div className="  reviewimage  backcard">
                <center><img src="image/review4.png" alt="" className='imagereview mt-2 ' /></center>
                <h6>Sameer Kaur <br /> Student</h6>
                <p className='content pb-2'> As a student on this platform ,I appreaciate the personalised approach to learn . Highly Recommended !!</p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Review