import React, { useState, useEffect } from "react";
import axios from "axios";
// import '../Teacher/TeacherDash';
import "./TeacherDash.css";
import TeacherProfile from "../Teacher/TeacherProfile";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const TeacherDash = () => {
  const [Language, setLanguage] = useState([]);
  const location = useLocation();
  const { name, email } = location.state || {};
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = true;
  const handleSubmit = () => {

    console.log("WELCOME");
    // navigate("/teacherprofile", { state: { username: name1, email: email1 } });
    console.log(name1);
    console.log(email1);
  }
  
  useEffect(() => {
    let email1 = localStorage.getItem('email');
    let name1 = localStorage.getItem("uname");
    setEmail1(email1);
    setName1(name1);
    axios.get(process.env.REACT_APP_API_URL+"/teachlang")
      .then(response => { setLanguage(response.data) }
      )
      .catch(error => {
        console.error("there was an error fetching the employee details", error)
      })
  }, []);

  return (
    <>
      <div className="mainBody-component-22">

        <div className="col-md-3 bg-white ">
          <div className="mt-2 text-center backSTART ">
            <img src="image/aadmin.png" alt="" className="mt-2 " />
            <h4>
              <b>{name1}</b>
            </h4>
            <h6 className="pb-3">Teacher</h6>
          </div>
          <hr />
          <h6 className="mt-4  active">
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
            {/* <Link to="/TeacherProfile">Profile</Link> */}
            <Link to="/teacherprofile">Profile</Link>
            {/* {isLoggedIn ? (<TeacherProfile username={name} email={email} />) :(null)} */}
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
            <hr />
        </div>
        <div className="Main_content-body-component-22">
          <div className="langcontainer1-component-22">
            {Language.map(a1 => (
              <div key={a1.id} className="Language1-component-22">
                <div className="lang-name-component-22">
                  <b>{a1.Name}</b>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherDash;

