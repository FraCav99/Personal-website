import { useState } from 'react';
import Emerald from '../images/emerald.svg';

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const toggleMenu = () => {
    setBurgerMenu(previous => !previous);

    document.body.classList.toggle('active');
  };

  return (
    <div className="navbar">
      <div
        className={'backdrop' + (burgerMenu ? ' show' : '')}
        onClick={toggleMenu}
      ></div>
      <img src={Emerald} alt="Smerald logo" className="nav-logo" />
      <nav className={burgerMenu ? 'slide' : null}>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="">About me</a>
          </li>
          <li className="nav-item">
            <a href="">Projects</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
          <li className="nav-item separator"></li>
          <a href="">
            <li className="nav-item resume-btn">Resume</li>
          </a>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        {[1, 2, 3].map(el => (
          <div
            className={'line' + (burgerMenu ? ' active' : '')}
            key={el}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
