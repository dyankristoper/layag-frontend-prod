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
  const [tourLocation, setTourLocation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/tours/${id}`)
        setTour(response.data.data.tour)
        setTourLocation(tour.locations)


      } catch (error) {
        console.log(error.message)
      }

    }
    fetchItems();
  }, [id])
  console.log(tour)
  console.log(tourLocation)





  return (

    <>

      <Header />
      <div className="Details">
        <h1>{tour.name}</h1>
        <div className="Tour-Details">
          <div className="Tour-Details__images">
            <div className="Tour__image">
              <img src="https://images.unsplash.com/photo-1555590858-be28a58c2688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="image" />
            </div>
            <div className="Tour__images">
              <div><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/a6/28/daraga-church-our-lady.jpg?w=1200&h=-1&s=1" alt="image1" /></div>
              <div><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/a6/28/daraga-church-our-lady.jpg?w=1200&h=-1&s=1" alt="image2" /></div>
              <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Albay_Park_%26_Wildlife_lagoon.JPG" alt="image3" /></div>
              <div><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/a6/28/daraga-church-our-lady.jpg?w=1200&h=-1&s=1" alt="image4" /></div>
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
                      <p>{tourLocation[0].name}</p>
                    </div>
                  </div>
                  <div className="Details-container__info">
                    <img src={endingIcon} alt="starting-point" />
                    <div>
                      <p>Tour ends</p>
                      <p>Beach</p>
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
                <p>When visiting Bicol, one should never forget setting foot at Sorsogon. This province has so many natural wonders to offer to its tourists. The unspoiled beaches, picture-perfect landscape, and the famous whale shark interaction are just some of the things you can find in this magnificent place.</p>
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