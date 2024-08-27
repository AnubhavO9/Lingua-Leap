import React from 'react';
import axios from 'axios';
import './Calenda.css';
import { useState,useEffect } from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default function Calenda() {
    const [events, setEvents] = useState([]);
    const [selectedRange, setSelectedRange] = useState(null);
    const [description, setDescription] = useState([]);
    const [name2, setName2] = useState('');
    const [email2, setEmail2] = useState('');
    const [language2, setLanguage2] = useState('');

    useEffect(() => {
      let name2 = localStorage.getItem("uname");
      let email2=localStorage.getItem('email')
      let language2=localStorage.getItem("selectedLanguage");
      setLanguage2(language2);
      setName2(name2);
      setEmail2(email2);


      const fetchAppointments = async () => {
        try {
          const response = await axios.post(process.env.REACT_APP_API_URL +'/fetch-appointments',{ name2,email2,language2 });
          console.log(response.data.appointments);
          const appointments = response.data.appointments;
          const mappedEvents = appointments.map(appointment => ({
            start: appointment.start,
            end: appointment.end,
             color : appointment.status === 'accepted' ? '#43AA47' :
              appointment.status === 'rejected' ? 'red' :
              appointment.status === 'pending' ? '#FFFF00' :
              ''
          }));
        
          setEvents(mappedEvents);
        } catch (error) {
          console.error("Error fetching appointments:", error);
        }
      };
  
      fetchAppointments();
    }, []);

    const handleDateSelect = (selectionInfo) => {
      setSelectedRange({
        start: selectionInfo.startStr,
        end: selectionInfo.endStr,
      });
    };
  

    const handleConfirm = async () => {
      if (selectedRange) {
        const newEvent = {
          start: selectedRange.start,
          end: selectedRange.end,
          color: 'rgb(242, 242, 85)',
        };
        setEvents([...events, newEvent]);
  

        let name2 = localStorage.getItem("uname");  
        let email2 = localStorage.getItem("email");        
        let language2=localStorage.getItem("selectedLanguage");

      
        const appointmentData = {
          uname:name2,
          email:email2,
          language:language2,
          start: selectedRange.start,
          end: selectedRange.end,
          status: 'pending',
          description: description
        };
  
  
        try {
          const response = await axios.post(process.env.REACT_APP_API_URL +'/request-appointment', appointmentData);

          if (response.status === 200) {
            console.log(response.data.message);
          } else {
            alert(response.data.message || "Error Sending the appointment");
          }
        } catch (error) {
          console.error("Error in Requesting:", error);
          console.log(`${error.name} -> ${error.message}`);
          if (error.response) {
            alert("Error from server: " + error.response.data.message);
          } else if (error.request) {
            alert("No response from the server");
          } else {
            alert("Error setting up the request: " + error.message);
          }
        }
  
        setSelectedRange(null);
      }
    };
    

  return (
    
    <div className='Cal-12'>
      <Fullcalendar
      plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
      initialView={"timeGridWeek"}
      selectable={true}
      select={handleDateSelect}
      events={events}
      headerToolbar={{
        start:"prev,next today",
        center:"title",
        end:"dayGridMonth, timeGridWeek ,timeGridDay",
      }}
      height={"90vh"}
    />
     <div className="d-flex justify-content-center mt-4">
       <center>
        <form onSubmit={handleConfirm}>
          <input className='langdes' type='text' placeholder='Enter the language specifications' value={description} onChange={(e)=>setDescription(e.target.value)}required/>
        </form>
          <button
          onClick={handleConfirm}
          disabled={!selectedRange}
          className="btn btn-primary but-12"
        >
          Send Request
        </button></center>
      </div>
    </div>
  )
}