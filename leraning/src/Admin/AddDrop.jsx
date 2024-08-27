import React, { useState } from 'react';
import './AddDrop.css';
import { Link } from 'react-router-dom'



const initialMostSelectedLanguages = [
  { id: 1, name: 'Korean', image: 'image/korea.webp' },
  { id: 2, name: 'Russian', image: 'image/russia.png' },
  { id: 3, name: 'Japanese', image: 'image/japanese.png' },
];

const initialOtherLanguages = [
  { id: 4, name: 'French', image: 'image/french.png' },
  { id: 5, name: 'English', image: 'image/english.png' },
  { id: 6, name: 'German', image: 'image/German.webp' },
];

function AddDrop() {
  const [mostSelectedLanguages, setMostSelectedLanguages] = useState(initialMostSelectedLanguages);
  const [otherLanguages, setOtherLanguages] = useState(initialOtherLanguages);

  const handleAddLanguage = (language) => {
    setMostSelectedLanguages([...mostSelectedLanguages, language]);
    setOtherLanguages(otherLanguages.filter(lang => lang.id !== language.id));
  };

  const handleDropLanguage = (id) => {
    const languageToDrop = mostSelectedLanguages.find(lang => lang.id === id);
    setMostSelectedLanguages(mostSelectedLanguages.filter(lang => lang.id !== id));
    setOtherLanguages([...otherLanguages, languageToDrop]);
  };

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




                    <div className="col-md-9 mt-10 px-0">
                      <main>
                        <h1>Add/Drop Languages</h1><br />
                        <h2>Drop Languages</h2>
                        <div className="language-grid ">
                          {mostSelectedLanguages.map(language => (
                            <div key={language.id} className="language-card bg-white">
                              <img src={language.image} alt={language.name} className='border border-1 mt-3' />
                              <h3>{language.name}</h3>
                              <button className='btn' onClick={() => handleDropLanguage(language.id)}>Drop Language</button>
                            </div>
                          ))}
                        </div>
                        <h2>Add Languages</h2>
                        <div className="language-grid">
                          {otherLanguages.map(language => (
                            <div key={language.id} className="language-card bg-white">
                              <img src={language.image} alt={language.name} className='border border-1 mt-3' />
                              <h3>{language.name}</h3>
                              <button onClick={() => handleAddLanguage(language)}>Add Language</button>
                            </div>
                          ))}
                        </div>
                      </main>
                    </div></div></div></div></div></div></div>
      </div></div>
  );
}

export default AddDrop;