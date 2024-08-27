import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <>

      <div className="container-fluid background text">
        <div className="row">
          <div className="col-md-4 mt-3">
            <h3><img src="image/footer.png" alt="" /><b>Lingua Leap</b></h3>
            <p>Subscribe to our newsletter for the latest updates on news features and product releases.</p>
            <a href="" className='butn p-2'>Enter your email</a>
            <a href="" className=' butn p-2 mx-5'>Subscribe to Newsletter</a>
            <h6 className='mt-5 textfont'><img src="image/copyright.png" alt="" className='images mx-2' /> 2024 E-Language Learning Platform . All Rights Reserved .</h6>
          </div>

          <div className="col-md-2 text-center">
            <h3 className='mt-5'><b>Contact Us</b></h3>
            <h5 className='mt-4 '><img src="image/phone.png" alt="" className='images mx-3' />  Phone</h5>
            <h5><img src="image/email.png" alt="" className='images mx-3' />  Email</h5>
          </div>
          <div className="col-md-3 ">
            <h3 className='mt-5 text-center'><b>Quick Links</b></h3>
            <h5 className='mt-4 text-center '>Terms and Conditions</h5>
            <h5 className='text-center mt-3'>Language Selection</h5>
            <h5 className='text-center mt-3'>Book a Slot</h5>
            <h5 className='text-center mt-3'>Sign In/ Login In </h5>

          </div>
          <div className="col-md-3 ">
            <h3 className='mt-5 '><b>Connect with us</b></h3>
            <h5><img src="image/instagram.png" alt="" className='images mx-4' />Instagram</h5>
            <h5><img src="image/facebook.png" alt="" className='images mx-4' />Facebook</h5>
            <h5><img src="image/youtube.png" alt="" className='images mx-4' />Youtube</h5>
            <h5><img src="image/twittter.png" alt="" className='images mx-4' />Twitter</h5>
            <h5><img src="image/telegram.png" alt="" className='images mx-4' />Telegram</h5>
            <h5><img src="image/linkedin.png" alt="" className='images mx-4' />LinkedIn</h5>

          </div>
          <hr className='mt-5' />
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 ">
                <h6 className='mx-5'>Designed by lingua Leap</h6>
              </div>
              <div className="col-md-6 mb-5 ">
                <h6 className='mx-5'>/privacy-policy  /terms-and-condition</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer