import './Header.scss';
import layag from './Images/layag-icon.png';
import profile from './Images/user-menu64.png';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  const [modal, setModal] = useState(false);

  const onclick = () => {
    setModal(modal => !modal)
  }

  return (
    <>

      <header className="Header">
        <Link to="/">
          <div className="Header__logoTitle">
            <img className="Header__logo" src={layag} alt="logo" />
            <h1>Layag</h1>
          </div>
        </Link>

        <div className="Header__userSection">
          <img src={profile} alt="user-login" onClick={onclick} />
        </div>



        {/* // MODAL */}
        {
          modal &&
          <div className='Header__modal'>
            <ul>
              <Link to="/profile"><li>Profile</li></Link>
              <li>Tour</li>
              <li>Help</li>
            </ul>

          </div>
        }

      </header>
    </>
  );
};

export default Header;
