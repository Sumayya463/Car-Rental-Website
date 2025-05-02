import React from 'react';
import Layout from './/..//..//components/Layout/Layout';
import './Home.css';
import CustomerReviews from './/..//../src/customerReviews';
import { Link } from "react-router-dom";
import './requestForm';



const Home = () => {
    

    return (
        <Layout>
            <div className='home-container'>
                <div className='home-banner'>
                <h1>Drive Anywhere, Anytime.</h1>
                <p>The Ultimate Car Rental Experience</p>
                </div>
               
                <h1 className='facilities-heading'>What we offer--</h1>
                <div className='facilities'>
                   
                <div className='fac1'>
                <div className='cheap'>
                    
                    <p> Flat monthly rates far cheaper than other rental companies. No hidden fees, no surprises.</p>
                </div>
                <div><h1>Affordable Monthly Rates</h1></div> </div>

                <div className='fac2'>
                <div className='mileage'>
                        <p>Unlimited mileage for our monthly plans. Drive as much as you want, we got you covered.</p>
                    </div>
                    <div> <h1>Unlimited Mileage</h1></div>
                </div>

                <div className='fac3'>
                   <div className='flexible-rental'>
                  
                     <p>Flexible rental periods. Rent for as long as you want.</p>
                   </div>
                   <div> <h1>Flexible Rental Periods</h1></div>
                </div>
                </div>
                <div className='facilities-2'>
                <div className='fac4'>
                <div className='minimal-paperwork'>
                  
                   <p>Paperwork is a thing of the past. We offer a hassle-free rental experience. No need to worry about paperwork, we got you covered.</p>
                   </div>
                   <div> <h1>Minimal Paperwork</h1></div>
                </div>

                <div className='fac5'>
                <div className='simple-process'>

                   <p>A simple process for renting a car. Just a few clicks and you're on your way.</p>
                    </div>
                    <div><h1>Simple Process</h1></div>
                   </div>
                   </div>


            <div className='request-car'>
                <p>Could not find the car you were looking for? Request a car and we will get back to you as soon as possible.</p>
                <Link to="./requestForm">
                <button>Request a Car</button>
                </Link>
            </div>

            <div className='review-section'>
                <CustomerReviews/>
            </div>
            </div>

           
        </Layout>
    )
}

export default Home;

