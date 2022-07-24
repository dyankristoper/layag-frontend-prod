import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./Rating.scss";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="Rating">
      <h3>Add a Rating</h3>
      <div className="Rating__details">

        <div className="rating-information">
            <label>Tour Name:</label>
            <input type="text" readOnly />
        </div>

        <div className="rating-information">
        <label>Rate:</label>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                size={25}
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </>
          );
        })}
        </div>


        <div>
            <label>Comment:</label>
            <textarea />
        </div>
      </div>
    </div>
  );
};

export default Rating;
