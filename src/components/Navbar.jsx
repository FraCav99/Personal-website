import Smerald from '../images/smerald.svg';

const Navbar = () => {
  const toggleMenu = () => {
    const sideMenu = document.querySelector('nav');
    const backdrop = document.querySelector('.backdrop');
    const line_1 = document.querySelector('.line:first-child');
    const line_2 = document.querySelector('.line:nth-child(2)');
    const line_3 = document.querySelector('.line:last-child');

    sideMenu.classList.toggle('slide');
    backdrop.classList.toggle('show');

    line_1.classList.toggle('active');
    line_2.classList.toggle('active');
    line_3.classList.toggle('active');

    document.body.classList.toggle('active');
  };

  return (
    <div className="navbar">
      <div className="backdrop" onClick={toggleMenu}></div>
      <img src={Smerald} alt="Smerald logo" className="nav-logo" />
      <nav>
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
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
