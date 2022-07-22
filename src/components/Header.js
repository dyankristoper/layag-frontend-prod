import './Header.scss';
import layag from './Images/layag-icon.png';
import profile from './Images/user-menu64.png';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logoTitle">
        <img className="Header__logo" src={layag} alt="logo" />
        <h1>Layag</h1>
      </div>

      <div className="Header__userSection">
        <img src={profile} alt="user-login" />
      </div>
    </header>
  );
};

export default Header;
