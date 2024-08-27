import React from 'react'
import './Material.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Material() {
    const [material, setmaterial] = useState([]);
    const [name2, setName2] = useState('');
    useEffect(() => {
        let name2 = localStorage.getItem("uname");
      setName2(name2);
        axios.post(process.env.REACT_APP_API_URL+'/imgfetch')
            .then(response => {
                setmaterial(response.data)
            })
            .catch(error => {
                console.error('THere was an error ', error);
            })
    }, [])
    return (
        <>


            {/* <h1>Material</h1> */}
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
                        <h2 className='mt-4 mb-4 mx-5 '><u>View Study Material</u></h2>
                        <div className="container">
                            <div className="row">
                                {material.map((ac) => (
                                    <div className="col-md-4" key={ac.id}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-center border shadow-lg">
                                                    <img src={ac.image} alt="" className='chapter admin_button mt-2' />
                                                    <h1 className='text-center'>{ac.chapter}</h1>

                                                    <progress id="file" value="32" max="100"> 32% </progress>
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

export default Material