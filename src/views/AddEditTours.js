import './AddEditTours.scss';
import { useState, /* useEffect */ } from 'react'
// import { useParams } from 'react-router'
import axios from 'axios';

const AddEditTours = () => {

  // const [tourId, setTourId] = useState(null);
  const [tourName, setTourName] = useState('');
  const [tourSummary, setTourSummary] = useState('');
  const [tourDescription, setTourDescription] = useState('');
  const [tourDuration, setTourDuration] = useState(0);
  const [tourPrice, setTourPrice] = useState(0);
  const [tourMaxGroupSize, setTourMaxGroupSize] = useState(0);
  const [tourImage, setTourImage] = useState('');
  const [tourDifficulty, setTourDifficulty] = useState('');
  // const { id } = useParams();



  const onClick = () => {

    const addingItems = async () => {
      try {
        // let response;
        // if (id) {
        //   response = await axios.put(`http://localhost:8000/api/v1/tours/${id}`, {
        //     name: tourName, duration: tourDuration, maxGroupSize: tourMaxGroupSize, difficulty: tourDifficulty, price: tourPrice, summary: tourSummary, description: tourDescription, imageCover: tourImage
        //   });
        // } else {
        const response = await axios.post('http://localhost:8000/api/v1/tours', {
          name: tourName, duration: tourDuration, maxGroupSize: tourMaxGroupSize, difficulty: tourDifficulty, price: tourPrice, summary: tourSummary, description: tourDescription, imageCover: tourImage, locations: [], startLocation: ''
        });


        console.log(response.data);

      } catch (error) {
        console.log(error.message);
      }

    }

    addingItems();
    console.log(tourName, tourSummary, tourDescription, tourDuration, tourPrice, tourMaxGroupSize, tourImage, tourDifficulty)
  }

  // useEffect(() => {
  //   if (id) {
  //     const getById = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:8000/api/tours/${id}`
  //         );

  //         if (response.data.data.tours) {
  //           setTourId(response.data.data.tours._id);
  //           setTourName(response.data.data.tours.name);
  //           setTourSummary(response.data.data.tours.summary);
  //           setTourDescription(response.data.data.tours.description);
  //           setTourDuration(response.data.data.tours.duration);
  //           setTourPrice(response.data.data.tours.price);
  //           setTourImage(response.data.data.tours.imageCover);
  //         }
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };

  //     getById();
  //   }
  // }, [id]);



  return (
    <div className="AddEditTours">
      <div className="container" >
        <h3><span>Add</span> new tour</h3>
        <input className="AddEdit-input" type="text" placeholder='Enter tour name' onChange={e => setTourName(e.target.value)} />
        <textarea className="AddEdit-description AddEdit-input" placeholder='Enter Summary' onChange={e => setTourSummary(e.target.value)} />
        <textarea className="AddEdit-description AddEdit-input" placeholder='Enter Description' onChange={e => setTourDescription(e.target.value)} />
      </div>
      <div className="container">
        <div className="duration-price">
          <input className="duration-price__input" type="text" placeholder='Enter Duration' onChange={e => setTourDuration(e.target.value)} />
          <input className="duration-price__input" type="text" placeholder='Enter Price' onChange={e => setTourPrice(e.target.value)} />
          <input className="duration-price__input" type="text" placeholder='Enter Max group size' onChange={e => setTourMaxGroupSize(e.target.value)} />
          <input className="duration-price__input" type="text" placeholder='Enter Difficulty' onChange={e => setTourDifficulty(e.target.value)} />
        </div>
        <input className="AddEdit-input" type="text" placeholder='Enter Image cover' onChange={e => setTourImage(e.target.value)} />
        <button type="button" className="AddEdit-btn" onClick={onClick}>Save</button>
      </div>
    </div>
  )
}

export default AddEditTours;