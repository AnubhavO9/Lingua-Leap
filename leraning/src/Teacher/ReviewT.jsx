import React, { useState ,useEffect} from "react";
import axios from "axios";
import "./ReviewT.css";
import { useNavigate } from "react-router-dom";

function ReviewS() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    setIsPopupOpen(true);
  }, []); 

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    navigate("/teacherdash"); // Navigate when the popup is closed
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(process.env.REACT_APP_API_URL+"/reviews", {
        userName,
        reviewText,
      });

      if (response.status === 200) {

        console.log("Review submitted successfully");

        setUserName("");
        setReviewText("");

        handleClosePopup();
      } else {

        console.error("Error submitting review");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    navigate("/teacherdash");
  };

  return (
    <div className="app" >

      {/* <button className="popup123" }>Write a Review</button> */}
      {isPopupOpen && (  
        <div className="popup"> 
          <div className="popup-content"> 
            <h2>Write Your Review</h2> 
            <div className="form-group"> 
              <label htmlFor="userName">Name:</label> 
              <input 
                type="text" 
                id="userName" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
              />  
            </div> 
            <div className="form-group"> 
              <label htmlFor="reviewText">Review:</label> 
              <textarea 
                id="reviewText" 
                value={reviewText} 
                onChange={(e) => setReviewText(e.target.value)} 
              /> 
            </div>
            <div className="button-group"> 
              <button onClick={handleSubmitReview}>Submit</button> 
              <button onClick={handleClosePopup}>Cancel</button> 
            </div> 
          </div> 
        </div> 
      )}  
    </div> 
  ); 
} 

export default ReviewS;




