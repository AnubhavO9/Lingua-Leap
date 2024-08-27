import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './studentProfile.css';



function Studentprofile(props) {
  const [studentID, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobileNo] = useState('');
  const [batch, setBatch] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Id:" + studentID); // Name ko console par print karte hue
    console.log("Email:" + email);
    console.log("Name:" + name);
    console.log("Mobile:" + mobile);
    console.log("Batch:" + batch);
    console.log("Location:" + location);

  };
  const handleStudentID = (e) => {
    setStudentID(e.target.value); // Input field se naam ko update karte hue

  };
  const handleEmail = (e) => {
    setEmail(e.target.value); // Input field se naam ko update karte hue

  };
  const handleName = (e) => {
    setName(e.target.value); // Input field se naam ko update karte hue

  };
  const handleMobileNo = (e) => {
    setMobileNo(e.target.value); // Input field se naam ko update karte hue

  };
  const handleBatch = (e) => {
    setBatch(e.target.value); // Input field se naam ko update karte hue

  };
  const handleLocation = (e) => {
    setLocation(e.target.value); // Input field se naam ko update karte hue

  };

  return (
    // <h1>Student Profile</h1>
    <>

      <section>

        <div className="container-fluid">
          <div className="row">

            <div className="col-md-3 shadow-lg mb-3 ">
              <h3 className='text-center mt-3  '>Student Profile</h3>
              <center> <img src="image/prof.png" alt="" className='image ' /></center>
              <hr />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 text-center   mt-3 mb-4">

                    <div>
                      <button className='px-2 mt-1 bg-info'><img src="image/proff.png" alt="" className='im ' />Profile</button>
                    </div>

                    <div>
                      <button className='px-2 mt-1'><img src="image/courses.png" alt="" className='im' />My Courses</button>
                    </div>
                    <div>
                      <button className='px-2 mt-1'><img src="image/feedback.png" alt="" className='im' />Feedback</button>
                    </div>
                    <div>
                      <button className='px-2 mt-1'> <img src="image/change.png" alt="" className='im' />Change Password</button>
                    </div>
                    <div>
                      <button className='px-2 mt-1'><img src="image/logout.png" alt="" className='im' /><a href='/'>Logout</a></button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9   mb-3 ">
              <div className="container"><div className="row"><div className="col-md-12">
                <form className="mx-5 mb-5 mt-5 " onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <h6 className='mt-4'>Personal Details</h6>


                  </div>
                  <div className="form-group">
                    <label >Name</label>
                    <input type="name" className="form-control mb-1" name='Name' value={props.username} onChange={handleName} />
                  </div>
                  <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control mb-1" name='mail' value={props.email} onChange={handleEmail} />
                  </div>

                  <div className="form-group">
                    <label >Mobile No.</label>
                    <input type="number" className="form-control mb-1" name='Mobile' value={mobile} onChange={handleMobileNo} />
                  </div>
                  <h6 className='mt-3'>Academic Details</h6>
                  <div className="form-group">
                    <label className="mb-2">Class</label>
                    <input type="class" className="form-control mb-1" name='Classes' value={batch} onChange={handleBatch} />
                  </div>
                  <div className="form-group">
                    <label >Location</label>
                    <input type="Location" className="form-control mb-1" name='Location' value={location} onChange={handleLocation} />
                  </div>

                  <div className="text-center">
                   {/* < <a href="/languagesselect" className="btn btn-primary buttonsave mt-2 mb-3">Submit</a>> */}
                   <Link to="/select" className="btn btn-primary buttonsave mt-2 mb-3" >Submit</Link>
                  </div>
                </form>

              </div></div></div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Studentprofile;