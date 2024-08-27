
import React from "react"
import "./StudyMaterial.css";
import { Link } from 'react-router-dom';
import { useEffect,useState } from "react";

function StudyMaterial() {
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');
    
  useEffect(() => {
    let email1 = localStorage.getItem('email');
    let name1 = localStorage.getItem("uname");
    setEmail1(email1);
    setName1(name1);
  })

  return (
    <>

      <div class="mainBody-component-23">
        <div className="col-md-3 bg-white ">
          <div className="mt-2 text-center backSTART ">
            <img src="image/aadmin.png" alt="" className="mt-2 " />
            <h4>
              <b>{name1}</b>
            </h4>
            <h6 className="pb-3">Teacher</h6>
          </div>
          <hr />
          <h6 className="mt-4 ">
            {" "}
            <img
              src="/image/coursess.png"
              alt=""
              className="view mx-2 "
            />{" "}
              <Link to="/teacherDash">Language Expertise</Link>
              </h6>
          <hr />
          <h6 className="mt-4 ">
            {" "}
            <img src="image/profiles.png" alt="" className="view mx-2" />
            <Link to="/TeacherProfile">Profile</Link>
          </h6>
          <hr />
          <h6 className="mt-4">
            {" "}
            <img
              src="image/updatedcalendar.png"
              alt=""
              className="view mx-2"
            />
            <Link to="/teachercalendar">Student Request</Link>
          </h6>
          <hr />
          <h6 className="mt-4 active">
            {" "}
            <img src="image/studymaterial.png" alt="" className="view mx-2" />
            <Link to="/studymaterial">   Upload Study Material</Link>
          </h6>
          <hr />
         
          <h6 className="mt-4">
              {" "}
              <img
                src="image/updatedcalendar.png"
                alt=""
                className="view mx-2"
              />
              <Link to="/addreviewT" > Add Review</Link>
            </h6>
            <hr />
          <h6 className="mt-4 active">
              {" "}
              <img src="image/meeting.png" alt="" className="view mx-2" />
              <Link to="/"> Log Out</Link>
            </h6>
            <hr />

        </div>
        <div className="pdf-icon">
          <div className="text-center mb-5 bg-white pt-4 pb-4">
            <img src="image/pdf.png" alt="" />
          </div>


          <div className="add-upload-buttons">
            <button class='Add-button mb-3'><b>Add Documents</b></button>
            <button class='Add-button'><b>Upload Documents</b></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default StudyMaterial