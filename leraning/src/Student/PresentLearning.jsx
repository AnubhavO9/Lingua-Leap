import React, { useState, useEffect } from "react";
import "./PresentLearning.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Header2 from "../Layouts/Header2";

function PresentLearning() {
  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');

  const [present, setpresent] = useState([]);
  useEffect(() => {

    let email2 = localStorage.getItem('email');
    let name2 = localStorage.getItem("uname");
    setEmail2(email2);
    setName2(name2);
    axios.post(process.env.REACT_APP_API_URL +'/presentlearn',[email2,name2])
      .then(response => {
        setpresent(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('THere was an error ', error);
      })
  }, [])


  return (
    // <div>PresentLearning</div>
    <>
      {/* <Header2/> */}
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
          <div className="col-md-9   ">
            <h1 className=" mb-3 mt-4 mx-4 ">

              <u>Present Learning</u>
            </h1>

            <div className="container text-center">
              <div className="row">
                <div className="col-md-4">
                  <form className="mt-5" >


                  </form>
                </div>
                <div className="col-md-1"></div>
                {present.map((bb) => (
                  <div className="col-md-3 present" key={bb.id} >
                    <h1 className="bg-secondary text-white rounded mt-4">
                      <b>{bb.language}</b>
                    </h1>
                    <h5>
                   <p>{bb.start}<br>
                   </br>{bb.end}
                   </p>
                    </h5>
            {/* <        <button>Start Meeting</button>> */}
            <div className="text-center mt-3">
  <Link to="/startmeeting" className="btn btn-success btn-lg">
    Start Meeting
  </Link>
</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentLearning;