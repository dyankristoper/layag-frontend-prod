import './Header.scss';
import layag from './Images/layag-icon.png';
import profile from './Images/user-menu64.png';
import {useState} from 'react';

const Header = () => {

  const [modal, setModal] = useState(false);

  const onclick = () => {
    setModal(modal => !modal)
  }

  return (
    <>
    
    <header className="Header">
      <div className="Header__logoTitle">
        <img className="Header__logo" src={layag} alt="logo" />
        <h1>Layag</h1>
      </div>

      <div className="Header__userSection">
        <img src={profile} alt="user-login" onClick ={onclick} />
      </div>
    
  

    {/* // MODAL */}
    {
      modal && 
      <div className='Header__modal'>
        <ul>
          <li>Profile</li>
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
