import React from "react";
import { Link } from "react-router-dom";
import './LoginPortal.css';
function LoginPortal() {
  return (
    // <div>LoginPortal</div>
    <>
      <div className="container-fluid backloginportal">
        <div className="container ">
          <div className="row">

            <div className="col-md-4 mt-5 mb-5" >
              <div className="card shadow-lg" >
                <div className="card-body ">
                  <h5 className="card-title text-center"><b>Teacher Login</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted"><img src="image/teacherloginn.png" alt="" /></h6>
                  <p className="card-text"><i>Unlock your potential by signing up with Lingua Leap- The most affordable teaching solution .
                  </i>
                  </p>
                  <Link to="/teachersignup" className="card-link btn btn-primary">Teacher SignUp</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
              <div className="card shadow-lg" >
                <div className="card-body ">
                  <h5 className="card-title text-center"><b>Admin Login</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted"><img src="image/aadmin.png" alt="" /></h6>
                  <p className="card-text"><i>Unlock your potential by signing up with Lingua Leap- The most affordable learning solution .
                  </i>
                  </p>
                  <Link to="/admin" className="card-link btn btn-primary">Admin Login</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
              <div className="card shadow-lg" >
                <div className="card-body ">
                  <h5 className="card-title text-center"><b>Student SignUp</b></h5>
                  <h6 className="card-subtitle mb-2 text-muted"><img src="image/studentloginn.png" alt="" /></h6>
                  <p className="card-text"><i>Unlock your potential by signing up with Lingua Leap- The most affordable learning solution .</i>

                  </p>
                  <Link to="/studentsignup" className="card-link btn btn-primary">Student SignUp</Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPortal;
