import './SignUp.scss'
import { Link } from 'react-router-dom'
import layag from "../components/Images/layag-icon.png";

const SignUp = () => {
  return (
    <div className="signUp-container">
      <Link to="/login">
        <img className="signUp-arrow" src="https://cdn-icons-png.flaticon.com/512/507/507257.png" alt="back-arrow" />
      </Link>
      <div className="signUp-image">
        <div className="image">

        </div>
      </div>
      <div className="signUp-information">

        <Link to="/">
          <img className="signUp-information__logo" src={layag} alt="" />
        </Link>
        <h3>Create an account</h3>
        <p className="signUp-information__details">Please enter your details.</p>
        <input className="signUp-information__input" type="text" placeholder="Enter your name" />
        <p></p>
        <input className="signUp-information__input" type="email" placeholder="Enter your email" />
        <p></p>
        <input className="signUp-information__input" type="password" placeholder="Enter your password" />
        <p className="signUp-information__details">Must be at least<span> 8 characters</span></p>
        <input className="signUp-information__input" type="password" placeholder="Confirm your password" />
        <p></p>
        <button type="button" className="signUp-information__btn"> Register </button>

      </div>
      <p className="signUp-information__copyright">All images and information is for educational background purposes only © 2022</p>
    </div>

  )


}

export default SignUp;