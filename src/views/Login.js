import layag from "../components/Images/layag-icon.png";
import './Login.scss';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-information">
        <Link to="/">
          <img className="login-information__logo" src={layag} alt="" />
        </Link>
        <h3>Welcome back</h3>
        <p className="login-information__details">Please enter your details.</p>
        <input className="login-information__input" type="email" placeholder="Enter your email" />
        <p></p>
        <input className="login-information__input" type="password" placeholder="Enter your password" />
        <p className="login-information__details">Forgot password?</p>
        <button type="button" className="login-information__btn"> Proceed </button>
        <p>Don't have an account? <Link to="/signup"><span>Sign up</span></Link></p>
        <p className="login-information__copyright">All images and information is for educational background purposes only © 2022</p>
      </div>
      <div className="login-image">
        <div className="image">

        </div>
      </div>
    </div>

  )
}

export default Login;