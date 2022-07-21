import './TourDetails.scss'
import startingIcon from '../components/Images/starting.png'
import endingIcon from '../components/Images/ending.png'
import durationIcon from '../components/Images/duration.png'
import difficultyIcon from '../components/Images/difficulty.png'
import Header from '../components/Header';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const TourDetails = () => {

  const [tour, setTour] = useState([]);
  const [tourStartingLocation, setTourStartingLocation] = useState();
  const [tourEndingLocation, setTourEndingLocation] = useState();
  const [tourImages, setTourImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/tours/${id}`)
        setTour(response.data.data.tour)
        const start = response.data.data.tour.locations[0].name;
        const end = response.data.data.tour.locations;
        const images = response.data.data.tour.images;
        setTourStartingLocation(start)
        setTourEndingLocation(end[end.length - 1].name)
        setTourImages(images);


      } catch (error) {
        console.log(error.message)
      }

    }
    fetchItems();
  }, [id])
  console.log(tour)
  console.log(tourStartingLocation)
  console.log(tourEndingLocation)
  console.log(tourImages);





  return (

    <>

      <Header />
      <div className="Details">
        <h1>{tour.name}</h1>
        <div className="Tour-Details">
          <div className="Tour-Details__images">
            <div className="Tour__image">
              <img src={tourImages[0]} alt="image" />
            </div>
            <div className="Tour__images">
              <div><img src={tourImages[1]} alt="image1" /></div>
              <div><img src={tourImages[2]} alt="image2" /></div>
              <div><img src={tourImages[3]} alt="image3" /></div>
              <div><img src={tourImages[4]} alt="image4" /></div>
            </div>
          </div>
          <div className="Tour-Details__documentation">
            <div className="Tour-Details__documentation-info">
              <div className="Details-information">
                <h3 className="Details-title">Details</h3>
                <div className="Details-container">
                  <div className="Details-container__info">
                    <img src={startingIcon} alt="starting-point" />
                    <div>
                      <p>Tour starts</p>
                      <p>{tourStartingLocation}</p>
                    </div>
                  </div>
                  <div className="Details-container__info">
                    <img src={endingIcon} alt="starting-point" />
                    <div>
                      <p>Tour ends</p>
                      <p>{tourEndingLocation}</p>
                    </div>
                  </div>
                  <div className="Details-container__info">
                    <img src={durationIcon} alt="starting-point" />
                    <div>
                      <p>Duration</p>
                      <p>{tour.duration} days</p>
                    </div>
                  </div>
                  <div className="Details-container__info">
                    <img src={difficultyIcon} alt="starting-point" />
                    <div>
                      <p>Difficulty</p>
                      <p>{tour.difficulty}</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="Details-description">
                <h3 className="Details-title">Description</h3>
                <p>{tour.description}</p>
              </div>
            </div>
            <div className="Tour-Details__documentation-date"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourDetails