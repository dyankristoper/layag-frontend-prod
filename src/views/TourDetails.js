import './TourDetails.scss'
import startingIcon from '../components/Images/starting.png'
import endingIcon from '../components/Images/ending.png'
import durationIcon from '../components/Images/duration.png'
import difficultyIcon from '../components/Images/difficulty.png'
import Header from '../components/Header';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Calendar } from "react-date-range";
import { addDays } from 'date-fns'
import format from 'date-fns/format';

const TourDetails = () => {

  const [tour, setTour] = useState([]);
  const [tourStartingLocation, setTourStartingLocation] = useState();
  const [tourEndingLocation, setTourEndingLocation] = useState();
  const [tourImages, setTourImages] = useState([]);
  const { id } = useParams();

  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(addDays(new Date(), 4));


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

 useEffect(() => {
    setendDate(addDays(startDate, +tour.duration - 1))   
 },[startDate])

useEffect(() => {
  console.log(startDate, endDate);
},[])

  console.log(endDate)


  return (

    <>

      <Header />
      <div className="Details">
        <h1>{tour.name}</h1>
        <div className="Tour-Details">
          <div className="Tour-Details__images">
            <div className="Tour__image">
              <img src={tourImages[0]} alt="Tour" />
            </div>
            <div className="Tour__images">
              <div><img src={tourImages[1]} alt="Tour image1" /></div>
              <div><img src={tourImages[2]} alt="Tour image2" /></div>
              <div><img src={tourImages[3]} alt="Tour image3" /></div>
              <div><img src={tourImages[4]} alt="Tour image4" /></div>
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
            <div className="Tour-Details__documentation-date">
              
              <div className="calendar" >
                <h3>Select Dates</h3>
                <Calendar
                  onChange={(date) => {
                    setstartDate(date);
                    setendDate(date + tour.duration)
                  }}
                  minDate={startDate}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  className="calendarElement"
                />
              </div>

              <button className='button'>Book Now</button>
            </div>
          </div>
        </div>

        <div className="Reviews">
          <h3>Reviews</h3>
          <div className="Tour-Review">
            <div className="Tour-Review__image">
              <img src="https://www.musicmundial.com/en/wp-content/uploads/2022/07/BLACKPINKs-Jennie-saves-a-store-from-bankruptcy-just-by-posting-it-on-Instagram-1140x795.jpg" alt="Jennie" />
            </div>
            <div className="Tour-Review__details">
              <p className="Tour-Review__details__name">Kathleen Sy</p>
              <p className="Tour-Review__details__rating"></p>
              <p className="Tour-Review__details__date">23/05/2022</p>
              <p className="Tour-Review__details__comment">Great activity. Gives you the chance to explore and learn about the lesser-popular but just as beautiful attractions of Coron. I recommend doing this activity along with Coron's famous water attractions to get a full appreciation of the island. Our guide was extremely helpful and very informative. He clearly knew what he was talking about. Definitely recommend.</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default TourDetails