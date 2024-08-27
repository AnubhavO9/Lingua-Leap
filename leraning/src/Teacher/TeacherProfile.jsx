import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './TeacherProfile.css';
import { useNavigate } from 'react-router-dom';


function TeacherProfile() {
  const [teacherid, setTeacherID] = useState('');
  const [email, setEmail] = useState('');
  const [uname, setName] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [batch, setBatch] = useState('');
  const [languages, setLanguageKnown] = useState('');
  const [certification, setCertification] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();


  useEffect(() => {

    let email1=localStorage.getItem('email');
    if (email1) {
      axios.post(process.env.REACT_APP_API_URL+'/selectteacherprofile',{email:email1})
        .then(response => {
          const data = response.data[0];
          console.log(data);
          setEmail(email1);
          setTeacherID(data.teacherid);
          setName(data.uname);
          setMobileNo(data.mobileno);
          setBatch(data.batch);
          setLanguageKnown(data.languages);
          setCertification(data.certification);
          setLocation(data.location);

        })
        .catch(error => {
          console.error('There was an error fetching the teacher data!', error);
        });
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();


    console.log("Teacher ID : " + teacherid);

    axios.post(process.env.REACT_APP_API_URL+'/teacherprofile', {
      teacherid, email, uname, mobileno, batch, languages, certification, location

    })
      .then(response => {
        console.log('Teacher updated their profile successfilly', response.data)
        e.target.reset();
        console.log(uname);
        console.log(email);
      
        navigate('/teacherdash');

      })
      .catch(error => {
        console.error('There is an error adding the teacher', error);
      })


  }

  const handleTeacherID = (e) => {
    setTeacherID(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleMobile = (e) => {
    setMobileNo(e.target.value);
  }
  const handleBatch = (e) => {
    setBatch(e.target.value);
  }
  const handleLanguagesKnown = (e) => {
    setLanguageKnown(e.target.value);
  }
  const handleCertification = (e) => {
    setCertification(e.target.value);
  }
  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  return (
    <>

      <section>
        <div className="container mt-3  mb-3">
          <div className="row">

            <div className="col-md-6 shadow-lg mb-3 bg-white">
              <h1 className='text-center mt-3 '><b>Teachers Profile</b></h1>
              <form className="mx-5 mb-5 mt-5 " onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <h6 className='mt-4'>Personal Details</h6>

                </div>

                <div className="form-group">
                  <label >Name</label>
                  <input type="name" className="form-control mb-1" name='Name' value={uname} onChange={handleName} />
                </div>
                <div className="form-group">
                  <label >Email</label>
                  <input type="email" className="form-control mb-1" name='email' value={email} onChange={handleEmail} />
                </div>
                <div className="form-group">
                  <label >Mobile No.</label>
                  <input type="number" className="form-control mb-1" name='Mobile' value={mobileno} onChange={handleMobile} />
                </div>
                <h6 className='mt-3'>Academic Details</h6>
                <div className="form-group">
                  <label className="mb-2">Degree</label>
                  <input type="class" className="form-control mb-1" name='Classes' value={batch} onChange={handleBatch} />
                </div>
                <div className="form-group">
                  <label className="mb-2">Languages Known </label>
                  <input type="language" className="form-control mb-1" name='language' value={languages} onChange={handleLanguagesKnown} />
                </div>
                <div className="form-group">
                  <label className="mb-2">Certification </label>
                  <input type="certification" className="form-control mb-1" name='certification' value={certification} onChange={handleCertification} />
                </div>
                <div className="form-group">
                  <label >Location</label>
                  <input type="Location" className="form-control mb-1" name='Location' value={location} onChange={handleLocation} />
                </div>

                <div className="text-center">
                  <button className="btn btn-primary buttonsave mt-2 mb-3" >Submit</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src="image/teacher.png " className='image2' alt="" />
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default TeacherProfile