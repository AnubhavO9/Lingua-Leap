import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const TeacherRequests = () => {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [students, setStudents] = useState([]);
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');

  useEffect(() => {
    const fetchdescription = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_API_URL+'/fetch-description');
        if (response.status === 200) {
          setRequests(response.data.appointments);
        } else {
          alert(response.data.message ? response.data.message : "Error fetching the description");
        }
      } catch (error) {
        console.error("Error in Fetching Students:", error);
        if (error.response) {
          alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
      }
    }
    fetchdescription();
  }, []);


  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_API_URL +'/fetch-appointments-teacher');
        if (response.status === 200) {
          setRequests(response.data.appointments);
        } else {
          alert(response.data.message ? response.data.message : "Error fetching the appointments");
        }
      } catch (error) {
        console.error("Error in Fetching Requests:", error);
        if (error.response) {
          alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      if (!id) {
        alert('Invalid appointment ID');
        return;
      }
      const response = await axios.post(process.env.REACT_APP_API_URL+'/accept-appointment', { id });
      if (response.status === 200) {
        console.log('Request Accepted Successfully');
        window.location.reload();
      } else {
        alert(response.data.message || "Error accepting the appointment");
      }
    } catch (error) {
      console.error("Error in Accepting:", error);
      if (error.response) {
        alert("Error from server: " + (error.response.data.message || "Unknown error"));
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+'/delete-appointment', { id });
      if (response.status === 200) {
        alert('Request Deleted Successfully');
        window.location.reload();
      } else {
        alert(response.data.message ? response.data.message : "Error deleting the appointment");
      }
    } catch (error) {
      console.error("Error in Rejecting:", error);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };
  const handleSendlink = async (id) => {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+'/delete-appointment', { id });
      if (response.status === 200) {
        alert('Request Deleted Successfully');
        window.location.reload();
      } else {
        alert(response.data.message ? response.data.message : "Error deleting the appointment");
      }
    } catch (error) {
      console.error("Error in Rejecting:", error);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };


  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr style={{ backgroundColor: '#071952' }}>
                  <th style={{ color: '#ffffff' }}><center>Student</center></th>
                  <th style={{ color: '#ffffff' }}><center>Language</center></th>
                  <th style={{ color: '#ffffff' }}><center>Description</center></th>
                  <th style={{ color: '#ffffff' }}><center>Start</center></th>
                  <th style={{ color: '#ffffff' }}><center>End</center></th>
                  <th style={{ color: '#ffffff' }}><center>Status</center></th>
                  <th style={{ color: '#ffffff' }}><center>Actions</center></th>
                </tr>
              </thead>
              <tbody>
                {requests && requests.map((request) => {
                  const student = students.find((s) => s.id === request.id);
                  return (
                    <tr key={request.id}>
                      <td>{student ? student.Name : request.uname}</td>
                      <td>{student ? student.Language : request.language}</td>
                      <td>{request.Description}</td>
                      <td>{new Date(request.start).toLocaleString()}</td>
                      <td>{new Date(request.end).toLocaleString()}</td>
                      <td>{request.status}</td>
                      <td>
                        {request.status === 'pending' && (
                          <center>
                            <Button
                              variant="success"
                              onClick={() => handleAccept(request.id)}
                              className="me-2"
                              style={{ backgroundColor: '#1b75d0', borderRadius: '8px', borderStyle: 'none' }}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => handleReject(request.id)}
                              style={{ backgroundColor: '#1b75d0', borderRadius: '8px', borderStyle: 'none' }}
                            >
                              Reject
                            </Button>
                          </center>
                        )}
                         {request.status === 'accepted' && (
                          <center>
                          {request.email}
                            <Button
                              variant="success"
                              // onClick={() => handleSendlink(request.id)}
                              onClick={()=>navigate("/meet",{state:{props:request.email}})}
                
                              className="me-2"
                              style={{ backgroundColor: '#1b75d0', borderRadius: '8px', borderStyle: 'none' }}
                            >
                             Send Link
                            </Button>
                          </center>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeacherRequests;