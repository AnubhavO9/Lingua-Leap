
import React from 'react';
import './StudCal.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './StudCal.css';
import Calenda from './Calenda';
import axios from 'axios';


export default function StudCal() {
  const [name2, setName2] = useState('');

  useEffect(()=>{
    let name2 = localStorage.getItem("uname");
    setName2(name2);
  })


    return (
        <body>
     <div className="container-fluid">
        <div className="row">
        <div className="col-md-3 bg-white ">
            <div className="mt-2 text-center backSTART ">
              <img src="image/images2.png" alt="" className="mt-2 " />
              <h4>
                <b>{name2}</b>
              </h4>
              <h6 className="pb-3">Student</h6>
            </div>
            <hr />
            <h6 className="mt-4 mb-1">
              {" "}
              <img src="image/select.png" alt="" className="view mx-2" />
            <Link to="/addlanguages">Select Language</Link>
            </h6>
            <hr />
            <h6 className="mt-4  active">
              {" "}
              <img
                src="image/coursess.png"
                alt=""
                className="view mx-2 "
              />{" "}
              <Link to="/presentlearning">Present Learning</Link>
            </h6>
            <hr />
            {/* <h6 className="mt-4 ">
              {" "}
              <img src="image/profiles.png" alt="" className="view mx-2" />
              <Link to="/startmeeting">Start Meeting</Link>
            </h6>
            <hr /> */}
            <h6 className="mt-4">
              {" "}
              <img
                src="image/updatedcalendar.png"
                alt=""
                className="view mx-2"
              />
              <Link to="/studentcalendar"> Request Status</Link>
            </h6>
            <hr />
            <h6 className="mt-4">
              {" "}
              <img
                src="image/updatedcalendar.png"
                alt=""
                className="view mx-2"
              />
              <Link to="/addreview" > Add Review</Link>
            </h6>
            <hr />
            <h6 className="mt-4">
              {" "}
              <img
                src="image/updatedcalendar.png"
                alt=""
                className="view mx-2"
              />
              <Link to="/"> Log Out</Link>
            </h6>
            <hr />
          </div>
          <div className="col-md-9 px-5">
            <h1 className='mt-4 mb-4 '><b>Request Status</b></h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 cal-67">
                    <Calenda/>
                    </div>
                    <div className="col-md-4 text-center">    
                    </div>
                </div>
            </div>
           
           
          </div>
        </div>
     </div>
        
        </body>
    )
}