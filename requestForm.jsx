import React from "react"; 
import  './requestForm.css';

const RequestForm = () => {
    return (
      <div id="formpage">
      <div id="container">
        <h2>Request a Car</h2>
        <form action="https://api.web3forms.com/submit"  method="Post">
        <input type="hidden" name="access_key" value={"df780fe3-d411-4604-b8a6-ea4818819021"}/>
      
        <div id="names">
            <div id="first">
                <label >First Name*
                <input type="text"  name="fullName"id="firstname"  required/>
                </label>
                
            </div>
            <div id="last">
                <label >Last Name*
                <input type="text"  id="lastname" required/>
                </label>
                
            </div>
        </div>
        <div id="email">
            <label >Email Address*
            <input type="email" name="emailid" id="emailid" required/>
            </label>
            
        </div>
        <p style={{marginLeft: "20px", marginTop: "20px", fontFamily: " 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Car of your choice*</p>
        <div id="query">
            
            <div id="type1">
              <label>
              Car Company And Name:
              <input type="text" name="carName"  />
             
              </label>
                
                
            
            </div>
            <div id="type2">
              <label>
              Car Model And Year:
              <input type="text" name="carModel" />
              
              </label>
                
            </div>
            
        </div>
        <div id="location">
          <div></div>
          <label>Location* </label>
          <textarea name="location" id="location"/>
         
         
        </div>
        <div id="message">
            <label >Comments/Message</label>
            <textarea name="messagetext" id="messagetext"  ></textarea>
        </div>
        <div id="consent">
        <input type="checkbox" name="consentText" id="consentbox" required/>
           <label><p id="consenttext">I consent to being contacted by the team*</p>
          
           </label>
        </div>
        <div id="submit">
            <button type="submit" id="submitted" >Submit</button>
        </div>
        
    </form>
    </div>
    </div>
      
    )
    

  };
  
export default RequestForm;