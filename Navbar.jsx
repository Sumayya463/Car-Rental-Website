import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router';






const Navbar = () => {
    const navigate = useNavigate();
    const handleSearch = () => {
        let selectedLocation = document.querySelector('.location').value;
        if(selectedLocation){
            navigate(`/avlbcars?location=${encodeURIComponent(selectedLocation)}`);
        }else{
            alert("please select a location");
        }
    }
    return (
       
            <div className='nav-bar'>
    <div className='navbar-heading'><Link to = '/' className='link'><h1>Urban Drive</h1></Link></div>
   
     <div className='nav-search'>
     
     <div ><div className='search-location'><select id="location" className='location' name='location' placeholder='Location'>
            <option id='0' value=''>Select Location</option>
            <option id='1' value='Santa Clara'>Santa Clara,CA</option>
            <option id='2' value='San Francisco'>San Francisco,CA</option>
            <option id='3' value='San Jose'>San Jose, CA</option>
            <option id='4' value='San Diego'>San Diego, CA</option>
            <option id='5' value='San Ramon'>San Ramon , CA</option>
            </select></div></div>     
     
     </div>
     
     <div className='search-button'><button onClick={() => {handleSearch()}}><img src="https://img.icons8.com/material-outlined/24/search--v1.png" ></img></button></div>
     <div className='nav-icons' >
      
      
       
      <div className='Help'><Link to = '/help'className='links'> 
        <img src="https://img.icons8.com/ios/50/help--v1.png" alt="help--v1"/>
       <p>Help</p></Link>
       </div>
       
       <div className='Bookings'>
        <img src="https://img.icons8.com/ios/50/user-female-circle.png" alt="user-female-circle"/>
       <p>Bookings</p>
       </div>

       <div className='Previous-Rides'>
        <img src="https://img.icons8.com/ios/50/user-female-circle.png" alt="user-female-circle"/>
       <p>Previous Rides</p>
       </div>

       <div className='Profile'>
        <img src="https://img.icons8.com/ios/50/user-female-circle.png" alt="user-female-circle"/>
       <p>Profile</p>
       </div>

        <button className='signup'>Signup</button>
        <button className='login'>Login</button>
       
       
     </div>
    </div>
        
    )
}


export default Navbar;
