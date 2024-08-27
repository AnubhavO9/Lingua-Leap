import React, { useState } from "react";
import './AdminLogin.css';
import axios from 'axios';
import ChangePassword from "./ChangePassword";

function AdminLogin() {

 const [username_email,setUsername_email] = useState('');
  const [password,setPassword] = useState('');
  const[error,setError]=useState('');
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const handleSubmit = async (event) =>{

    event.preventDefault();

    try{
        const response=await axios.post(process.env.REACT_APP_API_URL+'/adminn',{username_email,password });

        if(response.data.status) {
            setIsLoggedIn(true);
         

        }else{
            setError('INvalid uname or password');
        }
    }catch(error) {
        setError('An error occured while trying to logged in');
    }


};




  // ......


  return (
    // <div>AdminLogin</div>
   
    <>

    {isLoggedIn ? (<ChangePassword  />) : (
      <div className="container-fluid backlogin" >
        <div className="row">
        <hr />
          <div className="col-md-4"></div>
         
          <div className="col-sm-4 login-box mt-5 mb-5 " >
<form action=""onSubmit={handleSubmit}>
                     <div className="title-box bg-primary">
                         <h2 className="text-white">Admin Login</h2>
                         <p>Please enter  your Login details !</p>
                     </div>
                     <div className="row"   >
                         <input type="text" placeholder="Enter Email/Username" name="username_email" className="form-control inpt-sm"  value={username_email} onChange={(e)=>setUsername_email(e.target.value)}/>
                     </div>
                     <div className="row">
                         <input type="password" placeholder="Enter Password" name="password" className="form-control inpt-sm" value={password} onChange={(e)=>setPassword(e.target.value)} />
                     </div>
                     <div className="row chk-lab">
                        <div className="col-sm-6">
                            {/* <input type="checkbox" /> <label>Remember me</label> */}
                        </div>
                        <div className="col-sm-6 colkd">
                            <a href="/changepassword">Forget Password ?</a>
                        </div>
                     </div>
                     <div className=" submit-row text-center ">
                         <button className="btn bg-info text-white">Submit</button>
                     </div>
</form>
                 </div>

                 
          <div className="col-md-4 "></div>
    <hr />
        </div>
      </div>
      )}
                    {error}
    </>
  );
}

export default AdminLogin;