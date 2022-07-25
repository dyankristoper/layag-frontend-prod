import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Tours.scss";
import Header from "../components/Header";
import SearchBar from "../components/Home Component/SearchBar";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

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

        setTours(getData.data.data.tours);
        setResult(getData.data);

        console.log(imageCovers);
      } catch (err) {
        console.log(err);
      }
    };

    getTours();
  }, [id]);

  return (
    <>
      <Header />
      <div className="Tour">
        {/* <div className="Tour__hero" ></div> */}
        <div className="Tour__Title">
          <h3>
            {results.results} Tours Found In{" "}
            <span>{id[0].toUpperCase() + id.substring(1)}</span>
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
                  <Link to={`/tourdetails/${t.id}`}>
                    <div className="details-section__choices" key={t.id}>
                      <div className="image">
                        <img src={t.images[0]} alt={t.name} />
                      </div>
                      <div className="details">
                        <h3>{t.name}</h3>

                        <div class="stars">
                          {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                              <>
                                <input
                                  type="radio"
                                  name="rating"
                                  value={t.ratingsAverage}
                                  readOnly
                                />
                                <FaStar
                                  size={25}
                                  className="star"
                                  color={
                                    ratingValue <= t.ratingsAverage
                                      ? "#ffc107"
                                      : "#e4e5e9"
                                  }
                                />
                              </>
                            );
                          })}

                          <span className="TourPackages-list__rate"> {t.ratingsAverage}</span>
                          <span className="TourPackages-list__review">
                            ( {t.ratingsQuantity} reviews )
                          </span>
                        </div>
                        <h4>Details</h4>

                        <p>{t.summary}</p>

                        <h4 className="price">Price:{t.price}</h4>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
