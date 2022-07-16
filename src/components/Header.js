import { Link } from 'react-router-dom'
import './Header.scss';
import layag from "./Images/layag-icon.png";


function Header() {
  return (
    <header className="Header">
        <div className="Header__logoTitle">
            <img className="Header__logo" src={layag} alt="logo"/>
            <h1>Layag</h1>
        </div>

        <nav className="Header__nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">Travel Tips</a></li>
            </ul>
        </nav>

        <div className="Header__userSection">
            <img src="https://cdn-icons-png.flaticon.com/512/711/711897.png" alt="cart"/>
            <Link to ="/Login">
                <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="user-login" />
            </Link>
        </div>
    </header>
  )
}

export default Header;