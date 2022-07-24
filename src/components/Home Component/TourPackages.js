
import './TourPackages.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TourPackages = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tours');
        setTours(response.data.data.tours);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h2 className="Tours-title">Tour Packages</h2>
      <div className="Tours">
        {tours &&
          tours.map((tour) => {
            return (
              <Link to={`/tourdetails/${tour.id}`} key={tour.id}>
                <div className="TourPackages">
                  <div className="TourPackages-img">
                    <img src={tour.imageCover} alt="beach" />
                  </div>
                  <div className="TourPackages-list">
                    <h3>{tour.name}</h3>

                    <div class="stars">
                      <svg viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                      <svg viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                      <svg viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                      <svg viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                      <svg viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>

                      <div class="cover"></div>
                      <span className="TourPackages-list__rate"> 5</span>
                      <span className="TourPackages-list__review">
                        ( 150 reviews )
                      </span>
                    </div>

                    <p className="TourPackages-list__location">
                      {tour.startLocation.description}
                    </p>
                    <br />
                    <h5>Details</h5>
                    <p className="TourPackages-list__description">
                      {`${tour.summary.substring(0, 200)}...`} <span>see more</span>
                    </p>

                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default TourPackages;
