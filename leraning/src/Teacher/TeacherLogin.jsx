import React, { useState } from 'react';
import axios from 'axios';
import TeacherDash from './TeacherDash';
function TeacherLogin() {


    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/kalu4login', { uname, email, password });

            if (response.data.status) {
                localStorage.setItem('email', email);
                localStorage.setItem('uname', uname);
               
                setIsLoggedIn(true);


            } else {
                setError('INvalid uname or password');
            }
        } catch (error) {
            setError('An error occured while trying to logged in');
        }


    };

    return (
        <>
            {isLoggedIn ? (<TeacherDash username={uname} email={email} />) : (
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6"> <section className="login-wrap mtb-40">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 mb-3">
                                                <div className="login-box">
                                                    <h1 className='text-center mb-4'>Teacher Login</h1>
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <input type="text" name="uname" className="form-control" placeholder="Uname" value={uname} onChange={(e) => setUname(e.target.value)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                        <div className="form-group">
                                                            <a href="" ><button className="btn btn-primary">Log In</button></a>
                                                        </div>
                                                        <div className="form-group">
                                                            New Member?
                                                            <a href="/teachersignup"><u>Sign Up Now</u></a>
                                                        </div>

                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section></div>
                                <div className="col-md-6">
                                    <img src="image/onetoone.png" alt="" className="imagesss" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {error}
        </>
    )
}

export default TeacherLogin