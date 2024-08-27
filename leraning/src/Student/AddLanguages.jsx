// import React from 'react';
// import {useState, useEffect } from 'react'

// import './AddLanguages.css';
// import { Link } from 'react-router-dom';


// function AddLanguages() {
//     const [name2, setName2] = useState('');
//     const [selectedLanguage, setSelectedLanguage] = useState('');

//     useEffect(()=>{
//       let name2 = localStorage.getItem("uname");
//       setName2(name2);
     
//     },[])

//     const handleLanguageSelect = (language) => {
//         setSelectedLanguage(language);
//     };

//     return (
//         // <div>AddLanguages</div>
//         <>
//             <div className="container-fluid ">
//                 <div className="row">
//                 <div className="col-md-3 bg-white ">
//             <div className="mt-2 text-center backSTART ">
//               <img src="image/images2.png" alt="" className="mt-2 " />
//               <h4>
//                 <b>{name2}</b>
//               </h4>
//               <h6 className="pb-3">Student</h6>
//             </div>
//             <hr />
//             <h6 className="mt-4 mb-1">
//               {" "}
//               <img src="image/select.png" alt="" className="view mx-2" />
//               <Link to="/addlanguages">Select Language</Link>
//             </h6>
//             <hr />
//             <h6 className="mt-4  active">
//               {" "}
//               <img
//                 src="image/coursess.png"
//                 alt=""
//                 className="view mx-2 "
//               />{" "}
//               <Link to="/presentlearning">Present Learning</Link>
//             </h6>
//             <hr />
//             <h6 className="mt-4">
//               {" "}
//               <img
//                 src="image/updatedcalendar.png"
//                 alt=""
//                 className="view mx-2"
//               />
//               <Link to="/studentcalendar"> Request Status</Link>
//             </h6>
//             <hr />
//             <h6 className="mt-4">
//               {" "}
//               <img
//                 src="image/updatedcalendar.png"
//                 alt=""
//                 className="view mx-2"
//               />
//               <Link to="/addreview" > Add Review</Link>
//             </h6>
//             <hr />
//             <h6 className="mt-4">
//               {" "}
//               <img
//                 src="image/updatedcalendar.png"
//                 alt=""
//                 className="view mx-2"
//               />
//               <Link to="/"> Log Out</Link>
//             </h6>
//             <hr />
//           </div>

//                     <div className="col-md-9 ">
//                         <h1 className='mt-4 mb-4 mx-5 '><u>Select Languages</u></h1>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-4">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-12 text-center border ">
//                                                 <img src="image/image8.jpg" alt="" className='chapter admin_button mt-2' />
//                                                 <h1 className='text-center'><button value={}>German</button></h1>
//                                                 <Link to="/req" className='btn btn-primary mb-2 px-4'>Select</Link>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-12 text-center border ">
//                                                 <img src="image/english.png" alt="" className='chapter admin_button mt-2 border  border-1' />
//                                                 <h1 className='text-center'><b>English</b></h1>
//                                                 <Link to="/req" className='btn btn-primary mb-2 px-4'>Select</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-12 text-center border ">
//                                                 <img src="image/image2.jpg" alt="" className='chapter admin_button mt-2 border  border-1' />
//                                                 <h1 className='text-center'><b>Korean</b></h1>
//                                                 <Link to="/req" className='btn btn-primary mb-2 px-4'>Select</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="container mt-4">
//                             <div className="row">
//                                 <div className="col-md-4 mt-3 mb-3">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-12 text-center border ">
//                                                 <img src="image/image4.jpg" alt="" className='chapter admin_button mt-2' />
//                                                 <h1 className='text-center'><b>Japanese</b></h1>

//                                                 <Link to="/req" className='btn btn-primary mb-2 px-4'>Select</Link>                                            </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mt-3 mb-3">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-12 text-center border ">
//                                                 <img src="image/image10.jpg" alt="" className='chapter admin_button mt-2 border  border-1' />
//                                                 <h1 className='text-center'><b>Indonesian</b></h1>
//                                                 <Link to="/req" className='btn btn-primary mb-2 px-4'>Select</Link>                                            </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mt-3 mb-3">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-md-12 text-center border ">
//                                                 <img src="image/image3.jpg" alt="" className='chapter admin_button mt-2 border  border-1' />
//                                                 <h1 className='text-center'><b>French</b></h1>

//                                                 <Link to="/req" className='btn btn-primary mb-2 px-4'>Select</Link>                                            </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default AddLanguages

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddLanguages.css';
import { Link } from 'react-router-dom';

function AddLanguages() {
    const [name2, setName2] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const navigate = useNavigate();
    localStorage.setItem('selectedLanguage', selectedLanguage);

    useEffect(() => {
        const name = localStorage.getItem("uname");
        setName2(name);
    }, []);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleConfirmSelection = () => {
        // Here you can navigate to another route or perform any action with the selectedLanguage
        console.log('Selected Language:', selectedLanguage);
        // Navigate to another page or handle the selected language as needed
        navigate('/req');
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 bg-white">
                        <div className="mt-2 text-center backSTART">
                            <img src="image/images2.png" alt="" className="mt-2" />
                            <h4><b>{name2}</b></h4>
                            <h6 className="pb-3">Student</h6>
                        </div>
                        <hr />
                        <h6 className="mt-4 mb-1">
                            <img src="image/select.png" alt="" className="view mx-2" />
                            <Link to="/addlanguages">Select Language</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4 active">
                            <img src="image/coursess.png" alt="" className="view mx-2" />
                            <Link to="/presentlearning">Present Learning</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4">
                            <img src="image/updatedcalendar.png" alt="" className="view mx-2" />
                            <Link to="/studentcalendar">Request Status</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4">
                            <img src="image/updatedcalendar.png" alt="" className="view mx-2" />
                            <Link to="/addreview">Add Review</Link>
                        </h6>
                        <hr />
                        <h6 className="mt-4">
                            <img src="image/updatedcalendar.png" alt="" className="view mx-2" />
                            <Link to="/">Log Out</Link>
                        </h6>
                        <hr />
                    </div>

                    <div className="col-md-9">
                        <h1 className='mt-4 mb-4 mx-5'><u>Select Languages</u></h1>
                        <div className="container">
                            <div className="row">
                                {/* List of languages */}
                                {['German', 'English', 'Korean', 'Japanese', 'Indonesian', 'French'].map((language) => (
                                    <div className="col-md-4" key={language}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-center border">
                                                    <img 
                                                        src={`image/${language.toLowerCase()}.png`} 
                                                        alt="" 
                                                        className='chapter admin_button mt-2 border border-1' 
                                                    />
                                                    <h1 className='text-center'><b>{language}</b></h1>
                                                    <button 
                                                        className={`btn ${selectedLanguage === language ? 'btn-success' : 'btn-primary'} mb-2 px-4`} 
                                                        onClick={() => handleLanguageSelect(language)}
                                                    >
                                                        {selectedLanguage === language ? 'Selected' : 'Select'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button 
                                        className="btn btn-primary px-4" 
                                        onClick={handleConfirmSelection} 
                                        disabled={!selectedLanguage}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddLanguages;
