import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Tours.scss";
import Header from "../components/Header";
import SearchBar from "../components/Home Component/SearchBar";
import bg from "date-fns/esm/locale/bg/index.js";

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [results, setResult] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getTours = async () => {
      try {
        const getData = await axios.get(
          `http://localhost:8000/api/v1/tours/destination/${id.toLowerCase()}`
        );

        const imageCovers = getData.data.data.tours.map((el) => el.imageCover);
        console.log(getData.data.data.tours);
        setTours(getData.data.data.tours);
        setResult(getData.data);
      } catch (err) {
        console.log(err);
      }
    };

    getTours();
  }, [id]);

  console.log(tours);

  return (
    <>
      <Header />
      <div className="Tour">
        <div className="Tour__hero"></div>
        <div className="Tour__Title">
          <h3>
            {results.results} Tours Found In <span>{id[0].toUpperCase() + id.substring(1)}</span>
          </h3>
        </div>

        <div className="Tour__information">
          <div className="filter-section">
            <h3>Star Rating</h3>

            <div>
              <input type="checkbox" value="5" />
              <label for="vehicle1"> 5 Stars</label>
              <br />
              <input type="checkbox" value="4" />
              <label for="vehicle1"> 4 Stars</label>
              <br />
              <input type="checkbox" value="3" />
              <label for="vehicle1"> 3 Stars</label>
              <br />
              <input type="checkbox" value="2" />
              <label for="vehicle1"> 2 Stars</label>
              <br />
              <input type="checkbox" value="1" />
              <label for="vehicle1"> 1 Stars</label>
              <br />
              <h3>Price Range</h3>
              <input
                type="range"
                id="cowbell"
                name="cowbell"
                min="0"
                max="100"
                step="10"
              />{" "}
              <br />
              <label>Min Value</label>
              <input type="text" placeholder="enter text" /> <br />
              <label>Max Value</label>
              <input type="text" placeholder="enter text" /> <br />
              <h3>Distance</h3>
              <input type="checkbox" value="1" />
              <label for="vehicle1"> 1km - 2km </label>
              <br />
              <input type="checkbox" value="2" />
              <label for="vehicle1"> 2km - 3km </label>
              <br />
              <input type="checkbox" value="3" />
              <label for="vehicle1"> 3km - 4km</label>
              <br />
              <input type="checkbox" value="4" />
              <label for="vehicle1"> 4km - 5km</label>
              <br />
              <input type="checkbox" value="5" />
              <label for="vehicle1"> 5km - 6km</label>
              <br />
            </div>
          </div>
          <div className="details-section">
            {tours &&
              tours.map((t) => {
                return (
                  <div className="details-section__choices" key={t.id}>
                    <div className="image">
                      <img
                        src={t.images[0]}
                        alt={t.name}
                      />
                    </div>
                    <div className="details">
                      <h3>{t.name}</h3>

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

                        <span className="TourPackages-list__rate"> 5</span>
                        <span className="TourPackages-list__review">
                          ( 150 reviews )
                        </span>
                      </div>
                      <h4>Price: {t.price}</h4>

                      <p>
                        {t.summary}
                      </p>

                      <h4>Distance:</h4>

                      <p>10km</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
