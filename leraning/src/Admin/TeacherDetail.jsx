import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeacherDetail.css';
import { Link } from 'react-router-dom';

const TeacherDetail = () => {
  const [teacherenroll, setTeacherEnroll] = useState([]); //state
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL+'/TeacherDetailsView')
      .then(response => {
        setTeacherEnroll(response.data)
      })
      .catch(error => {
        console.error('There was an error ', error);
      });
  }, [])
    ;
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
                    <div className="col-md-9 mt-7 px-0">
                      <main className='main1'>
                        <h1>Teacher Details</h1><br />
                        <section>
                          <h2>Most Recommended Teachers</h2>
                          <div className="teacher-grid1">
                            {teacherenroll.map(teacher => (
                              <div className="teacher-card1" key={teacher.Name}>
                                <img src={teacher.imageURL} alt={teacher.Language_Proficiency} />
                                <span className='name'>{teacher.Name}</span>
                                <span>{teacher.Language_Proficiency}</span>
                                <button className="btn btn-primary but-12">Verify</button>
                              </div>
                            ))}
                          </div>
                        </section>

                      </main>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDetail;