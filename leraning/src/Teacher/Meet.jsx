
import React, { useState } from "react"
// import Header from "./Header"
import './Meet.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import { useParams,useLocation } from "react-router-dom";



function MeetGen() {
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');
  const [link2, setLink2] = useState('');
  const location=useLocation();
  const emaill= location.state.props;

  const handlelink = (e) => {
    setLink2(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emaill);
    console.log("Sending link2:", link2); // Log link2 before sending

    axios.post(process.env.REACT_APP_API_URL + '/send-link', {link:link2,emaill:emaill})
      .then((res) => {

        alert("link sent ");
        console.log("link sent successfulllyy");
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    let email1 = localStorage.getItem('email');
    let name1 = localStorage.getItem("uname");
    setEmail1(email1);
    setName1(name1);
  })

  return (
    <>
      {/* <Header/> */}
      <div className="mainBody-component-23">
        <div className="col-md-3 bg-white ">
          <div className="mt-2 text-center backSTART ">
            <img src="image/aadmin.png" alt="" className="mt-2 " />
            <h4>
              <b>{name1}</b>
            </h4>
            <h6 className="pb-3">Teacher</h6>
          </div>
          <hr />
          <h6 className="mt-4">
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
          <h6 className="mt-4">
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
          <hr/>
          <div className="col-md-9">
          <div className="Meetlink-textbox">
            <form onSubmit={handleSubmit}>
              <input type='text' className="textfield-component-23 " placeholder="https://meet.google.com/tay-qsxz-pyi "
               value={link2}  onChange={handlelink}/>
             <center><button type="submit" className="btn btn-primary but-12">Send Link</button></center>
</form>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default MeetGen