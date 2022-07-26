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
  const [select, setSelect] = useState();
  const [currentLocation, setcurrentLocation] = useState();

  useEffect(async ()  => {
    const {coords: {latitude: lat, longitude: lng}} = await getMyCoords();
    setcurrentLocation({lat,lng});
  },[])

  const getMyCoords = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const selectSortHandler = (e) =>{
    setSelect(e.target.value);
  }

  const getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {   
    var R = 6371; // Radius of the earth in km   
    var dLat = deg2rad(lat2-lat1);  
    // deg2rad below   
    var dLon = deg2rad(lon2-lon1);   
    var a =   Math.sin(dLat/2) * Math.sin(dLat/2) +   Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *   Math.sin(dLon/2) * Math.sin(dLon/2);   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));   
    var d = R * c; // Distance in km   return d;  // distance returned
  }

  const  deg2rad = (deg) => {   return deg * (Math.PI/180)}

  const sortBy = (arr, select) => {
    let arrCopy = [...arr];
    if( select && select.startsWith("distance")){
      arrCopy.forEach((el) =>{
        el.distance = getDistanceFromLatLonInKm( currentLocation.lat,currentLocation.lng ,el.startLocation.coordinates[1],el.startLocation.coordinates[0]);
      })
      arrCopy.forEach((el) => {
        console.log(el.distance);
      })
    }
    if(select === "distance-closest" && currentLocation){
      return arrCopy.sort((a,b) => a.distance - b.distance);
    }
    if(select === "distance-farthest"  && currentLocation){
      return arrCopy.sort((a,b) => b.distance - a.distance);
    }
    if(select === "price-lowest"){
      return arr;
    }
    if(select === "price-highest"){
      return arr;
    }
    if(select === "duration-shortest"){
      return arr;
    }
    if(select === "duration-longest"){
      return arr;
    }
    if(select === "rating-highest"){
      return arr;
    }
    if(select === "rating-lowest"){
      return arr;
    }
    return arr;

  }

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
        <div className="Tour__hero" >
          <div className="Tour__Title">
            <h3>
              {results.results} Tours Found In{" "}
              <span>{id[0].toUpperCase() + id.substring(1)}</span>
            </h3>
          </div>
          <div className="filter-section">
            <select name="filter" id="filter" onChange={selectSortHandler}>
              <option value="distance-closest">Distance: Closest</option>
              <option value="distance-farthest">Distance: Farthest</option>
              <option value="price-lowest">Price: Lowest to Highest</option>
              <option value="price-highest">Price: Highest to Lowest</option>
              <option value="duration-shortest">Duration: Shortest</option>
              <option value="duration-longest">Duration: Longest</option>
              <option value="rating-highest">Rating: Highest</option>
              <option value="rating-lowest">Rating: Lowest</option>
            </select>
          </div>
        </div>

        <div className="Tour__information">
          

            {/* <div>
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
            </div> */}
          <div className="details-section">
            {tours &&
              sortBy(tours,select).map((t) => {
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
