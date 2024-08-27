import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './Tcal.css';
import { Link } from 'react-router-dom';

import TeacherRequest from './TeacherRequest';
export default function Tcal() {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [teacher_id, setTeacher_id] = useState('')
  const [language, setLanguage] = useState('');
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');

  const handleClick = (e) => {
    console.log("You have marked your availability on " + e.target.value + " " + "July");
  };

  useEffect(() => {
    let name1 = localStorage.getItem("uname");
    setName1(name1);
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(process.env.REACT_APP_API_URL+'/updateDate', { teacher_id, language, date, time })
      .then(response => {
        console.log("date updated", response.data);
      })
      .catch(error => {
        console.error('there is an error', error);
      });


  };
  const handleDate = (e) => {
    setDate(e.target.value);

  }
  const handleTime = (e) => {
    setTime(e.target.value);
  }
  const handleTeacher_id = (e) => {
    setTeacher_id(e.target.value);
  }
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  }

  return (
    <body>

      <div id='left-17' >
        <div className="col-md-4 bg-white sidebar22">
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
          <h6 className="mt-4 active">
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


        <div id="right-17">
          <div className="wrapper-17">
            <center><h1>Appointments</h1></center>
            <TeacherRequest />
          </div>

        </div>
      </div>
    </body>

  )
}