import './AddTour.scss';
import { useState } from 'react'
import axios from 'axios';
import removeIcon from '../components/Images/remove-icon.png'

const AddEditTours = () => {

  // const [tourId, setTourId] = useState(null);

  // Details
  const [tourName, setTourName] = useState('');
  const [tourSummary, setTourSummary] = useState('');
  const [tourDescription, setTourDescription] = useState('');
  const [tourDuration, setTourDuration] = useState(0);
  const [tourPrice, setTourPrice] = useState(0);
  const [tourMaxGroupSize, setTourMaxGroupSize] = useState(0);
  const [tourDifficulty, setTourDifficulty] = useState('');

  // Tour Guide

  const [tourGuide, setTourGuide] = useState('')
  const [arrTourGuide, setArrTourGuide] = useState([])

  // Locations
  const [startLocation, setStartLocation] = useState({})
  const [locations, setLocations] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('');
  const [locDescription, setLocDescription] = useState('');
  const [day, setDay] = useState(0);

  // Tags
  const [tags, setTags] = useState('')
  const [arrTags, setArrTags] = useState([])

  // Image Cover
  const [previewImageCover, setPreviewImageCover] = useState([]);
  const [imageCoverToUpload, setImageCoverToUpload] = useState([]);

  // Images 
  const [previewImage, setPreviewImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);

  // Modal
  const [hidden, setHidden] = useState('');


  // const { id } = useParams();

  const fileInputHandler = (e) => {
    const file = e.target.files;
    setImageCoverToUpload((prevImages) => [...prevImages, ...file]);
    previewFile(file);
  };

  const fileInput_Handler = (e) => {
    const file = e.target.files;
    setImageToUpload((prevImages) => [...prevImages, ...file]);
    preview_File(file);
  };

  const previewFile = async (file) => {
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(file[i]);
      reader.onloadend = () => {
        const imageToSave = { file: file[i], img: reader.result };
        setPreviewImageCover((prevImages) => [...prevImages, imageToSave]);
      };
    }
  };

  const preview_File = async (file) => {
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(file[i]);
      reader.onloadend = () => {
        const imageToSave = { file: file[i], img: reader.result };
        setPreviewImage((prevImages) => [...prevImages, imageToSave]);
      };
    }
  };

  const removeImage = (name, i) => {
    setPreviewImageCover((previewImage) =>
      previewImage.filter(
        (img, currentIndex) => img.file.name !== name || currentIndex !== i
      )
    );

    setImageCoverToUpload((previewImage) =>
      previewImage.filter(
        (img, currentIndex) => img.name !== name || currentIndex !== i
      )
    );
  };

  const remove_Image = (name, i) => {
    setPreviewImage((previewImage) =>
      previewImage.filter(
        (img, currentIndex) => img.file.name !== name || currentIndex !== i
      )
    );

    setImageToUpload((previewImage) =>
      previewImage.filter(
        (img, currentIndex) => img.name !== name || currentIndex !== i
      )
    );
  };

  const resetFieldsAndValue = () => {
    setImageCoverToUpload([]);
    setPreviewImageCover([]);
  };

  const reset_FieldsAndValue = () => {
    setImageToUpload([]);
    setPreviewImage([]);
  };

  const resetState = () => {
    setTourName('')
    setTourSummary('')
    setTourDescription('')
    setTourDuration(0)
    setTourPrice(0)
  }

  const addStartLocation = () => {
    let data = {
      coordinates: [latitude, longitude],
      address,
      description: locDescription
    }
    setStartLocation(data)

  }
  const addLocation = () => {
    let data = {
      coordinates: [latitude, longitude],
      address,
      description: locDescription,
      day
    }
    locations.push(data)


  }
  const addTags = () => {
    arrTags.push(tags)

  }
  const addTourGuide = () => {
    arrTourGuide.push(tourGuide)
    console.log(arrTourGuide)
    console.log(startLocation)
    console.log(locations)
    console.log(arrTags)
  }




  const addTourFunction = () => {

    const fetchingItems = async () => {

      try {

        const response = await axios.post('http://localhost:8000/api/v1/tours', {
          name: tourName, duration: tourDuration, maxGroupSize: tourMaxGroupSize, difficulty: tourDifficulty, price: tourPrice, summary: tourSummary, description: tourDescription, imageCover: previewImageCover[0], locations, startLocation, images: previewImage
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }

    }

    fetchingItems();
    console.log(tourName, tourSummary, tourDescription, tourDuration, tourPrice, tourMaxGroupSize, tourDifficulty, arrTourGuide, startLocation, locations, arrTags, previewImageCover, previewImage,)
  }





  return (
    <>
      <div className="AddTours">
        <div className="AddTours-container">
          <div className="Add-details container ">
            <input className="input-medium" type="text" placeholder='Name' onChange={e => setTourName(e.target.value)} />
            <div className="Add-details__inputs">
              <input type="text" placeholder='Difficulty' onChange={e => setTourDifficulty(e.target.value)} />
              <input type="number" placeholder='Duration' onChange={e => setTourDuration(e.target.value)} />
              <input type="number" placeholder='Max group size' onChange={e => setTourMaxGroupSize(e.target.value)} />
              <input type="number" placeholder='Price' onChange={e => setTourPrice(e.target.value)} />
            </div>
            <div className="Add-details__textarea">
              <div><textarea placeholder='Summary' onChange={e => setTourSummary(e.target.value)}></textarea></div>
              <div><textarea placeholder='Description' onChange={e => setTourDescription(e.target.value)}></textarea></div>
            </div>
          </div>
          <div className="Add-images container">
            <div className="Add-images__input">
              <input
                className='image-input-element'
                type='file'
                accept='image/*'
                onChange={fileInput_Handler}
                multiple
              />
            </div>
            <div className="Add-images__display">
              {previewImage.length > 0 ?
                previewImage.map((file, i) => {
                  const {
                    file: { name },
                    img,
                  } = file;
                  const keyAlt = `${name}_${i}`;

                  return (
                    <li key={keyAlt} className='image-list'>
                      <img
                        src={img}
                        className='per-image'
                        alt={keyAlt}
                      />
                      <button
                        type='button'
                        className='remove-image__btn'
                        onClick={() => {
                          remove_Image(name, i);
                        }}
                      >
                        <img className="remove-image__btn" src={removeIcon} alt="remove-icon" />
                      </button>
                    </li>
                  );
                }) : ' Images'}
            </div>
            <div className="Add-images__btns">
              <div className="Add-image-imageCover">
                <div className="Add-image-imageCover">
                  <input
                    className='image-input-element'
                    type='file'
                    accept='image/*'
                    onChange={fileInputHandler}
                    multiple
                  />
                </div>
                <div className="Add-imagecover-display">
                  {previewImageCover.length > 0 ?
                    previewImageCover.map((file, i) => {
                      const {
                        file: { name },
                        img,
                      } = file;
                      const keyAlt = `${name}_${i}`;

                      return (
                        <li key={keyAlt} className='image-container'>
                          <img
                            src={img}
                            className='input-image'
                            alt={keyAlt}
                          />
                          <button
                            type='button'
                            className='remove-image__btn'
                            onClick={() => {
                              removeImage(name, i);
                            }}
                          >
                            <img className="remove-image__btn" src={removeIcon} alt="remove-icon" />
                          </button>
                        </li>
                      );
                    }) : 'Image Cover'}
                </div>
              </div>
              <div className="Add-images-btns">
                <button onClick={e => setHidden('startLocation')}>Start Location +</button>
                <button onClick={e => setHidden('location')}>Locations +</button>
                <button onClick={e => setHidden('tags')}>Tags +</button>
                <button onClick={e => setHidden('tourGuide')}>Tour guide +</button>
              </div>
            </div>
          </div>
        </div>
        <button className="AddEdit-btnSave" onClick={addTourFunction}> Save </button>
      </div>

      {
        hidden === 'startLocation' &&
        <div className="AddModal">
          <div className="AddModal-startLocation">
            <h3>Starting location +</h3>
            <div>
              <div>
                <input type="number" placeholder='Latitude Coordinates' onChange={e => setLatitude(e.target.value)} />
                <input type="text" placeholder='Longitude Coordinates' onChange={e => setLongitude(e.target.value)} />
              </div>
              <input type="text" placeholder='Address' onChange={e => setAddress(e.target.value)} />
              <input type="text" placeholder='Description' onChange={e => setLocDescription(e.target.value)} />
              <button onClick={e => setHidden('')}> Cancel </button>
              <button onClick={addStartLocation} className="btn-startLocation"> Save </button>
            </div>
          </div>
        </div>
      }

      {
        hidden === 'location' &&
        <div className="AddModal">
          <div className="AddModal-locations">
            <h3>Locations +</h3>
            <div>
              <div className="AddModal-coordinates">
                <input type="number" placeholder='Latitude Coordinates' onChange={e => setLatitude(e.target.value)} />
                <input type="text" placeholder='Longitude Coordinates' onChange={e => setLongitude(e.target.value)} />
              </div>
              <input type="text" placeholder='Address' onChange={e => setAddress(e.target.value)} />
              <input type="text" placeholder='Description' onChange={e => setLocDescription(e.target.value)} />
              <input className="days" type="number" placeholder='Day' onChange={e => setDay(e.target.value)} />
              <div className="AddModal-addedLocation">
                {
                  locations && locations.map((l) => {
                    return <p>{l.address},</p>

                  })
                }
              </div>
              <button onClick={e => setHidden('')}> Cancel </button>
              <button className="btn-addLocation" onClick={addLocation}> Add Location +</button>
            </div>
          </div>
        </div>
      }

      {
        hidden === 'tags' &&
        <div className="AddModal">
          <div className="AddModal-tags">
            <h3>Tags +</h3>
            <div>
              <input type="text" placeholder='Tag name' onChange={e => setTags(e.target.value)} />
              <div className="AddModal-addedTags">
                {
                  arrTags && arrTags.map((t) => {
                    return <p>{t},</p>

                  })
                }
              </div>
              <button onClick={e => setHidden('')}> Cancel </button>
              <button className="btn-addTags" onClick={addTags}> Add Tags +</button>
            </div>
          </div>
        </div>
      }

      {
        hidden === 'tourGuide' &&
        <div className="AddModal">
          <div className="AddModal-tour-guide">
            <h3>Tour guide +</h3>
            <div>
              <input type="text" placeholder='Tour guide name' onChange={e => setTourGuide(e.target.value)} />
              <div className="AddModal-addedTourGuide">
                {
                  arrTourGuide && arrTourGuide.map((t) => {
                    return <p>{t},</p>

                  })
                }
              </div>
              <button onClick={e => setHidden('')}> Cancel </button>
              <button className="btn-addTourGuide" onClick={addTourGuide}> Add Tour guide +</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default AddEditTours;