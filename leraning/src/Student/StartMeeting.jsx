import React, { useState, useEffect } from 'react';
import './StartMeeting.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StartMeeting() {
  const [link, setLink] = useState('');
  const [name2, setName2] = useState('');
  const[email2,setEmail2]=useState('');
  const[language2,setLanguage2]=useState('');

  useEffect(() => {
    
    let email2 = localStorage.getItem('email');
    let language2 = localStorage.getItem('selectedLanguage');
    let name2 = localStorage.getItem("uname");
    setEmail2(email2);
    setName2(name2);
    setLanguage2(language2);
    axios.post(process.env.REACT_APP_API_URL+'/linkfetch',{name2:name2 , language2:language2})
      .then(response => {
        const data=response.data;
        // console.log(data.meetinglink);
        console.log(response.data);
        setLink(response.data[0].meetinglink);  
      })
      .catch(error => {
        console.error('There was an error', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("link: " + link);
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  }

  return (
    <>
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
          {/* {meeting.map((ss) => ( */}
          <div className="Meetlink-box-init">
            <div className="Meetlink-text">
              <b>Meeting Link</b>
            </div>
           
              <div className="Meetlink-textbox">
                <form onSubmit={handleSubmit}>
                  <textarea
                    type='text'
                    name='link'
                    className="textfield-component-23"
                    value={link}
                    onChange={handleLinkChange}
                  />
                </form>
              </div>
            
             
          </div>
           {/* ))} */}

        </div>
      </div>
    </>
  )
}

export default StartMeeting;