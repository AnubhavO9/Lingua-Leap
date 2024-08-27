import React from 'react'
import './Tutor.css';
function Tutor() {
  return (
    // <div>Tutor</div>
    <>
       <div className="container-fluid bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='tutor mt-5'>How does  LinguaLeap work?</h1>
                    <p>Here’s a peek at our online lesson space; it’s where you’ll be giving life-changing tuition to students who need it most. And it’s all within reaching distance of the kettle!</p>
                </div>
                <div className="col-md-6">
                    <img src="image/tutor.jpg" alt="" className='tutor_image'/>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Tutor