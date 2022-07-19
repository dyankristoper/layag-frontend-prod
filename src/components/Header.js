
import './Header.scss';
import layag from "./Images/layag-icon.png";
import cart from "./Images/cart.png"
import profile from "./Images/profile-user.png"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="Header">
            <div className="Header__logoTitle">
                <img className="Header__logo" src={layag} alt="logo" />
                <h1>Layag</h1>
            </div>


            <div className="Header__userSection">
                <img src={cart} alt="cart" />

                <Link to="/login">
                    <img src={profile} alt="user-login" />
                </Link>
            </div>
        </header>
    )
}

export default Header;