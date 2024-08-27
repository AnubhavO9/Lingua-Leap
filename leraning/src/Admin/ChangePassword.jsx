import React, { useState } from "react";
// import "../CSS/AdminProfile.css";
import { Link } from "react-router-dom";




function ChangePassword() {
  const [currentpassword, setCurrentPassword] = useState('')
  const [newpassword, setNewPassword] = useState('');
  const [reenter, setReenter] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CurrentPassword : " + currentpassword)
    console.log("NewPassword : " + newpassword); // Name ko console par print karte hue
    console.log("Reenter : " + reenter);

  };

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value); // Input field se naam ko update karte hue

  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value); // Input field se naam ko update karte hue

  };
  const handleReenter = (e) => {
    setReenter(e.target.value); // Input field se naam ko update karte hue

  };

  return (
    <>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 bg-white ">
              <div className="mt-2 text-center backSTART ">
                <img src="image/aadmin.png" alt="" className="mt-2 " />
                <h4>

                </h4>
                <h6 className="pb-3">Admin</h6>
              </div>
              <hr />
              <h6 className="mt-4">
                {" "}
                <img src="image/select.png" alt="" className="view mx-2" />
                <Link to="/registered"> Registered Languages</Link>
              </h6>

              <hr />
              <h6 className="mt-4 ">
                {" "}
                <img src="image/meeting.png" alt="" className="view mx-2" />
                <Link to="/teacherdetail">Teacher Details</Link>
              </h6>
              <hr />
              <h6 className="mt-4">
                {" "}
                <img
                  src="image/meeting.png"
                  alt=""
                  className="view mx-2"
                />
                <Link to="/studentenroll">Student Enroll</Link>
              </h6>


              <hr />
              <h6 className="mt-4">
                {" "}
                <img src="image/select.png" alt="" className="view mx-2" />
                <Link to="/adddrop">Add and Drop Languaes </Link>
              </h6>
              <hr />
              <h6 className="mt-4">
                {" "}
                <img src="image/select.png" alt="" className="view mx-2" />
                <Link to="/changepassword">Change Password</Link>
              </h6>

              <hr />
            </div>
            <div className="col-md-9 ">
              <div className="container">
                <div className="row">
                  <h3 className="text-center mt-3 mx-3">Change Password</h3>

                  <center><div className="col-md-7 border shadow-lg mt-5 ">

                    <ul className="mt-2 mx-5  ">

                      <center><li><a href="./changepassword" className="Profile mt-2 active"><b>Change Password</b></a> </li></center>
                    </ul>
                    <hr />

                    <form onSubmit={handleSubmit}>


                      <div className="form-group mt-3">
                        <label >Current Password:</label>
                        <input type="password" className="form-control mb-1" value={currentpassword} onChange={handleCurrentPassword} />

                      </div>
                      <div className="form-group">
                        <label >New Password:</label>
                        <input type="new password" className="form-control mb-1" value={newpassword} onChange={handleNewPassword} />
                      </div>
                      <div className="form-group">
                        <label >Re-enter New Password:</label>
                        <input type="re-enter password" className="form-control mb-1" value={reenter} onChange={handleReenter} />
                      </div>




                      <div className="text-center">
                        <button type="submit" className="btn btn-primary buttonsave mt-2 mb-3">Save Changes</button>
                      </div>
                    </form>

                  </div></center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
export default ChangePassword;
