import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./Rating.scss";

const Rating = ({onChange, userBooking}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [tourDetails, setTourDetails]= useState(userBooking);

  const onclick = () => {
    onChange();
  }

  return (
    <div className="Rating">
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/7644/7644639.png" onClick={onclick} alt="close button" />
        <h3>Give us a feedback!</h3>
      </div>
      <div className="Rating__details">

        <div className="Rating__details-name">
          <label>Tour Name</label>
          <input type="text" value={tourDetails.tour.name} readOnly />
        </div>

        <label className="Rating__details-rate">Rate</label>
        <div className="Rating__details-rating">

          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <>
                <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  size={50}
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#d2cedf"}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
                </label>
              </>
            );
          })}
        </div>

        <div className="Rating__details-comment">
          <textarea placeholder="Leave a comment..." />
        </div>
        <button type="button" className="Rating__details-btn">Rate now</button>
      </div>
      <h3 >Thank you!</h3>
    </div>
  );
};

export default Rating;
