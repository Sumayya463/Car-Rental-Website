import React from 'react';
import reviews from './/../reviews';
import './customerReviews.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }
  return (
    
    <div className='review-container' style={{ padding: '20px' }}>
      <div><h2>--Hear from our customers!</h2></div>
      
      <Slider {...settings}>
      
     
        {reviews.map((review) => (
          <div className='review-card'
            key={review.id}
           
          >
            <h4>{review.name}</h4><p>⭐ {review.rating} / 5</p>
            <p>"{review.review}"</p>
            
          </div>
        ))}
      
      
      </Slider>
    </div>
    
  );
};

export default CustomerReviews;