import React, { useEffect, useState } from 'react'
import './German.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function German() {
  const [languages, setLanguages] = useState([]);
  const [name2, setName2] = useState('');

  useEffect(() => {
    let name2 = localStorage.getItem("uname");
    setName2(name2);
    axios.post(process.env.REACT_APP_API_URL+'/mylanguages')
      .then(response => {
        setLanguages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the teacher details', error);
      })
  }, [])


  return (
    // <div>German</div>
    <>
      <div className="container-fluid ">
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
            <h6 className="mt-4 mb-5">
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
          </div>

          <div className="col-md-9 ">
            <h1 className='mt-4 mb-4 mx-5 '><b>Languages</b></h1>
            <div className="container">
              <div className="row">
                {languages.map(lang => (
                  <div className="col-md-4 mb-5">
                    <div className="container">

                      <div className="row">

                        <div className="col-md-12  present" key={lang.languageid}>
                          <img src={lang.languageimage} alt="" className='chapter admin_button mt-2 border  border-1' />
                          <h1 className=''><b>{lang.languagename}</b> </h1>
                          <h6>{lang.teachername}</h6>
                          <h5>{lang.experience}</h5>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}




              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default German