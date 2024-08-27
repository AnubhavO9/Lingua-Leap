import React, {useState, useEffect} from "react";
import axios from "axios";
import './Select.css'
import { Link } from "react-router-dom";

const Select=()=>{
    const [employees,setEmployees]=useState([]);
   
    useEffect(()=>{
        axios.post(process.env.REACT_APP_API_URL+'/select')
        .then(response=>{setEmployees(response.data)}
        )
        .catch(error=>{
            console.error("there was an error fetching the employee details",error)
        })
   } ,[]);


   return(
    <div className="div890">
      
        <div className="main _mn25" ><h1>Language List</h1></div>
        <div className="body _by25">
            <div className="inner _ir25">
                
                {employees.map(a1=>(
                    <tr key={a1.id}>
                        
                        <Link to="/req"  >
                        <button className="hind _hn123 "> {a1.lang_name}</button>
                           </Link >
                       
                        
                    </tr>
                ))}
                
            </div>
        </div>

    </div>
)
}
export default Select;