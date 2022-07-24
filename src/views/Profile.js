import './Profile.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import Header from '../components/Header';
import { isAuthenticated } from '../authentication/Authentication';
import { Link } from 'react-router-dom';
import Rating from '../components/Profile Component/Rating';

const Profile = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
            alt="profile default"
          />
          <h4>Edit Photo</h4>

          <div className="profile-details">
            <div>
              <AiOutlineStar />
              <span>2 reviews</span>
            </div>

            <div>
              <AiOutlineStar />
              <span>Identity Verified</span>
            </div>
          </div>

          <div className="profile-verifcation">
            <h3>Account confirmed</h3>

            <div>
              <BsCheck />
              <span>Identity</span>
              <br />
            </div>

            <div>
              <BsCheck />
              <span>Email address</span>
              <br />
            </div>

            <div>
              <BsCheck />
              <span>Phone number</span>
              <br />
            </div>
          </div>
        </div>
        <div className="profile__information">
          <h3>Your Profile</h3>

          <div className="credentials">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: *******</p>
            <Link to="/updateprofile">
              <button style={{ cursor: 'pointer' }}>Update Profile</button>
            </Link>
          </div>

          <div className="your-reviews">
            <h3>Reviews</h3>
            <div className="Tour-Review">
              <div className="Tour-Review__image">
                <img
                  src="https://www.musicmundial.com/en/wp-content/uploads/2022/07/BLACKPINKs-Jennie-saves-a-store-from-bankruptcy-just-by-posting-it-on-Instagram-1140x795.jpg"
                  alt="Jennie"
                />
                <p className="Tour-Review__details__name">Kathleen Sy</p>
                <p className="Tour-Review__details__rating"></p>
                <p className="Tour-Review__details__date">23/05/2022</p>
              </div>
              <div className="Tour-Review__details">
                <p className="Tour-Review__details__comment">
                  Great activity. Gives you the chance to explore and learn
                  about the lesser-popular but just as beautiful attractions of
                  Coron. I recommend doing this activity along with Coron's
                  famous water attractions to get a full appreciation of the
                  island. Our guide was extremely helpful and very informative.
                  He clearly knew what he was talking about. Definitely
                  recommend.
                </p>
              </div>
            </div>

            <div className="Tour-Review">
              <div className="Tour-Review__image">
                <img
                  src="https://www.musicmundial.com/en/wp-content/uploads/2022/07/BLACKPINKs-Jennie-saves-a-store-from-bankruptcy-just-by-posting-it-on-Instagram-1140x795.jpg"
                  alt="Jennie"
                />
                <p className="Tour-Review__details__name">Kathleen Sy</p>
                <p className="Tour-Review__details__rating"></p>
                <p className="Tour-Review__details__date">23/05/2022</p>
              </div>
              <div className="Tour-Review__details">
                <p className="Tour-Review__details__comment">
                  Great activity. Gives you the chance to explore and learn
                  about the lesser-popular but just as beautiful attractions of
                  Coron. I recommend doing this activity along with Coron's
                  famous water attractions to get a full appreciation of the
                  island. Our guide was extremely helpful and very informative.
                  He clearly knew what he was talking about. Definitely
                  recommend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Tour-History">
      <h3>Tours</h3>
      <Link to="/addTour">
        <button type="button">Add Tour+</button>
      </Link>
      <div className="Tour-History-Content">
        <table>
          <thead>
            <tr>

              <th> Image</th>
              <th> Tour Name </th>
              <th> Address</th>
              <th> Price</th>
              <th> Rating </th>
              <th> Actions </th>

            </tr>
          </thead>
          <tbody>
              <tr>
                  <td><img src=""/></td>
                  <td>asjdashdwadads asdas</td>
                  <td>asjdashdwadads asdas</td>
                  <td>4400</td>
                  <td>123121241</td>
                  <td>
                    <div className="Tour-History__actions">
                      {/* <td><img className="Tour-History__actions__edit" src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="data1" /></td> */}
                      {/* <td><img className="Tour-History__actions__delete" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="data2" /></td> */}
                      <button>Write a reivew</button>
                    </div>
                  </td>
              </tr>
                
          </tbody>
        </table>
      </div>
    </div>
    <Rating />
    </>
  );
};

export default Profile;
