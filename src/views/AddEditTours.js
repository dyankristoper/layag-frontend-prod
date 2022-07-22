import './AddEditTours.scss';
import { useState } from 'react'

const AddEditTours = () => {

  const [tourName, setTourName] = useState('');
  const [tourSummary, setTourSummary] = useState('');
  const [tourDescription, setTourDescription] = useState('');
  const [tourDuration, setTourDuration] = useState('');
  const [tourPrice, setTourPrice] = useState('');
  const [tourImageCover, setTourImageCover] = useState('');
  const [tourImage1, setTourImage1] = useState('');
  const [tourImage2, setTourImage2] = useState('');
  const [tourImage3, setTourImage3] = useState('');
  const [tourImage4, setTourImage4] = useState('');
  const [tourImage5, setTourImage5] = useState('');

  const onClick = () => {


  }


  return (
    <div className="AddEditTours">
      <div className="container" >
        <h3><span>Add</span> new tour</h3>
        <input className="AddEdit-input" type="text" placeholder='Enter tour name' onChange={e => setTourName(e.target.value)} />
        <textarea className="AddEdit-description AddEdit-input" placeholder='Enter summary' onChange={e => setTourSummary(e.target.value)} />
        <textarea className="AddEdit-description AddEdit-input" placeholder='Enter description' onChange={e => setTourDescription(e.target.value)} />
      </div>
      <div className="container">
        <div className="duration-price">
          <input className="duration-price__input" type="text" placeholder='Enter duration' onChange={e => setTourDuration(e.target.value)} />
          <input className="duration-price__input" type="text" placeholder='Enter Price' onChange={e => setTourPrice(e.target.value)} />
        </div>
        <input className="AddEdit-input" type="text" placeholder='Enter Image cover' onChange={e => setTourImageCover(e.target.value)} />
        <input className="AddEdit-input" type="text" placeholder='Enter first image' onChange={e => setTourImage1(e.target.value)} />
        <input className="AddEdit-input" type="text" placeholder='Enter second image' onChange={e => setTourImage2(e.target.value)} />
        <input className="AddEdit-input" type="text" placeholder='Enter third image' onChange={e => setTourImage3(e.target.value)} />
        <input className="AddEdit-input" type="text" placeholder='Enter fourth image' onChange={e => setTourImage4(e.target.value)} />
        <input className="AddEdit-input" type="text" placeholder='Enter fifth image' onChange={e => setTourImage5(e.target.value)} />
        <button type="button" className="AddEdit-btn" onClick={onClick}>Add+</button>
      </div>
    </div>
  )
}

export default AddEditTours;