import { useState } from 'react';
import Emerald from '../images/emerald.svg';
// import Pdf from '../../public/cv.pdf';

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth >= 780) return;

    setBurgerMenu(previous => !previous);

    document.body.classList.toggle('active');
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const smoothScroll = target => {
    document
      .querySelector(target.getAttribute('href'))
      .scrollIntoView({ behaviour: 'smooth' });
  };

  const navClickHandler = ev => {
    ev.preventDefault();
    smoothScroll(ev.target);
    toggleMenu();
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div
        className={'backdrop' + (burgerMenu ? ' show' : '')}
        onClick={toggleMenu}
      ></div>
      <div className="nav-logo">
        <Emerald />
      </div>
      <nav className={burgerMenu ? 'slide' : ''}>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#about" onClick={ev => navClickHandler(ev)}>
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={ev => navClickHandler(ev)}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={ev => navClickHandler(ev)}>
              Contact
            </a>
          </li>
          <li className="nav-item separator"></li>
          <a href="/cv.pdf" target="_blank">
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
