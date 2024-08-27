import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Registered.css';
import { Link } from 'react-router-dom';

const Registered = () => {
  const [testlanguage, settestlanguage] = useState([]); //state
  useEffect(() => {
    axios.post(process.env.REACT_APP_API_URL+'/selecttlanguage')
      .then(response => {
        settestlanguage(response.data)
      })
      .catch(error => {
        console.error('There was an error ', error);
      });
  }, [])

  return (
    <div className="container-fluid px-0">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-12 mt-0 px-0 ">
            <div className="container-fluid">
              <div className="row">

                <div className="container-fluid bg-light">
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
                    <div className="col-md-9 mt-8 px-0">
                      <main className='main3'>
                        <h1>Registered Languages</h1><br />
                        <div className="language-grid">
                          {testlanguage.map(language => (
                            <div className="language-card" key={language.languageId}>
                              <span>{language.languages}</span>
                              <img src={`${language.imageURL.toLowerCase()}`} alt={`${language.languages} Flag`} />
                            </div>
                          ))}
                        </div>
                        <center><button className="drop-button">..More</button>
                        </center>
                      </main>
                    </div>
                  </div></div></div></div></div></div></div>
    </div>
  );
};
export default Registered;